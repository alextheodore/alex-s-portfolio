import { LucideIcon } from 'lucide-react';

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: 'Work' | 'Organization' | 'Bootcamp';
  achievements: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon?: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
}