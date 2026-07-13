'use client';

import React from 'react';
import { Target, Eye, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import StatsSection from '../../components/StatsSection';

const About = () => {
  const values = [
    {
      title: 'Complete Legality',
      desc: 'We guarantee 100% legal verification, clear land titles, and strict adherence to RERA standards. Your investment safety is our priority.',
      icon: ShieldCheck,
      color: 'emerald',
    },
    {
      title: 'Strategic Development',
      desc: 'We select land parcels positioned near upcoming high-speed transit highways, logistics hubs, and planned industrial activation zones.',
      icon: Target,
      color: 'blue',
    },
    {
      title: 'Customer-First Values',
      desc: 'Transparent pricing, custom payment consultations, and dedicated legal assistance ensure a smooth transaction for buyers.',
      icon: Award,
      color: 'gold',
    },
  ];

  const team = [
    {
      name: 'ShivKumar Singh Tomar',
      role: 'Chairman',
      description: 'Visionary real estate entrepreneur with over 20 years of experience in property development and land aggregation across central India and Gujarat.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
      color: 'blue',
    },
    {
      name: 'Mohan Singh Tomar',
      role: 'CEO',
      description: 'Oversees global operations, investor relations, and strategic partnerships, driving Rudra Group to become a major developer in Dholera SIR.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
      color: 'gold',
    },
    {
      name: 'Nitin Singh Tomar',
      role: 'Managing Director',
      description: 'Spearheads site planning, land acquisitions, municipal liaisons, and implementation of smart township infrastructure elements.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
      color: 'emerald',
    },
  ];

  const getValueColors = (color) => {
    switch (color) {
      case 'emerald':
        return {
          icon: 'text-emerald-500 bg-emerald-500/10 dark:bg-emerald-950/40 border-emerald-500/20',
          border: 'border-slate-200 dark:border-slate-800 hover:border-emerald-500/40',
          hoverBg: 'hover:bg-gradient-to-br hover:from-white hover:to-emerald-500/[0.03] dark:hover:from-slate-900 dark:hover:to-emerald-950/10',
          glow: 'bg-emerald-500/10',
        };
      case 'blue':
        return {
          icon: 'text-blue-500 bg-blue-500/10 dark:bg-blue-950/40 border-blue-500/20',
          border: 'border-slate-200 dark:border-slate-800 hover:border-blue-500/40',
          hoverBg: 'hover:bg-gradient-to-br hover:from-white hover:to-blue-500/[0.03] dark:hover:from-slate-900 dark:hover:to-blue-950/10',
          glow: 'bg-blue-500/10',
        };
      case 'gold':
        return {
          icon: 'text-gold-500 bg-gold-500/10 dark:bg-gold-950/40 border-gold-500/20',
          border: 'border-slate-200 dark:border-slate-800 hover:border-gold-500/40',
          hoverBg: 'hover:bg-gradient-to-br hover:from-white hover:to-gold-500/[0.03] dark:hover:from-slate-900 dark:hover:to-gold-950/10',
          glow: 'bg-gold-500/10',
        };
      default:
        return {
          icon: 'text-slate-600 bg-slate-100 border-slate-200',
          border: 'border-slate-200 dark:border-slate-800',
          hoverBg: '',
          glow: 'bg-slate-500/5',
        };
    }
  };

  const getTeamColors = (color) => {
    switch (color) {
      case 'blue':
        return {
          border: 'hover:border-blue-500/30 hover:shadow-blue-500/5',
          role: 'text-blue-500 bg-blue-500/5 dark:bg-blue-500/10 border-blue-500/10',
          ribbon: 'bg-blue-500',
        };
      case 'gold':
        return {
          border: 'hover:border-gold-500/30 hover:shadow-gold-500/5',
          role: 'text-gold-500 bg-gold-500/5 dark:bg-gold-500/10 border-gold-500/10',
          ribbon: 'bg-gold-500',
        };
      case 'emerald':
        return {
          border: 'hover:border-emerald-500/30 hover:shadow-emerald-500/5',
          role: 'text-emerald-500 bg-emerald-500/5 dark:bg-emerald-500/10 border-emerald-500/10',
          ribbon: 'bg-emerald-500',
        };
      default:
        return {
          border: 'hover:border-gold-500/30 hover:shadow-gold-500/5',
          role: 'text-gold-500',
          ribbon: 'bg-gold-500',
        };
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors relative overflow-hidden">
      {/* Background Glow Blobs */}
      <div className="absolute top-1/4 left-[10%] w-96 h-96 bg-blue-500/[0.04] dark:bg-blue-500/[0.02] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-2/3 right-[10%] w-96 h-96 bg-gold-500/[0.03] dark:bg-gold-500/[0.015] rounded-full blur-[120px] pointer-events-none" />

      {/* Header Banner */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors border-b border-slate-800/40">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
            alt="Rudra Corporate Offices"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-955 via-slate-950/65 to-transparent"></div>
        </div>

        {/* Cinematic Header Blobs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-gold-500/10 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-[110px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center z-10 space-y-4">
          <span className="text-xs font-bold text-gold-400 uppercase tracking-widest border border-gold-500/30 px-4 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-md inline-block shadow-md">
            ESTABLISHED 2010
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-gold-400 to-amber-400">Rudra Group</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-355 text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Delivering legally-secure real estate and premier planned township plots in India&apos;s first smart industrial city, Dholera SIR.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-white dark:bg-slate-955 transition-colors relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Visual Column with Gradient Glow */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-500 to-gold-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
              <div className="relative h-96 sm:h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <img
                  src="/dholera_master_plan.png"
                  alt="Dholera SIR Master Plan"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-slate-950/80 backdrop-blur-md text-white rounded-2xl border border-white/10">
                  <p className="font-extrabold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-gold-400 to-amber-300">15+ Years</p>
                  <p className="text-[10px] text-slate-300 mt-1.5 uppercase font-bold tracking-widest">
                    Of real estate expertise & development legacy
                  </p>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block font-extrabold">
                Chapter 01 — Our History
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white leading-tight">
                From Gwalior to Dholera SIR: <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-gold-500 dark:from-blue-400 dark:to-gold-400">A Legacy of Trust</span>
              </h2>
              <div className="h-1.5 w-20 bg-gradient-to-r from-blue-500 to-gold-500 rounded-full" />
              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
                <p>
                  Founded in <strong className="text-blue-600 dark:text-blue-400 font-bold">Gwalior in 2010</strong>, <strong className="text-slate-800 dark:text-white font-bold">Rudra Buildcon Pvt. Ltd.</strong> began its journey by developing residential colonies, building custom family houses, and managing small-scale plots. Guided by the values of complete transparent documentation and quality execution, we quickly earned client trust.
                </p>
                <p>
                  In <strong className="text-gold-500 font-bold">2018</strong>, recognizing the monumental growth potential of the central government&apos;s Delhi-Mumbai Industrial Corridor (DMIC) and the planning of <strong className="text-slate-800 dark:text-white font-bold">Dholera Special Investment Region (SIR)</strong> in Gujarat, we consolidated our operations and pivoted exclusively to Dholera. 
                </p>
                <p>
                  Today, Rudra Group has developed multiple premium residential projects, facilitated hundreds of commercial/industrial acquisitions, and established itself as one of the most reliable and legal-compliant developers in Gujarat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission with Color Coding */}
      <section className="py-24 bg-slate-50/50 dark:bg-slate-900/20 transition-colors border-y border-slate-200 dark:border-slate-900/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Vision (Blue Theme) */}
            <div className="group bg-white dark:bg-slate-950 p-8 lg:p-10 rounded-3xl border border-slate-200 dark:border-slate-800/40 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/[0.02] rounded-full blur-2xl" />
              <div className="p-3 bg-blue-500/10 text-blue-500 rounded-2xl mb-6 inline-flex border border-blue-500/20">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">Our Vision</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed text-justify">
                To be the most trusted and customer-focused real estate developer in Dholera SIR, recognized for delivering legally-impeccable land parcels and eco-friendly smart villa townships that guarantee superior capital growth.
              </p>
            </div>

            {/* Mission (Gold Theme) */}
            <div className="group bg-white dark:bg-slate-955 p-8 lg:p-10 rounded-3xl border border-slate-200 dark:border-slate-800/40 shadow-sm hover:shadow-xl hover:border-gold-500/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/[0.02] rounded-full blur-2xl" />
              <div className="p-3 bg-gold-500/10 text-gold-500 rounded-2xl mb-6 inline-flex border border-gold-500/20">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">Our Mission</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed text-justify">
                To empower local and international investors with strategic land assets in Dholera by ensuring absolute transparency, fast legal allotments, clear titles, and high-quality utility development.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values with Rich Palette */}
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-gold-500 uppercase tracking-widest block mb-2">Core Competency</span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Values That Guide Us</h3>
            <div className="h-1 w-20 bg-gradient-gold mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, idx) => {
              const Icon = v.icon;
              const style = getValueColors(v.color);
              return (
                <div key={idx} className={`group bg-slate-50/50 dark:bg-slate-900/35 border ${style.border} ${style.hoverBg} p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden`}>
                  <div className={`absolute -right-8 -bottom-8 w-24 h-24 ${style.glow} rounded-full blur-2xl pointer-events-none`} />
                  <div className={`p-3.5 rounded-2xl mb-6 inline-flex border ${style.icon} shadow-sm group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-slate-800 dark:text-white group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{v.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed text-justify">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Gallery Section */}
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors relative border-t border-slate-200 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-gold-500 uppercase tracking-widest block mb-2">Visual Showcase</span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Our Developments & Site Visits</h3>
            <div className="h-1 w-20 bg-gradient-gold mx-auto mt-4 rounded-full" />
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto mt-4 leading-relaxed">
              Take a visual tour of our ongoing plot developments, smart city roads, finished villa landscaping, and investor site surveys.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Dholera Expressway Link",
                desc: "High-speed highway access under construction.",
                img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Premium Villa Plots",
                desc: "Fully leveled premium residential land plots.",
                img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Infrastructure Development",
                desc: "Installing sewage and underground utilities.",
                img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Smart Gated Society",
                desc: "Artist concept of finished gated township layout.",
                img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80"
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-md border border-slate-200/50 dark:border-slate-800/40 bg-slate-100 dark:bg-slate-900 aspect-[4/3] hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  <p className="text-[10px] text-slate-300 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Dashboard with Dynamic Hover Effects */}
      <section className="py-24 bg-slate-50/50 dark:bg-slate-900/30 transition-colors border-t border-slate-200 dark:border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-gold-500 uppercase tracking-widest block mb-2">Leadership</span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Our Board of Directors</h3>
            <div className="h-1 w-20 bg-gradient-gold mx-auto mt-4 rounded-full" />
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto mt-4 leading-relaxed">
              Guided by a highly experienced executive team managing land pooling, legality, engineering, and corporate strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((m, idx) => {
              const tc = getTeamColors(m.color);
              return (
                <div key={idx} className={`group bg-white dark:bg-slate-950 border border-slate-200/50 dark:border-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl flex flex-col h-full hover:-translate-y-1.5 transition-all duration-300 ${tc.border}`}>
                  <div className="h-80 overflow-hidden bg-slate-100 dark:bg-slate-900 relative">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />
                    {/* Glowing Top Ribbon */}
                    <div className={`absolute top-0 left-0 right-0 h-1.5 ${tc.ribbon}`} />
                  </div>
                  <div className="p-6 flex-grow flex flex-col relative">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors">{m.name}</h4>
                    <div className="flex mt-1.5 mb-4">
                      <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md border ${tc.role}`}>
                        {m.role}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed flex-grow text-justify">
                      {m.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Summary Panel */}
      <div className="relative z-10 border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950">
        <StatsSection />
      </div>
    </div>
  );
};

export default About;
