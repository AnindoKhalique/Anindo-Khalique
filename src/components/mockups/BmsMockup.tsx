import React, { useState } from 'react';
import { Building2, ArrowUpRight, ArrowDownRight, FileText, Download, Check, AlertCircle } from 'lucide-react';

export const BmsMockup: React.FC = () => {
  const [filterPeriod, setFilterPeriod] = useState<'October 2026' | 'September 2026'>('October 2026');

  return (
    <div className="w-full bg-slate-900 rounded-2xl p-3 sm:p-4 shadow-xl border border-slate-700/60 font-sans text-slate-100">
      {/* Browser chrome header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[11px] text-slate-400 font-mono pl-2 hidden sm:inline">
            bms-cloud.internal / owner / financial-sheet
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live Instance Connected
        </div>
      </div>

      {/* Internal Dashboard View */}
      <div className="pt-3.5 space-y-3.5">
        {/* Top bar inside dashboard */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white tracking-tight">Skyline Tower — Financial Ledger</h4>
              <p className="text-[11px] text-slate-400">24 Units · 96% Occupancy</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilterPeriod((p) => (p === 'October 2026' ? 'September 2026' : 'October 2026'))}
              className="text-xs bg-slate-800 text-slate-300 hover:text-white px-2.5 py-1 rounded-md border border-slate-700 transition-colors"
            >
              Period: {filterPeriod}
            </button>
            <div className="inline-flex items-center gap-1 text-xs bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-2.5 py-1 rounded-md transition-colors cursor-pointer">
              <Download className="w-3 h-3" />
              <span>Export Balance Sheet</span>
            </div>
          </div>
        </div>

        {/* 3 Key Financial KPI Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60">
            <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
              <span>Gross Rental Revenue</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <p className="text-lg font-bold text-white font-mono tabular-nums">৳ 485,000</p>
            <p className="text-[10px] text-emerald-400 font-mono mt-0.5">23 of 24 units collected</p>
          </div>

          <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60">
            <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
              <span>Maintenance & Utilities</span>
              <ArrowDownRight className="w-3.5 h-3.5 text-rose-400" />
            </div>
            <p className="text-lg font-bold text-white font-mono tabular-nums">৳ 94,200</p>
            <p className="text-[10px] text-slate-400 font-mono mt-0.5">Generator, security, waste</p>
          </div>

          <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60">
            <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
              <span>Net Owner Cashflow</span>
              <span className="text-[10px] text-emerald-300 font-mono">80.6% Margin</span>
            </div>
            <p className="text-lg font-bold text-emerald-300 font-mono tabular-nums">৳ 390,800</p>
            <p className="text-[10px] text-slate-400 font-mono mt-0.5">Ready for owner distribution</p>
          </div>
        </div>

        {/* Tenant Rent Ledger Table */}
        <div className="bg-slate-950/70 rounded-xl border border-slate-800 overflow-hidden">
          <div className="px-3 py-2 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-medium">
            <span>Unit & Tenant Details</span>
            <div className="flex items-center gap-8 pr-2">
              <span className="hidden sm:inline">Rent Amount</span>
              <span>Status</span>
            </div>
          </div>
          
          <div className="divide-y divide-slate-800/80 text-xs">
            <div className="px-3 py-2.5 flex items-center justify-between hover:bg-slate-900/40 transition-colors">
              <div>
                <p className="font-semibold text-white">Flat 4-A · Dr. R. Hassan</p>
                <p className="text-[10px] text-slate-400 font-mono">NID Verified · Receipt #BMS-1082</p>
              </div>
              <div className="flex items-center gap-8">
                <span className="font-mono text-slate-200 tabular-nums hidden sm:inline">৳ 35,000</span>
                <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                  <Check className="w-3 h-3 text-emerald-400" /> Paid
                </span>
              </div>
            </div>

            <div className="px-3 py-2.5 flex items-center justify-between hover:bg-slate-900/40 transition-colors">
              <div>
                <p className="font-semibold text-white">Flat 5-B · Farhan Karim</p>
                <p className="text-[10px] text-slate-400 font-mono">NID Verified · Due Oct 25</p>
              </div>
              <div className="flex items-center gap-8">
                <span className="font-mono text-slate-200 tabular-nums hidden sm:inline">৳ 42,000</span>
                <span className="inline-flex items-center gap-1 text-[11px] text-amber-400 font-medium">
                  <AlertCircle className="w-3 h-3 text-amber-400" /> Pending
                </span>
              </div>
            </div>

            <div className="px-3 py-2.5 flex items-center justify-between hover:bg-slate-900/40 transition-colors">
              <div>
                <p className="font-semibold text-white">Flat 7-C · Syeda Anamika</p>
                <p className="text-[10px] text-slate-400 font-mono">NID Verified · Receipt #BMS-1084</p>
              </div>
              <div className="flex items-center gap-8">
                <span className="font-mono text-slate-200 tabular-nums hidden sm:inline">৳ 38,500</span>
                <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                  <Check className="w-3 h-3 text-emerald-400" /> Paid
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
