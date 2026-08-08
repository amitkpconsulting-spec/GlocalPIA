import React, { useState, useRef, useEffect } from 'react';
import { Download, FileText, Table, FileCode, Printer, ChevronDown, Check, ShieldCheck } from 'lucide-react';
import { PIAAssessment } from '../types';
import { exportToPDF, exportToXLS, exportToCSV, exportToWord } from '../utils/exportUtils';

interface ExportButtonDropdownProps {
  pia: PIAAssessment;
  variant?: 'primary' | 'secondary' | 'compact' | 'full-banner';
  className?: string;
}

export const ExportButtonDropdown: React.FC<ExportButtonDropdownProps> = ({
  pia,
  variant = 'primary',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [exportedFormat, setExportedFormat] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleTriggerExport = (format: 'pdf' | 'xls' | 'csv' | 'word') => {
    setIsOpen(false);
    setExportedFormat(format.toUpperCase());

    switch (format) {
      case 'pdf':
        exportToPDF(pia);
        break;
      case 'xls':
        exportToXLS(pia);
        break;
      case 'csv':
        exportToCSV(pia);
        break;
      case 'word':
        exportToWord(pia);
        break;
    }

    setTimeout(() => {
      setExportedFormat(null);
    }, 3000);
  };

  const primaryUniqueId = pia.id || 'PIA-2026-001';
  const displayFid = pia.fid || 'PIA-FE-2026-101';

  if (variant === 'full-banner') {
    return (
      <div className={`bg-gradient-to-r from-cyan-950/80 via-zinc-900 to-zinc-950 p-4 rounded-2xl border border-cyan-800/80 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${className}`}>
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-cyan-900 text-cyan-300 rounded-xl border border-cyan-700 shadow-inner">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-white">
                Assessment Submitted / Signed Off
              </span>
              <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-800 rounded">
                Ref ID: {primaryUniqueId}
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 mt-0.5">
              FID: {displayFid} {pia.bid ? `• BID: ${pia.bid}` : ''} | Full compliance audit package ready for download.
            </p>
          </div>
        </div>

        {/* Quick Export Button Grid */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => handleTriggerExport('pdf')}
            className="inline-flex items-center px-3 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 text-xs font-bold rounded-xl transition shadow"
            title="Export to Printable PDF Document"
          >
            <Printer className="w-3.5 h-3.5 mr-1" />
            PDF
          </button>

          <button
            type="button"
            onClick={() => handleTriggerExport('xls')}
            className="inline-flex items-center px-3 py-1.5 bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-800 text-xs font-bold rounded-xl transition shadow"
            title="Export to Excel Spreadsheet (.xls)"
          >
            <Table className="w-3.5 h-3.5 mr-1" />
            XLS
          </button>

          <button
            type="button"
            onClick={() => handleTriggerExport('csv')}
            className="inline-flex items-center px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 text-xs font-bold rounded-xl transition shadow"
            title="Export to Comma-Separated Values (.csv)"
          >
            <FileCode className="w-3.5 h-3.5 mr-1" />
            CSV
          </button>

          <button
            type="button"
            onClick={() => handleTriggerExport('word')}
            className="inline-flex items-center px-3 py-1.5 bg-purple-950 hover:bg-purple-900 text-purple-300 border border-purple-800 text-xs font-bold rounded-xl transition shadow"
            title="Export to Microsoft Word Document (.doc)"
          >
            <FileText className="w-3.5 h-3.5 mr-1" />
            Word
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center justify-between gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl transition shadow-md border ${
          variant === 'primary'
            ? 'bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-zinc-950 border-cyan-400'
            : variant === 'compact'
            ? 'bg-zinc-900 hover:bg-zinc-800 text-cyan-300 border-zinc-800 text-[11px] px-2.5 py-1.5'
            : 'bg-zinc-900 hover:bg-zinc-850 text-zinc-200 border-zinc-700'
        }`}
      >
        <Download className="w-3.5 h-3.5 shrink-0" />
        <span className="font-mono">
          {exportedFormat ? `Exported ${exportedFormat}!` : `Export [${primaryUniqueId}]`}
        </span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-2 z-50 text-xs animate-fadeIn">
          <div className="px-3 py-2 border-b border-zinc-800/80 mb-1">
            <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider block">
              Formal Compliance Package
            </span>
            <div className="text-white font-bold truncate mt-0.5">
              Ref ID: <span className="font-mono text-cyan-300">{primaryUniqueId}</span>
            </div>
            <div className="text-[10px] text-zinc-400 font-mono mt-0.5 truncate">
              FID: {displayFid}
            </div>
          </div>

          <div className="space-y-1">
            <button
              type="button"
              onClick={() => handleTriggerExport('pdf')}
              className="w-full text-left px-3 py-2 rounded-xl text-zinc-200 hover:text-white hover:bg-cyan-950/80 flex items-center justify-between transition font-medium group"
            >
              <div className="flex items-center space-x-2">
                <Printer className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-bold">PDF Document</div>
                  <div className="text-[10px] text-zinc-400">Printable compliance audit report</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-1.5 py-0.5 rounded border border-cyan-800">.pdf</span>
            </button>

            <button
              type="button"
              onClick={() => handleTriggerExport('xls')}
              className="w-full text-left px-3 py-2 rounded-xl text-zinc-200 hover:text-white hover:bg-emerald-950/80 flex items-center justify-between transition font-medium group"
            >
              <div className="flex items-center space-x-2">
                <Table className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-bold">Excel Spreadsheet</div>
                  <div className="text-[10px] text-zinc-400">Formatted workbook for MS Excel</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-1.5 py-0.5 rounded border border-emerald-800">.xls</span>
            </button>

            <button
              type="button"
              onClick={() => handleTriggerExport('csv')}
              className="w-full text-left px-3 py-2 rounded-xl text-zinc-200 hover:text-white hover:bg-zinc-800 flex items-center justify-between transition font-medium group"
            >
              <div className="flex items-center space-x-2">
                <FileCode className="w-4 h-4 text-zinc-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-bold">CSV Data File</div>
                  <div className="text-[10px] text-zinc-400">Raw key-value compliance dataset</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-zinc-400 bg-zinc-950 px-1.5 py-0.5 rounded border border-zinc-800">.csv</span>
            </button>

            <button
              type="button"
              onClick={() => handleTriggerExport('word')}
              className="w-full text-left px-3 py-2 rounded-xl text-zinc-200 hover:text-white hover:bg-purple-950/80 flex items-center justify-between transition font-medium group"
            >
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-bold">Word Document</div>
                  <div className="text-[10px] text-zinc-400">Formatted doc for MS Word / Office</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-purple-400 bg-purple-950 px-1.5 py-0.5 rounded border border-purple-800">.doc</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
