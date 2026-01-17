import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Globe, Award, Play, GraduationCap } from 'lucide-react';
import Overview from './Overview';
import Experience from './Experience';
import { education } from '../data';
import Education from './Education';

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');
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

  
  const tabs = [
    { id: 'overview', label: 'Overview', icon: Globe },
    // { id: 'skills', label: 'Skills', icon: Zap },
    { id: 'experience', label: 'Experience', icon: Award },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'journey', label: 'My Journey', icon: Calendar }
  ];

  const TabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <Overview isVisible={isVisible} />
        );

      case 'experience':
        return (
          <Experience isVisible={isVisible} />
        );

      case 'education':
        return (
          <Education isVisible={isVisible} />
        );

      case 'journey':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">From Curiosity to Career</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                My path into software engineering wasn't traditional, but it was driven by genuine passion 
                and continuous learning.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-white/10">
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">The Spark ⚡</h4>
                  <p className="text-gray-300">
                    It all started just after my first college degree, when I built my first website. The moment I saw my code 
                    come to life in the browser, I was hooked. That feeling of creating something from nothing became my driving force.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-white/10">
                  <h4 className="text-lg font-semibold text-cyan-300 mb-3">The Growth 📈</h4>
                  <p className="text-gray-300">
                    I spent countless nights learning new frameworks, contributing to open source, 
                    and building side projects. Each challenge taught me something new and pushed 
                    me to become a better developer.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-white/10">
                  <h4 className="text-lg font-semibold text-green-300 mb-3">The Impact 🚀</h4>
                  <p className="text-gray-300">
                    Today, I focus on building applications that make a real difference. Whether it's 
                    improving user experience or solving complex technical challenges, I'm motivated 
                    by the positive impact technology can have.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-white/10">
                  <h4 className="text-lg font-semibold text-yellow-300 mb-3">The Future 🎯</h4>
                  <p className="text-gray-300">
                    I'm excited about emerging technologies like AI and Web3, especially with the recent advancements in AI Agents. My goal is to stay 
                    at the forefront of innovation, continuously learning while mentoring the next generation of developers.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                <Play className="w-4 h-4" />
                <span>Watch My Story</span>
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate developer, problem solver, and continuous learner dedicated to crafting 
            exceptional digital experiences.
          </p>
        </div>

        {/* Tab navigation */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '200ms' }}>
          <div className="flex flex-wrap gap-1 p-1 bg-slate-800/50 rounded-2xl border border-white/10 backdrop-blur-sm">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === id
                    ? 'bg-amber-300 text-gray-800 shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div className={`max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '400ms' }}>
          <TabContent />
        </div>
      </div>
    </section>
  );
};

export default About;