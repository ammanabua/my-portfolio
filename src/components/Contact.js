import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Calendar, 
  MessageSquare,
  Linkedin,
  Github,
  Twitter,
  Globe,
  Clock,
  Zap,
  CheckCircle,
  AlertCircle,
  Coffee,
  Video,
  FileText,
  Download,
  ExternalLink,
  Sparkles,
  Heart
} from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeCard, setActiveCard] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
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

  // Real-time clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: '',
          budget: '',
          timeline: '',
          message: ''
        });
        setSubmitStatus(null);
      }, 3000);
    }, 2000);
  };

  const contactMethods = [
    {
      id: 'email',
      icon: Mail,
      title: 'Email Me',
      subtitle: 'Quick Response',
      value: 'ammanabua@gmail.com',
      description: 'I typically respond within 2-4 hours during business days',
      color: 'from-amber-500 to-red-500',
      bgColor: 'from-amber-500/10 to-red-500/10',
      borderColor: 'border-red-400/30',
      action: 'Send Email',
      responseTime: '2-4 hours'
    },
    {
      id: 'phone',
      icon: Phone,
      title: 'Call Me',
      subtitle: 'Direct Line',
      value: '+1 (555) 123-4567',
      description: 'Available Mon-Fri, 9AM-6PM PST for project discussions',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-500/10 to-emerald-500/10',
      borderColor: 'border-green-400/30',
      action: 'Schedule Call',
      responseTime: 'Immediate'
    },
    {
      id: 'calendar',
      icon: Calendar,
      title: 'Book a Meeting',
      subtitle: '30min Consultation',
      value: 'Free Strategy Call',
      description: 'Let\'s discuss your project goals and technical requirements',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-400/30',
      action: 'Book Now',
      responseTime: 'Next available'
    },
    {
      id: 'location',
      icon: MapPin,
      title: 'Meet in Person',
      subtitle: 'D(M)V Area',
      value: 'Coffee & Code',
      description: 'Available for local meetups and collaboration sessions',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-500/10 to-red-500/10',
      borderColor: 'border-orange-400/30',
      action: 'Arrange Meeting',
      responseTime: 'Flexible'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, url: '#', label: 'LinkedIn', color: 'hover:text-blue-400', followers: '2.5K' },
    { icon: Github, url: '#', label: 'GitHub', color: 'hover:text-gray-300', repos: '47' },
    { icon: Twitter, url: '#', label: 'Twitter', color: 'hover:text-cyan-400', followers: '1.2K' },
    { icon: Globe, url: '#', label: 'Website', color: 'hover:text-purple-400', views: '10K+' }
  ];

  const quickActions = [
    { icon: FileText, label: 'View Resume', color: 'from-blue-500 to-purple-500' },
    { icon: Download, label: 'Download CV', color: 'from-green-500 to-emerald-500' },
    { icon: Video, label: 'Video Call', color: 'from-red-500 to-pink-500' },
    { icon: Coffee, label: 'Coffee Chat', color: 'from-yellow-500 to-orange-500' }
  ];

  const getCurrentTimeString = () => {
    return currentTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
      timeZone: 'America/New_York'
    });
  };

  const getAvailabilityStatus = () => {
    const hour = currentTime.getHours();
    const day = currentTime.getDay();
    
    // Weekend or outside business hours
    if (day === 0 || day === 6 || hour < 9 || hour > 18) {
      return { status: 'away', message: 'Currently away', color: 'text-orange-400' };
    }
    
    return { status: 'available', message: 'Available now', color: 'text-green-400' };
  };

  const availability = getAvailabilityStatus();

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-purple-500/10">
          <Sparkles className="w-16 h-16 animate-spin-slow" />
        </div>
        <div className="absolute bottom-20 right-20 text-cyan-500/10">
          <Heart className="w-12 h-12 animate-pulse" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Ready to bring your ideas to life? I'm here to help you build something amazing.
            Let's discuss your project and create something extraordinary together.
          </p>
          
          {/* Availability indicator */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/50 rounded-full border border-white/10 backdrop-blur-sm">
            <div className={`w-3 h-3 rounded-full ${availability.status === 'available' ? 'bg-green-400 animate-pulse' : 'bg-orange-400'}`} />
            <span className={`font-medium ${availability.color}`}>{availability.message}</span>
            <span className="text-gray-400">•</span>
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-gray-300 font-mono text-sm">{getCurrentTimeString()}</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact methods */}
            <div className={`lg:col-span-1 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`} style={{ transitionDelay: '200ms' }}>
              <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
              
              <div className="space-y-6 mb-12">
                {contactMethods.map((method, index) => (
                  <div
                    key={method.id}
                    className={`group relative bg-gradient-to-br ${method.bgColor} rounded-2xl border ${method.borderColor} p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-pointer`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onMouseEnter={() => setActiveCard(method.id)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    {/* Glow effect */}
                    {activeCard === method.id && (
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${method.bgColor} opacity-50 blur-xl -z-10`} />
                    )}
                    
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${method.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-white font-semibold mb-1 group-hover:text-purple-200 transition-colors">
                          {method.title}
                        </h4>
                        <p className="text-purple-300 text-sm mb-2">{method.subtitle}</p>
                        <p className="text-white font-medium mb-2">{method.value}</p>
                        <p className="text-gray-300 text-sm leading-relaxed mb-3">
                          {method.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs px-2 py-1 bg-white/10 rounded-full text-gray-300">
                            {method.responseTime}
                          </span>
                          <button className="text-purple-300 hover:text-purple-200 transition-colors text-sm font-medium flex items-center gap-1">
                            {method.action}
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick actions */}
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-4">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-3">
                  {quickActions.map((action, index) => (
                    <button
                      key={action.label}
                      className={`group p-4 bg-gradient-to-r ${action.color} rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                    >
                      <action.icon className="w-5 h-5 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <span className="text-sm">{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      className={`group p-3 bg-slate-800/50 rounded-xl border border-white/10 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 backdrop-blur-sm`}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
                <div className="flex gap-4 mt-3 text-xs text-gray-400">
                  {socialLinks.map((social) => (
                    <span key={social.label}>
                      {social.followers || social.repos || social.views}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className={`lg:col-span-2 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-3xl border border-white/10 backdrop-blur-sm p-8">
                <h3 className="text-2xl font-bold text-white mb-8">Start a Project</h3>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-gray-300 font-medium mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="projectType" className="block text-gray-300 font-medium mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      >
                        <option value="">Select project type</option>
                        <option value="web-app">Web Application</option>
                        <option value="mobile-app">Mobile Application</option>
                        <option value="ecommerce">E-commerce Platform</option>
                        <option value="api">API Development</option>
                        <option value="consulting">Technical Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-gray-300 font-medium mb-2">
                        Project Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      >
                        <option value="">Select budget range</option>
                        <option value="3k-5k">Less than $5,000</option>
                        <option value="5k-15k">$5,000 - $15,000</option>
                        <option value="15k-30k">$15,000 - $30,000</option>
                        <option value="30k-50k">$30,000 - $50,000</option>
                        <option value="50k+">$50,000+</option>
                        <option value="discuss">Let's discuss</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-gray-300 font-medium mb-2">
                        Project Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-3months">1-3 months</option>
                        <option value="3-6months">3-6 months</option>
                        <option value="6months+">6+ months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project, goals, and any specific requirements..."
                    />
                  </div>

                  {/* Submit button */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className={`flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                        isSubmitting
                          ? 'bg-gray-600 cursor-not-allowed'
                          : submitStatus === 'success'
                          ? 'bg-green-600 hover:bg-green-700'
                          : 'bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25'
                      } text-white`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : submitStatus === 'success' ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {submitStatus === 'success' && (
                  <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">Thank you for your message!</span>
                    </div>
                    <p className="text-sm mt-2 text-green-200">
                      I'll get back to you within 24 hours. Looking forward to discussing your project!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-purple-500/20 text-amber-300">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">I typically respond within 2-4 hours</span>
            <Zap className="w-4 h-4" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
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

export default Contact;