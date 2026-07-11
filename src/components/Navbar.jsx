'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Dholera SIR', path: '/dholera' },
    { name: 'Projects', path: '/projects' },
    { name: 'Land Deals', path: '/land-deals' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'Pre-Launch', path: '/pre-launch' },
    { name: 'Admin', path: '/admin', isSpecial: true },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 w-full transition-all duration-300 glass border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <img 
              src="/logo.png" 
              alt="Rudra Group Logo" 
              className="h-16 sm:h-20 py-1 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              const isPreLaunch = link.path === '/pre-launch';
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative text-sm font-semibold transition-colors duration-200 ${
                    link.isSpecial 
                      ? 'px-4 py-2 bg-navy-800 text-gold-400 hover:bg-navy-700 rounded-lg border border-gold-500/20'
                      : isPreLaunch
                        ? 'text-rose-400 hover:text-rose-300 animate-pulse'
                        : isActive
                          ? 'text-gold-500 dark:text-gold-400'
                          : 'text-slate-600 dark:text-slate-300 hover:text-gold-500 dark:hover:text-gold-400'
                  }`}
                >
                  {link.name}
                  {isPreLaunch && (
                    <span className="absolute -top-1.5 -right-2.5 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
                    </span>
                  )}
                </Link>
              );
            })}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5 text-gold-400" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-4">
            {/* Dark Mode Toggle for Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5 text-gold-400" /> : <Moon className="h-5 w-5" />}
            </button>

            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden animate-fade-in-up">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-white dark:bg-slate-950 border-b border-slate-200/50 dark:border-slate-800/50">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              const isPreLaunch = link.path === '/pre-launch';
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`relative block px-3 py-2.5 rounded-md text-base font-semibold ${
                    link.isSpecial
                      ? 'bg-navy-800 text-gold-400 border border-gold-500/20'
                      : isPreLaunch
                        ? 'text-rose-400 animate-pulse'
                        : isActive
                          ? 'text-gold-500 dark:text-gold-400 bg-slate-50 dark:bg-slate-900'
                          : 'text-slate-600 dark:text-slate-300 hover:text-gold-500 dark:hover:text-gold-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                  }`}
                >
                  {link.name}
                  {isPreLaunch && (
                    <span className="absolute top-3 right-3 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
