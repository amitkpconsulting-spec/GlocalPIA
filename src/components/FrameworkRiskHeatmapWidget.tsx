import React, { useState, useMemo } from 'react';
import { Shield, AlertTriangle, CheckCircle2, ChevronRight, Eye, Sparkles, Filter, Layers, Info } from 'lucide-react';
import { PIAAssessment, RiskLevel } from '../types';

interface FrameworkRiskHeatmapWidgetProps {
  pias: PIAAssessment[];
  onSelectPia?: (pia: PIAAssessment) => void;
  onFilterByRisk?: (risk: RiskLevel | null) => void;
}

interface RiskBand {
  id: string;
  label: string;
  min: number;
  max: number;
  color: string;
  glowColor: string;
  isHighRisk: boolean;
}

const RISK_BANDS: RiskBand[] = [
  { id: 'low', label: '0-25 Low', min: 0, max: 25, color: '#10b981', glowColor: 'rgba(16, 185, 129, 0.3)', isHighRisk: false },
  { id: 'medium', label: '26-45 Medium', min: 26, max: 45, color: '#38bdf8', glowColor: 'rgba(56, 189, 248, 0.3)', isHighRisk: false },
  { id: 'elevated', label: '46-65 Elevated', min: 46, max: 65, color: '#f59e0b', glowColor: 'rgba(245, 158, 11, 0.4)', isHighRisk: true },
  { id: 'high', label: '66-80 High', min: 66, max: 80, color: '#f97316', glowColor: 'rgba(249, 115, 22, 0.5)', isHighRisk: true },
  { id: 'critical', label: '81-100 Critical', min: 81, max: 100, color: '#ef4444', glowColor: 'rgba(239, 68, 68, 0.7)', isHighRisk: true },
];

const TARGET_FRAMEWORKS = [
  'UK GDPR & DPA 2018',
  'EU GDPR & EU AI Act',
  'FCA Operational Resilience',
  'PCI-DSS v4.0',
  'BCBS 239 Risk Data Aggregation',
  'PRA Operational Resilience',
  'ISO/IEC 42001 (AI Management)',
  'NIST AI RMF 1.0',
] as const;

interface CellData {
  framework: string;
  band: RiskBand;
  count: number;
  pias: PIAAssessment[];
  avgScore: number;
  maxScore: number;
}

