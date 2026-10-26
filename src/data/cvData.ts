import { Experience, Project, SkillGroup, EducationItem, CanvaPost } from '../types';

export const personalInfo = {
  name: 'Anindo Khalique',
  role: 'UI/UX and Product Designer',
  location: 'Dhaka, Bangladesh',
  email: 'anindokhalique2@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/anindo-khalique-388354261/',
  behanceUrl: 'https://www.behance.net/anindokhalique',
  figmaUrl: 'https://www.figma.com/design/Dz4ZTu4qHIYfW0B81rpRvi/Mental-Health-Fitness-App?t=LW3zQY6096NN0Hyt-0',
  bmsLiveUrl: 'http://103.209.40.121:2105/',
  summary:
    'Results-driven professional with experience in marketing, software quality assurance, and UI/UX design within a software development environment. Skilled in user research, testing, prototyping, and data organization, with a strong interest in business analytics and data-driven problem solving. Passionate about using technology and analytical thinking to improve digital experiences and support business decisions',
};

export const featuredProjects: Project[] = [
  {
    id: 'emotional-wellness-app',
    title: 'Emotional Wellness App',
    subtitle: 'Mindfulness user flows to improve overall well-being',
    category: 'Mobile UX/UI & Digital Health',
    timeline: 'Active Ongoing Project',
    platform: 'iOS & Android Mobile Platform (iPhone 13 / 390px)',
    role: 'UI/UX and Product Designer',
    highlightMetric: 'Ongoing project scaling into a full native app',
    imageSrc: '/assets/aistudio/Frame_2087329058__4__9fc1b275.png',
    externalLink: 'https://www.figma.com/design/Dz4ZTu4qHIYfW0B81rpRvi/Mental-Health-Fitness-App?t=LW3zQY6096NN0Hyt-0',
    externalLinkLabel: 'Open Figma Design File',
    badge: 'Figma Interactive File',
    keyContributions: [
      'Conducted real-life structured interviews and Google surveys to uncover authentic user wellness needs.',
      'Created wireframes, user personas, user flows, and structured information architecture from scratch.',
      'Designed mid-fidelity and high-fidelity mobile UI designs across the application.',
      'Crafted typography, color scheme, reusable UI components, spacing gaps, and overall alignment.'
    ],
    toolsUsed: ['Figma', 'Wireframing', 'User Personas & Flows', 'Information Architecture', 'Structured Interviews & Surveys', 'Design Systems (Typography & Components)'],
    mockupType: 'image-wellness',
    caseStudy: {
      overview:
        'An ongoing digital health and mental fitness mobile application designed to promote mindfulness and daily emotional stability.',
      challenge:
        'Finding a favorable flow for users to select an activity to make them feel better according to what they feel, while eliminating an overwhelming amount of features and visual noise for users.',
      solution:
        'Designed to make users feel better according to their actual needs by including modules and flows that help them improve their well-being on their own accord without unnecessary pressure, allowing them to start activities at their own pace.',
      userImpact:
        'Established an intuitive, supportive mobile architecture currently progressing from interactive Figma prototype to native production deployment.',
      designDecisions: [
        'Use of soft pastel themed aesthetics and rounded fonts to create a calming, reassuring visual experience that reduces emotional anxiety',
        'Use of white as secondary and dark green color as tertiary with white font to make key interface components and actions stand out clearly',
        'Progress metrics emphasizing consistency and self-care milestones rather than high-pressure gamification'
      ],
      deliverables: [
        'Interactive Figma mobile prototype on iPhone 13 (390px)',
        'User research synthesis, empathy maps, and user personas',
        'Information architecture and wireframe task flows'
      ]
    }
  },
  {
    id: 'bms-saas-platform',
    title: 'Building Management System (BMS)',
    subtitle: 'Created home and landing page',
    category: 'Enterprise SaaS & Web Platform',
    timeline: 'Live Production Platform',
    platform: 'Desktop Web Application & Landing Page (1440px)',
    role: 'UI/UX and Product Designer',
    highlightMetric: 'Live landing page & operational financial dashboard',
    imageSrc: '/assets/aistudio/Group_1__7__8bf7d8e6.png',
    externalLink: 'http://103.209.40.121:2105/',
    externalLinkLabel: 'View Live Deployed Platform',
    badge: 'Live Deployed SaaS',
    keyContributions: [
      'Improved overall layout and flow of that',
      'Improved the color scheme',
      'Created a coherent modern visual system for security',
      'Improved copywriting and overall language'
    ],
    toolsUsed: ['UI/UX Design', 'Figma', 'Landing Page Architecture', 'Color Systems', 'Better Copywriting'],
    mockupType: 'image-bms',
    caseStudy: {
      overview:
        'Building Management System (BMS) is an enterprise SaaS platform deployed in live production to streamline commercial and residential property management, maintenance billing, and security administration.',
      challenge:
        'The application needed to have a structured narrative flow and a proper visual hook to attract people in a few seconds, while creating simple, digestible sections without overwhelming users.',
      solution:
        'Redesigned the Building Management System Page by creating a structured narrative flow through a compelling visual hook and clear, engaging copywriting. Chose proper fonts, implemented a distinctive forest green color scheme with white as the secondary color, and utilized high-contrast CTAs with prominent fonts and colors to effectively capture user attention.',
      userImpact:
        'Transformed an internal administrative tool into a polished, modern commercial SaaS product currently serving facility operations in live production.',
      designDecisions: [
        'Structured narrative flow with an immediate visual hook in the hero section to engage visitors in seconds',
        'Forest green color scheme paired with clean white secondary surfaces for accessible, elegant contrast',
        'High-contrast CTA buttons with bold typography designed to catch user attention and drive conversions',
        'Simple, digestible section layouts that communicate complex management features without overwhelming users',
        'Enhanced copywriting and clear instructional messaging throughout the entire landing experience'
      ],
      deliverables: [
        'Production responsive landing page deployed at http://103.209.40.121:2105/',
        'Better copywriting guidelines and refined information hierarchy'
      ]
    }
  },
  {
    id: 'crm-dashboard-redesign',
    title: 'Custom Relationship Management Software — Redesign of Dashboard for Web',
    subtitle: 'Redesign of enterprise Sales and Payment Dashboard',
    category: 'Enterprise CRM & Web Dashboard',
    timeline: 'Web Dashboard Redesign',
    platform: 'Web Application & Desktop Dashboard (1440px)',
    role: 'UI/UX and Product Designer',
    highlightMetric: 'Modernized layout, semantic color correction & enhanced data hierarchy',
    imageSrc: '/assets/aistudio/App__9__2b9c271b.png',
    mockupType: 'image-crm',
    badge: 'Web Dashboard Redesign',
    keyContributions: [
      'Improved overall layout and made it more understandable.',
      'Fixed some font and coloring issues.',
      'Updated the iconography where it was necessary.',
      'Updated some information and improved copywriting.'
    ],
    toolsUsed: ['UI/UX Design', 'Figma', 'Web Dashboard Architecture', 'Semantic Color Systems', 'Typography & Spacing', 'Iconography Design'],
    caseStudy: {
      overview:
        'Custom Relationship Management (CRM) Software — Redesign of Dashboard for Web. The objective was to modernize the Sales and Payment Dashboard into a clean, intuitive, and executive-ready interface for monitoring high-value contracts, revenue collection rates, receivables, and mature invoices.',
      challenge:
        'The original dashboard lacked clear visual hierarchy and suffered from cramped spacing, outdated fonts, and improper or contradictory use of colors that obscured critical data. Administrators found it difficult to quickly scan overdue accounts versus received payments without cognitive friction.',
      solution:
        'Completely overhauled the dashboard layout to make it look modern, structured, and instantly understandable in hierarchy. Implemented proper use of semantic colors and systematic color correction (clear greens for completed receipts, amber/red for outstanding balances and matured alerts, neutral slate for base parameters). Upgraded fonts and typography contrast, expanded whitespace and card spacing, improved the overall color scheme, and added proper iconography across metric cards, solution categories, and export toolbars.',
      userImpact:
        'Significantly enhanced data legibility and administrative efficiency, allowing stakeholders to track over $3.2M in contracts and isolate overdue invoices within seconds.',
      designDecisions: [
        'Proper use of semantic colors and systematic correction of status indicators (e.g. 100% collection in green, 80% balance in alert red, matured invoice highlights)',
        'Change of font and enhanced typographic scale for high-clarity numbers and table headers',
        'Balanced spacing and breathing room across KPI summary cards and data tables to remove visual congestion',
        'Added proper iconography where necessary across metric summaries, product categories, and quick action bars',
        'Improvement of overall color scheme balancing deep navy navigation with clean, modern card containers and elevated contrast'
      ],
      deliverables: [
        'Complete 1440px high-fidelity desktop web dashboard redesign',
        'Semantic color hierarchy and status token system',
        'Standardized component styling for summary cards, filters, and financial data grids'
      ]
    }
  },
  {
    id: 'rocket-fintech-redesign',
    title: 'Rocket MFS App — Traffic Fine Payment System',
    subtitle: 'Group-based case study redesign creating an in-app traffic fine payment system for an existing mobile wallet',
    category: 'Fintech & Mobile Financial Services (Group Case Study)',
    timeline: 'Group-Based Case Study Redesign',
    platform: 'Android & iOS Mobile Experience (iPhone 13 / Pro Max)',
    role: 'UI/UX and Product Designer (Group Case Study Redesign)',
    highlightMetric: 'Seamless in-app government traffic fine payments',
    imageSrc: '/assets/aistudio/iMockup_-_iPhone_15_Pro_Max_1c2777c8.png',
    mockupType: 'image-rocket',
    caseStudyUrl: 'https://www.behance.net/gallery/239608561/Rocket-Fintech-App-Redesign-Case-Study',
    externalLink: 'https://www.behance.net/gallery/239608561/Rocket-Fintech-App-Redesign-Case-Study',
    externalLinkLabel: 'View In-Depth Case Study',
    keyContributions: [
      'Helped a lot with iconography choices across the app interface.',
      'Made wireframes from scratch.',
      'Personally interviewed people and took part in group discussions for the overall blueprint and information architecture.',
      'Designed some screens and helped with copywriting a lot.',
      'Presented the whole app redesign to our course instructor mentor.'
    ],
    toolsUsed: ['Figma', 'Group Collaboration', 'Case Study Redesign', 'Fintech UX', 'User Surveys & Interviews', 'Wireframing'],
    caseStudy: {
      overview:
        'Rocket is one of Bangladesh’s primary Mobile Financial Services (MFS) platforms. As part of a collaborative group-based case study redesign, our team conceptualized, designed, and integrated an end-to-end Traffic Fine Payment System into the existing fintech wallet ecosystem, enabling drivers and vehicle owners to clear traffic citations instantly without queues.',
      challenge:
        'The core challenge was an outdated, less intuitive UI with a small service range which limited options for users, while traditional manual branch visits to settle traffic fines were a lengthy and cumbersome process.',
      solution:
        'Redesigned the interface with a modern, intuitive UI and introduced a new in-app traffic fine payment system that made things much faster and more efficient, expanding service options and eliminating the lengthy process of traditional manual branch visits.',
      userImpact:
        'Transformed a multi-hour in-person bureaucratic ordeal into a 60-second digital payment flow, validated through user testing and structured group reviews.',
      designDecisions: [
        'Traffic fine system integrated with vehicles for rapid citation lookup and immediate clearance',
        'New, easier bill pay system streamlining routine and utility payments with minimal friction',
        'Use of more modern layout cards and icons to improve visual clarity and quick navigation across services',
        'Digital receipt generation with QR validation for on-the-spot verification by traffic authorities'
      ],
      deliverables: [
        'Full high-fidelity mobile prototype on iPhone 15 Pro Max',
        'Collaborative user research synthesis, survey data, and interview insights',
        'Wireframes and UI specifications for the traffic fine checkout flow'
      ]
    }
  },
  {
    id: 'shubheccha-nrb-app',
    title: 'Shubheccha App — Bangladesh Government NRB Portal',
    subtitle: 'Group-based case study redesign enabling Non-Resident Bangladeshis (NRBs) to access critical government services globally',
    category: 'GovTech & Citizen Services (Group Case Study)',
    timeline: 'Group-Based Case Study Redesign',
    platform: 'iOS & Android Mobile Platform (iPhone 13)',
    role: 'UI/UX and Product Designer (Group Case Study Redesign)',
    highlightMetric: 'Seamless global access to passport, NID, visa & land services',
    imageSrc: '/assets/aistudio/Home_page_b98c16a9.png',
    mockupType: 'image-shubheccha',
    caseStudyUrl: 'https://www.behance.net/gallery/237557517/Shubheccha-App-Redesign-and-Case-Study',
    externalLink: 'https://www.behance.net/gallery/237557517/Shubheccha-App-Redesign-and-Case-Study',
    externalLinkLabel: 'View In-Depth Case Study',
    keyContributions: [
      'Made wireframes and produced mid-fidelity designs.',
      'Helped with text and iconography across the interface.',
      'Personally interviewed people and took part in group discussions for the overall blueprint and information architecture.',
      'Helped with the overall color scheme and layout.',
      'Presented the whole app redesign to our course instructor mentor.'
    ],
    toolsUsed: ['Figma', 'Group Collaboration', 'Case Study Redesign', 'UX Research', 'App Review Synthesis', 'Persona Development', 'GovTech UX'],
    caseStudy: {
      overview:
        'Shubheccha is an official Bangladesh Government mobile portal tailored for Non-Resident Bangladeshis (NRBs) living abroad. In this group-based case study redesign, our team collaborated to overhaul the digital portal so that millions of expatriates can easily complete vital civic procedures including passport renewals, National ID (NID) registration, consular visas, investment tracking, and land documentation from anywhere in the world.',
      challenge:
        'The original app suffered from convoluted multi-level menus, lack of language accessibility for non-native readers, absence of user guidance during complex bureaucratic submissions, and negative user feedback on app stores regarding lost applications.',
      solution:
        'Working as a collaborative design team, we conducted in-depth app store review analysis, expatriate user interviews, and persona modeling. We redesigned the entire application interface (Home Page), restructured citizen services into high-clarity tiles (Passport, Visa Service, NRB Travel, Investment, Medical Service), integrated accessible dual-language selection (Bangla & English), and introduced guided onboarding tutorials to walk users step-by-step through government filings.',
      userImpact:
        'Greatly reduced confusion for expatriates seeking government support, verified through collaborative user interviews and review analysis, providing an effortless window into Bangladesh public services.',
      designDecisions: [
        'Use of a clean white primary color to create a modern, clear, and accessible visual aesthetic',
        'Unified Citizen Services hub with clear iconography and descriptive service titles',
        'Integrated language switcher in top-level header allowing instant toggling between Bangla and English',
        'Step-by-step onboarding walkthroughs simplifying multi-stage official forms'
      ],
      deliverables: [
        'Comprehensive mobile redesign system featuring the updated homepage and service directories',
        'Collaborative user research report incorporating app review analysis and expatriate user personas',
        'Interactive Figma prototype with dual-language states and onboarding flows'
      ]
    }
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Product & UI/UX Design',
    description: 'User-centered design methodologies from problem discovery to interactive prototypes.',
    skills: [
      { name: 'Wireframing', details: 'Creating low-to-high fidelity wireframes and structural layouts in Figma' },
      { name: 'User Research & User Personas', details: 'Conducting user interviews, qualitative surveys, and persona synthesis' },
      { name: 'Information Architecture', details: 'Structuring intuitive content hierarchies, sitemaps, and navigation trees' },
      { name: 'Prototyping', details: 'Building interactive Figma prototypes to simulate complete user flows and interactions' },
      { name: 'Usability Testing & Data', details: 'Conducting usability tests, analyzing user interaction data, and identifying pain points' },
      { name: 'Visual Design', details: 'Crafting polished UI components, typography, iconography choices, and cohesive layouts' }
    ]
  },
  {
    category: 'Quality Assurance & Software Testing',
    description: 'Systematic testing of enterprise SaaS and ERP platforms to ensure performance and reliability.',
    skills: [
      { name: 'Regression Testing', details: 'Verifying that code changes and feature updates preserve existing system stability' },
      { name: 'Load Testing', details: 'Evaluating software response thresholds and performance stability under peak traffic' },
      { name: 'User Acceptance Testing (UAT)', details: 'Validating real-world user flows against functional and business requirements' },
      { name: 'Enterprise Systems Tested', details: 'HRCAP, Pubali Batashi Resort ERP, and Building Management System (BMS)' }
    ]
  },
  {
    category: 'Microsoft Excel & Data Operations',
    description: 'Data organization, payroll calculations, and mathematical modeling.',
    skills: [
      { name: 'Employee Salary Paysheet Data', details: 'Altering, auditing, and updating monthly employee payroll records' },
      { name: 'VLOOKUP Formulas', details: 'Cross-referencing staff identification, wage brackets, and tax deductions' },
      { name: 'IF Logic Functions', details: 'Building conditional logic structures for automated allowance and bonus calculations' },
      { name: 'Data Organization & Integrity', details: 'Reconciling financial records to ensure 100% computational accuracy' }
    ]
  },
  {
    category: 'Database Management & SQL',
    description: 'Relational database querying, data extraction, and client communications.',
    skills: [
      { name: 'SQL Querying', details: 'Extracting specific datasets, filtering relational records, and auditing logs' },
      { name: 'Client Messaging Workflows', details: 'Querying customer data and executing automated client messaging dispatches' },
      { name: 'Data Verification', details: 'Ensuring database records match operational and transactional requirements' }
    ]
  },
  {
    category: 'Graphic Design & Canva',
    description: 'Creating high-engagement visual assets, marketing graphics, and brand collaterals.',
    skills: [
      { name: 'Canva Social Media Design', details: 'Designed for TECBSL Facebook page for promotional purposes' },
      { name: 'Photo Editing & Graphic Creation', details: 'Enhancing imagery, color balancing, and crafting celebratory and marketing visuals' },
      { name: 'Promotional Brand Campaigns', details: 'Producing visual content for company Facebook page, festive greetings, and marketing outreach' }
    ]
  },
  {
    category: 'Design Tools & Frameworks',
    description: 'Design and frontend tooling used for high-fidelity handoff.',
    skills: [
      { name: 'Figma & FigJam', details: 'Advanced auto-layout, component variants, design tokens, and team collaboration' },
      { name: 'HTML5 & Modern CSS', details: 'Understanding responsive layouts, Flexbox, Grid, and Tailwind CSS implementation' }
    ]
  }
];

