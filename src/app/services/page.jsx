'use client';

import React from 'react';
import Link from 'next/link';
import { Home, Briefcase, Factory, HelpCircle, FileText, BarChart3 } from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      title: 'Residential Plots',
      desc: 'Aggregating and designing premium gated villa communities. Equipped with internal asphalt roads, continuous water grids, grid power, security, and landscape parks.',
      icon: Home,
      color: 'text-emerald-500 bg-emerald-50 dark:bg-slate-900',
    },
    {
      title: 'Commercial Plots',
      desc: 'Strategic commercial lands in TPS 1 and TPS 2 (Central Business District). Ideal for high-density retail malls, office centers, and standard corporate ventures.',
      icon: Briefcase,
      color: 'text-blue-500 bg-blue-50 dark:bg-slate-900',
    },
    {
      title: 'Industrial Plots',
      desc: 'Heavy-duty industrial lands equipped with massive access corridors, gas line networks, high-voltage power substations, and freight logistics integration.',
      icon: Factory,
      color: 'text-purple-500 bg-purple-50 dark:bg-slate-900',
    },
    {
      title: 'Property Consultation',
      desc: 'Bespoke end-to-end guidance to identify suitable plots that align with your budget, layout criteria, and capital gains time horizons.',
      icon: HelpCircle,
      color: 'text-amber-500 bg-amber-50 dark:bg-slate-900',
    },
    {
      title: 'Legal Assistance',
      desc: 'Streamlining purchase documentations, Title Clearance Certificates, NA (Non-Agricultural) permissions, RERA registrations, and formal deed registrations.',
      icon: FileText,
      color: 'text-rose-500 bg-rose-50 dark:bg-slate-900',
    },
    {
      title: 'Investment Advisory',
      desc: 'Expert market forecasting, TP Scheme mapping analysis, and portfolio diversification strategies tailored specifically for NRI and local retail investors.',
      icon: BarChart3,
      color: 'text-indigo-500 bg-indigo-50 dark:bg-slate-900',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-900 dark:bg-slate-950 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80"
            alt="Rudra Services advisory"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900 dark:from-slate-950"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Our Services
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Professional consultation, secure land acquisitions, legal clearance, and high-yield investment structures in Dholera SIR.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className={`p-4 rounded-xl ${service.color} w-14 h-14 flex items-center justify-center shadow-sm`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">{service.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advisory CTA panel */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/30 border-t border-slate-100 dark:border-slate-900 transition-colors text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest">Connect</h2>
          <h3 className="text-3xl font-extrabold text-slate-800 dark:text-white leading-tight">
            Request a Custom Investment Proposal
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Connect with our dedicated advisors. We will help draft site visit checklists, legal clearance certificate templates, and details about upcoming land auction timelines in Dholera SIR.
          </p>
          <div className="pt-4">
            <Link
              href="/contact?property=General%20Inquiry"
              className="inline-block px-8 py-4 bg-gradient-gold text-white font-bold rounded-xl transition-all hover:scale-102 hover:shadow-lg"
            >
              Request Custom Proposal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
