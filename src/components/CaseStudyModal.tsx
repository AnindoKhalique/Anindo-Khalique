import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ExternalLink, CheckCircle2, Smartphone, Monitor } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  const isMobile = project.mockupType !== 'image-bms' && project.mockupType !== 'image-crm';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 no-print">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{project.category}</p>
            <h2 id="modal-title" className="text-lg font-bold text-slate-900 tracking-tight">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close case study modal"
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[82vh] overflow-y-auto text-slate-700">
          {/* Visual Showcase (390px iPhone 13 width for mobile screens, unclipped full length) */}
          {project.imageSrc && (
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100/70 p-4 sm:p-6 flex flex-col items-center">
              <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium mb-3">
                {isMobile ? (
                  <>
                    <Smartphone className="w-3.5 h-3.5 text-slate-700" />
                    <span>iPhone 13 (390px Viewport) · Full Length Page</span>
                  </>
                ) : (
                  <>
                    <Monitor className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Desktop Frame (1440px) · Complete Landing Page</span>
                  </>
                )}
              </div>
              <div className={isMobile ? 'w-[390px] max-w-full' : 'w-full'}>
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="w-full h-auto object-contain rounded-xl drop-shadow-xl"
                />
              </div>
            </div>
          )}

          {/* Executive Summary */}
          <div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Project Overview</h3>
            <p className="text-base text-slate-800 leading-relaxed font-normal">
              {project.caseStudy.overview}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 bg-slate-50 rounded-xl border border-slate-200/80">
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                The Core Challenge
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {project.caseStudy.challenge}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                The Design Solution
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {project.caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Key Contributions */}
          <div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Key Contributions & Architecture
            </h3>
            <ul className="space-y-2 pl-4 list-disc marker:text-slate-400 text-sm text-slate-700 leading-relaxed">
              {project.keyContributions.map((contrib, i) => (
                <li key={i}>{contrib}</li>
              ))}
            </ul>
          </div>

          {/* Design Decisions with Rationale */}
          <div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
              Intentional Design Decisions
            </h3>
            <div className="space-y-2.5">
              {project.caseStudy.designDecisions.map((decision, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-white border border-slate-200/80 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700 leading-normal">{decision}</p>
                </div>
              ))}
            </div>
          </div>


          {/* External Link CTA */}
          {project.externalLink && (
            <div className="p-4 bg-slate-900 text-white rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold">Inspect Source File / Live App</p>
                <p className="text-xs text-slate-400">Directly review the design architecture or production code.</p>
              </div>
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold bg-white text-slate-950 hover:bg-slate-100 rounded-lg transition-colors shrink-0"
              >
                <span>{project.externalLinkLabel || 'Open Link'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-200/80 rounded-lg transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
