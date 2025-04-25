import { NavItem, Project, Skill, SocialLink } from '../types';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SKILLS: Skill[] = [
  { name: 'JavaScript', level: 90, color: '#F7DF1E' },
  { name: 'TypeScript', level: 85, color: '#3178C6' },
  { name: 'React', level: 88, color: '#61DAFB' },
  { name: 'Node.js', level: 82, color: '#339933' },
  { name: 'HTML/CSS', level: 95, color: '#E34F26' },
  { name: 'MongoDB', level: 75, color: '#47A248' },
  { name: 'PostgreSQL', level: 80, color: '#336791' },
  { name: 'Docker', level: 70, color: '#2496ED' },
  { name: 'AWS', level: 65, color: '#FF9900' },
  { name: 'GraphQL', level: 78, color: '#E10098' },
];

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with payment processing, user authentication, and admin dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    imageUrl: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates, task assignments, and progress tracking.',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
    imageUrl: 'https://images.pexels.com/photos/8867431/pexels-photo-8867431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 'project-3',
    title: 'Real-Time Chat Application',
    description: 'Secure messaging platform with end-to-end encryption, file sharing, and group chat functionality.',
    technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
    imageUrl: 'https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: '#',
    liveUrl: '#',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'Github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'Linkedin',
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'Twitter',
  },
  {
    platform: 'Email',
    url: 'mailto:your.email@example.com',
    icon: 'Mail',
  },
];