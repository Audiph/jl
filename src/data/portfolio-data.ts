import type {
  NavLink,
  SocialLink,
  PersonalInfo,
  Experience,
  Project,
  TechCategory,
  Stat,
} from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Jeff Lagarde',
  firstName: 'Jeff',
  email: 'lagarde.marcjoseph@outlook.com',
  bio: [
    "I'm a Software Engineer with 5+ years of experience building scalable web applications and intuitive user experiences. Based in the Philippines, I'm passionate about turning complex ideas into elegant, performant solutions.",
    "When I'm not coding, you'll find me exploring new tech, tinkering with side projects, or diving into the latest frameworks. I believe the best products come from balancing creativity with solid engineering.",
    'I thrive in fast-paced environments where I can wear multiple hats — from architecting backend systems to crafting pixel-perfect UIs. Always learning, always shipping.',
  ],
  website: 'j-l.dev',
};

export const navLinks: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Technologies', href: '#technologies' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitLab', href: 'https://gitlab.com/jlagarde', icon: 'gitlab' },
  { name: 'GitHub', href: 'https://github.com/Audiph', icon: 'github' },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/marc-joseph-lagarde-198652172/',
    icon: 'linkedin',
  },
  { name: 'Email', href: 'mailto:lagarde.marcjoseph@outlook.com', icon: 'mail' },
];

export const stats: Stat[] = [
  { number: '5+', label: 'Years Exp.' },
  { number: '15+', label: 'Projects' },
  { number: '7', label: 'Companies' },
  { number: '30+', label: 'Technologies' },
];

