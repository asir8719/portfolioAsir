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
  { name: 'Redux', level: 70, color: '#2496ED' },
  // { name: 'AWS', level: 65, color: '#FF9900' },
  // { name: 'GraphQL', level: 78, color: '#E10098' },
];

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with payment processing, user authentication, and admin dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    imageUrl: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com/asir8719/skillFlowFrontend',
    liveUrl: 'https://skillflow8.vercel.app/',
  },
  {
    id: 'project-2',
    title: 'Calendar App',
    description: 'Collaborative task management tool with real-time updates, task assignments, and progress tracking.',
    technologies: ['React', 'Tailwind CSS', 'Redux'],
    imageUrl: 'https://images.pexels.com/photos/8867431/pexels-photo-8867431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com/asir8719/calendar',
    liveUrl: 'https://calendarasir.vercel.app/',
  },
  {
    id: 'project-3',
    title: 'Full Stack Blogging Platform',
    description: 'A blogging platform with user authentication, post creation, commenting, and user profiles.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    imageUrl: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com/asir8719/eCommerceFrontend',
    liveUrl: 'https://shagasir.vercel.app/',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/asir8719',
    icon: 'Github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/md-asir-khan-0b4a42255/',
    icon: 'Linkedin',
  },
  {
    platform: 'Twitter',
    url: 'https://x.com/ashadkhan7646?t=6ESTGIRdrOFiil5KD4ULOQ&s=08 ',
    icon: 'Twitter',
  },
  {
    platform: 'Email',
    url: 'https://vertexowebstudio@gmail.com',
    icon: 'Mail',
  },
];