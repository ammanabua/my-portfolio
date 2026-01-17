import React from "react";
import { Zap, Globe, Mail, Calendar, MapPin, Linkedin, Github, Twitter, FileText, Video, Coffee, Database, Cloud, Palette, Wrench } from "lucide-react";



export const webProjects = [
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
  // {
  //   id: 3,
  //   title: 'Naija Cuisines',
  //   description: 'An e-commerce platform for Nigerian cuisine, connecting local chefs with food enthusiasts worldwide.',
  //   image: '/naijaCuisines.png',
  //   tech: ['React', 'Node.js', 'PostgreSQL', 'D3.js', 'AWS'],
  //   category: 'Full-Stack',
  //   status: 'Live',
  //   metrics: { uptime: '99.9%', performance: '95' },
  //   features: ['Real-time Analytics', 'Data Visualization', 'API Integration', 'Mobile Responsive'],
  //   demoUrl: 'https://www.naijacuisines.com/',
  //   githubUrl: 'https://www.github.com/ammanabua/naija-cuisines',
  //   gradient: 'from-green-200 to-emerald-300'
  // },
  // {
  //   id: 3,
  //   title: 'EcoTracker Platform',
  //   description: 'A comprehensive sustainability tracking platform that helps companies monitor their carbon footprint and environmental impact in real-time.',
  //   image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
  //   tech: ['React', 'Node.js', 'PostgreSQL', 'D3.js', 'AWS'],
  //   category: 'Full-Stack',
  //   status: 'Live',
  //   metrics: { users: '10K+', uptime: '99.9%', performance: '95' },
  //   features: ['Real-time Analytics', 'Data Visualization', 'API Integration', 'Mobile Responsive'],
  //   demoUrl: '#',
  //   githubUrl: '#',
  //   gradient: 'from-green-500 to-emerald-600'
  // },
  // {
  //   id: 4,
  //   title: 'CryptoFlow Dashboard',
  //   description: 'Advanced cryptocurrency portfolio management dashboard with real-time market data, trading signals, and portfolio optimization.',
  //   image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  //   tech: ['Next.js', 'TypeScript', 'WebSockets', 'Chart.js', 'Redis'],
  //   category: 'Frontend',
  //   status: 'Live',
  //   metrics: { users: '5K+', trades: '50K+', accuracy: '87%' },
  //   features: ['Live Market Data', 'Portfolio Analytics', 'Trading Alerts', 'Risk Management'],
  //   demoUrl: '#',
  //   githubUrl: '#',
  //   gradient: 'from-blue-500 to-purple-600'
  // },
  // {
  //   id: 5,
  //   title: 'TaskFlow Enterprise',
  //   description: 'Enterprise-grade project management solution with advanced collaboration tools, AI-powered insights, and seamless integrations.',
  //   image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
  //   tech: ['React', 'Express', 'MongoDB', 'Socket.io', 'Docker'],
  //   category: 'Full-Stack',
  //   status: 'Beta',
  //   metrics: { teams: '200+', projects: '1K+', efficiency: '+40%' },
  //   features: ['Team Collaboration', 'AI Insights', 'Time Tracking', 'Integration Hub'],
  //   demoUrl: '#',
  //   githubUrl: '#',
  //   gradient: 'from-purple-500 to-pink-600'
  // },
  // {
  //   id: 6,
  //   title: 'HealthVault API',
  //   description: 'HIPAA-compliant healthcare data management API with advanced security, patient records, and provider integration capabilities.',
  //   image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
  //   tech: ['Node.js', 'GraphQL', 'PostgreSQL', 'JWT', 'Kubernetes'],
  //   category: 'Backend',
  //   status: 'Live',
  //   metrics: { records: '100K+', providers: '50+', compliance: '100%' },
  //   features: ['HIPAA Compliance', 'GraphQL API', 'End-to-End Encryption', 'Audit Logging'],
  //   demoUrl: '#',
  //   githubUrl: '#',
  //   gradient: 'from-cyan-500 to-blue-600'
  // }
];

export const designProjects = [
  // Placeholder for future design projects
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
]


