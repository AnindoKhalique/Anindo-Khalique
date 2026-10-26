import React, { useState } from 'react';
import { personalInfo } from '../data/cvData';
import { Mail, Copy, Check, ExternalLink, MapPin, Linkedin } from 'lucide-react';

interface ExecutiveSummaryProps {
  activeView: 'full' | 'executive' | 'projects';
  setActiveView: (view: 'full' | 'executive' | 'projects') => void;
}

export const ExecutiveSummary: React.FC<ExecutiveSummaryProps> = ({
  activeView,
  setActiveView,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="about" className="pt-10 pb-12 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        {/* Main Title Block */}
        <div className="space-y-3 mb-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {personalInfo.name}
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-slate-700 max-w-3xl leading-snug">
            {personalInfo.role}
          </p>
        </div>

        {/* Clean Unboxed Metadata Strip (Zero-Pill Discipline) */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-sm text-slate-600 mb-8 pb-6 border-b border-slate-200/80">
          <div className="flex items-center gap-1.5 text-slate-700 font-medium">
            <MapPin className="w-4 h-4 text-slate-400" />
            <span>{personalInfo.location}</span>
          </div>
          <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
          
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-slate-400" />
            <a 
              href={`mailto:${personalInfo.email}`}
              className="hover:text-slate-900 hover:underline font-medium text-slate-800 transition-colors"
            >
              {personalInfo.email}
            </a>
            <button
              onClick={handleCopyEmail}
              title="Copy email to clipboard"
              className="no-print inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-slate-500" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>

          <div className="flex items-center gap-1.5 text-slate-700 font-medium">
            <Linkedin className="w-4 h-4 text-[#0A66C2]" />
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 hover:underline font-medium text-slate-800 transition-colors inline-flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Executive Summary Narrative */}
        <div className="prose prose-slate max-w-none mb-8">
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            {personalInfo.summary}
          </p>
        </div>

        {/* Primary External Portfolio Action */}
        <div className="flex flex-wrap items-center gap-3 pt-2 mb-8 no-print">
          <a
            href={personalInfo.behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-all"
          >
            <span>Behance Portfolio</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Interactive View Switcher (Permitted Functional Segmented Control) */}
        <div className="no-print pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
          <span className="font-medium text-slate-600">Tailor Display View:</span>
          <div className="inline-flex p-1 bg-slate-200/70 rounded-lg border border-slate-300/60">
            <button
              onClick={() => setActiveView('full')}
              className={`px-3 py-1.5 font-medium rounded-md transition-colors ${
                activeView === 'full'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Comprehensive CV
            </button>
            <button
              onClick={() => setActiveView('executive')}
              className={`px-3 py-1.5 font-medium rounded-md transition-colors ${
                activeView === 'executive'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              1-Page Executive Summary
            </button>
            <button
              onClick={() => setActiveView('projects')}
              className={`px-3 py-1.5 font-medium rounded-md transition-colors ${
                activeView === 'projects'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Projects Deep-Dive
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
