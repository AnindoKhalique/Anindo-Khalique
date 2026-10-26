import React from 'react';
import { skillGroups } from '../data/cvData';

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-14 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-wider uppercase text-slate-500 mb-1">
            Core Competencies & Capabilities
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Technical & Professional Skills
          </h2>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            A comprehensive, modular overview across UI/UX design, software quality assurance testing, advanced Microsoft Excel data operations, SQL client messaging, and Canva graphic creation.
          </p>
        </div>

        {/* Skill Groups Grid - 6 Dedicated Separate Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="mb-3">
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    {group.category}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    {group.description}
                  </p>
                </div>

                {/* Clean unboxed skill list */}
                <ul className="space-y-2.5 pt-2 border-t border-slate-100">
                  {group.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="text-sm text-slate-800">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="font-semibold text-slate-900 text-xs sm:text-sm">{skill.name}</span>
                      </div>
                      {skill.details && (
                        <p className="text-xs text-slate-500 mt-0.5 leading-normal">
                          {skill.details}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>

                {group.category.includes('Canva') && (
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <a
                      href="#canva-posts"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800 hover:text-slate-950 transition-colors"
                    >
                      <span>View Canva Promotional Posts under Projects</span>
                      <span aria-hidden="true">↓</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
