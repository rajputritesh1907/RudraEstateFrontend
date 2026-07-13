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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Offices & Details */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
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

              {/* Inline Map */}
              <div className="rounded-2xl overflow-hidden border border-slate-200/50 dark:border-slate-800/50 flex-1 min-h-48">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8982902038!2d72.50317137601588!3d23.030165215718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848abad45555%3A0x4fcedd11614c23b3!2sSignature%201%2C%20Nr.%20ISCON%20Cross%20Road%2C%20Sarkhej%20-%20Gandhinagar%20Hwy%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1689000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 transition-all duration-300"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>

            </div>

            {/* Form Column */}
            <div className="lg:col-span-7 space-y-6">
              <LeadForm defaultProperty={propertyParam} />

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
          </div>
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
