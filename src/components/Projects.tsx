'use client';

import { useState, useEffect, useRef } from 'react';
import { Monitor, Smartphone, Palette, ExternalLink, Github, Play, Zap, Shield, Database, Globe, Clock, Sparkles, ArrowUpRight, Code2, Users, TrendingUp } from 'lucide-react';
import { webProjects, designProjects } from '@/src/data';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('web');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

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

  const tabs = [
    { id: 'web', label: 'Web Apps', icon: Monitor, count: webProjects.length },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone, count: 0 },
    { id: 'design', label: 'UI/UX Design', icon: Palette, count: designProjects.length },
  ];

  

  const ComingSoonCard = ({ title, icon: Icon, description, gradient }: { title: string; icon: any; description: string; gradient: string }) => (
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
              <ProjectCard key={project.id} project={project} index={index} isVisible={isVisible} hoveredProject={hoveredProject} setHoveredProject={setHoveredProject} />
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