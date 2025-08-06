// import React, { useEffect, useRef } from 'react'
// import { motion } from 'framer-motion'
// import { init } from 'ityped';

// export default function Hero (){

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     section.scrollIntoView({ behavior: "smooth" });
//   };

//   //Automatic Text Typing 

//   const textRef = useRef();

//   useEffect(() => {
//     init(textRef.current, { 
//       showCursor: true,
//       backDelay: 1500,
//       backSpeed: 30,
//       strings: ['Software Engineer', 'Web Developer', 'Creative'],
//       typeSpeed: 60,
//       })
//   },[]);

//   return (
//     <section id='home' className="flex flex-col md:flex-row h-screen md:py-4 items-center justify-center bg-black">
//         <motion.div initial={{ opacity: 0, x: -600 }} animate={{ opacity: 1, x: 0}} transition={{ duration: 1 }} className='md:w-1/2 flex md:justify-end z-0'>
//           <img
//             className="m-auto object-cover w-3/4 h-96 md:h-screen md:w-full border border-2 md:border-none border-white rounded md:rounded-none"
//             alt="Amman Abua"
//             src="./profile-bg.jpg"/>
//         </motion.div>
      
//       <div className='flex flex-col items-center lg:flex-grow md:w-1/2 md:pl-12 lg:pl-24 md:items-start md:text-left mb-16 md:mb-0 md:justify-end'>
//         <motion.h1 initial={{ opacity: 0 }} animate={{ opacity:1 }} transition={{ duration: 1 }} className="title-font font-mont font-bold text-4xl md:text-7xl mb-4 text-gray-600 uppercase">A<span className='text-blue-600'>m</span>man<br/>Ab<span className='text-yellow-400'>u</span>a<span className='text-yellow-500'>.</span></motion.h1>
//         <motion.h3 initial={{opacity: 0}} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className="title-font text-2xl md:text-4xl mb-6 font-thin"><span className="title-font text-white" ref={textRef}></span></motion.h3>
//         <motion.div initial={{ opacity: 0, x:-100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }} className="flex gap-4 md:justify-start w-full">
//           <button
//           onClick={() => scrollToSection("contact")}
//           className="text-white bg-[#ff8906] border-2 border-white py-2 px-3 hover:border-opacity-0 hover:bg-blue-200 hover:text-black rounded-md w-24 md:w-40 text-lg">
//           Hire Me
//           </button>
//           <a
//           href="/cv.pdf" target="_blank"
//           className="text-black text-center bg-yellow-400 py-2 px-3 hover:bg-blue-200 rounded-md w-24 md:w-40 text-lg">
//           Resume
//           </a>
//         </motion.div>
//       </div>
      
        
//     </section>
//   )
// }


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

  const skills = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS'];
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
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
          className="absolute -bottom-8 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
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
          className={`mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full blur-lg opacity-75 animate-pulse" />
            <div className="relative w-32 h-32 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full flex items-center justify-center">
              <Code2 className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>

        {/* Main heading */}
        <div 
          className={`mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-4">
            Alex Chen
          </h1>
          <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-gray-300">
            <span>Full-Stack Developer specializing in</span>
            <span 
              className="font-semibold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text min-w-[120px] text-left transition-all duration-500"
              key={currentSkillIndex}
            >
              {skills[currentSkillIndex]}
            </span>
          </div>
        </div>

        {/* Description */}
        <div 
          className={`mb-8 max-w-2xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            Passionate about crafting exceptional digital experiences through clean code, 
            innovative solutions, and cutting-edge technologies. I transform ideas into 
            scalable applications that make a difference.
          </p>
        </div>

        {/* CTA Buttons */}
        <div 
          className={`mb-12 flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          
          <button className="group px-8 py-4 border-2 border-gray-600 rounded-full text-white font-semibold transition-all duration-300 hover:border-purple-400 hover:bg-purple-400/10 hover:scale-105">
            <span className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Get In Touch
            </span>
          </button>
        </div>

        {/* Social links */}
        <div 
          className={`mb-16 flex gap-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Mail, href: '#', label: 'Email' }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="group p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-purple-400 hover:bg-purple-400/10 transition-all duration-300 hover:scale-110"
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