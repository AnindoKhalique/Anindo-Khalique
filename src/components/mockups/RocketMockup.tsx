import React, { useState } from 'react';
import { Send, ArrowDownLeft, Receipt, QrCode, Eye, EyeOff, ShieldCheck, Check } from 'lucide-react';

export const RocketMockup: React.FC = () => {
  const [showBalance, setShowBalance] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'all' | 'transfers' | 'bills'>('all');

  return (
    <div className="w-full max-w-sm mx-auto bg-slate-900 rounded-[28px] p-3.5 shadow-xl border border-slate-700/60 font-sans text-slate-100">
      {/* Phone Notch */}
      <div className="flex items-center justify-between px-3 py-1 text-[11px] text-slate-400 font-mono">
        <span>10:24</span>
        <div className="w-16 h-3.5 bg-slate-800 rounded-full mx-auto" />
        <span>4G · 98%</span>
      </div>

      {/* Screen Inner */}
      <div className="bg-slate-950 rounded-[22px] p-4 text-slate-100 space-y-3.5 border border-slate-800/80">
        {/* App Topbar */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-xs text-white">
              R
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Rocket Financial</p>
              <p className="text-[10px] text-slate-400 font-mono">+880 17•• ••••82</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-indigo-300 bg-indigo-950/60 px-2 py-0.5 rounded-full border border-indigo-800/50">
            <ShieldCheck className="w-3 h-3 text-indigo-400" />
            <span>Biometric OK</span>
          </div>
        </div>

        {/* Digital Wallet Balance Card */}
        <div className="bg-gradient-to-br from-indigo-950/80 via-slate-900 to-slate-900 rounded-xl p-3.5 border border-indigo-900/40 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-indigo-200 mb-1">
            <span className="text-[11px] text-slate-400">Available Wallet Balance</span>
            <button
              onClick={() => setShowBalance(!showBalance)}
              aria-label="Toggle balance visibility"
              className="p-1 hover:text-white transition-colors text-slate-400"
            >
              {showBalance ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            </button>
          </div>
          <div className="text-xl font-bold font-mono tracking-tight text-white tabular-nums">
            {showBalance ? '৳ 28,450.00' : '৳ ••••••••'}
          </div>
          <p className="text-[10px] text-emerald-400 font-mono mt-1 flex items-center gap-1">
            <Check className="w-2.5 h-2.5" /> Dutch-Bangla Core Connected
          </p>
        </div>

        {/* 4 Primary Quick Action Buttons */}
        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="bg-slate-900 hover:bg-slate-850 p-2 rounded-xl border border-slate-800 transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 mx-auto flex items-center justify-center mb-1">
              <Send className="w-4 h-4" />
            </div>
            <span className="text-[10px] text-slate-300 font-medium block">Send</span>
          </div>

          <div className="bg-slate-900 hover:bg-slate-850 p-2 rounded-xl border border-slate-800 transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-emerald-600/20 text-emerald-400 mx-auto flex items-center justify-center mb-1">
              <ArrowDownLeft className="w-4 h-4" />
            </div>
            <span className="text-[10px] text-slate-300 font-medium block">Cash Out</span>
          </div>

          <div className="bg-slate-900 hover:bg-slate-850 p-2 rounded-xl border border-slate-800 transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 mx-auto flex items-center justify-center mb-1">
              <Receipt className="w-4 h-4" />
            </div>
            <span className="text-[10px] text-slate-300 font-medium block">Pay Bill</span>
          </div>

          <div className="bg-slate-900 hover:bg-slate-850 p-2 rounded-xl border border-slate-800 transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-amber-600/20 text-amber-400 mx-auto flex items-center justify-center mb-1">
              <QrCode className="w-4 h-4" />
            </div>
            <span className="text-[10px] text-slate-300 font-medium block">Scan QR</span>
          </div>
        </div>

        {/* Recent Transactions List */}
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-medium text-slate-300 text-[11px] uppercase tracking-wider">Recent Activity</span>
            <span className="text-[10px] text-indigo-400">View All</span>
          </div>

          <div className="divide-y divide-slate-800/80 bg-slate-900/60 rounded-xl border border-slate-800/80 text-xs">
            <div className="p-2.5 flex items-center justify-between">
              <div>
                <p className="font-semibold text-white text-[11px]">Electricity (DESCO)</p>
                <p className="text-[9px] text-slate-400 font-mono">Today, 08:30 AM · Utility</p>
              </div>
              <span className="font-mono font-semibold text-rose-400 tabular-nums text-[11px]">-৳ 2,450.00</span>
            </div>

            <div className="p-2.5 flex items-center justify-between">
              <div>
                <p className="font-semibold text-white text-[11px]">Salary Remittance</p>
                <p className="text-[9px] text-slate-400 font-mono">Yesterday · Inward Bank Transfer</p>
              </div>
              <span className="font-mono font-semibold text-emerald-400 tabular-nums text-[11px]">+৳ 45,000.00</span>
            </div>

            <div className="p-2.5 flex items-center justify-between">
              <div>
                <p className="font-semibold text-white text-[11px]">Merchant Payment · Aarong</p>
                <p className="text-[9px] text-slate-400 font-mono">Oct 18 · QR Checkout</p>
              </div>
              <span className="font-mono font-semibold text-rose-400 tabular-nums text-[11px]">-৳ 3,820.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
