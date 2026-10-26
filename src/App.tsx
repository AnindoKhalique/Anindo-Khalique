import React, { useState } from 'react';
import { Header } from './components/Header';
import { ExecutiveSummary } from './components/ExecutiveSummary';
import { ProjectShowcase } from './components/ProjectShowcase';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EducationSection } from './components/EducationSection';
import { ContactFooter } from './components/ContactFooter';
import { CaseStudyModal } from './components/CaseStudyModal';
import { PrintableCV } from './components/PrintableCV';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeView, setActiveView] = useState<'full' | 'executive' | 'projects'>('full');

  return (
    <div id="top" className="min-h-screen bg-neutral-50 text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* Printable Paper CV (strictly rendered during window.print) */}
      <PrintableCV />

      {/* Screen Web Application */}
      <div className="no-print">
        {/* Top Bar Navigation */}
        <Header activeSection="about" />

        <main className="transition-all">
          {/* Executive Header & Summary */}
          <ExecutiveSummary
            activeView={activeView}
            setActiveView={setActiveView}
          />

          {/* View Modes */}
          {activeView === 'full' && (
            <>
              {/* Unified Projects Section (Emotional Wellness App, BMS SaaS, Rocket MFS, Shubheccha + Canva Posts) */}
              <ProjectShowcase onSelectProject={setSelectedProject} />

              {/* Skills Matrix */}
              <SkillsMatrix />

              {/* Professional Experience */}
              <ExperienceTimeline />

              {/* Academic Background */}
              <EducationSection />
            </>
          )}

          {activeView === 'executive' && (
            <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
              {/* Streamlined Executive Sections */}
              <ExperienceTimeline />
              <SkillsMatrix />
              <EducationSection />

              {/* Unified Projects Showcase */}
              <ProjectShowcase onSelectProject={setSelectedProject} />
            </div>
          )}

          {activeView === 'projects' && (
            <div className="max-w-4xl mx-auto px-6 py-10 space-y-8">
              <ProjectShowcase onSelectProject={setSelectedProject} />
            </div>
          )}
        </main>

        {/* Contact Footer */}
        <ContactFooter />

        {/* Modal for In-Depth Case Study Review */}
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </div>
  );
}
