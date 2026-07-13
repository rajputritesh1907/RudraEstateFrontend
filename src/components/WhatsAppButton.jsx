'use client';

import React, { useState } from 'react';
import { Share2, ChevronUp, ChevronDown } from 'lucide-react';

const WhatsAppButton = () => {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(true);

  const phoneNumber = '+919000000000';
  const message = 'Hello Rudra Group! I would like to inquire about properties in Dholera SIR.';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

  const handleShare = async () => {
    if (typeof window !== 'undefined') {
      const shareData = {
        title: document.title || 'Rudra Group',
        text: 'Check out Rudra Group - Premium properties in Dholera SIR Smart City',
        url: window.location.href,
      };

      let shared = false;
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        try {
          await navigator.share(shareData);
          shared = true;
        } catch (err) {
          console.log('Share API failed, falling back to clipboard copy:', err);
        }
      }

      if (!shared) {
        try {
          await navigator.clipboard.writeText(window.location.href);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          console.error('Failed to copy link:', err);
        }
      }
    }
  };

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-center space-y-3">

      {/* Collapsible buttons — shown only when expanded */}
      <div
        className={`flex flex-col items-center space-y-3 overflow-hidden transition-all duration-500 ease-in-out ${
          expanded ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 pointer-events-none translate-y-4'
        }`}
      >
        {/* Share Button */}
        <div className="relative flex items-center justify-center">
          {copied && (
            <div className="absolute right-16 px-3 py-1.5 bg-slate-900 dark:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-md border border-slate-800 dark:border-slate-700 whitespace-nowrap z-50">
              Link copied!
            </div>
          )}
          <button
            onClick={handleShare}
            className="flex items-center justify-center w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none"
            title="Share Page"
          >
            <Share2 className="w-6 h-6" />
          </button>
        </div>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group focus:outline-none"
          title="Chat with us on WhatsApp"
        >
          <div className="absolute inset-0 w-full h-full bg-emerald-500 rounded-full animate-ping opacity-25 group-hover:hidden"></div>
          <svg className="w-8 h-8 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 512l148.4-38.9c32.4 17.7 68.9 27 106.2 27 122.4 0 222-99.6 222-222 0-59.3-23.2-115-65.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-88 23.1 23.5-85.8-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-82.8 184.6-184.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.3 5.8 23.6 9.2 31.7 11.8 13.4 4.3 25.7 3.7 35.4 2.2 10.9-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        </a>

        {/* Call Button */}
        <a
          href="tel:+919000000000"
          className="flex items-center justify-center w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none"
          title="Call us"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z"/>
          </svg>
        </a>

        {/* Mail Button */}
        <a
          href="mailto:info@rudragroup.com"
          className="flex items-center justify-center w-14 h-14 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none"
          title="Email us"
          style={{ backgroundColor: '#d97706' }}
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </a>
      </div>

      {/* Toggle Arrow Button — always visible at bottom */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-center w-10 h-10 bg-slate-700 hover:bg-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700 text-white rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none"
        title={expanded ? 'Collapse buttons' : 'Expand buttons'}
      >
        {expanded ? (
          <ChevronDown className="w-5 h-5" />
        ) : (
          <ChevronUp className="w-5 h-5" />
        )}
      </button>

    </div>
  );
};

export default WhatsAppButton;
