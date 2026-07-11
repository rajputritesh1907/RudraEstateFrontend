'use client';

import React from 'react';
import { Target, Eye, ShieldAlert, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import StatsSection from '../../components/StatsSection';

const About = () => {
  const values = [
    {
      title: 'Complete Legality',
      desc: 'We guarantee 100% legal verification, clear land titles, and strict adherence to RERA standards. Your investment safety is our priority.',
      icon: ShieldCheck,
    },
    {
      title: 'Strategic Development',
      desc: 'We select land parcels positioned near upcoming high-speed transit highways, logistics hubs, and planned industrial activation zones.',
      icon: Target,
    },
    {
      title: 'Customer-First Values',
      desc: 'Transparent pricing, custom payment consultations, and dedicated legal assistance ensure a smooth transaction for buyers.',
      icon: Award,
    },
  ];

  const team = [
    {
      name: 'ShivKumar Singh Tomar',
      role: 'Chairman',
      description: 'Visionary real estate entrepreneur with over 20 years of experience in property development and land aggregation across central India and Gujarat.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Mohan Singh Tomar',
      role: 'CEO',
      description: 'Oversees global operations, investor relations, and strategic partnerships, driving Rudra Group to become a major developer in Dholera SIR.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Nitin Singh Tomar',
      role: 'Managing Director',
      description: 'Spearheads site planning, land acquisitions, municipal liaisons, and implementation of smart township infrastructure elements.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
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
            About Rudra Group
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Delivering legally-secure real estate and premier planned township plots in India&apos;s first smart industrial city, Dholera SIR.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative h-96 sm:h-[480px] rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800">
              <img
                src="https://cdn.slidesharecdn.com/ss_thumbnails/dholeramasterplan-121027083840-phpapp01-thumbnail.jpg?width=640&height=640&fit=bounds"
                alt="Dholera SIR Master Plan"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-slate-950/80 backdrop-blur-md text-white rounded-xl">
                <p className="font-extrabold text-2xl text-gold-500">15+ Years</p>
                <p className="text-xs text-slate-300 mt-1 uppercase tracking-wider">
                  Of real estate expertise & development legacy
                </p>
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest">Our Story</h2>
              <h3 className="text-3xl font-extrabold text-slate-800 dark:text-white leading-tight">
                From Gwalior to Dholera SIR: A Legacy of Trust
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Founded in <strong>Gwalior in 2010</strong>, <strong>Rudra Buildcon Pvt. Ltd.</strong> began its journey by developing residential colonies, building custom family houses, and managing small-scale plots. Guided by the values of complete transparent documentation and quality execution, we quickly earned client trust.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                In <strong>2018</strong>, recognizing the monumental growth potential of the central government&apos;s Delhi-Mumbai Industrial Corridor (DMIC) and the planning of <strong>Dholera Special Investment Region (SIR)</strong> in Gujarat, we consolidated our operations and pivoted exclusively to Dholera. 
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Today, Rudra Group has developed multiple premium residential projects, facilitated hundreds of commercial/industrial acquisitions, and established itself as one of the most reliable and legal-compliant developers in Gujarat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/30 transition-colors border-y border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200/50 dark:border-slate-900 shadow-sm">
              <div className="p-3 bg-gold-50 dark:bg-slate-900 text-gold-500 rounded-xl mb-6 inline-block">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-800 dark:text-white">Our Vision</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                To be the most trusted and customer-focused real estate developer in Dholera SIR, recognized for delivering legally-impeccable land parcels and eco-friendly smart villa townships that guarantee superior capital growth.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200/50 dark:border-slate-900 shadow-sm">
              <div className="p-3 bg-gold-50 dark:bg-slate-900 text-gold-500 rounded-xl mb-6 inline-block">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-800 dark:text-white">Our Mission</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                To empower local and international investors with strategic land assets in Dholera by ensuring absolute transparency, fast legal allotments, clear titles, and high-quality utility development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-2">Core Competency</h2>
            <h3 className="text-3xl font-extrabold text-slate-800 dark:text-white">Values That Guide Us</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200/30 dark:border-slate-800/30 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="p-3 bg-white dark:bg-slate-900 text-gold-500 rounded-xl mb-6 inline-block border border-slate-100 dark:border-slate-800 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-slate-800 dark:text-white">{v.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Dashboard */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/30 transition-colors border-t border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-2">Leadership</h2>
            <h3 className="text-3xl font-extrabold text-slate-800 dark:text-white">Our Board of Directors</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto mt-3">
              Guided by a highly experienced executive team managing land pooling, legality, engineering, and corporate strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((m, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl overflow-hidden shadow-sm flex flex-col h-full hover:shadow-lg transition-shadow">
                <div className="h-80 overflow-hidden bg-slate-100">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h4 className="text-lg font-bold text-slate-800 dark:text-white">{m.name}</h4>
                  <span className="text-xs font-bold text-gold-500 uppercase tracking-wider mb-4 block mt-0.5">{m.role}</span>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed flex-grow">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Summary Panel */}
      <StatsSection />
    </div>
  );
};

export default About;
