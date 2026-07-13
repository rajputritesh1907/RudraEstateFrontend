'use client';

import React from 'react';
import Link from 'next/link';
import { Building2, Mail, Phone, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Info */}
          <div>
            <div className="mb-6">
              <img
                src="/logo.png"
                alt="Rudra Group"
                className="h-12 w-auto object-contain transition-all duration-300 dark:brightness-0 dark:invert"
              />
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
              Rudra Buildcon Pvt. Ltd. is a premier real estate developer focused on high-yield investment lands and premium villa projects in Dholera SIR, India&apos;s first smart city.
            </p>
            <div className="flex items-center text-xs text-gold-500 font-semibold space-x-2">
              <ShieldCheck className="h-4 w-4" />
              <span>Registered under Gujarat RERA Standards</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 dark:text-white text-base font-bold mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-10 after:bg-gold-500 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'About Rudra', path: '/about' },
                { name: 'Dholera Smart City', path: '/dholera' },
                { name: 'Active Townships', path: '/projects' },
                { name: 'Exclusive Land Deals', path: '/land-deals' },
                { name: 'Investment Blog', path: '/blog' },
                { name: 'FAQs', path: '/faq' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="hover:text-gold-500 dark:hover:text-gold-400 transition-colors flex items-center group text-slate-500 dark:text-slate-400 hover:translate-x-1 duration-200">
                    <ArrowRight className="h-3.5 w-3.5 mr-2 text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-slate-900 dark:text-white text-base font-bold mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-10 after:bg-gold-500 pb-2">
              Head Office
            </h3>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-start">
                <Building2 className="h-5 w-5 text-gold-500 mr-3 mt-0.5 shrink-0" />
                <span>304-306, Signature-1, Near Iscon Cross Road, SG Highway, Ahmedabad, Gujarat 380051</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold-500 mr-3 shrink-0" />
                <a href="tel:+919000000000" className="hover:text-gold-500 dark:hover:text-gold-400 transition-colors">+91 900 000 0000</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gold-500 mr-3 shrink-0" />
                <a href="mailto:info@rudragroup.com" className="hover:text-gold-500 dark:hover:text-gold-400 transition-colors">info@rudragroup.com</a>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-slate-900 dark:text-white text-base font-bold mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-10 after:bg-gold-500 pb-2">
              Business Hours
            </h3>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-gold-500 mr-3 shrink-0" />
                <div>
                  <p className="font-semibold text-slate-700 dark:text-slate-300">Monday - Saturday</p>
                  <p>09:30 AM - 06:30 PM</p>
                </div>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-slate-400 dark:text-slate-600 mr-3 shrink-0" />
                <div>
                  <p className="font-semibold text-slate-400 dark:text-slate-500">Sunday</p>
                  <p className="text-slate-400 dark:text-slate-500">Closed</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Rudra Buildcon Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/terms" className="hover:text-gold-500 dark:hover:text-gold-400 transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-gold-500 dark:hover:text-gold-400 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
