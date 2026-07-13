'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { useTheme } from '../context/ThemeContext';

export default function NotFound() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const lottieUrl = mounted
    ? (theme === 'dark'
        ? 'https://lottie.host/4c012193-fe21-46b7-9477-9f87cda8e9d0/aieSeD36nW.lottie'
        : 'https://lottie.host/1d416396-4c63-4146-91e0-d10d684224b0/UF1miNlNVQ.lottie')
    : null;

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white relative overflow-hidden px-4 py-12 text-center pt-20 transition-colors duration-300">
      {/* Background Blurs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/5 dark:bg-gold-500/10 rounded-full blur-3xl pointer-events-none transition-colors duration-300" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none transition-colors duration-300" />

      {/* Script to load DotLottie Player Component */}
      <Script 
        src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" 
        type="module" 
        strategy="afterInteractive"
      />

      <div className="relative z-10 max-w-md mx-auto space-y-6 flex flex-col items-center">
        {/* Lottie Player */}
        <div className="w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
          {mounted && lottieUrl && (
            <dotlottie-player
              key={lottieUrl}
              src={lottieUrl}
              background="transparent"
              speed="1"
              style={{ width: '100%', height: '100%' }}
              loop
              autoplay
            ></dotlottie-player>
          )}
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Lost in <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold-400 to-amber-500">Dholera SIR?</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-sm">
            The page you are looking for does not exist or has been moved to a new destination.
          </p>
        </div>

        <Link
          href="/"
          className="inline-block px-8 py-4 bg-gradient-gold text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-all duration-300 transform hover:-translate-y-0.5 text-sm tracking-wider uppercase"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
