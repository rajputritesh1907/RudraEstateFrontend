'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import LeadForm from '../../components/LeadForm';
import FAQAccordion from '../../components/FAQAccordion';

const offices = [
  {
    title: 'Corporate Head Office',
    address: '304-306, Signature-1, Near Iscon Cross Road, SG Highway, Ahmedabad, Gujarat 380051',
    phone: '+91 900 000 0000',
    email: 'info@rudragroup.com',
  },
  {
    title: 'Dholera Site Office',
    address: 'Shop No. 12, Prime Plaza, Main Activation Highway, Dholera SIR, Gujarat 382455',
    phone: '+91 900 000 0001',
    email: 'dholera@rudragroup.com',
  },
  {
    title: 'Regional Office (Gwalior)',
    address: 'First Floor, Tomar Chambers, Lashkar, Gwalior, Madhya Pradesh 474001',
    phone: '+91 751 000 0000',
    email: 'gwalior@rudragroup.com',
  }
];

function ContactContent() {
  const searchParams = useSearchParams();
  const propertyParam = searchParams.get('property') || 'General Inquiry';

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-900 dark:bg-slate-950 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=80"
            alt="Rudra Offices Hub"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900 dark:from-slate-950"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Contact Rudra Group
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have questions about land parcels or site visits? Reach out to our regional offices or submit a query.
          </p>
        </div>
      </section>

      {/* Main Info Columns */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Offices & Details */}
            <div className="lg:col-span-5 space-y-8">
              <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest">Offices</h2>
              <h3 className="text-3xl font-extrabold text-slate-800 dark:text-white">Our Coordinates</h3>
              
              <div className="space-y-6">
                {offices.map((office, idx) => (
                  <div key={idx} className="p-5 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl space-y-3">
                    <h4 className="font-bold text-sm uppercase text-gold-500 tracking-wider">{office.title}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 flex items-start">
                      <MapPin className="h-4 w-4 text-gold-500 mr-2 shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 flex items-center">
                      <Phone className="h-4 w-4 text-gold-500 mr-2 shrink-0" />
                      <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="hover:text-gold-500 transition-colors">{office.phone}</a>
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 flex items-center">
                      <Mail className="h-4 w-4 text-gold-500 mr-2 shrink-0" />
                      <a href={`mailto:${office.email}`} className="hover:text-gold-500 transition-colors">{office.email}</a>
                    </p>
                  </div>
                ))}
              </div>

              {/* Hours / RERA */}
              <div className="p-5 bg-navy-800 text-slate-300 rounded-2xl space-y-4 border border-gold-500/10">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-gold-500 shrink-0" />
                  <div>
                    <p className="text-xs font-bold uppercase text-gold-400">Office Working Hours</p>
                    <p className="text-xs mt-0.5">Mon - Sat: 09:30 AM to 06:30 PM (Sunday Closed)</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 pt-2 border-t border-slate-700/50">
                  <ShieldCheck className="h-5 w-5 text-gold-500 shrink-0" />
                  <div>
                    <p className="text-xs font-bold uppercase text-gold-400">RERA Registered</p>
                    <p className="text-xs mt-0.5">Approved titles & construction blueprints under RERA Gujarat regulations.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <LeadForm defaultProperty={propertyParam} />
            </div>
          </div>
        </div>
      </section>

      {/* Styled Map Placeholder Section */}
      <section className="h-96 relative bg-slate-100 dark:bg-slate-900 transition-colors border-y border-slate-200/50 dark:border-slate-800/50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-2 z-10 px-4">
            <MapPin className="h-10 w-10 text-gold-500 mx-auto animate-bounce" />
            <h4 className="font-extrabold text-lg text-slate-800 dark:text-white">Rudra Signature Offices</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
              SG Highway, Ahmedabad, Gujarat (GPS: 23.0298° N, 72.5065° E)
            </p>
          </div>
          <div className="absolute inset-0 opacity-15 dark:opacity-5 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/30 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-2">FAQ</h2>
            <h3 className="text-3xl font-extrabold text-slate-800 dark:text-white">Frequently Asked Questions</h3>
          </div>
          
          <FAQAccordion />
        </div>
      </section>
    </div>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading contact channels...</div>}>
      <ContactContent />
    </Suspense>
  );
}