export const projects = [
  {
    title: "Manyactive App",
    tools: [ {title: 'Figma', image: './figma.svg'}, {title: 'HTML', image: './html-5.svg'}, {title: 'React', image: './react.svg'}, {title: "Tailwind CSS", image: './tailwindcss-icon.svg'}, {title: "Git", image: './git-icon.svg'}],
    description:
      "Web application for fitness and Mental Health tracking SAAS platform, creating access to fitness and health activities to improve staff wellness and maximize productivity",
    image: "./manyactive.png",
    link: "https://manyactive.com/",
  },
  {
    title: "Camp Scout",
    tools: [{title: 'HTML', image: './html-5.svg'}, {title: 'React', image: './react.svg'}, {title: "Express.js", image: './express.svg'}, {title: "Node.js", image: './nodejs-icon.svg'}, {title: "Git", image: './git-icon.svg'}],
    description:
        "As a lover of camping and the outdoors, this application enables camp lovers to share experiences of some amazing sites and scenes visited",
    image: "./camp-scout.png",
    link: "https://camp-scout-b6ns.onrender.com/",
    github: "https://github.com/ammanabua/camp-scout"
  },
  {
    title: "Entities Studio",
    tools: [{title: 'HTML', image: './html-5.svg'}, {title: 'React', image: './react.svg'}, {title: "Tailwind CSS", image: './tailwindcss-icon.svg'}, {title: "Node.js", image: './nodejs-icon.svg'}, {title: "Git", image: './git-icon.svg'}],
    description:
        "Welcome to the world of art, explore the mind of the artist who expresses their paradigm of the world from a unique perspective",
    image: "./entities.png",
    link: "https://ammanabua.com/",
    github: "https://github.com/ammanabua/entities-studio"
  },
  {
    title: "CS Help-Desk",
    tools: [{title: 'HTML', image: './html-5.svg'}, {title: 'CSS', image: './css-3.svg'}],
    description:
      "Computer Science help desk webpage",
    image: "./cs-helpdesk.png",
    link: "https://ammanabua.github.io/ammanabua/cs-helpdesk.html",
  },
  {
    title: "Patatap Clone",
    tools: [{title: 'HTML', image: './html-5.svg'}, {title: 'CSS', image: './css-3.svg'}, {title: 'JavaScript', image: './javascript.svg'}],
    description:
      "Patatap clone with Canvas and Paper.js",
    image: "./patatap.png",
    link: "https://trusting-rosalind-906192.netlify.app/",
    github: "https://github.com/ammanabua/patatap-clone"
  },
  {
    title: "Color Guessing Game",
    tools: [{title: 'HTML', image: './html-5.svg'}, {title: 'CSS', image: './css-3.svg'}, {title: 'JavaScript', image: './javascript.svg'}],
    description:
      "RGB colour guessing game",
    image: "./colors.png",
    link: "https://ammans-color-game.netlify.app/",
  }
];

export const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Leora Rosenberg",
    company: "Acupuncture & Wellness",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
    image: "https://randomuser.me/api/portraits/men/94.jpg",
    name: "Ruben Alvarez",
    company: "Dooble.io",
  },
];