export const FrameworkRiskHeatmapWidget: React.FC<FrameworkRiskHeatmapWidgetProps> = ({
  pias,
  onSelectPia,
  onFilterByRisk,
}) => {
  const [selectedCell, setSelectedCell] = useState<CellData | null>(null);
  const [hoveredCell, setHoveredCell] = useState<{ framework: string; bandId: string } | null>(null);
  const [filterHotspotsOnly, setFilterHotspotsOnly] = useState(false);

  // Compute 2D Matrix of Framework x Risk Score Band
  const matrixData = useMemo(() => {
    const grid: Record<string, Record<string, CellData>> = {};

    TARGET_FRAMEWORKS.forEach(fw => {
      grid[fw] = {};
      RISK_BANDS.forEach(b => {
        grid[fw][b.id] = {
          framework: fw,
          band: b,
          count: 0,
          pias: [],
          avgScore: 0,
          maxScore: 0,
        };
      });
    });

    // Populate each PIA into its associated frameworks and risk bands
    pias.forEach(pia => {
      const frameworks = pia.regulatoryTailoring?.selectedFrameworks?.length
        ? pia.regulatoryTailoring.selectedFrameworks
        : ['UK GDPR & DPA 2018'];

      const score = pia.riskResult?.totalRiskScore ?? 35;

      const band = RISK_BANDS.find(b => score >= b.min && score <= b.max) || RISK_BANDS[1];

      frameworks.forEach(fw => {
        // Normalize framework name to match one of TARGET_FRAMEWORKS if possible
        const matchedFw = TARGET_FRAMEWORKS.find(
          tf => tf.toLowerCase() === fw.toLowerCase() || fw.toLowerCase().includes(tf.toLowerCase().split(' ')[0])
        ) || 'UK GDPR & DPA 2018';

        if (grid[matchedFw] && grid[matchedFw][band.id]) {
          grid[matchedFw][band.id].count += 1;
          grid[matchedFw][band.id].pias.push(pia);
        }
      });
    });

    // Calculate averages
    TARGET_FRAMEWORKS.forEach(fw => {
      RISK_BANDS.forEach(b => {
        const cell = grid[fw][b.id];
        if (cell.count > 0) {
          const sum = cell.pias.reduce((acc, p) => acc + (p.riskResult?.finalRiskScore ?? 35), 0);
          cell.avgScore = Math.round(sum / cell.count);
          cell.maxScore = Math.max(...cell.pias.map(p => p.riskResult?.finalRiskScore ?? 35));
        }
      });
    });

    return grid;
  }, [pias]);

  // Max count in any single cell for color normalization
  const maxCellCount = useMemo(() => {
    let max = 1;
    TARGET_FRAMEWORKS.forEach(fw => {
      RISK_BANDS.forEach(b => {
        const c = matrixData[fw]?.[b.id]?.count ?? 0;
        if (c > max) max = c;
      });
    });
    return max;
  }, [matrixData]);

  // Overall statistics
  const stats = useMemo(() => {
    let highRiskHotspots = 0;
    let criticalCount = 0;
    let totalFrameworkMappings = 0;

    TARGET_FRAMEWORKS.forEach(fw => {
      RISK_BANDS.forEach(b => {
        const c = matrixData[fw]?.[b.id]?.count ?? 0;
        totalFrameworkMappings += c;
        if (b.isHighRisk && c > 0) highRiskHotspots += c;
        if (b.id === 'critical') criticalCount += c;
      });
    });

    return { highRiskHotspots, criticalCount, totalFrameworkMappings };
  }, [matrixData]);

  // Helper to get fill color with custom opacity and gradient
  const getCellFill = (count: number, band: RiskBand) => {
    if (count === 0) return '#18181b'; // zinc-900
    const intensity = Math.min(1, 0.25 + (count / maxCellCount) * 0.75);

    switch (band.id) {
      case 'low':
        return `rgba(16, 185, 129, ${intensity})`;
      case 'medium':
        return `rgba(56, 189, 248, ${intensity})`;
      case 'elevated':
        return `rgba(245, 158, 11, ${intensity})`;
      case 'high':
        return `rgba(249, 115, 22, ${intensity})`;
      case 'critical':
        return `rgba(239, 68, 68, ${intensity})`;
      default:
        return '#27272a';
    }
  };

  // SVG Dimension parameters
  const svgWidth = 920;
  const labelWidth = 240;
  const gridWidth = svgWidth - labelWidth - 30;
  const colWidth = gridWidth / RISK_BANDS.length;
  const rowHeight = 42;
  const headerHeight = 36;
  const svgHeight = headerHeight + TARGET_FRAMEWORKS.length * rowHeight + 25;

  return (
    <section className="bg-[#12151e] border border-[#1e2330] rounded-2xl p-5 sm:p-6 shadow-xl mb-8 relative overflow-hidden backdrop-blur-sm ring-1 ring-white/5">
      {/* Header with Title and Control Badges */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <div className="flex items-center space-x-2.5">
            <div className="p-2 bg-gradient-to-br from-rose-950 to-orange-950 text-rose-400 rounded-xl border border-rose-500/30">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>Regulatory Framework vs. Risk Score Heatmap</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-rose-950/90 text-rose-300 border border-rose-800/80 uppercase tracking-wider">
                  Custom SVG Matrix
                </span>
              </h2>
              <p className="text-xs text-zinc-400 mt-0.5">
                Distribution of Banking PIAs grouped across mandated compliance frameworks and aggregate risk bands
              </p>
            </div>
          </div>
        </div>

        {/* Quick Actions / Filters */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilterHotspotsOnly(!filterHotspotsOnly)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition flex items-center gap-1.5 ${
              filterHotspotsOnly
                ? 'bg-rose-950/80 text-rose-300 border-rose-600 shadow-lg shadow-rose-950/40'
                : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-zinc-700'
            }`}
          >
            <Filter className="w-3.5 h-3.5 text-rose-400" />
            <span>{filterHotspotsOnly ? 'Showing High-Risk Only' : 'Highlight Hotspots'}</span>
          </button>

          {onFilterByRisk && (
            <button
              onClick={() => onFilterByRisk('Critical')}
              className="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-bold transition shadow-md shadow-rose-950/60 flex items-center gap-1"
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Filter Critical</span>
            </button>
          )}
        </div>
      </div>

      {/* Top Telemetry Metric Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
        <div className="bg-zinc-900/70 border border-zinc-800/80 rounded-xl p-3 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">Total Mappings</div>
            <div className="text-lg font-bold text-white font-mono mt-0.5">{stats.totalFrameworkMappings}</div>
          </div>
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
        </div>

        <div className="bg-zinc-900/70 border border-zinc-800/80 rounded-xl p-3 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-amber-400">Elevated / High Exposures</div>
            <div className="text-lg font-bold text-amber-300 font-mono mt-0.5">{stats.highRiskHotspots}</div>
          </div>
          <AlertTriangle className="w-4 h-4 text-amber-400" />
        </div>

        <div className="bg-zinc-900/70 border border-zinc-800/80 rounded-xl p-3 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-rose-400">Critical Hotspot Cells</div>
            <div className="text-lg font-bold text-rose-400 font-mono mt-0.5">{stats.criticalCount}</div>
          </div>
          <div className="w-3 h-3 rounded-full bg-rose-500 shadow-md shadow-rose-500" />
        </div>

        <div className="bg-zinc-900/70 border border-zinc-800/80 rounded-xl p-3 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">Frameworks Monitored</div>
            <div className="text-lg font-bold text-emerald-400 font-mono mt-0.5">{TARGET_FRAMEWORKS.length}</div>
          </div>
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
        </div>
      </div>

      {/* Visual Heatmap Container with Custom SVG Styling */}
      <div className="overflow-x-auto rounded-xl border border-zinc-800/90 bg-zinc-950/80 p-2 sm:p-4 shadow-inner relative">
        <svg
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="w-full h-auto min-w-[700px] select-none font-sans"
          style={{ maxHeight: '520px' }}
        >
          <defs>
            {/* Critical High-Risk Glow Filter */}
            <filter id="critical-hotspot-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#ef4444" floodOpacity="0.8" />
            </filter>
            <filter id="high-hotspot-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#f97316" floodOpacity="0.6" />
            </filter>
            
            {/* Grid Pattern Background */}
            <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
            </pattern>
          </defs>

          {/* Background grid */}
          <rect width={svgWidth} height={svgHeight} fill="url(#grid-pattern)" />

          {/* Column Headers (Risk Score Bands) */}
          <g className="risk-band-headers">
            {RISK_BANDS.map((band, colIdx) => {
              const x = labelWidth + colIdx * colWidth;
              return (
                <g key={band.id} transform={`translate(${x}, 0)`}>
                  <rect
                    x="2"
                    y="4"
                    width={colWidth - 4}
                    height="28"
                    rx="6"
                    fill="rgba(24, 24, 27, 0.9)"
                    stroke={band.color}
                    strokeWidth="1"
                    strokeOpacity="0.3"
                  />
                  <circle cx="14" cy="18" r="4" fill={band.color} />
                  <text
                    x="24"
                    y="22"
                    fill="#e4e4e7"
                    fontSize="11"
                    fontWeight="600"
                    fontFamily="monospace"
                  >
                    {band.label}
                  </text>
                </g>
              );
            })}
          </g>

          {/* Rows: Regulatory Frameworks and Matrix Cells */}
          {TARGET_FRAMEWORKS.map((fw, rowIdx) => {
            const y = headerHeight + rowIdx * rowHeight;
            const isRowHovered = hoveredCell?.framework === fw;

            return (
              <g key={fw} transform={`translate(0, ${y})`} className="transition-all duration-150">
                {/* Row Background Stripe on Hover */}
                {isRowHovered && (
                  <rect
                    x="0"
                    y="0"
                    width={svgWidth}
                    height={rowHeight - 4}
                    rx="8"
                    fill="rgba(168, 85, 247, 0.05)"
                  />
                )}

                {/* Framework Label on the Left Axis */}
                <g className="framework-label-group">
                  <rect
                    x="4"
                    y="2"
                    width={labelWidth - 12}
                    height={rowHeight - 6}
                    rx="6"
                    fill={isRowHovered ? '#1e1b4b' : '#18181b'}
                    stroke={isRowHovered ? '#818cf8' : '#27272a'}
                    strokeWidth="1"
                  />
                  <text
                    x="16"
                    y="23"
                    fill={isRowHovered ? '#ffffff' : '#d4d4d8'}
                    fontSize="11"
                    fontWeight="600"
                    letterSpacing="0.2"
                  >
                    {fw.length > 30 ? fw.substring(0, 28) + '…' : fw}
                  </text>
                </g>

                {/* Cells for this Framework across the Risk Bands */}
                {RISK_BANDS.map((band, colIdx) => {
                  const cell = matrixData[fw]?.[band.id] || { count: 0, pias: [] };
                  const x = labelWidth + colIdx * colWidth;
                  const isHovered = hoveredCell?.framework === fw && hoveredCell?.bandId === band.id;
                  const isSelected = selectedCell?.framework === fw && selectedCell?.band.id === band.id;
                  const isCriticalActive = band.id === 'critical' && cell.count > 0;
                  const isHighActive = band.id === 'high' && cell.count > 0;

                  // Opacity dimming if Hotspots Only filter is active
                  const isDimmed = filterHotspotsOnly && !band.isHighRisk;

                  const fillColor = getCellFill(cell.count, band);

                  return (
                    <g
                      key={band.id}
                      transform={`translate(${x}, 0)`}
                      className="cursor-pointer transition-transform"
                      onClick={() => {
                        if (cell.count > 0) {
                          setSelectedCell(cell);
                        }
                      }}
                      onMouseEnter={() => setHoveredCell({ framework: fw, bandId: band.id })}
                      onMouseLeave={() => setHoveredCell(null)}
                      opacity={isDimmed ? 0.25 : 1}
                    >
                      {/* Cell Rectangle */}
                      <rect
                        x="2"
                        y="2"
                        width={colWidth - 4}
                        height={rowHeight - 6}
                        rx="6"
                        ry="6"
                        fill={fillColor}
                        stroke={
                          isSelected
                            ? '#ffffff'
                            : isHovered
                            ? '#38bdf8'
                            : isCriticalActive
                            ? '#ef4444'
                            : isHighActive
                            ? '#f97316'
                            : cell.count > 0
                            ? 'rgba(255, 255, 255, 0.15)'
                            : '#27272a'
                        }
                        strokeWidth={isSelected ? 2.5 : isHovered ? 2 : isCriticalActive ? 1.5 : 1}
                        filter={
                          isCriticalActive
                            ? 'url(#critical-hotspot-glow)'
                            : isHighActive
                            ? 'url(#high-hotspot-glow)'
                            : undefined
                        }
                      />

                      {/* Animated Pulse circle for Critical risk cells with active PIAs */}
                      {isCriticalActive && (
                        <circle
                          cx={colWidth - 14}
                          cy="10"
                          r="3"
                          fill="#ef4444"
                          className="animate-ping"
                          opacity="0.8"
                        />
                      )}

                      {/* Cell Content Text */}
                      {cell.count > 0 ? (
                        <>
                          <text
                            x={colWidth / 2}
                            y="23"
                            textAnchor="middle"
                            fill="#ffffff"
                            fontSize="13"
                            fontWeight="bold"
                            fontFamily="monospace"
                          >
                            {cell.count}
                          </text>
                          <text
                            x={colWidth - 10}
                            y={rowHeight - 10}
                            textAnchor="end"
                            fill="rgba(255, 255, 255, 0.6)"
                            fontSize="8"
                            fontFamily="monospace"
                          >
                            {cell.avgScore > 0 ? `avg ${cell.avgScore}` : ''}
                          </text>
                        </>
                      ) : (
                        <text
                          x={colWidth / 2}
                          y="23"
                          textAnchor="middle"
                          fill="#52525b"
                          fontSize="10"
                          fontFamily="monospace"
                        >
                          —
                        </text>
                      )}
                    </g>
                  );
                })}
              </g>
            );
          })}
        </svg>

        {/* Legend bar below SVG */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-3 pt-3 border-t border-zinc-800/80 text-xs font-mono text-zinc-400 px-1">
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-zinc-500 uppercase">Risk Intensity:</span>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded bg-zinc-800 border border-zinc-700" />
              <span className="text-[10px]">0 PIAs</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded bg-emerald-600/70 border border-emerald-500" />
              <span className="text-[10px]">Low Risk</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded bg-sky-500/70 border border-sky-400" />
              <span className="text-[10px]">Medium</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded bg-amber-500/80 border border-amber-400" />
              <span className="text-[10px]">Elevated</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded bg-rose-600 border border-rose-500 shadow-sm shadow-rose-500/50" />
              <span className="text-[10px] text-rose-300 font-bold">Critical Hotspot</span>
            </div>
          </div>

          <div className="text-[11px] text-zinc-400 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-cyan-400" />
            <span>Click any cell to inspect individual assessment files</span>
          </div>
        </div>
      </div>

      {/* Interactive Detail Modal / Drawer for Selected Cell */}
      {selectedCell && (
        <div className="mt-4 p-4 bg-zinc-900 border border-zinc-700/80 rounded-xl shadow-2xl animate-in fade-in duration-150">
          <div className="flex justify-between items-start mb-3 pb-2 border-b border-zinc-800">
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-zinc-800 text-zinc-200 border border-zinc-700">
                  {selectedCell.framework}
                </span>
                <span
                  className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase"
                  style={{
                    backgroundColor: selectedCell.band.color + '22',
                    color: selectedCell.band.color,
                    borderColor: selectedCell.band.color + '66',
                  }}
                >
                  {selectedCell.band.label} Band
                </span>
                <span className="text-xs font-bold text-white">
                  ({selectedCell.count} PIA{selectedCell.count !== 1 ? 's' : ''})
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-1">
                Average Score: <strong className="text-white font-mono">{selectedCell.avgScore}</strong> | Peak Exposure:{' '}
                <strong className="text-rose-400 font-mono">{selectedCell.maxScore}</strong>
              </p>
            </div>

            <button
              onClick={() => setSelectedCell(null)}
              className="text-xs text-zinc-400 hover:text-white px-2 py-1 bg-zinc-800 rounded-lg transition"
            >
              Close Inspector
            </button>
          </div>

          {/* List of PIAs in this Cell */}
          <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
            {selectedCell.pias.map(pia => {
              const score = pia.riskResult?.totalRiskScore ?? 35;
              const subCategory = pia.answers?.['A1']?.selectedLabel || 'General';

              return (
                <div
                  key={pia.id}
                  className="flex items-center justify-between p-2.5 bg-zinc-950/80 hover:bg-zinc-800/80 border border-zinc-800 rounded-lg transition group cursor-pointer"
                  onClick={() => {
                    if (onSelectPia) onSelectPia(pia);
                  }}
                >
                  <div className="flex items-center space-x-3 min-w-0">
                    <div
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: selectedCell.band.color }}
                    />
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition truncate">
                        {pia.projectTitle}
                      </div>
                      <div className="text-[10px] text-zinc-400 font-mono">
                        {pia.id} • {pia.organization} • <span className="text-zinc-300">{subCategory}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 shrink-0 ml-3">
                    <div className="text-right">
                      <div className="text-xs font-mono font-bold text-white">{score} / 100</div>
                      <div className="text-[9px] text-zinc-500 font-mono">{pia.riskResult?.riskLevel || 'Medium'}</div>
                    </div>
                    <div className="p-1 bg-zinc-800 rounded group-hover:bg-cyan-950 group-hover:text-cyan-300 transition">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};
