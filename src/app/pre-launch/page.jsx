'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { Rocket, Calendar, MapPin, Tag, ArrowRight, Clock, Phone, Sparkles } from 'lucide-react';

// Countdown hook — recomputes every second
function useCountdown(targetDate) {
  const calc = useCallback(() => {
    const diff = new Date(targetDate) - new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, launched: true };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      launched: false,
    };
  }, [targetDate]);

  const [time, setTime] = useState(calc);

  useEffect(() => {
    const interval = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(interval);
  }, [calc]);

  return time;
}// Individual countdown card
function CountdownDisplay({ targetDate }) {
  const { days, hours, minutes, seconds, launched } = useCountdown(targetDate);

  if (launched) {
    return (
      <div className="flex items-center space-x-2 px-4 py-2 bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 dark:border-emerald-500/30 rounded-xl text-emerald-650 dark:text-emerald-400 text-xs font-bold transition-all">
        <Sparkles className="h-4 w-4 animate-pulse" />
        <span>Now Launched!</span>
      </div>
    );
  }

  const pads = (n) => String(n).padStart(2, '0');

  return (
    <div className="flex items-center space-x-2">
      {[
        { val: pads(days), label: 'Days' },
        { val: pads(hours), label: 'Hrs' },
        { val: pads(minutes), label: 'Min' },
        { val: pads(seconds), label: 'Sec' },
      ].map(({ val, label }, i) => (
        <React.Fragment key={label}>
          <div className="text-center">
            <div className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 min-w-[52px] transition-all">
              <span className="text-xl font-extrabold text-slate-800 dark:text-white tabular-nums block leading-none">{val}</span>
              <span className="text-[9px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider mt-0.5 block">{label}</span>
            </div>
          </div>
          {i < 3 && <span className="text-gold-500 font-extrabold text-lg pb-4">:</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

const STATIC_ITEMS = [
  {
    _id: 's1',
    heading: 'Orchid Sky Residences — Phase III',
    description: 'The most anticipated villa township in Dholera SIR is coming — featuring sky-facing terraces, private swimming pools, ultra-smart home systems, and direct expressway access. Register your interest now to get early-bird pricing.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    launchDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString(), // 15 days from now
    category: 'Residential',
    location: 'TPS-2, Dholera SIR',
    priceRange: '₹45 Lakh – ₹1.2 Cr',
  },
  {
    _id: 's2',
    heading: 'Rudra Commerce Hub — CBD Block A',
    description: 'Prime commercial plots in the Central Business District of Dholera SIR, adjacent to the proposed metro station and expressway interchange. Designed for retail anchors, corporate headquarters, and hospitality ventures.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    launchDate: new Date(Date.now() + 32 * 24 * 60 * 60 * 1000).toISOString(), // 32 days from now
    category: 'Commercial',
    location: 'CBD Zone, Dholera SIR',
    priceRange: '₹80 Lakh – ₹3.5 Cr',
  },
  {
    _id: 's3',
    heading: 'Industrial Mega Park — Sector 6',
    description: 'Large-format industrial parcels built for heavy manufacturing, warehouse logistics, and tier-1 industrial supply chain operations. Located near the proposed freight corridor and Dholera International Airport. DMIC-eligible investment zones.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    launchDate: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString(), // 60 days from now
    category: 'Industrial',
    location: 'Sector 6, Dholera SIR',
    priceRange: '₹1.5 Cr – ₹8 Cr',
  },
];

const CATEGORY_COLORS = {
  Residential: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  Commercial:  'text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20',
  Industrial:  'text-purple-600 dark:text-purple-400 bg-purple-500/10 border-purple-500/20',
};

export default function PreLaunchPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || `http://localhost:5000`}/api/prelaunches`);
        if (res.ok) {
          const data = await res.json();
          setItems(data.length > 0 ? data : STATIC_ITEMS);
        } else {
          setItems(STATIC_ITEMS);
        }
      } catch {
        setItems(STATIC_ITEMS);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">

      {/* ── HERO BANNER ── */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-900 transition-colors duration-300">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/5 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/5 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30 dark:opacity-10" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center z-10 space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full text-gold-650 dark:text-gold-400 text-[10px] font-bold uppercase tracking-widest">
            <Rocket className="h-3.5 w-3.5 animate-bounce" />
            <span>Coming Soon</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
            Upcoming <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 dark:from-gold-400 dark:via-amber-400 dark:to-gold-500">Pre-Launch</span>
            <br />Properties
          </h1>
          <p className="text-slate-605 dark:text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Be the first to invest. Register your interest now and lock early-bird pricing before public launch on Rudra Group&apos;s most anticipated projects in Dholera SIR.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <Link
              href="/contact?property=Pre-Launch Interest"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-gold text-white font-bold rounded-xl text-sm hover:opacity-90 transition-all hover:shadow-lg hover:shadow-gold-500/20"
            >
              <span>Register Early Interest</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+919000000000"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white font-bold rounded-xl text-sm transition-all"
            >
              <Phone className="h-4 w-4 text-gold-500 dark:text-gold-400" />
              <span>Call for Details</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── LISTINGS ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/40 flex-grow transition-colors duration-300">
        <div className="max-w-7xl mx-auto space-y-10">

          {loading ? (
            // Skeleton loaders
            [1, 2, 3].map(i => (
              <div key={i} className="animate-pulse bg-slate-100 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/30 rounded-3xl overflow-hidden flex flex-col lg:flex-row h-72" />
            ))
          ) : error ? (
            <div className="text-center py-24 text-slate-500 dark:text-slate-400">
              <Rocket className="h-12 w-12 mx-auto mb-4 text-slate-300 dark:text-slate-750" />
              <p className="font-bold text-rose-500 dark:text-rose-400 mb-2">Unable to connect to server</p>
              <p className="text-sm">Using local static data.</p>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-24 text-slate-500 dark:text-slate-400">
              <Rocket className="h-12 w-12 mx-auto mb-4 text-slate-300 dark:text-slate-750" />
              <p className="font-bold text-lg mb-2">No upcoming launches yet.</p>
              <p className="text-sm">Admin can add pre-launch listings from the Admin Panel.</p>
            </div>
          ) : (
            items.map((item, index) => {
              const catColor = CATEGORY_COLORS[item.category] || 'text-gold-500 dark:text-gold-400 bg-gold-500/10 border-gold-500/20';
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item._id}
                  className="group bg-slate-50/40 dark:bg-slate-900/20 border border-slate-200/60 dark:border-slate-800/50 hover:border-gold-500/30 dark:hover:border-gold-500/30 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-xl dark:hover:shadow-gold-500/[0.02] flex flex-col lg:flex-row"
                >
                  {/* Image (alternating sides) */}
                  <div className={`relative lg:w-[42%] h-64 lg:h-auto shrink-0 overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <img
                      src={item.image || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'}
                      alt={item.heading}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900/40" />
                    {/* Category badge on image */}
                    <span className={`absolute top-5 left-5 px-3 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-widest border z-10 ${catColor}`}>
                      {item.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className={`flex flex-col justify-between p-8 lg:p-10 flex-grow ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    {/* Top: Meta info */}
                    <div className="space-y-5">
                      <div className="flex flex-wrap gap-3 text-[10px] font-bold text-slate-500 dark:text-slate-400">
                        {item.location && (
                          <span className="flex items-center space-x-1">
                            <MapPin className="h-3.5 w-3.5 text-gold-500" />
                            <span>{item.location}</span>
                          </span>
                        )}
                        {item.priceRange && (
                          <span className="flex items-center space-x-1">
                            <Tag className="h-3.5 w-3.5 text-gold-500" />
                            <span>{item.priceRange}</span>
                          </span>
                        )}
                        <span className="flex items-center space-x-1">
                          <Calendar className="h-3.5 w-3.5 text-gold-500" />
                          <span>Launch: {new Date(item.launchDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-white group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors leading-snug">
                        {item.heading}
                      </h2>

                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom: Countdown + CTA */}
                    <div className="mt-8 space-y-5">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                          <Clock className="h-3.5 w-3.5 text-gold-500" />
                          <span>Launching In</span>
                        </div>
                        <CountdownDisplay targetDate={item.launchDate} />
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          href={`/contact?property=${encodeURIComponent('Pre-Launch: ' + item.heading)}`}
                          className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-gold text-white font-bold rounded-xl text-xs hover:opacity-90 transition-all hover:shadow-lg hover:shadow-gold-500/20"
                        >
                          <span>Register Interest</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                        <a
                          href="tel:+919000000000"
                          className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/60 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-xl text-xs transition-all"
                        >
                          <Phone className="h-3.5 w-3.5 text-gold-500 dark:text-gold-400" />
                          <span>Call Now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* ── NOTIFY ME STRIP ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-white">
            Don&apos;t miss the launch window
          </h3>
          <p className="text-slate-655 dark:text-slate-400 text-sm leading-relaxed">
            Pre-launch prices are available for a limited time and often sell out within 48 hours. Register now to receive priority access, detailed brochures, and early-bird payment plans.
          </p>
          <form
            className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 pt-2"
            onSubmit={(e) => { e.preventDefault(); alert('Thank you! We will notify you before the launch.'); }}
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-grow px-5 py-3.5 bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-750 rounded-xl text-slate-800 dark:text-white text-xs placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-gold-500 focus:border-gold-500 transition-all"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-gradient-gold text-white font-bold rounded-xl text-xs shrink-0 hover:opacity-90 transition-all"
            >
              Notify Me
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
