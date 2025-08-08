import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useState, useEffect, useRef } from "react";
import { Transition } from "@headlessui/react";
import { Modal, Box, Typography, backdropClasses } from "@mui/material";

import { motion } from "framer-motion";

import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, User, Briefcase, MessageCircle } from 'lucide-react';







export default function Navbar() {

const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: Code },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: MessageCircle },
  ];
  
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-slate-900/80 backdrop-blur-lg border-b border-white/10 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="group cursor-pointer">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <span className="text-white font-bold text-xl">AK</span>
                </div>
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-30 transform transition-all duration-300 group-hover:opacity-60"></div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative group px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10"
                >
                  <div className="flex items-center space-x-2">
                    <item.icon className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
                    <span className="text-gray-300 group-hover:text-white font-medium transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
              
              {/* CTA Button */}
              <div className="ml-4">
                <button className="relative group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Hire Me</span>
                    <ExternalLink className="w-4 h-4" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
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
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </a>
              ))}
              <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
