import React from "react";
import { Zap, Globe, Mail, Calendar, MapPin, Linkedin, Github, Twitter, FileText, Video, Coffee, Database, Cloud, Palette, Wrench, LucideIcon } from "lucide-react";

// Type definitions
export interface Tool {
  title: string;
  image: string;
}

export interface ProjectMetrics {
  uptime?: string;
  performance?: string;
  users?: string;
  trades?: string;
  accuracy?: string;
  teams?: string;
  projects?: string;
  efficiency?: string;
  records?: string;
  providers?: string;
  compliance?: string;
}

export interface WebProject {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  tools?: Tool[];
  category: string;
  status: string;
  metrics: ProjectMetrics;
  features: string[];
  demoUrl: string;
  githubUrl?: string;
  gradient: string;
}

export interface DesignProject {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  category: string;
  status: string;
  demoUrl: string;
}

export interface Project {
  title: string;
  tools: Tool[];
  description: string;
  image: string;
  link: string;
  github?: string;
}

export interface Testimonial {
  quote: string;
  image: string;
  name: string;
  company: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Blog {
  title: string;
  image: string;
  description: string;
  tags: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface Skill {
  name: string;
  category: string;
  color: string;
  bgColor: string;
  borderColor: string;
  icon: React.ReactNode;
}

export interface ContactMethod {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  value: string;
  description: string;
  action: string;
  responseTime: string;
  url: string;
}

export interface SocialLink {
  icon: LucideIcon;
  url: string;
  label: string;
  color: string;
}

export interface QuickAction {
  icon: LucideIcon;
  label: string;
  color: string;
  url: string;
}

// Data exports
export const webProjects: WebProject[] = [
  {
    id: 1,
    title: 'ScholarsKit AI',
    description: 'A light-weight AI-powered research assistant/study partner that streamlines academic workflows by automating literature reviews, summarizing papers, and generating citations.',
    image: '/skHome.png',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'S3', 'AWS', 'Lambda Functions', 'DynamoDB', 'Bedrock (Claude LLM)', 'API Gateway'],
    category: 'Full-Stack (Cloud Native)',
    status: 'Live',
    metrics: { uptime: '99.9%', performance: '98' },
    features: ['Context-Aware AI Chat', 'Serverless Architecture', 'API Integration', 'Mobile Responsive'],
    demoUrl: 'https://master.d9r77d4102d54.amplifyapp.com/',
    githubUrl: 'https://www.github.com/ammanabua/ScholarsKit',
    gradient: 'from-gray-700 to-indigo-600'
  },
  {
    id: 2,
    title: 'Greenbaq AI',
    description: 'Greenbaq AI is a fintech platform focused on ESG-driven financing solutions for small and medium-sized enterprises (SMEs). I worked on both backend and frontend features, contributing to secure APIs, asynchronous workflows, and data-driven user interfaces. This role involved collaborating on system design decisions, performance optimizations, and building production features that integrate financial data and user workflows. Emphasis was placed on reliability, security, and clean system architecture in a regulated, data-sensitive domain.',
    image: '/gb-ai.png',
    tech: ['React/Next.js', 'TypeScript', 'Python', 'Chartjs', 'Firebase', 'Stripe'],
    category: 'Full-Stack',
    status: 'Live',
    metrics: { uptime: '99.9%', performance: '95' },
    features: ['AI -Driven Insights', 'Secure Payment Processing', 'Real-time ESG Analytics', 'Data Visualization', 'API Integration', 'Mobile Responsive'],
    demoUrl: 'https://www.greenbaq.ai/',
    gradient: 'from-gray-700 to-emerald-300'
  },
  {
    id: 3,
    title: 'Purpose Connect',
    description: 'Developed multi-step onboarding flows and supporting backend services with secure authentication, validation, and conditional logic. Emphasized clean APIs, async workflows, and production-ready state management. I also integrated AI workflows to automate user interview preparation and personalized content generation, enhancing user engagement and platform value.',
    image: '/pc.png',
    tech: ['Next.js', 'TypeScript', 'Chartjs', 'Firebase', 'Claude LLM'],
    tools: [{title: 'HTML', image: './html-5.svg'}, {title: 'React', image: './react.svg'}, {title: "Tailwind CSS", image: './tailwindcss-icon.svg'}, {title: "Node.js", image: './nodejs-icon.svg'}, {title: "Git", image: './git-icon.svg'}],
    category: 'Full-Stack',
    status: 'Live',
    metrics: { uptime: '99.9%', performance: '95' },
    features: ['Real-time Analytics for Job Applicants', 'Data Visualization', 'API Integration', 'AI integrated interview prep'],
    demoUrl: 'https://www.purposeconnect.io/',
    gradient: 'from-gray-700 to-cyan-300'
  },
  {
    id: 4,
    title: 'Entities Studio',
    description: 'A marketplace and collaborative platform for digital artists and designers to create, share, and monetize their digital assets and interactive experiences in a virtual environment.',
    image: '/entities.png',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'Chartjs', 'Firebase'],
    tools: [{title: 'HTML', image: './html-5.svg'}, {title: 'React', image: './react.svg'}, {title: "Tailwind CSS", image: './tailwindcss-icon.svg'}, {title: "Node.js", image: './nodejs-icon.svg'}, {title: "Git", image: './git-icon.svg'}],
    category: 'Full-Stack',
    status: 'Live',
    metrics: { uptime: '99.9%', performance: '95' },
    features: ['Real-time Analytics', 'Data Visualization', 'API Integration', 'Mobile Responsive'],
    demoUrl: 'https://www.entities.studio/',
    githubUrl: 'https://www.github.com/ammanabua/entities-studio',
    gradient: 'from-gray-700 to-amber-300'
  },
];

