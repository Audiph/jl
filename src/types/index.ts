export interface NavLink {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: 'github' | 'gitlab' | 'linkedin' | 'mail';
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  email: string;
  bio: string[];
  website: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface ProjectBrief {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  featured: boolean;
  year: string;
  role: string;
}

export interface Project extends ProjectBrief {
  longDescription: string;
  screenshots: string[];
  demoLink?: string;
  codeLink?: string;
}

export interface TechItem {
  name: string;
  experience: string;
}

export interface TechCategory {
  title: string;
  emoji: string;
  techs: TechItem[];
}

export interface Stat {
  number: string;
  label: string;
}

export interface RecentTech {
  name: string;
  logo?: string;
}

export type AnimationType =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'scale'
  | 'rotate'
  | 'blur'
  | 'slide-up'
  | 'flip';
