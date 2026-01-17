import React, { useState } from 'react';

import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, User, Briefcase, MessageCircle } from 'lucide-react';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';


export default function Footer(){

    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
    const [isTermsOpen, setIsTermsOpen] = useState(false);

    const navItems = [
        { name: 'About', href: '#about', icon: User },
        { name: 'Projects', href: '#projects', icon: Code },
        { name: 'Experience', href: '#experience', icon: Briefcase },
        { name: 'Contact', href: '#contact', icon: MessageCircle },
      ];
    
      const socialLinks = [
        { name: 'GitHub', href: 'https://www.github.com/ammanabua', icon: Github, color: 'hover:text-purple-400' },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/amman-abua', icon: Linkedin, color: 'hover:text-blue-400' },
        { name: 'Email', href: 'mailto:amman.abua93@gmail.com', icon: Mail, color: 'hover:text-green-400' },
      ];
    
    return(
        // <footer
        // className="bg-gray-800 bottom-0 z-10 py-5">
        //     <p className="text-center">Copyright<sup>&copy;</sup> {new Date().getFullYear()} Amman Abua &reg; </p>
        // </footer>

      <footer className="relative bg-slate-900/50 backdrop-blur-lg border-t border-white/10">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <button className="ml-3 text-5xl justify-left title-font font-medium text-white mb-4 md:mb-0">
                    <span className="text-blue-600">A</span><span className="text-yellow-400">k</span><span className="text-red-300">.</span>
                  </button>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">Amman Abua</h3>
                  <p className="text-gray-400">Software Engineer</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Crafting exceptional digital experiences through clean code and innovative solutions. 
                Passionate about building scalable applications that make a difference.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-white font-semibold text-lg">Quick Links</h4>
              <div className="grid grid-cols-2 gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 group"
                  >
                    <item.icon className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Connect Section */}
            <div className="space-y-6">
              <h4 className="text-white font-semibold text-lg">Let's Connect</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:shadow-lg group`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Amman Abua. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <button 
                onClick={() => setIsPrivacyOpen(true)}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setIsTermsOpen(true)}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/2 left-0 w-2 h-40 bg-gray-800"></div>
          <div className="absolute top-1/4 right-0 w-2 h-56 bg-gradient-to-b from-transparent via-pink-500/60 to-transparent"></div>
        </div>

        {/* Modals */}
        <PrivacyPolicy isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
        <TermsOfService isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      </footer>
    )
}