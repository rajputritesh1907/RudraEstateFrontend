'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const pathname = usePathname();

  // Initial load timeout (in case no link is clicked yet)
  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2800);
    const removeTimer = setTimeout(() => setVisible(false), 3600);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // When pathname changes (navigation finishes), hide the loader
  useEffect(() => {
    setFadeOut(true);
    const removeTimer = setTimeout(() => setVisible(false), 900);
    return () => clearTimeout(removeTimer);
  }, [pathname]);

  // Intercept internal link clicks to show loader immediately
  useEffect(() => {
    const handleAnchorClick = (event) => {
      const anchor = event.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      const target = anchor.getAttribute('target');

      // Only show loader for internal links that are different from current page
      if (
        href &&
        href.startsWith('/') &&
        !href.includes('#') &&
        target !== '_blank' &&
        href !== pathname
      ) {
        setFadeOut(false);
        setVisible(true);
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-slate-950"
      style={{
        transform: fadeOut ? 'translateY(-100%)' : 'translateY(0%)',
        transition: 'transform 850ms cubic-bezier(0.85, 0, 0.15, 1)',
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
    >
      {/* Parallax Content Container */}
      <div 
        className="flex flex-col items-center justify-center"
        style={{
          transform: fadeOut ? 'scale(0.92) translateY(-20px)' : 'scale(1) translateY(0px)',
          opacity: fadeOut ? 0 : 1,
          transition: 'transform 750ms cubic-bezier(0.85, 0, 0.15, 1), opacity 500ms ease-out',
        }}
      >
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-56 h-56 sm:w-72 sm:h-72 object-contain"
        >
          <source
            src="https://cdnl.iconscout.com/lottie/premium/thumb/neighborhood-animation-gif-download-10872020.mp4"
            type="video/mp4"
          />
        </video>

        {/* Brand name */}
        <p className="mt-4 text-lg font-extrabold tracking-widest text-slate-800 dark:text-white uppercase">
          Rudra Group
        </p>
        <p className="text-xs text-slate-400 tracking-wider mt-1">
          Premium Real Estate · Dholera SIR
        </p>
      </div>

      {/* Thin gold progress bar at bottom */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-400 to-yellow-500"
        style={{
          animation: fadeOut ? 'none' : 'loadbar 2.8s ease-out forwards',
          width: fadeOut ? '100%' : 'auto',
          opacity: fadeOut ? 0 : 1,
          transition: 'opacity 400ms ease-out'
        }}
      />

      <style>{`
        @keyframes loadbar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}
