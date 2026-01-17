'use client';

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, User, Briefcase, MessageCircle } from 'lucide-react';


export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state for background change
      setScrolled(currentScrollY > 50);
      
      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: Code },
    { name: 'Experience', href: '#about', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: MessageCircle },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="">
      {/* Navbar */}
      <motion.nav 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-gray-900 opacity-80 backdrop-blur-lg shadow-2xl' 
            : 'bg-transparent opacity-80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="group cursor-pointer">
              <div className="relative">
                <div className="flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <button className="ml-3 text-5xl justify-left title-font font-medium text-white mb-4 md:mb-0">
                    <span className="text-blue-600">A</span><span className="text-amber-400">k</span><span className="text-red-300">.</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="relative group px-4 py-2 rounded-full transition-all duration-300 hover:bg-white"
                >
                  <div className="flex items-center space-x-2">
                    <item.icon className="w-4 h-4 text-gray-300 group-hover:text-gray-800 transition-colors" />
                    <span className="text-gray-300 group-hover:text-gray-800 font-medium transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
              
              {/* CTA Button */}
              <div className="flex ml-4">
                <a href="mailto: ammanabua@gmail.com" className="relative group bg-amber-400 hover:bg-gray-200 hover:text-gray-800 text-slate-800 px-6 py-2 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Hire Me</span>
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-slate-900/95 backdrop-blur-lg border-t border-white/10">
            <div className="px-6 py-6 space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    scrollToSection(e, item.href);
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 py-3 px-4 rounded-lg group"
                >
                  <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{item.name}</span>
                </a>
              ))}
              
              {/* Divider */}
              <div className="pt-4 pb-2">
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>
              
              {/* CTA Button */}
              <a 
                href="mailto: ammanabua@gmail.com" 
                className="flex items-center justify-center space-x-2 w-full mt-2 bg-amber-400 text-slate-800 py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 hover:scale-[1.02]"
              >
                <span>Hire Me</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}