const experience = [
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

const education = [
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
]
export { experience, education };
export const blogs = [
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

]


export const skillCategories = [
  { id: 'all', label: 'Stack', icon: Zap },
  { id: 'frontend', label: 'Frontend', icon: Globe },
  { id: 'backend', label: 'Backend', icon: Database },
  // { id: 'mobile', label: 'Mobile', icon: Smartphone, color: 'from-purple-500 to-pink-500' },
  { id: 'devops', label: 'DevOps', icon: Cloud },
  { id: 'design', label: 'Design', icon: Palette },
  { id: 'tools', label: 'Tools', icon: Wrench }
];

export const skills = [
  //Featured Row
  { name: 'React', category: 'frontend', color: '#61DAFB', bgColor: 'bg-blue-500', borderColor: 'border-cyan-400', icon: <img src='/react.svg' className='w-10 h-10' /> },
  { name: 'Next.js', category: 'frontend', color: '#000000', bgColor: 'bg-gray-900', borderColor: 'border-gray-600', icon: <img src='/Nextjs.svg' className='w-10 h-10' /> },
  { name: 'TypeScript', category: 'frontend', color: '#3178C6', bgColor: 'bg-blue-600', borderColor: 'border-blue-500', icon: <img src='/TypeScript.svg' className='w-10 h-10' /> },
  { name: 'Node.js', category: 'backend', color: '#339933', bgColor: 'bg-green-600', borderColor: 'border-green-500', icon: <img src='/nodejs-icon.svg' className='w-10 h-10' /> },
  { name: 'Python', category: 'backend', color: '#3776AB', bgColor: 'bg-blue-600', borderColor: 'border-blue-500', icon: <img src='/Python.svg' className='w-10 h-10' /> },
  { name: 'AWS', category: 'devops', color: '#FF9900', bgColor: 'bg-amber-600', borderColor: 'border-orange-400', icon: <img src='/aws.svg' className='w-10 h-10' /> },
  { name: 'GitHub', category: 'tools', color: '#181717', bgColor: 'bg-gray-900', borderColor: 'border-gray-600', icon: <img src='/github-icon.svg' className='w-10 h-10' /> },
  { name: 'Postman', category: 'tools', color: '#FF6C37', bgColor: 'bg-amber-600', borderColor: 'border-orange-500', icon: <img src='/Postman.svg' className='w-10 h-10' /> },
  
  // Frontend
  { name: 'HTML', category: 'frontend', color: '#E34F26', bgColor: 'bg-amber-600', borderColor: 'border-orange-500', icon: <img src='/html-5.svg' className='w-10 h-10' /> },
  { name: 'CSS', category: 'frontend', color: '#1572B6', bgColor: 'bg-blue-600', borderColor: 'border-blue-500', icon: <img src='/css-3.svg' className='w-10 h-10' /> },
  { name: 'JavaScript', category: 'frontend', color: '#F7DF1E', bgColor: 'bg-yellow-400', borderColor: 'border-yellow-400', icon: <img src='/javascript.svg' className='w-10 h-10' /> },
  { name: 'Redux', category: 'frontend', color: '#764ABC', bgColor: 'bg-purple-600', borderColor: 'border-purple-500', icon: <img src='/Redux.svg' className='w-10 h-10' /> },
  { name: 'Tailwind CSS', category: 'frontend', color: '#06B6D4', bgColor: 'bg-blue-500', borderColor: 'border-cyan-400', icon: <img src='/tailwindcss-icon.svg' className='w-10 h-10' /> },

  // Backend
  // { name: 'Java', category: 'backend', color: '#339933', bgColor: 'from-green-500 to-emerald-500', borderColor: 'border-green-500', icon: <img src='/java.svg' className='w-10 h-10' /> },
  // { name: 'Spring Boot', category: 'backend', color: '#339933', bgColor: 'from-green-500 to-emerald-500', borderColor: 'border-green-500', icon: <img src='/spring-boot.svg' className='w-10 h-10' /> },
  // { name: 'Hibernate', category: 'backend', color: '#339933', bgColor: 'from-green-500 to-emerald-500', borderColor: 'border-green-500', icon: <img src='/hibernate.svg' className='w-10 h-10' /> },
  // { name: 'Django', category: 'backend', color: '#092E20', bgColor: 'from-green-700 to-emerald-800', borderColor: 'border-green-600', icon: '🎯' },
  { name: 'Express.js', category: 'backend', color: '#000000', bgColor: 'bg-gray-800', borderColor: 'border-gray-600', icon: <img src='/express.svg' className='w-10 h-10' /> },
  { name: 'GraphQL', category: 'backend', color: '#E10098', bgColor: 'bg-pink-600', borderColor: 'border-pink-500', icon: <img src='/graphql.svg' className='w-10 h-10' /> },
  { name: 'PostgresSQL', category: 'backend', color: '#336791', bgColor: 'bg-blue-700', borderColor: 'border-blue-600', icon: <img src='/PostgresSQL.svg' className='w-10 h-10' /> },
  { name: 'MongoDB', category: 'backend', color: '#47A248', bgColor: 'bg-green-600', borderColor: 'border-green-500', icon: <img src='/mongodb.svg' className='w-10 h-10' /> },
  { name: 'Redis', category: 'backend', color: '#DC382D', bgColor: 'bg-red-600', borderColor: 'border-red-500', icon: <img src='/Redis.svg' className='w-10 h-10' /> },

  // Mobile
  // { name: 'React Native', category: 'mobile', color: '#61DAFB', bgColor: 'from-blue-400 to-cyan-400', borderColor: 'border-cyan-400', icon: '📱' },
  // { name: 'Kotlin', category: 'mobile', color: '#7F52FF', bgColor: 'from-purple-500 to-indigo-600', borderColor: 'border-purple-500', icon: '🤖' },

  // DevOps
  { name: 'Docker', category: 'devops', color: '#2496ED', bgColor: 'bg-blue-500', borderColor: 'border-blue-400', icon: <img src='/Docker.svg' className='w-10 h-10' /> },
  { name: 'Kubernetes', category: 'devops', color: '#326CE5', bgColor: 'bg-blue-600', borderColor: 'border-blue-500', icon: <img src='/Kubernetes.svg' className='w-10 h-10' /> },
  // { name: 'Jenkins', category: 'devops', color: '#D33833', bgColor: 'from-red-500 to-rose-600', borderColor: 'border-red-500', icon: '🔧' },
  // { name: 'Terraform', category: 'devops', color: '#623CE4', bgColor: 'from-purple-600 to-indigo-700', borderColor: 'border-purple-600', icon: '🏗️' },
  { name: 'Nginx', category: 'devops', color: '#009639', bgColor: 'bg-green-700', borderColor: 'border-green-600', icon: '🌐' },

  // Design
  { name: 'Figma', category: 'design', color: '#F24E1E', bgColor: 'bg-amber-600', borderColor: 'border-amber-500', icon: <img src='/figma.svg' className='w-10 h-10' /> },
  // { name: 'Adobe XD', category: 'design', color: '#FF61F6', bgColor: 'from-pink-500 to-fuchsia-500', borderColor: 'border-pink-500', icon: '✨' },
  // { name: 'Sketch', category: 'design', color: '#F7B500', bgColor: 'from-yellow-500 to-orange-500', borderColor: 'border-yellow-500', icon: '💎' },
  // { name: 'Photoshop', category: 'design', color: '#31A8FF', bgColor: 'from-blue-500 to-cyan-500', borderColor: 'border-blue-500', icon: '🖼️' },

  // Tools
  { name: 'VS Code', category: 'tools', color: '#007ACC', bgColor: 'bg-blue-600', borderColor: 'border-blue-500', icon: <img src='/vscode.svg' className='w-10 h-10' /> },
  { name: 'Git', category: 'tools', color: '#F05032', bgColor: 'bg-amber-600', borderColor: 'border-amber-500', icon: <img src='/git-icon.svg' className='w-10 h-10' /> },
  // { name: 'Notion', category: 'tools', color: '#000000', bgColor: 'from-gray-800 to-black', borderColor: 'border-gray-400', icon: '📓' },
  // { name: 'Slack', category: 'tools', color: '#4A154B', bgColor: 'from-purple-800 to-indigo-900', borderColor: 'border-purple-600', icon: '💬' }
];

export const contactMethods = [
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

export const socialLinks = [
  { icon: Linkedin, url: 'https://www.linkedin.com/in/ammanabua/', label: 'LinkedIn', color: 'hover:text-blue-400' },
  { icon: Github, url: 'https://www.github.com/ammanabua', label: 'GitHub', color: 'hover:text-gray-300' },
  { icon: Twitter, url: 'https://twitter.com/ammanie_k', label: 'Twitter', color: 'hover:text-cyan-400' },
  { icon: Globe, url: 'https://ammanabua.com', label: 'Website', color: 'hover:text-purple-400' }
];

export const quickActions = [
  { icon: FileText, label: 'View Resume', color: 'blue-500', url: '/cv.pdf' },
  { icon: Video, label: 'Video Call', color: 'red-500', url: 'https://calendly.com/ammanabua/30min' },
  { icon: Coffee, label: 'Coffee Chat', color: 'yellow-500', url: 'https://calendly.com/ammanabua/30min' }
];