export const experiences: Experience[] = [
  {
    role: 'Full Stack Software Engineer',
    company: 'Continue Technologies Limited',
    period: 'Oct 2024 - Present',
    description:
      'Led development for multiple client projects. Built component libraries, implemented state management solutions, and ensured cross-browser compatibility and accessibility.',
    highlights: [
      'TypeScript',
      'NextJS/React',
      'SWR',
      'Material UI',
      'HeadlessUI',
      'TailwindCSS',
      'Express',
      'GraphQL',
      'MongoDB',
      'AWS',
      'Docker',
      'Kubernetes',
    ],
  },
  {
    role: 'Frontend Software Engineer',
    company: 'Objective Labs LTD OOD',
    period: 'Aug 2025 - Oct 2025',
    description:
      'Developed and maintained web applications for clients across various industries. Implemented CI/CD pipelines and created Frontend architectures that prioritize performance, scalability, and maintainability.',
    highlights: [
      'TypeScript',
      'NextJS/React',
      'ShadcnUI',
      'TailwindCSS',
      'Nivo',
      'Recharts',
      'Storybook',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Umbra Digital Company',
    period: 'May 2024 - Jan 2025',
    description:
      'Building and maintaining full-stack web applications using modern technologies. Developing scalable APIs, implementing responsive UIs, and collaborating with cross-functional teams to deliver high-quality software products.',
    highlights: [
      'TypeScript',
      'NextJS/React',
      'ShadcnUI',
      'TailwindCSS',
      'Express',
      'MongoDB',
      'PostgreSQL',
      'Docker',
      'Digital Ocean',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Koitecc Solutions',
    period: 'Apr 2024 - Sep 2024',
    description:
      'Created responsive web interfaces and single-page applications. Collaborated with designers to translate Figma mockups into pixel-perfect implementations.',
    highlights: [
      'TypeScript',
      'Python',
      'React',
      'ShadcnUI',
      'TailwindCSS',
      'NX',
      'FastAPI',
      'Docker',
      'Azure DevOps',
    ],
  },
  {
    role: 'Full Stack Software Engineer',
    company: 'Amaze Communications',
    period: 'Dec 2023 - Jul 2025',
    description:
      'Built and maintained company websites and client-facing web applications. Implemented CMS solutions and optimized site performance for better SEO rankings.',
    highlights: [
      'TypeScript',
      'NextJS/React',
      'ShadcnUI',
      'LitElement',
      'PayloadCMS',
      'DecapCMS',
      'TailwindCSS',
      'Shoelace',
      'Fastify',
      'PrismaORM',
      'PostgreSQL',
      'n8n',
      'Docker',
      'Cloudflare',
      'Kubernetes',
    ],
  },
  {
    role: 'Associate Full Stack Software Engineer',
    company: 'Manulife IT Delivery Center',
    period: 'Aug 2021 - Aug 2023',
    description:
      'Developed internal tools and customer-facing applications for the insurance division. Worked within an Agile team to deliver features on tight schedules.',
    highlights: [
      'TypeScript/JavaScript',
      'React',
      'Adobe Experience Manager (AEM)',
      'GraphQL',
      'NestJS',
      'MongoDB',
      'Jest',
      'React Testing Library',
      'WebdriverIO',
      'JMeter',
      'Docker',
      'Azure',
      'Kubernetes',
    ],
  },
  {
    role: 'Technical Support Engineer',
    company: 'Teleperformance',
    period: 'Jun 2019 - Jun 2021',
    description:
      'Provided technical support and troubleshooting for enterprise software. Gained foundational experience in software systems and customer-facing problem solving.',
    highlights: ['Technical Support', 'Troubleshooting', 'Documentation', 'CRM'],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform (42+ Brands)',
    description:
      'Multi-brand e-commerce platform serving 42+ brands with unified inventory management, payment processing, and analytics dashboard.',
    longDescription:
      'A large-scale e-commerce platform supporting 42+ brands under a unified architecture. Features include multi-tenant storefronts, real-time inventory synchronization, integrated payment gateways (Stripe), advanced analytics dashboards, and an admin panel for managing products, orders, and promotions across all brands.',
    tags: [
      'TypeScript',
      'NextJS/React',
      'SWR',
      'Material UI',
      'HeadlessUI',
      'TailwindCSS',
      'Express',
      'GraphQL',
      'MongoDB',
      'AWS',
      'Docker',
      'Kubernetes',
    ],
    image: '/images/projects/continue-1.png',
    screenshots: ['/images/projects/continue-1.png', '/images/projects/continue-2.png'],
    demoLink: 'https://resurgence.thrudark.com/',
    codeLink: undefined,
    featured: true,
    year: '2024',
    role: 'Full Stack Software Engineer',
  },
  {
    id: 2,
    title: 'Manulife CoverMe',
    description:
      'Insurance coverage management application enabling customers to manage policies, claims, and benefits online.',
    longDescription:
      'A customer-facing insurance management application for Manulife. Allows policyholders to view and manage their coverage, submit claims, track claim status, and access benefit details. Built with a focus on accessibility, security, and seamless mobile experience.',
    tags: [
      'TypeScript/JavaScript',
      'React',
      'Adobe Experience Manager (AEM)',
      'GraphQL',
      'NestJS',
      'MongoDB',
      'Jest',
      'React Testing Library',
      'WebdriverIO',
      'JMeter',
      'Docker',
      'Azure',
      'Kubernetes',
    ],
    image: '/images/projects/manulife-1.png',
    screenshots: ['/images/projects/manulife-1.png', '/images/projects/manulife-2.png'],
    demoLink: 'https://www.coverme.com/travel-insurance/get-a-quote',
    codeLink: undefined,
    featured: true,
    year: '2021',
    role: 'Associate Full Stack Software Engineer',
  },
  {
    id: 3,
    title: 'NUDGYT',
    description:
      'AI-powered behavioral nudge platform that helps organizations drive better decisions through data-driven insights.',
    longDescription:
      'An AI-powered platform that leverages behavioral science to help organizations nudge employees and customers toward better decisions. Features real-time analytics, customizable nudge campaigns, A/B testing capabilities, and integration with popular communication tools.',
    tags: [
      'TypeScript',
      'NextJS/React',
      'ShadcnUI',
      'TailwindCSS',
      'Express',
      'MongoDB',
      'PostgreSQL',
      'Docker',
      'Digital Ocean',
    ],
    image: '/images/projects/umbra-1.png',
    screenshots: ['/images/projects/umbra-1.png', '/images/projects/umbra-2.png'],
    demoLink: 'https://www.nudgyt.com/',
    codeLink: undefined,
    featured: false,
    year: '2023',
    role: 'Full Stack Developer',
  },
  {
    id: 4,
    title: 'DocuKitchen & Data Warehouse',
    description:
      'Document management system with integrated data warehouse for enterprise reporting and business intelligence.',
    longDescription:
      'An enterprise document management and data warehousing solution. Features intelligent document indexing, full-text search, version control, and a data warehouse layer for business intelligence reporting. Supports automated ETL pipelines and customizable dashboards for stakeholder insights.',
    tags: [
      'TypeScript',
      'NextJS/React',
      'ShadcnUI',
      'LitElement',
      'PayloadCMS',
      'DecapCMS',
      'TailwindCSS',
      'Shoelace',
      'Fastify',
      'PrismaORM',
      'PostgreSQL',
      'n8n',
      'Docker',
      'Cloudflare',
      'Kubernetes',
    ],
    image: '/images/projects/amaze-1.png',
    screenshots: ['/images/projects/amaze-1.png'],
    demoLink: undefined,
    codeLink: undefined,
    featured: false,
    year: '2022',
    role: 'Full Stack Software Engineer',
  },
];

export const techCategories: TechCategory[] = [
  {
    title: 'Frontend',
    emoji: '🎨',
    techs: [
      { name: 'React', experience: '5+ years' },
      { name: 'TypeScript', experience: '5+ years' },
      { name: 'NextJS', experience: '5+ years' },
      { name: 'TailwindCSS', experience: '5+ years' },
      { name: 'UI Libraries', experience: '5+ years' },
      { name: 'Framer Motion', experience: '2+ years' },
    ],
  },
  {
    title: 'Backend',
    emoji: '⚙️',
    techs: [
      { name: 'NodeJS', experience: '5+ years' },
      { name: 'Fastify', experience: '2+ years' },
      { name: 'Express', experience: '5+ years' },
      { name: 'PostgreSQL', experience: '3+ years' },
      { name: 'MongoDB', experience: '5+ years' },
      { name: 'REST / GraphQL', experience: '5+ years' },
    ],
  },
  {
    title: 'DevOps & Data',
    emoji: '☁️',
    techs: [
      { name: 'Docker', experience: '5+ years' },
      { name: 'AWS', experience: '2+ years' },
      { name: 'Azure', experience: '2+ years' },
      { name: 'CI/CD', experience: '4+ years' },
      { name: 'Git', experience: '5+ years' },
      { name: 'Linux', experience: '5+ years' },
    ],
  },
];

export const recentTech: string[] = [
  'NextJS 16',
  'React 19',
  'TypeScript',
  'TailwindCSS v4',
  'Framer Motion',
  'shadcn/ui',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'tRPC',
  'Turborepo',
  'GSAP',
];

export const marqueeLogos: string[] = [
  'React',
  'TypeScript',
  'NextJS',
  'NodeJS',
  'PostgreSQL',
  'Docker',
  'GraphQL',
  'AWS',
  'Tailwind',
  'MongoDB',
  'Express',
  'NestJS',
];

export const heroCodeSnippet = `const developer = {
  name: "Jeff Lagarde",
  skills: ["React", "NextJS",
  "TypeScript", "NodeJS", "Python"],
  passion: "Infinitely curious and always learning",
};`;
