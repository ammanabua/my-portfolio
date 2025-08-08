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

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
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

  const skillCategories = [
    { id: 'all', label: 'All Tools', icon: Zap, color: 'from-purple-500 to-cyan-500' },
    { id: 'frontend', label: 'Frontend', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { id: 'backend', label: 'Backend', icon: Database, color: 'from-green-500 to-emerald-500' },
    { id: 'mobile', label: 'Mobile', icon: Smartphone, color: 'from-purple-500 to-pink-500' },
    { id: 'devops', label: 'DevOps', icon: Cloud, color: 'from-orange-500 to-red-500' },
    { id: 'design', label: 'Design', icon: Palette, color: 'from-pink-500 to-rose-500' },
    { id: 'tools', label: 'Tools', icon: Wrench, color: 'from-gray-500 to-slate-600' }
  ];

  const skills = [
    // Frontend
    { name: 'React', category: 'frontend', color: '#61DAFB', bgColor: 'from-blue-400/10 to-cyan-400/10', borderColor: 'border-cyan-400/30', icon: '⚛️' },
    { name: 'Next.js', category: 'frontend', color: '#000000', bgColor: 'from-gray-800/10 to-black/10', borderColor: 'border-gray-400/30', icon: '▲' },
    { name: 'Vue.js', category: 'frontend', color: '#4FC08D', bgColor: 'from-green-400/10 to-emerald-400/10', borderColor: 'border-green-400/30', icon: '💚' },
    { name: 'TypeScript', category: 'frontend', color: '#3178C6', bgColor: 'from-blue-600/10 to-indigo-600/10', borderColor: 'border-blue-500/30', icon: '📘' },
    { name: 'Tailwind CSS', category: 'frontend', color: '#06B6D4', bgColor: 'from-cyan-400/10 to-blue-400/10', borderColor: 'border-cyan-400/30', icon: '🎨' },
    { name: 'Sass', category: 'frontend', color: '#CC6699', bgColor: 'from-pink-400/10 to-purple-400/10', borderColor: 'border-pink-400/30', icon: '💅' },

    // Backend
    { name: 'Node.js', category: 'backend', color: '#339933', bgColor: 'from-green-500/10 to-emerald-500/10', borderColor: 'border-green-500/30', icon: '🟢' },
    { name: 'Python', category: 'backend', color: '#3776AB', bgColor: 'from-blue-500/10 to-indigo-500/10', borderColor: 'border-blue-500/30', icon: '🐍' },
    { name: 'Django', category: 'backend', color: '#092E20', bgColor: 'from-green-700/10 to-emerald-800/10', borderColor: 'border-green-600/30', icon: '🎯' },
    { name: 'Express.js', category: 'backend', color: '#000000', bgColor: 'from-gray-700/10 to-black/10', borderColor: 'border-gray-500/30', icon: '⚡' },
    { name: 'GraphQL', category: 'backend', color: '#E10098', bgColor: 'from-pink-500/10 to-rose-500/10', borderColor: 'border-pink-500/30', icon: '📊' },
    { name: 'PostgreSQL', category: 'backend', color: '#336791', bgColor: 'from-blue-600/10 to-indigo-700/10', borderColor: 'border-blue-600/30', icon: '🐘' },
    { name: 'MongoDB', category: 'backend', color: '#47A248', bgColor: 'from-green-500/10 to-emerald-600/10', borderColor: 'border-green-500/30', icon: '🍃' },
    { name: 'Redis', category: 'backend', color: '#DC382D', bgColor: 'from-red-500/10 to-rose-600/10', borderColor: 'border-red-500/30', icon: '📦' },

    // Mobile
    { name: 'React Native', category: 'mobile', color: '#61DAFB', bgColor: 'from-blue-400/10 to-cyan-400/10', borderColor: 'border-cyan-400/30', icon: '📱' },
    { name: 'Flutter', category: 'mobile', color: '#02569B', bgColor: 'from-blue-600/10 to-indigo-700/10', borderColor: 'border-blue-600/30', icon: '🦋' },
    { name: 'Swift', category: 'mobile', color: '#FA7343', bgColor: 'from-orange-400/10 to-red-500/10', borderColor: 'border-orange-500/30', icon: '🍎' },
    { name: 'Kotlin', category: 'mobile', color: '#7F52FF', bgColor: 'from-purple-500/10 to-indigo-600/10', borderColor: 'border-purple-500/30', icon: '🤖' },

    // DevOps
    { name: 'AWS', category: 'devops', color: '#FF9900', bgColor: 'from-orange-400/10 to-yellow-500/10', borderColor: 'border-orange-500/30', icon: '☁️' },
    { name: 'Docker', category: 'devops', color: '#2496ED', bgColor: 'from-blue-500/10 to-cyan-500/10', borderColor: 'border-blue-500/30', icon: '🐳' },
    { name: 'Kubernetes', category: 'devops', color: '#326CE5', bgColor: 'from-blue-600/10 to-indigo-600/10', borderColor: 'border-blue-600/30', icon: '⚙️' },
    { name: 'Jenkins', category: 'devops', color: '#D33833', bgColor: 'from-red-500/10 to-rose-600/10', borderColor: 'border-red-500/30', icon: '🔧' },
    { name: 'Terraform', category: 'devops', color: '#623CE4', bgColor: 'from-purple-600/10 to-indigo-700/10', borderColor: 'border-purple-600/30', icon: '🏗️' },
    { name: 'Nginx', category: 'devops', color: '#009639', bgColor: 'from-green-600/10 to-emerald-700/10', borderColor: 'border-green-600/30', icon: '🌐' },

    // Design
    { name: 'Figma', category: 'design', color: '#F24E1E', bgColor: 'from-red-500/10 to-orange-500/10', borderColor: 'border-red-500/30', icon: '🎨' },
    { name: 'Adobe XD', category: 'design', color: '#FF61F6', bgColor: 'from-pink-500/10 to-fuchsia-500/10', borderColor: 'border-pink-500/30', icon: '✨' },
    { name: 'Sketch', category: 'design', color: '#F7B500', bgColor: 'from-yellow-500/10 to-orange-500/10', borderColor: 'border-yellow-500/30', icon: '💎' },
    { name: 'Photoshop', category: 'design', color: '#31A8FF', bgColor: 'from-blue-500/10 to-cyan-500/10', borderColor: 'border-blue-500/30', icon: '🖼️' },

    // Tools
    { name: 'VS Code', category: 'tools', color: '#007ACC', bgColor: 'from-blue-600/10 to-indigo-600/10', borderColor: 'border-blue-600/30', icon: '📝' },
    { name: 'Git', category: 'tools', color: '#F05032', bgColor: 'from-red-500/10 to-orange-500/10', borderColor: 'border-red-500/30', icon: '🌳' },
    { name: 'GitHub', category: 'tools', color: '#181717', bgColor: 'from-gray-700/10 to-black/10', borderColor: 'border-gray-500/30', icon: '🐙' },
    { name: 'Postman', category: 'tools', color: '#FF6C37', bgColor: 'from-orange-500/10 to-red-500/10', borderColor: 'border-orange-500/30', icon: '📮' },
    { name: 'Notion', category: 'tools', color: '#000000', bgColor: 'from-gray-800/10 to-black/10', borderColor: 'border-gray-400/30', icon: '📓' },
    { name: 'Slack', category: 'tools', color: '#4A154B', bgColor: 'from-purple-800/10 to-indigo-900/10', borderColor: 'border-purple-600/30', icon: '💬' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const SkillCard = ({ skill, index }) => (
    <div
      className={`group relative transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
      onMouseEnter={() => setHoveredSkill(skill.name)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      <div className={`relative bg-gradient-to-br ${skill.bgColor} rounded-2xl border ${skill.borderColor} p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer group-hover:border-opacity-60`}>
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
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
            A comprehensive arsenal of modern technologies and tools that power exceptional digital experiences.
          </p>
        </div>

        {/* Category filters */}
        <div className={`flex justify-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '200ms' }}>
          <div className="flex flex-wrap gap-2 p-2 bg-slate-800/30 rounded-3xl border border-white/10 backdrop-blur-sm">
            {skillCategories.map(({ id, label, icon: Icon, color }) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  activeCategory === id
                    ? `bg-gradient-to-r ${color} text-white shadow-lg scale-105`
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{label}</span>
                {id === 'all' && (
                  <span className={`ml-1 px-2 py-0.5 text-xs rounded-full ${
                    activeCategory === id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-purple-500/20 text-purple-300'
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
            {filteredSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className={`mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '800ms' }}>
          {[
            { label: 'Technologies', value: skills.length, icon: Code2 },
            { label: 'Years Experience', value: '5+', icon: Calendar },
            { label: 'Projects Built', value: '50+', icon: Cpu },
            { label: 'Lines of Code', value: '1M+', icon: Terminal }
          ].map(({ label, value, icon: Icon }, index) => (
            <div key={label} className="text-center group">
              <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-2xl border border-white/10 p-6 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 hover:scale-105">
                <Icon className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:text-cyan-400 transition-colors" />
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {value}
                </div>
                <div className="text-gray-400 text-sm font-medium">
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
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full border border-purple-500/20 text-purple-300">
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