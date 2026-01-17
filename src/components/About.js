import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";



export default function About() {

    return (
        <section id="about" className="container-fluid flex items-center justify-center bg-white w-full md:mb-0 md:h-screen">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col md:flex-row p-4 items-center justify-center md:w-5/6 md:px-8 bg-card-bg rounded">
                <div className="flex-col flex lg:flex-grow md:w-1/2 md:items-start md:text-left my-5 md:mb-0  items-center">
                    <h2 className="font-title text-4xl mb-5 text-card-heading">About Me</h2>
                    <div className="prose prose-invert max-w-none">
                        <p className="text-gray-300 text-lg leading-relaxed">
                            I'm a passionate full-stack developer with 5+ years of experience crafting digital solutions 
                            that bridge the gap between complex technical requirements and intuitive user experiences.
                        </p>
                        <p className="text-gray-300 leading-relaxed mt-4">
                            My journey began with curiosity about how websites work, and it evolved into a deep love 
                            for building scalable, performant applications that solve real-world problems. I thrive in 
                            collaborative environments where innovation meets practicality.
                        </p>
                    </div>
                    
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