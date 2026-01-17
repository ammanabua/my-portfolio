import { education } from "@/src/data";
import { GraduationCap, Calendar } from "lucide-react";

interface EducationProps {
  isVisible: boolean;
}

export default function Education({ isVisible }: EducationProps) {
  return (
    <>
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">Academic Journey</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A progressive educational path combining engineering foundations with advanced computer science expertise.
          </p>
        </div>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div 
              key={index}
              className={`relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="group bg-gradient-blue-300 rounded-2xl border border-white backdrop-blur-sm hover:border-gray-500 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-500 overflow-hidden">
                {/* Decorative top border */}
                <div className="h-1.5 bg-blue-400 opacity-70 group-hover:opacity-100 transition-opacity" />
                
                <div className="p-8">
                  {/* Header with degree and period */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="mt-1 p-2 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg border border-purple-500/30 group-hover:scale-110 transition-transform">
                          <GraduationCap className="w-5 h-5 text-purple-300" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-gray-300 group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all">
                            {edu.degree}
                          </h3>
                          <h4 className="text-cyan-400 font-medium mt-1 text-sm md:text-base">{edu.institution}</h4>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/30">
                      <Calendar className="w-4 h-4 text-purple-300" />
                      <span className="text-purple-300 font-semibold text-sm">{edu.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
                    {edu.description}
                  </p>

                  {/* Achievements Grid */}
                  <div>
                    <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Key Highlights</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {edu.achievements.map((achievement, achIndex) => (
                        <div 
                          key={achIndex}
                          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-lg border border-white/5 group-hover:border-purple-500/20 transition-all"
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full" />
                          <span className="text-gray-300 text-sm font-medium">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}