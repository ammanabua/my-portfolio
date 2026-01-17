import React from 'react'
import { ChevronRight } from 'lucide-react';
import { experience } from '../data';

const Experience = ({ isVisible}) => {
  return (
    <>
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
    </>
  )
}

export default Experience