export const designProjects: DesignProject[] = [
  {
    id: 7,
    title: 'Entities Studio Application Prototype',
    description: 'A comprehensive design system and prototype created for Entities Studio, focusing on consistency, scalability, and user experience across all digital products.',
    image: './ent-studio.png',
    tech: ['Figma'],
    category: 'Design',
    status: 'Live',
    demoUrl: 'https://www.figma.com/proto/PnnMlDjDxbPzJjASOXQ6mN/Entities-Studio?node-id=0-1&t=yIUA5hOs6C8Tnw8E-1',
  },
  {
    id: 8,
    title: 'Mobile App UI for IRent',
    description: 'A sleek and modern mobile app UI design for IRent, focusing on user-friendly navigation and an engaging rental experience.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=600&fit=crop',
    tech: ['Figma', 'Adobe XD'],
    category: 'Design',
    status: 'Live',
    demoUrl: 'https://www.figma.com/proto/Pzp2S98znGClGltdW08lFN/IRENT-2021?t=5mpnV7rcV2jfUrrT-1',
  }
];

export const projects: Project[] = [
  {
    title: "Camp Scout",
    tools: [{title: 'HTML', image: './html-5.svg'}, {title: 'React', image: './react.svg'}, {title: "Express.js", image: './express.svg'}, {title: "Node.js", image: './nodejs-icon.svg'}, {title: "Git", image: './git-icon.svg'}],
    description: "As a lover of camping and the outdoors, this application enables camp lovers to share experiences of some amazing sites and scenes visited",
    image: "./camp-scout.png",
    link: "https://camp-scout-b6ns.onrender.com/",
    github: "https://github.com/ammanabua/camp-scout"
  },
  {
    title: "Entities Studio",
    tools: [{title: 'HTML', image: './html-5.svg'}, {title: 'React', image: './react.svg'}, {title: "Tailwind CSS", image: './tailwindcss-icon.svg'}, {title: "Node.js", image: './nodejs-icon.svg'}, {title: "Git", image: './git-icon.svg'}],
    description: "Welcome to the world of art, explore the mind of the artist who expresses their paradigm of the world from a unique perspective",
    image: "./entities.png",
    link: "https://entities.studio/",
    github: "https://github.com/ammanabua/entities-studio"
  },
  {
    title: "CS Help-Desk",
    tools: [{title: 'HTML', image: './html-5.svg'}, {title: 'CSS', image: './css-3.svg'}],
    description: "Computer Science help desk webpage",
    image: "./cs-helpdesk.png",
    link: "https://ammanabua.github.io/ammanabua/cs-helpdesk.html",
  },
  {
    title: "Patatap Clone",
    tools: [{title: 'HTML', image: './html-5.svg'}, {title: 'CSS', image: './css-3.svg'}, {title: 'JavaScript', image: './javascript.svg'}],
    description: "Patatap clone with Canvas and Paper.js",
    image: "./patatap.png",
    link: "https://trusting-rosalind-906192.netlify.app/",
    github: "https://github.com/ammanabua/patatap-clone"
  },
  {
    title: "Color Guessing Game",
    tools: [{title: 'HTML', image: './html-5.svg'}, {title: 'CSS', image: './css-3.svg'}, {title: 'JavaScript', image: './javascript.svg'}],
    description: "RGB colour guessing game",
    image: "./colors.png",
    link: "https://ammans-color-game.netlify.app/",
  }
];

