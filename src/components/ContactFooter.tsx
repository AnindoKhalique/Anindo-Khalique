import React from 'react';
import { personalInfo } from '../data/cvData';
import { Mail, ExternalLink, ArrowUp } from 'lucide-react';

export const ContactFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        {/* Contact Invitation */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 mb-12 shadow-sm">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Let's Collaborate
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Looking for a UI/UX Designer who speaks both business & UX?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Available full time for UI/UX design roles, software quality assurance testing and design system consulting.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg shadow-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-700" />
                <span>Get in Touch via Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Clean Link Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 border-t border-slate-100 text-sm">
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Direct Portfolios</h4>
            <ul className="space-y-2 text-slate-600 text-xs">
              <li>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 flex items-center gap-1.5 transition-colors font-medium text-slate-800"
                >
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 flex items-center gap-1.5 transition-colors"
                >
                  <span>Behance Profile</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 flex items-center gap-1.5 transition-colors"
                >
                  <span>Figma Mental Health App File</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.bmsLiveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 flex items-center gap-1.5 transition-colors"
                >
                  <span>BMS SaaS Live Production</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Quick Navigation</h4>
            <ul className="space-y-2 text-slate-600 text-xs">
              <li><a href="#about" className="hover:text-slate-900 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-slate-900 transition-colors">Skills</a></li>
              <li><a href="#experience" className="hover:text-slate-900 transition-colors">Experience</a></li>
              <li><a href="#education" className="hover:text-slate-900 transition-colors">Education</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Location & Availability</h4>
            <div className="space-y-1.5 text-xs text-slate-600">
              <p className="font-semibold text-slate-800">{personalInfo.name}</p>
              <p>{personalInfo.location}</p>
              <p className="text-emerald-600 font-medium">Open to opportunities</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {personalInfo.name} · All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
