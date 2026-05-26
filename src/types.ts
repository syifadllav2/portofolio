/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  category: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  color: string; // Tailwind bg color class, e.g., 'bg-amber-100 border-amber-400'
  bannerColor: string; // Gradient color for detail modal, e.g., 'from-amber-400 to-orange-400'
  emoji: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'tools';
  level: number; // 1 to 5 stars or heart ratings!
  iconName: string; // Matches Lucide icon elements
  color: string; // e.g., 'rose', 'sky', 'amber', 'emerald', 'indigo'
  description: string;
}

export interface UserMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  content: string;
  emoji: string;
  timestamp: string;
}

export interface FunFact {
  id: string;
  fact: string;
  emoji: string;
}

export interface Achievement {
  id: string;
  count: number;
  label: string;
  iconName: string;
  color: string;
  suffix?: string;
}
