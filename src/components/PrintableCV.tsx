import React from 'react';
import { personalInfo, featuredProjects, skillGroups, experienceData, educationData } from '../data/cvData';

export const PrintableCV: React.FC = () => {
  return (
    <div className="hidden print:block print-only max-w-4xl mx-auto p-4 bg-white text-slate-900 font-sans text-[11pt] leading-normal">
      {/* Print CV Header */}
      <div className="border-b-2 border-slate-900 pb-4 mb-4">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">{personalInfo.name}</h1>
        <p className="text-base font-semibold text-slate-800 mt-0.5">{personalInfo.role}</p>
        
        <div className="flex flex-wrap gap-x-3 text-xs text-slate-700 mt-2 font-mono">
          <span>{personalInfo.location}</span>
          <span>·</span>
          <span>{personalInfo.email}</span>
          <span>·</span>
          <span>linkedin.com/in/anindo-khalique-388354261</span>
          <span>·</span>
          <span>behance.net/anindokhalique</span>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
          Executive Summary
        </h2>
        <p className="text-xs text-slate-800 leading-relaxed text-justify">
          {personalInfo.summary}
        </p>
      </div>

      {/* Professional Experience */}
      <div className="mb-4 print-break-inside-avoid">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
          Professional Experience
        </h2>
        <div className="font-bold text-slate-900 text-xs mb-2">
          Technology and Business Solutions Ltd, Dhaka, Bangladesh
        </div>
        <div className="space-y-3">
          {experienceData.map((exp) => (
            <div key={exp.id} className="text-xs">
              <div className="flex justify-between font-bold text-slate-900">
                <span>{exp.role}</span>
                <span className="text-slate-600 italic font-normal">{exp.period}</span>
              </div>
              <ul className="list-disc pl-4 space-y-0.5 text-slate-700 text-[10pt] mt-0.5">
                {exp.accomplishments.map((acc, i) => (
                  <li key={i}>{acc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Unified Projects & Case Studies */}
      <div className="mb-4 print-break-inside-avoid">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
          Projects & Case Studies
        </h2>
        <div className="space-y-3">
          {featuredProjects.map((project) => (
            <div key={project.id} className="text-xs">
              <div className="flex justify-between font-bold text-slate-900">
                <span>{project.title} — {project.role}</span>
                <span className="font-mono text-slate-600">{project.platform}</span>
              </div>
              <p className="text-[10pt] text-slate-700 mt-0.5 mb-1">{project.subtitle}</p>
              <ul className="list-disc pl-4 space-y-0.5 text-slate-700 text-[10pt]">
                {project.keyContributions.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
              {project.externalLink && (
                <p className="text-[9pt] font-mono text-slate-600 mt-0.5">
                  Link / Case Study: {project.externalLink}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Core Competencies Matrix */}
      <div className="mb-4 print-break-inside-avoid">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
          Core Competencies & Stack
        </h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
          {skillGroups.map((group, idx) => (
            <div key={idx}>
              <span className="font-bold text-slate-900 block">{group.category}:</span>
              <span className="text-slate-700 text-[10pt]">
                {group.skills.map((s) => s.name).join(', ')}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Academic Background */}
      <div className="print-break-inside-avoid">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
          Education
        </h2>
        {educationData.map((edu, idx) => (
          <div key={idx} className="text-xs">
            <div className="flex justify-between font-bold text-slate-900">
              <span>
                {edu.degree} {edu.cgpa ? `(${edu.cgpa.includes('Level') || edu.cgpa.includes('GPA') ? edu.cgpa : `CGPA: ${edu.cgpa}`})` : ''}
              </span>
              <span className="font-mono text-slate-600">{edu.institution}</span>
            </div>
            <p className="text-[10pt] text-slate-700 mt-0.5">
              {edu.location} · {edu.period}
            </p>
            {edu.details && (
              <p className="text-[9pt] text-slate-600 mt-0.5 italic">
                {edu.details.join(' · ')}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
