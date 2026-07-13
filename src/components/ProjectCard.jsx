'use client';

import React from 'react';
import { MapPin, Maximize2, ShieldCheck, CheckCircle } from 'lucide-react';

const ProjectCard = ({ project, onInquire, index }) => {
  const { title, phase, status, type, description, location, priceRange, sizeRange, amenities, highlights, image } = project;

  const isSoldOut = status === 'Sold Out';

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group">
      {/* Property Image / Overlay */}
      <div className="relative h-44 overflow-hidden bg-slate-100 shrink-0">
        <img
          src={image || 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80'}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full shadow-md ${
            isSoldOut 
              ? 'bg-rose-500 text-white' 
              : 'bg-emerald-500 text-white'
          }`}>
            {status}
          </span>
          <span className="px-3 py-1 bg-navy-800 text-gold-400 text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
            {type}
          </span>
        </div>

        {/* Index Badge */}
        {index !== undefined && (
          <div className="absolute top-4 right-4 bg-navy-900/90 backdrop-blur-md text-gold-400 border border-gold-500/30 px-2.5 py-1 rounded-xl text-[10px] font-black shadow-md tracking-wider">
            {String(index + 1).padStart(2, '0')}
          </div>
        )}

        {/* Phase Badge */}
        {phase && (
          <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-md text-xs font-semibold">
            {phase}
          </div>
        )}
      </div>

      {/* Property Details */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors">
            {title}
          </h3>
        </div>

        {/* Location */}
        <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 mb-4">
          <MapPin className="h-4 w-4 text-gold-500 mr-1 shrink-0" />
          <span>{location}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3 flex-grow line-clamp-2">
          {description}
        </p>

        {/* Specs (Price & Size) */}
        <div className="grid grid-cols-2 gap-3 py-3 px-3 bg-slate-50 dark:bg-slate-800/30 rounded-xl mb-3 border border-slate-100 dark:border-slate-800/20 shrink-0">
          <div>
            <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold">
              Size Range
            </span>
            <span className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center mt-0.5">
              <Maximize2 className="h-4 w-4 mr-1 text-gold-500 shrink-0" />
              {sizeRange || 'N/A'}
            </span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold">
              Investment Starts
            </span>
            <span className="text-sm font-extrabold text-navy-800 dark:text-gold-400 mt-0.5 block">
              {priceRange || 'Contact Us'}
            </span>
          </div>
        </div>

        {/* Highlights/Amenities */}
        {highlights && highlights.length > 0 && (
          <div className="space-y-1 mb-3 shrink-0">
            {highlights.slice(0, 2).map((hl, i) => (
              <div key={i} className="flex items-center text-xs text-slate-600 dark:text-slate-300">
                <CheckCircle className="h-3.5 w-3.5 text-gold-500 mr-2 shrink-0" />
                <span>{hl}</span>
              </div>
            ))}
          </div>
        )}

        {/* Action Button */}
        <button
          onClick={() => onInquire(title)}
          className={`w-full py-2.5 px-4 text-sm font-bold rounded-xl transition-all duration-200 shrink-0 ${
            isSoldOut
              ? 'bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-400 cursor-not-allowed'
              : 'bg-navy-800 dark:bg-slate-800 hover:bg-gold-500 dark:hover:bg-gold-500 hover:text-white dark:hover:text-white text-gold-400 border border-gold-500/20 hover:border-gold-500'
          }`}
          disabled={isSoldOut}
        >
          {isSoldOut ? 'Sold Out' : 'Request Callback'}
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