export const testimonials: Testimonial[] = [
  {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Leora Rosenberg",
    company: "Acupuncture & Wellness",
  },
  {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
    image: "https://randomuser.me/api/portraits/men/94.jpg",
    name: "Ruben Alvarez",
    company: "Dooble.io",
  },
];

const experience: Experience[] = [
  {
    role: 'Founder / Software Engineer',
    company: 'ScholarsKit AI',
    period: '2025 - Present',
    description: 'Built the MVP for an AI-powered learning platform that utilizes an intelligent system to provide personalized education experiences. I single-handedly designed and developed this web applications using Nextjs, TypeScript, Tailwind CSS, and AWS services (S3, API Gateway, Lambda - Nodejs, Bedrock (Titan Embeddings, Claude LLM), SNS, DynamoDB, and Cognito).',
    achievements: ['Delivered MVP for AI-powered learning platform', 'Engineered cloud-native architecture', 'Implemented intelligent Retrieval Augmented Generation (RAG) system', 'Automatic Processing of uploaded files', 'Implemented CI/CD pipelines', 'Context-aware AI chat for personalized learning']
  },
  {
    role: 'Software Engineer',
    company: 'Sparetime Digital Ltd',
    period: '2022 - 2023',
    description: 'Led development of microservices architecture serving 100K+ users daily. Built scalable React applications with 99.9% uptime.',
    achievements: ['40% performance improvement', '99% Uptime', 'Migrated legacy systems to microservices', 'Led team of 5 developers', 'Implemented CI/CD pipelines']
  },
  {
    role: 'Software Developer',
    company: 'Manyactive App Ltd',
    period: '2021 - 2022',
    description: 'Developed enterprise SaaS platform for mental health awareness, and physical activity tracking using React, Node.js, and PostgreSQL. Collaborated with cross-functional teams.',
    achievements: ['Reduced load time by 60%', 'Built real-time chat system', 'Mentored junior developers']
  },
  {
    role: 'Web Developer',
    company: 'Technology Media Maven',
    period: '2018 - 2021',
    description: 'Created responsive web applications and implemented modern UI/UX designs. Optimized for mobile-first approach.',
    achievements: ['Improved mobile conversion by 35%', 'Built component library', 'Implemented A/B testing']
  }
];

const education: Education[] = [
  {
    degree: 'Master of Science in Information Technology (In-view)',
    institution: 'University of the Potomac, Falls Church, VA',
    period: 'in view',
    description: 'Advanced studies in software engineering, cloud computing, and enterprise architecture. Focused on building scalable distributed systems and modern web applications.',
    achievements: ['Data Analysis', 'Advanced Software Engineering', 'Machine Learning & AI']
  },
  {
    degree: 'Master of Science in Computer Science (ComPro) - Transferred',
    institution: 'Maharishi International University, Fairfield, IA',
    period: '2023 - 2025',
    description: 'Advanced studies in software engineering, cloud computing, and enterprise architecture. Focused on building scalable distributed systems and modern web applications.',
    achievements: ['Cloud Architecture', 'Advanced Software Engineering', 'Enterprise Applications Architecture', 'Distributed Systems']
  },
  {
    degree: 'Post-Graduate Diploma in Computer Science',
    institution: 'Nile University of Nigeria, Abuja, Nigeria',
    period: '2021 - 2023',
    description: 'Intensive program covering algorithms, data structures, software development methodologies, and database management systems.',
    achievements: ['Software Development Excellence', 'Algorithm Design & Analysis', 'Database Systems', 'Web Technologies']
  },
  {
    degree: 'Bachelor of Engineering in Electrical and Electronics Engineering',
    institution: 'Afe Babalola University, Ado Ekiti, Nigeria',
    period: '2010 - 2016',
    description: 'Foundation in engineering principles, problem-solving, and analytical thinking. Developed strong mathematical and logical reasoning skills.',
    achievements: ['Engineering Mathematics', 'Digital Systems Design', 'Programming & Control Systems', 'Research & Innovation']
  },
];

export { experience, education };

