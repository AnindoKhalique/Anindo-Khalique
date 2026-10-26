import React, { useState } from 'react';
import { Heart, Moon, Wind, CheckCircle2, ChevronRight, Activity } from 'lucide-react';

export const MentalHealthMockup: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<'calm' | 'energized' | 'reflective'>('calm');
  const [breathPhase, setBreathPhase] = useState<'Inhale' | 'Hold' | 'Exhale'>('Inhale');

  const toggleBreath = () => {
    setBreathPhase((prev) => (prev === 'Inhale' ? 'Hold' : prev === 'Hold' ? 'Exhale' : 'Inhale'));
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-slate-900 rounded-[28px] p-3.5 shadow-xl border border-slate-700/60 text-slate-100 font-sans">
      {/* Phone Notch & Status bar */}
      <div className="flex items-center justify-between px-3 py-1 text-[11px] text-slate-400 font-mono">
        <span>09:41</span>
        <div className="w-16 h-3.5 bg-slate-800 rounded-full mx-auto" />
        <span>100%</span>
      </div>

      {/* Screen Inner */}
      <div className="bg-slate-950 rounded-[22px] p-4 text-slate-100 space-y-3.5 border border-slate-800/80">
        {/* Header */}
        <div className="flex items-center justify-between pt-1">
          <div>
            <p className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">Good morning</p>
            <h4 className="text-base font-semibold text-white tracking-tight">Daily Mindfulness</h4>
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-semibold text-slate-300">
            AK
          </div>
        </div>

        {/* Mood Selector Widget */}
        <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800">
          <p className="text-xs text-slate-300 font-medium mb-2">How are you feeling right now?</p>
          <div className="grid grid-cols-3 gap-1.5 text-xs">
            <button
              onClick={() => setSelectedMood('calm')}
              className={`py-1.5 px-2 rounded-lg text-center transition-all ${
                selectedMood === 'calm'
                  ? 'bg-blue-900/60 text-blue-200 border border-blue-600/60 font-semibold'
                  : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
              }`}
            >
              🌊 Calm
            </button>
            <button
              onClick={() => setSelectedMood('reflective')}
              className={`py-1.5 px-2 rounded-lg text-center transition-all ${
                selectedMood === 'reflective'
                  ? 'bg-purple-900/60 text-purple-200 border border-purple-600/60 font-semibold'
                  : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
              }`}
            >
              🌿 Grounded
            </button>
            <button
              onClick={() => setSelectedMood('energized')}
              className={`py-1.5 px-2 rounded-lg text-center transition-all ${
                selectedMood === 'energized'
                  ? 'bg-amber-900/60 text-amber-200 border border-amber-600/60 font-semibold'
                  : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
              }`}
            >
              ⚡ Focused
            </button>
          </div>
        </div>

        {/* Breathwork Mini Exercise */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-850 rounded-xl p-3 border border-slate-800 flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-300">
              <Wind className="w-3.5 h-3.5" />
              <span>4-7-8 Breathwork</span>
            </div>
            <p className="text-[11px] text-slate-400">Click to guide your cadence</p>
          </div>
          <button
            onClick={toggleBreath}
            className="px-2.5 py-1 text-xs font-medium bg-blue-950 text-blue-300 border border-blue-700/50 rounded-lg hover:bg-blue-900/60 transition-colors"
          >
            {breathPhase} (4s)
          </button>
        </div>

        {/* Weekly Emotional Analytics Strip */}
        <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-800">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="font-medium text-slate-300 flex items-center gap-1">
              <Activity className="w-3 h-3 text-emerald-400" />
              Weekly Stability Index
            </span>
            <span className="text-[11px] text-emerald-400 font-mono font-medium">+18% balance</span>
          </div>
          {/* Mini Bar Chart */}
          <div className="grid grid-cols-7 gap-1.5 items-end h-12 pt-1">
            {[45, 65, 80, 60, 90, 85, 95].map((val, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div
                  style={{ height: `${val * 0.35}px` }}
                  className={`w-full rounded-sm transition-all ${
                    i === 6 ? 'bg-blue-500 shadow-sm shadow-blue-500/50' : 'bg-slate-700'
                  }`}
                />
                <span className="text-[9px] text-slate-400 font-mono">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Habit Checklist */}
        <div className="space-y-1.5 pt-0.5">
          <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Today's Practice</p>
          <div className="flex items-center justify-between text-xs p-2 bg-slate-900/60 rounded-lg border border-slate-800/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-slate-200 text-[11px]">Morning 5-Min Meditation</span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">Done</span>
          </div>
          <div className="flex items-center justify-between text-xs p-2 bg-slate-900/60 rounded-lg border border-slate-800/80">
            <div className="flex items-center gap-2">
              <Moon className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-slate-200 text-[11px]">Evening Reflection Log</span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">Pending</span>
          </div>
        </div>
      </div>
    </div>
  );
};
