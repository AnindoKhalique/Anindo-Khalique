import React, { useState } from 'react';
import { featuredProjects, canvaPosts } from '../data/cvData';
import { Project } from '../types';
import { ExternalLink, BookOpen, Maximize2, X, Smartphone, Monitor } from 'lucide-react';

interface ProjectShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onSelectProject }) => {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="projects" className="py-14 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-wider uppercase text-slate-500 mb-1">
            Featured Portfolio
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Projects
          </h2>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Interactive emotional wellness app design, SaaS landing page, CRM web dashboard redesign, and case studies about fintech apps and government services
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-14">
          {featuredProjects.map((project) => {
            return (
              <article
                key={project.id}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Project Header */}
                <div className="space-y-2 mb-6">
                  {/* Clean unboxed metadata row */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
                    <span className="text-slate-800 font-semibold">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.platform}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-700">{project.role}</span>
                    {project.timeline && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-slate-600">{project.timeline}</span>
                      </>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                      {project.title}
                    </h3>
                    {project.badge && (
                      <span className="inline-flex items-center self-start sm:self-auto px-2.5 py-1 text-xs font-semibold rounded-md bg-slate-100 text-slate-700 border border-slate-300">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-base text-slate-600 leading-relaxed font-normal">
                    {project.subtitle}
                  </p>
                </div>

                {/* Visual Canvas / Frame Mockup */}
                <div className="mb-6 p-4 sm:p-8 bg-slate-100/70 rounded-xl border border-slate-200/80">
                  {project.imageSrc && (
                    <>
                      {/* 1. Emotional Wellness App (iPhone 13 - 390px Width, Full Length) */}
                      {project.mockupType === 'image-wellness' && (
                        <div className="flex flex-col items-center justify-center">
                          <div className="flex items-center justify-between w-full max-w-[390px] mb-3 text-xs text-slate-600 font-medium">
                            <span className="flex items-center gap-1.5 text-slate-800 font-semibold">
                              <Smartphone className="w-3.5 h-3.5 text-slate-700" />
                              iPhone 13 (390px) · Homepage Design
                            </span>
                            <button
                              onClick={() =>
                                setLightboxImage({
                                  src: project.imageSrc!,
                                  alt: project.title
                                })
                              }
                              className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 transition-colors"
                            >
                              <Maximize2 className="w-3.5 h-3.5" />
                              <span>Full Screen</span>
                            </button>
                          </div>

                          <div
                            onClick={() =>
                              setLightboxImage({
                                src: project.imageSrc!,
                                alt: project.title
                              })
                            }
                            className="group relative w-[390px] max-w-full bg-slate-950 rounded-[44px] p-2.5 sm:p-3 shadow-2xl border-4 border-slate-800/90 cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-[1.01]"
                            title="Click to view full screen"
                          >
                            <div className="rounded-[34px] overflow-hidden bg-white relative">
                              <img
                                src={project.imageSrc}
                                alt={project.title}
                                className="w-full h-auto block"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center">
                                <span className="opacity-0 group-hover:opacity-100 px-3.5 py-1.5 text-xs font-semibold bg-white/95 text-slate-900 rounded-full shadow-lg transition-opacity">
                                  Click to Enlarge
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 2. Building Management System (Desktop Browser Mockup) */}
                      {project.mockupType === 'image-bms' && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                            <span className="flex items-center gap-1.5 text-slate-700">
                              <Monitor className="w-3.5 h-3.5 text-emerald-600" />
                              Desktop Frame (1440px) · BMS Home & Landing Page Design
                            </span>
                            <button
                              onClick={() =>
                                setLightboxImage({
                                  src: project.imageSrc!,
                                  alt: 'Building Management System Landing Page Design (1440px Frame)'
                                })
                              }
                              className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 transition-colors"
                            >
                              <Maximize2 className="w-3.5 h-3.5" />
                              <span>View Full Design (1440px)</span>
                            </button>
                          </div>

                          <div className="w-full bg-slate-900 rounded-2xl p-2 sm:p-3 shadow-xl border border-slate-700/60 text-slate-100">
                            {/* Browser Chrome Header */}
                            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] text-slate-400 font-mono">
                              <div className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                                <span className="pl-2 text-slate-300">bms-management.com / home</span>
                              </div>
                              <span className="text-emerald-400 text-[10px] hidden sm:inline">Desktop Frame · 1440px</span>
                            </div>

                            {/* Scrollable Layout */}
                            <div
                              onClick={() =>
                                setLightboxImage({
                                  src: project.imageSrc!,
                                  alt: 'Building Management System Landing Page Design (1440px Frame)'
                                })
                              }
                              className="group relative max-h-96 sm:max-h-[540px] overflow-y-auto rounded-lg bg-white cursor-pointer scrollbar-thin"
                              title="Click to view full 1440px design in lightbox"
                            >
                              <img
                                src={project.imageSrc}
                                alt="Building Management System Home & Landing Page"
                                className="w-full h-auto block"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 3. Custom Relationship Management (CRM) Software (Desktop Web Dashboard Mockup) */}
                      {project.mockupType === 'image-crm' && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                            <span className="flex items-center gap-1.5 text-slate-700">
                              <Monitor className="w-3.5 h-3.5 text-blue-600" />
                              Desktop Frame (1440px) · Sales CRM Dashboard Redesign
                            </span>
                            <button
                              onClick={() =>
                                setLightboxImage({
                                  src: project.imageSrc!,
                                  alt: 'Custom Relationship Management Software — Sales and Payment Dashboard (1440px Frame)'
                                })
                              }
                              className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 transition-colors"
                            >
                              <Maximize2 className="w-3.5 h-3.5" />
                              <span>View Full Design (1440px)</span>
                            </button>
                          </div>

                          <div className="w-full bg-slate-900 rounded-2xl p-2 sm:p-3 shadow-xl border border-slate-700/60 text-slate-100">
                            {/* Browser Chrome Header */}
                            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] text-slate-400 font-mono">
                              <div className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                                <span className="pl-2 text-slate-300">sales-crm.com / dashboard</span>
                              </div>
                              <span className="text-blue-400 text-[10px] hidden sm:inline">Desktop Web Dashboard · 1440px</span>
                            </div>

                            {/* Scrollable / Responsive Layout */}
                            <div
                              onClick={() =>
                                setLightboxImage({
                                  src: project.imageSrc!,
                                  alt: 'Custom Relationship Management Software — Sales and Payment Dashboard (1440px Frame)'
                                })
                              }
                              className="group relative max-h-96 sm:max-h-[540px] overflow-y-auto rounded-lg bg-white cursor-pointer scrollbar-thin"
                              title="Click to view full 1440px dashboard design in lightbox"
                            >
                              <img
                                src={project.imageSrc}
                                alt="Custom Relationship Management Software Dashboard Redesign for Web"
                                className="w-full h-auto block"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 4. Rocket MFS App (iPhone 15 Pro Max iMockup Frame - 390px Width Full Length) */}
                      {project.mockupType === 'image-rocket' && (
                        <div className="flex flex-col items-center justify-center">
                          <div className="flex items-center justify-between w-full max-w-[390px] mb-3 text-xs text-slate-600 font-medium">
                            <span className="flex items-center gap-1.5 text-slate-800 font-semibold">
                              <Smartphone className="w-3.5 h-3.5 text-slate-700" />
                              iPhone 13 (390px) · Full Home Page
                            </span>
                            <button
                              onClick={() =>
                                setLightboxImage({
                                  src: project.imageSrc!,
                                  alt: project.title
                                })
                              }
                              className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 transition-colors"
                            >
                              <Maximize2 className="w-3.5 h-3.5" />
                              <span>Full Screen</span>
                            </button>
                          </div>

                          <div
                            onClick={() =>
                              setLightboxImage({
                                src: project.imageSrc!,
                                alt: project.title
                              })
                            }
                            className="group relative w-[390px] max-w-full cursor-pointer transition-transform duration-300 hover:scale-[1.01]"
                            title="Click to view full screen"
                          >
                            <img
                              src={project.imageSrc}
                              alt={project.title}
                              className="w-full h-auto block drop-shadow-xl"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center rounded-[40px]">
                              <span className="opacity-0 group-hover:opacity-100 px-3.5 py-1.5 text-xs font-semibold bg-white/95 text-slate-900 rounded-full shadow-lg transition-opacity">
                                Click to Enlarge
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 5. Shubheccha App (iPhone 13 Frame - 390px Width Full Length) */}
                      {project.mockupType === 'image-shubheccha' && (
                        <div className="flex flex-col items-center justify-center">
                          <div className="flex items-center justify-between w-full max-w-[390px] mb-3 text-xs text-slate-600 font-medium">
                            <span className="flex items-center gap-1.5 text-slate-800 font-semibold">
                              <Smartphone className="w-3.5 h-3.5 text-slate-700" />
                              iPhone 13 (390px) · Full Home Page
                            </span>
                            <button
                              onClick={() =>
                                setLightboxImage({
                                  src: project.imageSrc!,
                                  alt: project.title
                                })
                              }
                              className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 transition-colors"
                            >
                              <Maximize2 className="w-3.5 h-3.5" />
                              <span>Full Screen</span>
                            </button>
                          </div>

                          <div
                            onClick={() =>
                              setLightboxImage({
                                src: project.imageSrc!,
                                alt: project.title
                              })
                            }
                            className="group relative w-[390px] max-w-full bg-slate-950 rounded-[44px] p-2.5 sm:p-3 shadow-2xl border-4 border-slate-800/90 cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-[1.01]"
                            title="Click to view full screen"
                          >
                            <div className="rounded-[34px] overflow-hidden bg-white relative">
                              <img
                                src={project.imageSrc}
                                alt={project.title}
                                className="w-full h-auto block"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center">
                                <span className="opacity-0 group-hover:opacity-100 px-3.5 py-1.5 text-xs font-semibold bg-white/95 text-slate-900 rounded-full shadow-lg transition-opacity">
                                  Click to Enlarge
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Project Narrative Summary */}
                <div className="space-y-4 mb-6 text-sm text-slate-700 leading-relaxed">
                  <div className="pt-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      Key Contributions & Role:
                    </p>
                    <ul className="space-y-2 pl-4 list-disc marker:text-slate-400">
                      {project.keyContributions.map((contrib, i) => (
                        <li key={i} className="text-slate-800 font-medium">
                          {contrib}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Action Bar */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100 no-print">
                  {/* External Resource / Behance Case Study Links */}
                  {project.externalLink && (
                    <a
                      href={project.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-sm"
                    >
                      <span>{project.externalLinkLabel || 'View In-Depth Case Study'}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
                    </a>
                  )}

                  {/* Interactive Case Study Breakdown Modal trigger */}
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-800 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-300 transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-slate-600" />
                    <span>Read Architecture Breakdown</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Canva Promotional Posts (Placed under Projects beneath UI Projects) */}
        <div id="canva-posts" className="mt-16 pt-12 border-t border-slate-200">
          <div className="mb-8">
            <p className="text-xs font-semibold tracking-wider uppercase text-slate-500 mb-1">
              Social Media & Graphic Creation
            </p>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              Canva Promotional Posts
            </h3>
            <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
              Designed for TECBSL Facebook page for promotional purposes.
            </p>
          </div>

          {/* 2-Column Responsive Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {canvaPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-neutral-50 border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Visual Image Preview */}
                  <div
                    onClick={() =>
                      setLightboxImage({
                        src: post.imageSrc,
                        alt: `${post.title} — ${post.purpose}`
                      })
                    }
                    className="relative aspect-4/3 bg-slate-900/5 cursor-pointer overflow-hidden border-b border-slate-200/80 flex items-center justify-center p-3 sm:p-4"
                    title="Click to view full image"
                  >
                    <img
                      src={post.imageSrc}
                      alt={post.title}
                      className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 px-3 py-1 text-xs font-semibold bg-white/95 text-slate-900 rounded-full shadow-lg transition-opacity flex items-center gap-1.5">
                        <Maximize2 className="w-3 h-3 text-slate-700" />
                        View Full Size
                      </span>
                    </div>
                  </div>

                  {/* Card Content - Compact & Summarized */}
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-1.5 font-medium">
                      <span className="text-slate-800 font-semibold">{post.platform}</span>
                      <span>{post.occasion}</span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 tracking-tight mb-1">
                      {post.title}
                    </h4>

                    <p className="text-xs font-medium text-slate-700 mb-2">
                      {post.purpose}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Compact Tags */}
                <div className="px-5 py-3 bg-white border-t border-slate-200/80 flex flex-wrap gap-1.5 text-[11px] text-slate-600">
                  {post.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-slate-100 rounded text-slate-700 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-2 sm:p-6 overflow-y-auto"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[1440px] max-h-[94vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-slate-200">
              <span className="text-xs font-semibold text-slate-700">{lightboxImage.alt}</span>
              <button
                onClick={() => setLightboxImage(null)}
                aria-label="Close preview"
                className="p-1 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-y-auto p-4 flex justify-center bg-slate-50">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                className="max-w-[1440px] w-full h-auto rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
