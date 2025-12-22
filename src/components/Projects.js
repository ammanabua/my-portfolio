import React, { useState, useEffect, useRef } from 'react';
import { Monitor, Smartphone, Palette, ExternalLink, Github, Play, Zap, Shield, Database, Globe, Clock, Sparkles, ArrowUpRight, Code2, Users, TrendingUp } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('web');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const webProjects = [
    {
      id: 1,
      title: 'ScholarsKit AI',
      description: 'A light-weight AI-powered research assistant/study partner that streamlines academic workflows by automating literature reviews, summarizing papers, and generating citations.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      tech: ['React', 'Node.js', 'PostgreSQL', 'D3.js', 'S3', 'Lambda Functions', 'Gemini AI', 'API Gateway'],
      category: 'Full-Stack',
      status: 'Live',
      metrics: { users: '10K+', uptime: '99.9%', performance: '95' },
      features: ['Real-time Analytics', 'Data Visualization', 'API Integration', 'Mobile Responsive'],
      demoUrl: 'https://master.d9r77d4102d54.amplifyapp.com/',
      githubUrl: 'https://www.github.com/ammanabua/ScholarsKit',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      id: 2,
      title: 'Entities Studio',
      description: 'A collaborative platform for digital artists and designers to create, share, and monetize 3D assets and interactive experiences in a virtual environment.',
      image: '/entities.png',
      tech: ['React', 'Node.js', 'PostgreSQL', 'D3.js', 'AWS'],
      category: 'Full-Stack',
      status: 'Live',
      metrics: { users: '10K+', uptime: '99.9%', performance: '95' },
      features: ['Real-time Analytics', 'Data Visualization', 'API Integration', 'Mobile Responsive'],
      demoUrl: 'https://www.entities.studio/',
      githubUrl: 'https://www.github.com/ammanabua/entities-studio',
      gradient: 'from-green-200 to-emerald-300'
    },
    {
      id: 3,
      title: 'EcoTracker Platform',
      description: 'A comprehensive sustainability tracking platform that helps companies monitor their carbon footprint and environmental impact in real-time.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      tech: ['React', 'Node.js', 'PostgreSQL', 'D3.js', 'AWS'],
      category: 'Full-Stack',
      status: 'Live',
      metrics: { users: '10K+', uptime: '99.9%', performance: '95' },
      features: ['Real-time Analytics', 'Data Visualization', 'API Integration', 'Mobile Responsive'],
      demoUrl: '#',
      githubUrl: '#',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      id: 4,
      title: 'CryptoFlow Dashboard',
      description: 'Advanced cryptocurrency portfolio management dashboard with real-time market data, trading signals, and portfolio optimization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tech: ['Next.js', 'TypeScript', 'WebSockets', 'Chart.js', 'Redis'],
      category: 'Frontend',
      status: 'Live',
      metrics: { users: '5K+', trades: '50K+', accuracy: '87%' },
      features: ['Live Market Data', 'Portfolio Analytics', 'Trading Alerts', 'Risk Management'],
      demoUrl: '#',
      githubUrl: '#',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 5,
      title: 'TaskFlow Enterprise',
      description: 'Enterprise-grade project management solution with advanced collaboration tools, AI-powered insights, and seamless integrations.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      tech: ['React', 'Express', 'MongoDB', 'Socket.io', 'Docker'],
      category: 'Full-Stack',
      status: 'Beta',
      metrics: { teams: '200+', projects: '1K+', efficiency: '+40%' },
      features: ['Team Collaboration', 'AI Insights', 'Time Tracking', 'Integration Hub'],
      demoUrl: '#',
      githubUrl: '#',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: 6,
      title: 'HealthVault API',
      description: 'HIPAA-compliant healthcare data management API with advanced security, patient records, and provider integration capabilities.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
      tech: ['Node.js', 'GraphQL', 'PostgreSQL', 'JWT', 'Kubernetes'],
      category: 'Backend',
      status: 'Live',
      metrics: { records: '100K+', providers: '50+', compliance: '100%' },
      features: ['HIPAA Compliance', 'GraphQL API', 'End-to-End Encryption', 'Audit Logging'],
      demoUrl: '#',
      githubUrl: '#',
      gradient: 'from-cyan-500 to-blue-600'
    }
  ];

  const designProjects = [
    // Placeholder for future design projects
    {
      id: 7,
      title: 'Design System for Entities Studio',
      description: 'A comprehensive design system created for Entities Studio, focusing on consistency, scalability, and user experience across all digital products.',
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

  const tabs = [
    { id: 'web', label: 'Web Apps', icon: Monitor, count: webProjects.length },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone, count: 0 },
    { id: 'design', label: 'UI/UX Design', icon: Palette, count: designProjects.length },
  ];

  const ProjectCard = ({ project, index }) => (
    <div
      className={`group relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/10 overflow-hidden backdrop-blur-sm hover:border-purple-500/30 transition-all duration-500 group-hover:scale-[1.02]">
        {/* Project image with overlay */}
        <div className="relative h-48 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-80`} />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
          
          {/* Status badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              project.status === 'Live' 
                ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                : 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
            }`}>
              <div className={`inline-block w-2 h-2 rounded-full mr-2 ${
                project.status === 'Live' ? 'bg-green-400' : 'bg-orange-400'
              } animate-pulse`} />
              {project.status}
            </span>
          </div>

          {/* Category badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/20 backdrop-blur-sm">
              {project.category}
            </span>
          </div>

          {/* Hover overlay with actions */}
          <div className={`absolute inset-0 bg-black/50 flex items-center justify-center gap-4 transition-opacity duration-300 ${
            hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
          }`}>
            <a href={project.demoUrl} target='_blank' rel="noopener noreferrer" className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 backdrop-blur-sm">
              <ExternalLink className="w-5 h-5" />
            </a>
            <a href={project.githubUrl} target='_blank' rel="noopener noreferrer" className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 backdrop-blur-sm">
              <Github className="w-5 h-5" />
            </a>
            {/* <button className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 backdrop-blur-sm">
              <Play className="w-5 h-5" />
            </button> */}
          </div>
        </div>

        {/* Project content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {Object.entries(project.metrics).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-lg font-bold text-white">{value}</div>
                <div className="text-xs text-gray-400 capitalize">{key}</div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-1 mb-4">
            {project.features.slice(0, 3).map((feature, idx) => (
              <span key={idx} className="text-xs px-2 py-1 bg-purple-500/10 text-purple-300 rounded border border-purple-500/20">
                {feature}
              </span>
            ))}
            {project.features.length > 3 && (
              <span className="text-xs px-2 py-1 bg-gray-500/10 text-gray-400 rounded border border-gray-500/20">
                +{project.features.length - 3} more
              </span>
            )}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1">
            {project.tech.map((tech, idx) => (
              <span key={idx} className="text-xs px-2 py-1 bg-cyan-500/10 text-cyan-300 rounded border border-cyan-500/20">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ComingSoonCard = ({ title, icon: Icon, description, gradient }) => (
    <div className={`transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-2xl border border-white/10 overflow-hidden backdrop-blur-sm hover:border-purple-500/30 transition-all duration-500 group">
        <div className="absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity duration-500" 
             style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }} />
        
        <div className="relative p-12 text-center">
          <div className="mb-6">
            <div className={`inline-flex p-6 rounded-full bg-gradient-to-r ${gradient} shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
              <Icon className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-300 mb-6 leading-relaxed max-w-md mx-auto">
            {description}
          </p>
          
          <div className="flex items-center justify-center gap-2 text-purple-400 mb-8">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Coming Soon</span>
          </div>
          
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="text-sm text-gray-400">Exciting projects in development</span>
            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'web':
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {webProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        );
      
      case 'mobile':
        return (
          <div className="max-w-2xl mx-auto">
            <ComingSoonCard
              title="Mobile Applications"
              icon={Smartphone}
              description="Native iOS and Android applications with cutting-edge features and seamless user experiences are currently in development."
              gradient="from-blue-500 to-purple-600"
            />
          </div>
        );
      
      case 'design':
        return (
          <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8'>
            {designProjects.map((project, index) => (
              <div key={project.id} className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: `${index * 150}ms` }}>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/10 overflow-hidden backdrop-blur-sm hover:border-purple-500/30 transition-all duration-500 group-hover:scale-[1.02]">
                    {/* Project image */}
                    <div className="relative h-48 overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${project.image})` }}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80`} />
                    </div>

                    {/* Project content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                          {project.title}
                        </h3>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>

                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-cyan-500/10 text-cyan-300 rounded border border-cyan-500/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/3 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative solutions that blend cutting-edge technology with exceptional user experience.
          </p>
        </div>

        {/* Tab navigation */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '200ms' }}>
          <div className="flex flex-wrap gap-1 p-1 bg-slate-800/50 rounded-2xl border border-white/10 backdrop-blur-sm">
            {tabs.map(({ id, label, icon: Icon, count }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 relative ${
                  activeTab === id
                    ? 'bg-amber-300 text-gray-800 shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline">{label}</span>
                {count > 0 && (
                  <span className={`inline-flex items-center justify-center w-5 h-5 text-xs rounded-full ${
                    activeTab === id 
                      ? 'bg-white/20 text-gray-800' 
                      : 'bg-purple-500/20 text-purple-300'
                  }`}>
                    {count}
                  </span>
                )}
                {count === 0 && (
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid/content */}
        <div className={`transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '400ms' }}>
          {renderContent()}
        </div>

        {/* Call to action */}
        {activeTab === 'web' && (
          <div className={`text-center mt-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '800ms' }}>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-purple-500/20 text-amber-300 hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-300 cursor-pointer">
              <a className='flex gap-2 items-center' href='https://www.github.com/ammanabua' target='_blank' rel='noopener noreferrer'>
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">More projects available on GitHub</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;