export const blogs: Blog[] = [
  {
    title: "Introduction to web development",
    image: "./nile.jpg",
    description: "Welcome tho this blog",
    tags: "blog"
  },
  {
    title: "Introduction to web development",
    image: "./abuad.png",
    description: "Welcome tho this blog",
    tags: "blog"
  },
  {
    title: "Introduction to web development",
    image: "./game.png",
    description: "Welcome tho this blog",
    tags: "blog"
  },
  {
    title: "Introduction to web development",
    image: "./nile.png",
    description: "Welcome tho this blog",
    tags: "blog"
  },
];

export const skillCategories: SkillCategory[] = [
  { id: 'all', label: 'Stack', icon: Zap },
  { id: 'frontend', label: 'Frontend', icon: Globe },
  { id: 'backend', label: 'Backend', icon: Database },
  { id: 'devops', label: 'DevOps', icon: Cloud },
  { id: 'design', label: 'Design', icon: Palette },
  { id: 'tools', label: 'Tools', icon: Wrench }
];

export const skills: Skill[] = [
  //Featured Row
  { name: 'React', category: 'frontend', color: '#61DAFB', bgColor: 'bg-blue-500', borderColor: 'border-cyan-400', icon: <img src='/react.svg' className='w-10 h-10' alt='React' /> },
  { name: 'Next.js', category: 'frontend', color: '#000000', bgColor: 'bg-gray-900', borderColor: 'border-gray-600', icon: <img src='/Nextjs.svg' className='w-10 h-10' alt='Next.js' /> },
  { name: 'TypeScript', category: 'frontend', color: '#3178C6', bgColor: 'bg-blue-600', borderColor: 'border-blue-500', icon: <img src='/TypeScript.svg' className='w-10 h-10' alt='TypeScript' /> },
  { name: 'Node.js', category: 'backend', color: '#339933', bgColor: 'bg-green-600', borderColor: 'border-green-500', icon: <img src='/nodejs-icon.svg' className='w-10 h-10' alt='Node.js' /> },
  { name: 'Python', category: 'backend', color: '#3776AB', bgColor: 'bg-blue-600', borderColor: 'border-blue-500', icon: <img src='/Python.svg' className='w-10 h-10' alt='Python' /> },
  { name: 'AWS', category: 'devops', color: '#FF9900', bgColor: 'bg-amber-600', borderColor: 'border-orange-400', icon: <img src='/aws.svg' className='w-10 h-10' alt='AWS' /> },
  { name: 'GitHub', category: 'tools', color: '#181717', bgColor: 'bg-gray-900', borderColor: 'border-gray-600', icon: <img src='/github-icon.svg' className='w-10 h-10' alt='GitHub' /> },
  { name: 'Postman', category: 'tools', color: '#FF6C37', bgColor: 'bg-amber-600', borderColor: 'border-orange-500', icon: <img src='/Postman.svg' className='w-10 h-10' alt='Postman' /> },
  
  // Frontend
  { name: 'HTML', category: 'frontend', color: '#E34F26', bgColor: 'bg-amber-600', borderColor: 'border-orange-500', icon: <img src='/html-5.svg' className='w-10 h-10' alt='HTML' /> },
  { name: 'CSS', category: 'frontend', color: '#1572B6', bgColor: 'bg-blue-600', borderColor: 'border-blue-500', icon: <img src='/css-3.svg' className='w-10 h-10' alt='CSS' /> },
  { name: 'JavaScript', category: 'frontend', color: '#F7DF1E', bgColor: 'bg-yellow-400', borderColor: 'border-yellow-400', icon: <img src='/javascript.svg' className='w-10 h-10' alt='JavaScript' /> },
  { name: 'Redux', category: 'frontend', color: '#764ABC', bgColor: 'bg-purple-600', borderColor: 'border-purple-500', icon: <img src='/Redux.svg' className='w-10 h-10' alt='Redux' /> },
  { name: 'Tailwind CSS', category: 'frontend', color: '#06B6D4', bgColor: 'bg-blue-500', borderColor: 'border-cyan-400', icon: <img src='/tailwindcss-icon.svg' className='w-10 h-10' alt='Tailwind CSS' /> },

  // Backend
  { name: 'Express.js', category: 'backend', color: '#000000', bgColor: 'bg-gray-800', borderColor: 'border-gray-600', icon: <img src='/express.svg' className='w-10 h-10' alt='Express.js' /> },
  { name: 'GraphQL', category: 'backend', color: '#E10098', bgColor: 'bg-pink-600', borderColor: 'border-pink-500', icon: <img src='/graphql.svg' className='w-10 h-10' alt='GraphQL' /> },
  { name: 'PostgresSQL', category: 'backend', color: '#336791', bgColor: 'bg-blue-700', borderColor: 'border-blue-600', icon: <img src='/PostgresSQL.svg' className='w-10 h-10' alt='PostgreSQL' /> },
  { name: 'MongoDB', category: 'backend', color: '#47A248', bgColor: 'bg-green-600', borderColor: 'border-green-500', icon: <img src='/mongodb.svg' className='w-10 h-10' alt='MongoDB' /> },
  { name: 'Redis', category: 'backend', color: '#DC382D', bgColor: 'bg-red-600', borderColor: 'border-red-500', icon: <img src='/Redis.svg' className='w-10 h-10' alt='Redis' /> },

  // DevOps
  { name: 'Docker', category: 'devops', color: '#2496ED', bgColor: 'bg-blue-500', borderColor: 'border-blue-400', icon: <img src='/Docker.svg' className='w-10 h-10' alt='Docker' /> },
  { name: 'Kubernetes', category: 'devops', color: '#326CE5', bgColor: 'bg-blue-600', borderColor: 'border-blue-500', icon: <img src='/Kubernetes.svg' className='w-10 h-10' alt='Kubernetes' /> },
  { name: 'Nginx', category: 'devops', color: '#009639', bgColor: 'bg-green-700', borderColor: 'border-green-600', icon: '🌐' },

  // Design
  { name: 'Figma', category: 'design', color: '#F24E1E', bgColor: 'bg-amber-600', borderColor: 'border-amber-500', icon: <img src='/figma.svg' className='w-10 h-10' alt='Figma' /> },

  // Tools
  { name: 'VS Code', category: 'tools', color: '#007ACC', bgColor: 'bg-blue-600', borderColor: 'border-blue-500', icon: <img src='/vscode.svg' className='w-10 h-10' alt='VS Code' /> },
  { name: 'Git', category: 'tools', color: '#F05032', bgColor: 'bg-amber-600', borderColor: 'border-amber-500', icon: <img src='/git-icon.svg' className='w-10 h-10' alt='Git' /> },
];

