export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  timeline: string;
  platform: string;
  role: string;
  description?: string;
  highlightMetric: string;
  imageSrc?: string;
  externalLink?: string;
  externalLinkLabel?: string;
  secondaryLink?: string;
  secondaryLinkLabel?: string;
  caseStudyUrl?: string;
  keyContributions: string[];
  toolsUsed: string[];
  mockupType: 'image-wellness' | 'image-bms' | 'image-rocket' | 'image-shubheccha' | 'image-crm';
  badge?: string;
  caseStudy: {
    overview: string;
    challenge: string;
    solution: string;
    userImpact?: string;
    designDecisions: string[];
    deliverables?: string[];
  };
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type?: string;
  summary?: string;
  accomplishments: string[];
  technologies?: string[];
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    details?: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa?: string;
  focus?: string;
  details?: string[];
}

export interface CanvaPost {
  id: string;
  title: string;
  occasion: string;
  company: string;
  platform: string;
  purpose: string;
  imageSrc: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export interface ShowcaseProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  timeline: string;
  platform: string;
  role: string;
  highlightMetric: string;
  imageSrc: string;
  externalLink: string;
  externalLinkLabel: string;
  keyContributions: string[];
  toolsUsed: string[];
  mockupType: 'image-wellness' | 'image-bms';
  badge: string;
}
