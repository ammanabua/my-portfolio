import React, { useState, useEffect, useRef } from 'react';
import { 
  Quote, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Play,
  Linkedin,
  Twitter,
  Building,
  MapPin,
  Calendar,
  TrendingUp,
  Award,
  Users,
  Zap
} from 'lucide-react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);
  const autoPlayRef = useRef(null);

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

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    } else {
      clearInterval(autoPlayRef.current);
    }

    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying]);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'VP of Engineering',
      company: 'TechFlow Inc.',
      location: 'San Francisco, CA',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      date: 'March 2024',
      content: "Alex transformed our entire frontend architecture and delivered a 40% performance improvement. Their expertise in React and system design is exceptional. The code quality and attention to detail exceeded all expectations.",
      projectType: 'Full-Stack Development',
      duration: '6 months',
      technologies: ['React', 'Node.js', 'AWS'],
      metrics: { performance: '+40%', bugs: '-60%', satisfaction: '98%' },
      linkedin: '#',
      featured: true
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'CTO',
      company: 'StartupVenture',
      location: 'Austin, TX',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      date: 'January 2024',
      content: "Working with Alex was a game-changer for our startup. They built our entire platform from scratch and helped us scale to 50K+ users. Their technical leadership and problem-solving skills are world-class.",
      projectType: 'Platform Development',
      duration: '8 months',
      technologies: ['Next.js', 'PostgreSQL', 'Docker'],
      metrics: { users: '50K+', uptime: '99.9%', growth: '+200%' },
      twitter: '#',
      featured: true
    },
    {
      id: 3,
      name: 'Emily Thompson',
      role: 'Product Manager',
      company: 'InnovateLab',
      location: 'Seattle, WA',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      date: 'February 2024',
      content: "Alex has an incredible ability to translate complex requirements into elegant solutions. They delivered our mobile app ahead of schedule and the user feedback has been phenomenal. Highly recommended!",
      projectType: 'Mobile Development',
      duration: '4 months',
      technologies: ['React Native', 'GraphQL', 'Firebase'],
      metrics: { rating: '4.8/5', downloads: '25K+', retention: '85%' },
      linkedin: '#'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Senior Developer',
      company: 'DataCorp',
      location: 'New York, NY',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      date: 'December 2023',
      content: "I've worked with many developers, but Alex stands out for their deep technical knowledge and collaborative approach. They mentored our team and established coding standards that improved our entire workflow.",
      projectType: 'Team Leadership',
      duration: '3 months',
      technologies: ['Python', 'Django', 'Kubernetes'],
      metrics: { efficiency: '+35%', quality: '+50%', knowledge: '100%' },
      twitter: '#'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Founder',
      company: 'GreenTech Solutions',
      location: 'Portland, OR',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      date: 'November 2023',
      content: "Alex built our sustainability platform that now serves over 100 companies. Their understanding of both technology and business needs is remarkable. The platform has been crucial to our growth.",
      projectType: 'Enterprise Platform',
      duration: '7 months',
      technologies: ['Vue.js', 'Express', 'MongoDB'],
      metrics: { clients: '100+', revenue: '+300%', impact: 'Massive' },
      linkedin: '#'
    }
  ];

  const stats = [
    { label: 'Happy Clients', value: '50+', icon: Users, color: 'from-blue-500 to-cyan-500' },
    { label: 'Projects Completed', value: '75+', icon: Award, color: 'from-purple-500 to-pink-500' },
    { label: 'Average Rating', value: '4.9/5', icon: Star, color: 'from-yellow-500 to-orange-500' },
    { label: 'Success Rate', value: '98%', icon: TrendingUp, color: 'from-green-500 to-emerald-500' }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        <div className="absolute top-0 left-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      {/* Floating quote marks */}
      <div className="absolute inset-0 pointer-events-none">
        <Quote className="absolute top-20 left-10 w-20 h-20 text-purple-500/10 rotate-12 animate-float" />
        <Quote className="absolute bottom-20 right-20 w-16 h-16 text-cyan-500/10 -rotate-12 animate-float animation-delay-1000" />
        <Quote className="absolute top-1/2 right-10 w-12 h-12 text-pink-500/10 rotate-45 animate-float animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted by startups and enterprises worldwide to deliver exceptional digital solutions.
          </p>
        </div>

        {/* Stats section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '200ms' }}>
          {stats.map(({ label, value, icon: Icon, color }, index) => (
            <div key={label} className="text-center group">
              <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-2xl border border-white/10 p-6 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 hover:scale-105">
                <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {value}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main testimonial */}
        <div className={`max-w-6xl mx-auto mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '400ms' }}>
          <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-3xl border border-white/10 backdrop-blur-sm p-8 md:p-12 hover:border-purple-500/30 transition-all duration-500">
            {/* Quote decoration */}
            <div className="absolute -top-6 left-8">
              <div className="bg-gradient-to-r from-purple-500 to-cyan-500 p-4 rounded-full shadow-2xl">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Client info */}
              <div className="md:col-span-1">
                <div className="flex flex-col items-center text-center">
                  {/* Avatar with glow effect */}
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-lg opacity-75 animate-pulse" />
                    <img
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      className="relative w-24 h-24 rounded-full object-cover border-4 border-white/20"
                    />
                    {currentTestimonial.featured && (
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 p-1 rounded-full">
                        <Star className="w-4 h-4 text-white fill-current" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-purple-300 font-medium mb-1">
                    {currentTestimonial.role}
                  </p>
                  <p className="text-cyan-300 mb-2">
                    {currentTestimonial.company}
                  </p>
                  <div className="flex items-center gap-1 text-gray-400 text-sm mb-4">
                    <MapPin className="w-3 h-3" />
                    <span>{currentTestimonial.location}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Social links */}
                  <div className="flex gap-3">
                    {currentTestimonial.linkedin && (
                      <a href={currentTestimonial.linkedin} className="p-2 bg-blue-500/20 rounded-full text-blue-400 hover:bg-blue-500/30 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {currentTestimonial.twitter && (
                      <a href={currentTestimonial.twitter} className="p-2 bg-cyan-500/20 rounded-full text-cyan-400 hover:bg-cyan-500/30 transition-colors">
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Testimonial content */}
              <div className="md:col-span-2">
                <blockquote className="text-gray-100 text-lg md:text-xl leading-relaxed mb-6 font-light italic">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Project details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Building className="w-5 h-5 text-purple-400" />
                      <div>
                        <div className="text-sm text-gray-400">Project Type</div>
                        <div className="text-white font-medium">{currentTestimonial.projectType}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="text-sm text-gray-400">Duration</div>
                        <div className="text-white font-medium">{currentTestimonial.duration}</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-400 mb-2">Key Metrics</div>
                      <div className="flex flex-wrap gap-2">
                        {Object.entries(currentTestimonial.metrics).map(([key, value]) => (
                          <span key={key} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                            {value}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-2">Technologies</div>
                      <div className="flex flex-wrap gap-2">
                        {currentTestimonial.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation and indicators */}
        <div className={`flex items-center justify-between max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '600ms' }}>
          {/* Navigation buttons */}
          <div className="flex gap-4">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-slate-800/50 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/30 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 bg-slate-800/50 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/30 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveTestimonial(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 scale-125'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Auto-play toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`p-3 bg-slate-800/50 rounded-full border border-white/10 transition-all duration-300 hover:scale-110 backdrop-blur-sm ${
              isAutoPlaying 
                ? 'text-green-400 border-green-500/30' 
                : 'text-gray-400 hover:text-white hover:border-purple-500/30'
            }`}
          >
            <Play className="w-6 h-6" />
          </button>
        </div>

        {/* Call to action */}
        <div className={`text-center mt-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full border border-purple-500/20 text-purple-300">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Ready to join these success stories?</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
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

export default Testimonials;