export const contactMethods: ContactMethod[] = [
  {
    id: 'email',
    icon: Mail,
    title: 'Email Me',
    subtitle: 'Quick Response',
    value: 'ammanabua@gmail.com',
    description: 'I typically respond within 2-4 hours during business days',
    action: 'Send Email',
    responseTime: '2-4 hours',
    url: 'mailto:ammanabua@gmail.com'
  },
  {
    id: 'calendar',
    icon: Calendar,
    title: 'Book a Meeting',
    subtitle: '30min Consultation',
    value: 'Free Strategy Call',
    description: 'Let\'s discuss your project goals and technical requirements',
    action: 'Book Now',
    responseTime: 'Next available',
    url: 'https://calendly.com/ammanabua/30min'
  },
  {
    id: 'location',
    icon: MapPin,
    title: 'Meet in Person',
    subtitle: 'D(M)V Area',
    value: 'Coffee & Code',
    description: 'Available for local meetups and collaboration sessions',
    action: 'Arrange Meeting',
    responseTime: 'Flexible',
    url: 'https://calendly.com/ammanabua/30min'
  }
];

export const socialLinks: SocialLink[] = [
  { icon: Linkedin, url: 'https://www.linkedin.com/in/ammanabua/', label: 'LinkedIn', color: 'hover:text-blue-400' },
  { icon: Github, url: 'https://www.github.com/ammanabua', label: 'GitHub', color: 'hover:text-gray-300' },
  { icon: Twitter, url: 'https://twitter.com/ammanie_k', label: 'Twitter', color: 'hover:text-cyan-400' },
  { icon: Globe, url: 'https://ammanabua.com', label: 'Website', color: 'hover:text-purple-400' }
];

export const quickActions: QuickAction[] = [
  { icon: FileText, label: 'View Resume', color: 'blue-500', url: '/cv.pdf' },
  { icon: Video, label: 'Video Call', color: 'red-500', url: 'https://calendly.com/ammanabua/30min' },
  { icon: Coffee, label: 'Coffee Chat', color: 'yellow-500', url: 'https://calendly.com/ammanabua/30min' }
];
