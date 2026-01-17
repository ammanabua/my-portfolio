'use client';

import React from 'react';
import { X, FileText, CheckCircle, AlertTriangle, Scale, Copyright, MessageSquare, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TermsOfServiceProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsOfService({ isOpen, onClose }: TermsOfServiceProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black backdrop-blur-sm overflow-y-auto"
          onClick={onClose}
        >
          <div className="min-h-full py-8 px-4 flex items-start justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-4xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl my-auto"
              onClick={(e) => e.stopPropagation()}
            >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-slate-900 backdrop-blur-lg px-8 py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-amber-500 opacity-20 rounded-xl">
                    <FileText className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Terms of Service</h2>
                    <p className="text-gray-400 text-sm">Last updated: December 22, 2025</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="px-8 py-8 space-y-8">
              {/* Introduction */}
              <section className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Welcome to my portfolio website. By accessing and using this website, you accept and agree to be bound by 
                  these Terms of Service. Please read them carefully before using the site.
                </p>
              </section>

              {/* Acceptance of Terms */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <h3 className="text-xl font-semibold text-white">Acceptance of Terms</h3>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <p className="text-gray-300 leading-relaxed">
                    By accessing this website, you acknowledge that you have read, understood, and agree to be bound by these 
                    Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, 
                    you are prohibited from using or accessing this site.
                  </p>
                </div>
              </section>

              {/* Use of Website */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <Scale className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-xl font-semibold text-white">Use of Website</h3>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 space-y-4">
                  <p className="text-gray-300 leading-relaxed">You agree to use this website only for lawful purposes and in a way that:</p>
                  <ul className="text-gray-300 space-y-2 list-disc list-inside">
                    <li>Does not infringe on the rights of others</li>
                    <li>Does not restrict or inhibit anyone else's use of the website</li>
                    <li>Does not attempt to gain unauthorized access to any part of the website</li>
                    <li>Does not transmit any harmful code, malware, or viruses</li>
                    <li>Does not engage in any conduct that could damage, disable, or impair the website</li>
                  </ul>
                </div>
              </section>

              {/* Intellectual Property */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <Copyright className="w-5 h-5 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">Intellectual Property</h3>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    All content on this website, including but not limited to text, graphics, logos, images, code samples, 
                    and design elements, is my intellectual property or used with permission.
                  </p>
                  <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                    <p className="text-gray-300 text-sm">
                      <strong className="text-purple-300">Note:</strong> Project showcases may include work done for clients 
                      or employers. These are displayed for portfolio purposes only and remain the property of their respective owners.
                    </p>
                  </div>
                </div>
              </section>

              {/* Contact Form & Communications */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">Contact & Communications</h3>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <p className="text-gray-300 leading-relaxed mb-4">When using the contact form, you agree to:</p>
                  <ul className="text-gray-300 space-y-2 list-disc list-inside">
                    <li>Provide accurate and truthful information</li>
                    <li>Not send spam, promotional content, or unsolicited commercial messages</li>
                    <li>Not send harassing, threatening, or offensive messages</li>
                    <li>Understand that I may not respond to all inquiries</li>
                  </ul>
                </div>
              </section>

              {/* Disclaimers */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                  <h3 className="text-xl font-semibold text-white">Disclaimers</h3>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 space-y-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">"As Is" Basis</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      This website is provided "as is" without any warranties, express or implied. I do not guarantee 
                      that the website will be available at all times or that it will be free from errors.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Limitation of Liability</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      I shall not be held liable for any damages arising from the use or inability to use this website, 
                      including but not limited to direct, indirect, incidental, or consequential damages.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">External Links</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      This website may contain links to external sites. I am not responsible for the content or 
                      privacy practices of these third-party websites.
                    </p>
                  </div>
                </div>
              </section>

              {/* Changes to Terms */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <RefreshCw className="w-5 h-5 text-pink-400" />
                  <h3 className="text-xl font-semibold text-white">Changes to Terms</h3>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <p className="text-gray-300 leading-relaxed">
                    I reserve the right to modify these Terms of Service at any time. Changes will be effective 
                    immediately upon posting to the website. Your continued use of the website after any changes 
                    constitutes your acceptance of the new terms.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section className="space-y-4">
                <div className="bg-amber-500 rounded-xl p-6 border border-amber-500">
                  <h4 className="text-white font-semibold mb-3">Questions About These Terms?</h4>
                  <p className="text-gray-300 leading-relaxed">
                    If you have any questions about these Terms of Service, please contact me at:{' '}
                    <a href="mailto:ammanabua@gmail.com" className="text-gray-700 hover:text-gray-900 transition-colors">
                      ammanabua@gmail.com
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
