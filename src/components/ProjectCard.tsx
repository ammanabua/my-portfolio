import { ExternalLink, Github, Play, ArrowUpRight } from 'lucide-react';
import { webProjects } from '@/src/data';

type ProjectCardProps = {
    project: typeof webProjects[0];
    index: number;
    isVisible: boolean;
    hoveredProject: number | null;
    setHoveredProject: (id: number | null) => void;
}

const ProjectCard = ({ project, index, isVisible, hoveredProject, setHoveredProject }: ProjectCardProps) => (
    <div
      className={`group relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      <div className="relative rounded-2xl overflow-hidden backdrop-blur-sm hover:shadow-lg hover:shadow-gray-600 transition-all duration-500 group-hover:scale-[1.02]">
        {/* Project image with overlay */}
        <div className="relative h-48 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-80`} />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
          
          {/* Status badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              project.status === 'Live' 
                ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                : 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
            }`}>
              <div className={`inline-block w-2 h-2 rounded-full mr-2 ${
                project.status === 'Live' ? 'bg-green-400' : 'bg-orange-400'
              } animate-pulse`} />
              {project.status}
            </span>
          </div>

          {/* Category badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/20 backdrop-blur-sm">
              {project.category}
            </span>
          </div>

          {/* Hover overlay with actions - always visible on mobile, hover on desktop */}
          <div className={`absolute inset-0 bg-black/50 flex items-center justify-center gap-4 transition-opacity duration-300 md:opacity-0 ${
            hoveredProject === project.id ? 'md:opacity-100' : ''
          }`}>
            <a href={project.demoUrl} target='_blank' rel="noopener noreferrer" className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 backdrop-blur-sm">
              <ExternalLink className="w-5 h-5" />
            </a>
            {project.githubUrl && (
              <a href={project.githubUrl} target='_blank' rel="noopener noreferrer" className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                <Github className="w-5 h-5" />
              </a>
            )}
            {/* <button className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 backdrop-blur-sm">
              <Play className="w-5 h-5" />
            </button> */}
          </div>
        </div>

        {/* Project content */}
        <div className="p-6 bg-gray-900">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {Object.entries(project.metrics).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-lg font-bold text-white">{value}</div>
                <div className="text-xs text-gray-400 capitalize">{key}</div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-1 mb-4">
            {project.features.slice(0, 3).map((feature, idx) => (
              <span key={idx} className="text-xs px-2 py-1 bg-purple-500/10 text-purple-300 rounded border border-purple-500/20">
                {feature}
              </span>
            ))}
            {project.features.length > 3 && (
              <span className="text-xs px-2 py-1 bg-gray-500/10 text-gray-400 rounded border border-gray-500/20">
                +{project.features.length - 3} more
              </span>
            )}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1">
            {project.tools?.map((tech, idx) => (
                <div key={idx} className="flex flex-col items-center text-center relative z-10">
                    <div className="mb-4 p-3 bg-white rounded-xl backdrop-blur-sm group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 shadow-lg">
                        <div className="text-4xl">
                            <img src={tech.image} alt={tech.title} className="w-6 h-6" />
                        </div>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
);

export default ProjectCard;