export const experienceData: Experience[] = [
  {
    id: 'tbs-operations-marketing',
    role: 'Operations and Marketing',
    organization: 'Technology and Business Solutions Ltd',
    location: 'Dhaka, Bangladesh',
    period: 'October 2024- Dec 2024 (3 month Internship)',
    accomplishments: [
      'Email Marketing, Digital Marketing, Short Videos, Blog Posts and SEO to facilitate company sales.',
      'Provided marketing and sales support by attending meeting with clients.',
      'Creating and maintaining client database.',
      'Making spreadsheets, using MS-Excel, keeping track of employee records, calculating tax return, employee finance management',
      'Used SQL to automate and send messages to Clients.',
      'AI video creation and presentations'
    ]
  },
  {
    id: 'tbs-qa-testing',
    role: 'Quality Assurance and Testing',
    organization: 'Technology and Business Solutions Ltd',
    location: 'Dhaka, Bangladesh',
    period: 'Jan 2025- Present',
    accomplishments: [
      'Manually testing multiple software systems to make sure it is operating as specified',
      'Designing and documenting test cases and test scenarios',
      'Finding and reporting bugs and defects in a software',
      'Reporting issues to the developers and managers',
      'Improving processes and recommending product solutions'
    ]
  },
  {
    id: 'tbs-uiux-design',
    role: 'UI/UX Design',
    organization: 'Technology and Business Solutions Ltd',
    location: 'Dhaka, Bangladesh',
    period: 'July 2025-Present',
    accomplishments: [
      'Conducted user research to understand user needs, behaviors and pain points',
      'Conducted user personas and empathy maps to understand user preferences',
      'Created wireframes, user flows, and prototypes for web and mobile applications.',
      'Designed end to end UI/UX case studies and personal projects',
      'Designed Dashboards, User Interfaces for Saas Websites',
      'Designed intuitive and user friendly appealing interfaces'
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: 'Bachelor of Business Administration (BBA) in Marketing',
    institution: 'North South University (NSU)',
    location: 'Dhaka, Bangladesh',
    period: '2019 — 2024',
    cgpa: '3.2',
    details: ['Degree conferred in December 2024']
  },
  {
    degree: 'O & A Levels',
    institution: 'Sir John Wilson School',
    location: 'Dhaka, Bangladesh',
    period: '2005 — 2019',
    cgpa: 'O Level GPA: 4.00 · A Level GPA: 3.00',
    details: ['Commerce and Science Mixed']
  }
];

export const canvaPosts: CanvaPost[] = [
  {
    id: 'canva-eid-mubarak',
    title: 'Eid Mubarak Celebration',
    occasion: 'Eid-ul-Fitr',
    company: 'TECBSL (TBS)',
    platform: 'Facebook',
    purpose: 'Designed for TECBSL Facebook page for promotional purposes',
    imageSrc: '/assets/aistudio/487300526_1187448559838344_9107552189939695791_n_d58c8abb.jpg',
    description:
      'Festive social media banner designed in Canva featuring Islamic architectural motifs, glowing lanterns, and official TBS branding.',
    highlights: [
      'Festive layout composition in Canva',
      'Branded holiday promotional graphic'
    ],
    tags: ['Canva', 'TECBSL Facebook', 'Promotional Post']
  },
  {
    id: 'canva-eid-ul-azha',
    title: 'Wishing a Happy Eid Ul Azha',
    occasion: 'Eid-ul-Azha',
    company: 'TECBSL (TBS)',
    platform: 'Facebook',
    purpose: 'Designed for TECBSL Facebook page for promotional purposes',
    imageSrc: '/assets/aistudio/502483729_1240399497876583_4692307431279258225_n__2__611964f4.jpg',
    description:
      'Holiday greeting graphic created in Canva pairing custom festive typography and themed illustrations with TBS corporate identity.',
    highlights: [
      'Custom typography and pastel layout',
      'Holiday promotional marketing post'
    ],
    tags: ['Canva', 'TECBSL Facebook', 'Promotional Post']
  }
];
