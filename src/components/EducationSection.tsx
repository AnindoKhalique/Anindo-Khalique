import React from 'react';
import { educationData } from '../data/cvData';
import { GraduationCap } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-14 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-8">
          <p className="text-xs font-semibold tracking-wider uppercase text-slate-500 mb-1">
            Academic Background
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Education
          </h2>
        </div>

        {/* Education Item - Clean, simple, nothing more */}
        <div className="space-y-4">
          {educationData.map((item, index) => (
            <article
              key={index}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 bg-slate-100 rounded-xl text-slate-800 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-semibold text-slate-700 mt-0.5">
                      {item.institution}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5 font-mono">
                      {item.location} · {item.period}
                    </p>
                    {item.details && item.details.length > 0 && (
                      <p className="text-xs font-medium text-slate-700 mt-1.5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                        <span>{item.details.join(' · ')}</span>
                      </p>
                    )}
                  </div>
                </div>

                {item.cgpa && (
                  <div className="sm:text-right shrink-0">
                    <span className="text-xs text-slate-500 font-medium">Academic Standing:</span>
                    <p className="text-slate-900 font-bold text-sm sm:text-base font-mono">
                      {item.cgpa.includes('Level') || item.cgpa.includes('GPA') ? item.cgpa : `CGPA: ${item.cgpa}`}
                    </p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
