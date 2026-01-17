'use client';

import { X, Shield, Lock, Eye, Database, Mail, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicy({ isOpen, onClose }: PrivacyPolicyProps) {
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
                  <div className="p-3 bg-purple-500 opacity-20 rounded-xl">
                    <Shield className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
                    <p className="text-gray-400 text-sm">Last updated: December 22, 2025</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white hover:opacity-10 rounded-lg transition-all duration-300"
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
                  Welcome to my portfolio website. I respect your privacy and am committed to protecting your personal data. 
                  This privacy policy explains how I collect, use, and safeguard your information when you visit my website.
                </p>
              </section>

              {/* Information Collection */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <Database className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-xl font-semibold text-white">Information I Collect</h3>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 space-y-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">Information You Provide</h4>
                    <ul className="text-gray-300 space-y-2 list-disc list-inside">
                      <li>Name and email address when you use the contact form</li>
                      <li>Any messages or inquiries you send through the website</li>
                      <li>Company name and project details (if provided)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Automatically Collected Information</h4>
                    <ul className="text-gray-300 space-y-2 list-disc list-inside">
                      <li>Browser type and version</li>
                      <li>Device information and screen resolution</li>
                      <li>Pages visited and time spent on the website</li>
                      <li>Referring website or source</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How I Use Information */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-green-400" />
                  <h3 className="text-xl font-semibold text-white">How I Use Your Information</h3>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <ul className="text-gray-300 space-y-3 list-disc list-inside">
                    <li>To respond to your inquiries and provide requested information</li>
                    <li>To improve the website's functionality and user experience</li>
                    <li>To analyze website traffic and usage patterns</li>
                    <li>To communicate about potential projects or opportunities</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </div>
              </section>

              {/* Data Protection */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <Lock className="w-5 h-5 text-amber-400" />
                  <h3 className="text-xl font-semibold text-white">Data Protection</h3>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <p className="text-gray-300 leading-relaxed">
                    I implement appropriate security measures to protect your personal information against unauthorized access, 
                    alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, 
                    and I cannot guarantee absolute security.
                  </p>
                </div>
              </section>

              {/* Third-Party Services */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-pink-400" />
                  <h3 className="text-xl font-semibold text-white">Third-Party Services</h3>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    This website may use third-party services that collect information for analytics purposes:
                  </p>
                  <ul className="text-gray-300 space-y-2 list-disc list-inside">
                    <li>Google Analytics for website traffic analysis</li>
                    <li>Netlify for website hosting</li>
                    <li>Email service providers for contact form submissions</li>
                  </ul>
                </div>
              </section>

              {/* Your Rights */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">Your Rights</h3>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <p className="text-gray-300 leading-relaxed mb-4">You have the right to:</p>
                  <ul className="text-gray-300 space-y-2 list-disc list-inside">
                    <li>Access the personal data I hold about you</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your personal data</li>
                    <li>Opt out of marketing communications</li>
                    <li>Lodge a complaint with a supervisory authority</li>
                  </ul>
                </div>
              </section>

              {/* Contact */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">Contact Me</h3>
                </div>
                <div className="bg-purple-500 rounded-xl p-6 border border-purple-500">
                  <p className="text-gray-300 leading-relaxed">
                    If you have any questions about this Privacy Policy or wish to exercise your rights, 
                    please contact me at:{' '}
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
