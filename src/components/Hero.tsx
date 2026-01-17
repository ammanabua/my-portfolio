'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Code2, Zap, Database } from 'lucide-react';

// Framer Motion alternative using CSS animations and React state
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const skills = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Java', 'AWS'];
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-700 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-20 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div 
          className="absolute top-40 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
          }}
        />
        <div 
          className="absolute -bottom-8 left-40 w-80 h-80 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Profile image with glow effect */}
        <div 
          className={`mt-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gray-200 rounded-full blur-lg opacity-75 animate-pulse" />
            <div className="relative w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
              <img src='/me.png' alt="Profile" width={120} height={120} className="rounded-full" />
            </div>
          </div>
        </div>

        {/* Main heading */}
        <div 
          className={`my-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-300">
            Hi, I'm <span className="text-amber-400">Amman</span><span className='text-red-300'>.</span>
          </h1>
        </div>
        {/* Description */}
        <div 
          className={`mb-8 max-w-2xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            A product-focused engineer passionate about transforming ideas into scalable applications that make a difference.
          </p>
        </div>

        {/* CTA Buttons */}
        <div 
          className={`mb-8 flex sm:flex-row gap-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <button onClick={(e) => scrollToSection(e, '#projects')}className="group relative px-8 py-3 bg-amber-400 rounded-full text-slate-800 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 hover:bg-gray-300 hover:text-gray-800">
            <span className="relative z-10">View My Work</span>
          </button>
          
          <a href="mailto: ammanabua@gmail.com" className="group px-8 py-3 border-2 border-gray-800 rounded-full text-white font-semibold transition-all duration-300 bg-gray-800 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-800 hover:bg-gray-300 hover:scale-105">
            <span className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Get In Touch
            </span>
          </a>
        </div>

        {/* Social links */}
        <div 
          className={`mb-12 mt-4 flex gap-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          {[
            { icon: Github, href: 'https://www.github.com/ammanabua', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/amman-abua', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:amman.abua93@gmail.com', label: 'Email' }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-gray-300 border border-white text-gray-800 hover:text-white hover:border-gray-800 hover:bg-gray-800 transition-all duration-300 hover:scale-110"
              aria-label={label}
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div 
          className={`absolute bottom-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          <div className="flex flex-col items-center gap-2 text-gray-400 animate-bounce">
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { icon: Code2, top: '15%', left: '10%', delay: 0 },
          { icon: Zap, top: '25%', right: '15%', delay: 0.5 },
          { icon: Database, bottom: '20%', left: '15%', delay: 1 },
        ].map(({ icon: Icon, delay, ...position }, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-1000 ${
              isVisible ? 'opacity-30 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              ...position, 
              transitionDelay: `${1400 + delay * 1000}ms`,
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            }}
          >
            <Icon className="w-8 h-8 text-purple-400 animate-pulse" />
          </div>
        ))}
      </div>

      <style jsx>{`
        .bg-grid-16 {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 16px 16px;
        }
      `}</style>
    </div>
  );
};

export default Hero;