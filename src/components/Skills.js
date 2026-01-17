import React, { useState, useEffect, useRef } from 'react';
import {
  Calendar, 
  Code2, 
  Database, 
  Cloud, 
  Palette, 
  Wrench, 
  Smartphone,
  Globe,
  Zap,
  Shield,
  Cpu,
  GitBranch,
  Terminal
} from 'lucide-react';
import { skills, skillCategories } from '../data';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
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

  

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  // Show only first row (8 items) when 'all' is selected and not expanded
  const displayedSkills = activeCategory === 'all' && !isExpanded 
    ? filteredSkills.slice(0, 8) 
    : filteredSkills;

  const SkillCard = ({ skill, index }) => (
    <div
      className={`group relative transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
      onMouseEnter={() => setHoveredSkill(skill.name)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      <div className={`relative bg-gradient-to-br ${skill.bgColor} rounded-2xl border ${skill.borderColor} p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500 cursor-pointer group-hover:border-opacity-60`}>
        {/* Glow effect */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10`} />
        
        {/* Icon/Logo */}
        <div className="flex flex-col items-center text-center">
          <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
            {skill.icon}
          </div>
          
          {/* Skill name */}
          <h3 className="text-white font-semibold text-sm group-hover:text-purple-200 transition-colors">
            {skill.name}
          </h3>
          
          {/* Animated underline */}
          <div className="w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300 mt-2 rounded-full" />
        </div>

        {/* Floating particles effect */}
        {hoveredSkill === skill.name && (
          <>
            <div className="absolute top-2 right-2 w-1 h-1 bg-purple-400 rounded-full animate-ping" />
            <div className="absolute bottom-3 left-3 w-1 h-1 bg-cyan-400 rounded-full animate-ping animation-delay-300" />
            <div className="absolute top-1/2 left-1 w-0.5 h-0.5 bg-pink-400 rounded-full animate-ping animation-delay-500" />
          </>
        )}
      </div>
    </div>
  );

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6">
            Skills & Toolkit
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive arsenal of modern technologies and tools which I utilize to power exceptional digital experiences.
          </p>
        </div>

        {/* Category filters */}
        <div className={`flex justify-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '200ms' }}>
          <div className="flex flex-wrap gap-2 p-2 bg-slate-800 rounded-3xl border border-white backdrop-blur-sm">
            {skillCategories.map(({ id, label, icon: Icon, color }) => (
              <button
                key={id}
                onClick={() => {
                  setActiveCategory(id);
                  setIsExpanded(false); // Reset expansion when changing categories
                }}
                className={`flex items-center gap-2 px-4 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  activeCategory === id
                    ? `bg-amber-300 text-gray-800 shadow-lg scale-105`
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{label}</span>
                {id === 'all' && (
                  <span className={`ml-1 px-2 py-0.5 text-xs rounded-full ${
                    activeCategory === id 
                      ? 'bg-white/20 text-gray-800' 
                      : 'bg-white/20 text-gray-400'
                  }`}>
                    {skills.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div className={`transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '400ms' }}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {displayedSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          {/* View All button - only show when 'all' category is selected */}
          {activeCategory === 'all' && filteredSkills.length > 8 && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="group relative px-8 py-4 bg-gray-600 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isExpanded ? (
                    <>
                      <Zap className="w-5 h-5" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5" />
                      View All Skills ({filteredSkills.length})
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          )}
        </div>

        {/* Stats section */}
        <div className={`mt-20 grid grid-cols-1 md:grid-cols-3 max-w-5xl m-auto gap-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '800ms' }}>
          {[
            { label: 'Technologies', value: skills.length, icon: Code2 },
            { label: 'Years Experience', value: '5+', icon: Calendar },
            { label: 'Production Apps', value: '10+', icon: Cpu },
          ].map(({ label, value, icon: Icon }, index) => (
            <div key={label} className="text-center group">
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-white p-6 backdrop-blur-sm hover:border-purple-500 transition-all duration-300 hover:scale-105">
                <Icon className="w-8 h-8 text-amber-300 mx-auto mb-3 group-hover:text-cyan-400 transition-colors" />
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {value}
                </div>
                <div className="text-amber-300 text-sm font-medium">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className={`text-center mt-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '1000ms' }}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-amber-300">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Always learning and expanding the toolkit</span>
            <Zap className="w-4 h-4" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
      `}</style>
    </section>
  );
};

export default Skills;