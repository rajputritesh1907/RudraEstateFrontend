'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Layers, Compass, BadgePercent, Gavel, BadgeCheck, FileCheck, TrendingUp, MapPin, ShieldCheck } from 'lucide-react';
import LeadForm from '../../components/LeadForm';

const LandDeals = () => {
  const deals = [
    {
      id: 'L01',
      title: 'CBD Corner Commercial Plot',
      tps: 'TPS 1 (Central Business District)',
      zone: 'Commercial / Mixed Use',
      size: '8,500 sq.ft.',
      highlights: 'Prime corner plot next to corporate Boulevard. Ideal for multi-story commercial construction.',
      status: 'Available',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'L02',
      title: 'High-Density Residential Block',
      tps: 'TPS 2 (Activation Area Boundary)',
      zone: 'Residential (High Rise permitted)',
      size: '15,000 sq.ft.',
      highlights: 'Close proximity to the planned Ahmedabad-Dholera Metro Station. Ideal for housing societies.',
      status: 'Available',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'L03',
      title: 'Industrial Manufacturing Land',
      tps: 'TPS 2 (Industrial Subzone)',
      zone: 'Light Industrial / Logistics',
      size: '45,000 sq.ft.',
      highlights: 'Direct link to heavy transit corridor. Heavy power grid connection already available at site border.',
      status: 'Available',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'L04',
      title: 'Gated Villa Sector Plot',
      tps: 'TPS 1 (Near Riverfront)',
      zone: 'Residential (Low Rise)',
      size: '4,500 sq.ft.',
      highlights: 'Scenic river views, fully landscaped border. Inside Orchid premium gated enclave.',
      status: 'Reserved',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=400&q=80',
    }
  ];

  const router = useRouter();

  const handleInquiryTrigger = (dealTitle) => {
    router.push(`/contact?property=${encodeURIComponent(dealTitle)}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-900 dark:bg-slate-950 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80"
            alt="Rudra Land Parcels"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900 dark:from-slate-950"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Exclusive Land Deals
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            High-yield specific land listings categorized by Town Planning Schemes (TPS) and zone divisions in Dholera SIR.
          </p>
        </div>
      </section>

      {/* Listings Table */}
      <section className="py-16 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-2">Prime Listings</h2>
            <h3 className="text-3xl font-extrabold text-slate-800 dark:text-white">Active Land Parcels</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deals.map((deal) => {
              const isReserved = deal.status === 'Reserved';
              return (
                <div 
                  key={deal.id}
                  className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-gold-500/20 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Land Deal Image */}
                    <div className="w-full h-40 overflow-hidden relative group border-b border-slate-200/50 dark:border-slate-800">
                      <img 
                        src={deal.image} 
                        alt={deal.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                      
                      {/* Floating ID & Status Badge */}
                      <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
                        <span className="text-[9px] font-extrabold tracking-wider uppercase px-2 py-0.5 bg-navy-900/90 text-gold-400 rounded-md backdrop-blur-sm border border-gold-500/20">
                          ID: {deal.id}
                        </span>
                        <span className={`text-[9px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded-md backdrop-blur-sm ${
                          isReserved 
                            ? 'bg-slate-900/80 text-slate-400 border border-slate-800/50' 
                            : 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/20'
                        }`}>
                          {deal.status}
                        </span>
                      </div>
                    </div>

                    {/* Land Deal Info */}
                    <div className="p-5 space-y-4">
                      <h4 className="text-base font-bold text-slate-800 dark:text-white leading-tight min-h-[44px] line-clamp-2">
                        {deal.title}
                      </h4>
                      
                      <div className="space-y-2 py-2.5 border-y border-slate-200/40 dark:border-slate-800/40 text-[11px] text-slate-600 dark:text-slate-400">
                        <div className="flex items-center space-x-1.5">
                          <Layers className="h-3.5 w-3.5 text-gold-500 shrink-0" />
                          <span className="truncate"><strong className="font-semibold text-slate-700 dark:text-slate-350">Scheme:</strong> {deal.tps}</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <Compass className="h-3.5 w-3.5 text-gold-500 shrink-0" />
                          <span className="truncate"><strong className="font-semibold text-slate-700 dark:text-slate-350">Zoning:</strong> {deal.zone}</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <BadgePercent className="h-3.5 w-3.5 text-gold-500 shrink-0" />
                          <span className="truncate"><strong className="font-semibold text-slate-700 dark:text-slate-350">Size:</strong> {deal.size}</span>
                        </div>
                      </div>

                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3 min-h-[50px]">
                        {deal.highlights}
                      </p>
                    </div>
                  </div>

                  {/* Request Button */}
                  <div className="p-5 pt-0">
                    <button
                      onClick={() => handleInquiryTrigger(deal.title)}
                      disabled={isReserved}
                      className={`w-full py-3 rounded-xl font-bold text-xs transition-all ${
                        isReserved
                          ? 'bg-slate-200 text-slate-400 dark:bg-slate-800 cursor-not-allowed'
                          : 'bg-navy-800 text-gold-400 hover:bg-gold-500 hover:text-white border border-gold-500/20 hover:border-gold-500 shadow-sm'
                      }`}
                    >
                      {isReserved ? 'Reserved' : 'Request Quotation'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Legality Banner */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-600 text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative">
        {/* Background decorative grid */}
        <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay overflow-hidden">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center relative z-10">
          {/* Feature 1 */}
          <div className="relative pt-10 flex flex-col items-center">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 flex items-center justify-center w-20 h-20 bg-blue-500 border-4 border-white dark:border-slate-950 rounded-full text-white shadow-lg z-20">
              <Gavel className="h-8 w-8" />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold tracking-tight mb-3">100% Legal Verification</h4>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xs leading-relaxed">
              Every land parcel comes with complete legal verification and due diligence
            </p>
          </div>

          {/* Feature 2 */}
          <div className="relative pt-10 flex flex-col items-center">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 flex items-center justify-center w-20 h-20 bg-blue-500 border-4 border-white dark:border-slate-950 rounded-full text-white shadow-lg z-20">
              <BadgeCheck className="h-8 w-8" />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold tracking-tight mb-3">Clear Title</h4>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xs leading-relaxed">
              All properties have clear, marketable title with no legal encumbrances
            </p>
          </div>

          {/* Feature 3 */}
          <div className="relative pt-10 flex flex-col items-center">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 flex items-center justify-center w-20 h-20 bg-blue-500 border-4 border-white dark:border-slate-950 rounded-full text-white shadow-lg z-20">
              <FileCheck className="h-8 w-8" />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold tracking-tight mb-3">Government Approved TP Schemes</h4>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xs leading-relaxed">
              All land deals are part of government-approved Town Planning Schemes
            </p>
          </div>
        </div>
      </section>

      {/* Investment Benefits Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/25 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
              Investment Benefits
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white relative inline-block">
              Why Invest in <span className="text-blue-600 dark:text-blue-400">Dholera SIR Land</span>?
              <span className="absolute bottom-[-8px] left-1/4 right-1/4 h-1 bg-blue-600 dark:bg-blue-400 rounded-full" />
            </h3>
            <p className="text-sm sm:text-base text-slate-550 dark:text-slate-400 max-w-xl mx-auto pt-2 leading-relaxed">
              Secure your future with strategic land investments in India&apos;s first planned smart city
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-blue-500/20 dark:border-blue-900/30 shadow-md flex flex-col items-center text-center space-y-4 hover:shadow-lg transition-shadow">
              <div className="p-4 bg-blue-650 text-white rounded-2xl shadow-md">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 dark:text-white">High ROI Potential</h4>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                With government-backed infrastructure development, land values in Dholera SIR are projected to appreciate significantly over the coming years.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-emerald-500/20 dark:border-emerald-900/30 shadow-md flex flex-col items-center text-center space-y-4 hover:shadow-lg transition-shadow">
              <div className="p-4 bg-emerald-600 text-white rounded-2xl shadow-md">
                <MapPin className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 dark:text-white">Strategic Location</h4>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Located in the Delhi-Mumbai Industrial Corridor with excellent connectivity to major cities, ports, and transportation hubs.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-purple-500/20 dark:border-purple-900/30 shadow-md flex flex-col items-center text-center space-y-4 hover:shadow-lg transition-shadow">
              <div className="p-4 bg-purple-600 text-white rounded-2xl shadow-md">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 dark:text-white">Secure Investment</h4>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Government-approved project with clear titles, proper documentation, and transparent processes ensuring your investment is secure.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Lead/Contact Form Section */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Info details on the left */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                Investment Consultation
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Secure Your Land Plot in Dholera SIR Today
              </h3>
              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                Dholera is India&apos;s fastest-growing industrial smart city. Take advantage of early-stage pricing, 100% legally clear land plots, and seamless government allotment support. Get in touch with our investment advisors now.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-3">
                  <div className="p-1 bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-md mt-1">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-800 dark:text-white text-sm">Flexible Payment Plans</h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Tailored payment schedules to suit your financial flow.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-1 bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-md mt-1">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-800 dark:text-white text-sm">On-Site Guided Visits</h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Complimentary corporate transport and guided site surveys.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form on the right */}
            <div className="lg:col-span-6">
              <LeadForm defaultProperty="Other Land Deals" />
            </div>

          </div>
        </div>
      </section>


    </div>
  );
};

export default LandDeals;
