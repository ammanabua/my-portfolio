import React, { useState, useEffect, useRef } from 'react';
import { Code2, Coffee, MapPin, Calendar, Zap, Cpu, Globe, Award, ChevronRight, Play } from 'lucide-react';

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

  const skills = [
    { name: 'JavaScript', level: 95, category: 'Frontend', color: 'from-yellow-400 to-orange-500' },
    { name: 'React/Next.js', level: 92, category: 'Frontend', color: 'from-blue-400 to-cyan-500' },
    { name: 'TypeScript', level: 88, category: 'Frontend', color: 'from-blue-600 to-indigo-600' },
    { name: 'Python', level: 85, category: 'Backend', color: 'from-green-400 to-blue-500' },
    { name: 'Node.js', level: 90, category: 'Backend', color: 'from-green-500 to-emerald-600' },
    { name: 'AWS/GCP', level: 82, category: 'DevOps', color: 'from-orange-400 to-red-500' },
    { name: 'Docker', level: 78, category: 'DevOps', color: 'from-blue-500 to-purple-600' },
    { name: 'PostgreSQL', level: 85, category: 'Database', color: 'from-indigo-400 to-purple-500' },
  ];

  const experience = [
    {
      role: 'Software Engineer',
      company: 'Sparetime Digital Ltd',
      period: '2022 - 2023',
      description: 'Lead development of microservices architecture serving 100K+ users daily. Built scalable React applications with 99.9% uptime.',
      achievements: ['40% performance improvement', 'Led team of 5 developers', 'Implemented CI/CD pipelines']
    },
    {
      role: 'Software Developer',
      company: 'Manyactive App Ltd',
      period: '2021 - 2022',
      description: 'Developed enterprise SaaS platform using React, Node.js, and PostgreSQL. Collaborated with cross-functional teams.',
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

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Globe },
    // { id: 'skills', label: 'Skills', icon: Zap },
    { id: 'experience', label: 'Experience', icon: Award },
    { id: 'journey', label: 'My Journey', icon: Calendar }
  ];

  const TabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 md:text-lg leading-relaxed">
                    I'm a passionate full-stack engineer with 5+ years of experience crafting digital solutions 
                    that bridge the gap between complex technical requirements and intuitive user experiences.
                  </p>
                  <p className="text-gray-300 md:text-lg leading-relaxed">
                    My journey began with curiosity about how websites work, and it evolved into a deep love 
                    for building scalable, performant applications that solve real-world problems. I thrive in 
                    collaborative environments where innovation meets practicality.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: MapPin, text: 'Gaithersburg, MD' },
                    { icon: Coffee, text: '500+ cups of coffee' },
                    { icon: Code2, text: '30+ projects completed' },
                    { icon: Cpu, text: '1M+ lines of code' }
                  ].map(({ icon: Icon, text }, index) => (
                    <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                      <Icon className="w-4 h-4 text-amber-300" />
                      <span className="text-sm text-gray-300">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl" />
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-white mb-4">Quick Facts</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Focus Areas</span>
                      <span className="text-white">Full-Stack, DevOps</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Preferred Stack</span>
                      <span className="text-white">React, Node.js, AWS</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Currently Learning</span>
                      <span className="text-white">AI/ML, Web3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Availability</span>
                      <span className="text-green-400">Open to opportunities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // case 'skills':
      //   return (
      //     <div className="space-y-8">
      //       <div className="grid gap-6">
      //         {skills.map((skill, index) => (
      //           <div 
      //             key={skill.name}
      //             className={`group transition-all duration-500 ${
      //               isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
      //             }`}
      //             style={{ transitionDelay: `${index * 100}ms` }}
      //             onMouseEnter={() => setHoveredSkill(skill.name)}
      //             onMouseLeave={() => setHoveredSkill(null)}
      //           >
      //             <div className="flex items-center justify-between mb-2">
      //               <div className="flex items-center gap-3">
      //                 <span className="text-white font-medium">{skill.name}</span>
      //                 <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
      //                   {skill.category}
      //                 </span>
      //               </div>
      //               <span className="text-gray-400 text-sm">{skill.level}%</span>
      //             </div>
      //             <div className="relative h-3 bg-slate-800 rounded-full overflow-hidden">
      //               <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700 rounded-full" />
      //               <div 
      //                 className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
      //                 style={{ 
      //                   width: isVisible ? `${skill.level}%` : '0%',
      //                   transform: hoveredSkill === skill.name ? 'scaleY(1.2)' : 'scaleY(1)'
      //                 }}
      //               />
      //               <div 
      //                 className={`absolute top-0 left-0 h-full bg-white/20 rounded-full transition-all duration-300 ${
      //                   hoveredSkill === skill.name ? 'opacity-100' : 'opacity-0'
      //                 }`}
      //                 style={{ width: `${skill.level}%` }}
      //               />
      //             </div>
      //           </div>
      //         ))}
      //       </div>
      //     </div>
      //   );

      case 'experience':
        return (
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div 
                key={index}
                className={`relative pl-8 pb-8 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 to-cyan-500" />
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-2 h-2 bg-purple-500 rounded-full transform -translate-x-0.5">
                  <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping opacity-75" />
                </div>

                <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-purple-400 font-medium">{exp.period}</span>
                  </div>
                  <h4 className="text-cyan-300 font-medium mb-3">{exp.company}</h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <span 
                        key={achIndex}
                        className="flex items-center gap-1 text-sm px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20"
                      >
                        <ChevronRight className="w-3 h-3" />
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
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