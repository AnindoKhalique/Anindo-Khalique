import React from 'react';
import { experienceData } from '../data/cvData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-14 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-wider uppercase text-slate-500 mb-1">
            Career History & Practice
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Professional Experience
          </h2>
        </div>

        {/* Experience Block in Exact Document Format */}
        <article className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm">
          {/* Company & Location Header */}
          <div className="pb-4 mb-6 border-b border-slate-100">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Technology and Business Solutions Ltd, Dhaka, Bangladesh
            </h3>
          </div>

          {/* Roles Breakdown in Exact Order */}
          <div className="space-y-8">
            {experienceData.map((item) => (
              <div key={item.id} className="space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900">
                    {item.role}
                  </h4>
                  <span className="text-sm text-slate-600 font-medium italic">
                    {item.period}
                  </span>
                </div>

                <ul className="space-y-1.5 pl-5 list-disc marker:text-slate-400 text-sm text-slate-700 leading-relaxed">
                  {item.accomplishments.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};
