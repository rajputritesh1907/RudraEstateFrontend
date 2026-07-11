'use client';

import React from 'react';
import { Award, ShieldAlert, Sparkles, Building } from 'lucide-react';
import StatsSection from '../../components/StatsSection';

const Achievements = () => {
  const awards = [
    {
      title: 'Atmanirbhar Face of Bharat Award',
      year: '2024',
      issuer: 'Union Ministry / National Industry Board',
      desc: 'Awarded to Rudra Buildcon Pvt. Ltd. as the leading real estate developer fostering high-yield smart city infrastructure in Dholera SIR under the Atmanirbhar Bharat initiative.',
      icon: Sparkles,
      color: 'text-amber-500 bg-amber-50 dark:bg-slate-900 border-amber-100',
    },
    {
      title: 'CREDAI Recognition Award',
      year: '2022',
      issuer: 'Confederation of Real Estate Developers Association of India',
      desc: 'Honoring our compliance standards, customer trust index, and premium quality execution in Dholera township developments.',
      icon: Award,
      color: 'text-emerald-500 bg-emerald-50 dark:bg-slate-900 border-emerald-100',
    },
    {
      title: 'Gujarat Business Glory Award',
      year: '2022',
      issuer: 'Gujarat Chamber of Commerce & Industry',
      desc: 'Acknowledging Rudra Group as the fastest-growing land developer in the Dholera Special Investment Region (DSIR).',
      icon: Building,
      color: 'text-blue-500 bg-blue-50 dark:bg-slate-900 border-blue-100',
    },
    {
      title: '4th Edition India Business Award MSME',
      year: '2021',
      issuer: 'Ministry of MSME / National Business Chamber',
      desc: 'Recognizing operational excellence, legal transparency, and innovative land development planning.',
      icon: Award,
      color: 'text-rose-500 bg-rose-50 dark:bg-slate-900 border-rose-100',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-900 dark:bg-slate-950 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
            alt="Rudra Corporate Offices"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900 dark:from-slate-950"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Awards & Achievements
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Proudly delivering trustworthy, RERA-compliant, and award-winning real estate developments since 2010.
          </p>
        </div>
      </section>

      {/* Stats Summary Panel */}
      <StatsSection />

      {/* Awards Section */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-2">Accolades</h2>
            <h3 className="text-3xl font-extrabold text-slate-800 dark:text-white">Corporate Honors</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto mt-3">
              Recognized nationally and regionally by prominent chambers and trade organizations for complete legal compliance and development quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => {
              const Icon = award.icon;
              return (
                <div 
                  key={index}
                  className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-8 hover:shadow-md transition-shadow flex items-start space-x-6"
                >
                  <div className={`p-4 rounded-2xl ${award.color} border shrink-0`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-extrabold text-gold-500 tracking-widest uppercase">
                      Awarded In {award.year}
                    </span>
                    <h4 className="text-lg font-bold text-slate-800 dark:text-white">{award.title}</h4>
                    <p className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{award.issuer}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-2">
                      {award.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
