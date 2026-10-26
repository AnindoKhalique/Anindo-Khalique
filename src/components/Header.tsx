import React from 'react';

interface HeaderProps {
  onPrint?: () => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({ onPrint }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 no-print transition-all">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single element) */}
        <a 
          href="#top" 
          className="text-base font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-slate-700 transition-colors"
        >
          Anindo Khalique
        </a>

        {/* Zone 2: Clean Nav Links */}
        <nav className="flex items-center gap-4 sm:gap-6 text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            About
          </a>
          <a href="#projects" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            Projects
          </a>
          <a href="#skills" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            Skills
          </a>
          <a href="#experience" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            Experience
          </a>
          <a href="#education" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            Education
          </a>
          <a href="#contact" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};
