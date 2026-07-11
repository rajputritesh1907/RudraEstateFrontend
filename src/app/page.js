'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, ShieldCheck, MapPin, Zap, Plane, Train, Cpu, Building, Factory, FileText, HandshakeIcon, Search, BadgeCheck, PhoneCall, ChevronLeft, ChevronRight, Mail, Award, Sparkles, Home as HomeIcon, Briefcase, BarChart3, HelpCircle } from 'lucide-react';
import StatsSection from '../components/StatsSection';
import ProjectCard from '../components/ProjectCard';
import LeadForm from '../components/LeadForm';

const STATIC_FEATURED = [
  {
    _id: '1', title: "Orchid River View", phase: "Phase I", status: "Active", type: "Residential",
    description: "Premium river-facing residential plots in Dholera SIR with world-class amenities, close connectivity to the express highway, and a serene lifestyle environment.",
    location: "Dholera SIR", priceRange: "₹18 Lakh - ₹45 Lakh", sizeRange: "1,500 - 4,000 sq.ft.",
    amenities: ["Riverfront Walkway", "24/7 Security", "Clubhouse Area"],
    highlights: ["High Return Investment", "Near Activation Area"],
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80", featured: true
  },
  {
    _id: '2', title: "Orchid Villa Greens", phase: "Phase II", status: "Active", type: "Residential",
    description: "Eco-friendly premium villa townships designed for modern sustainable living, complete with solar lighting, community gardening, and premium landscapes.",
    location: "Dholera SIR", priceRange: "₹25 Lakh - ₹60 Lakh", sizeRange: "2,500 - 6,000 sq.ft.",
    amenities: ["Solar Energy Supply", "Swimming Pool"],
    highlights: ["Eco-friendly Development", "TPS 2 Location"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", featured: true
  },
  {
    _id: '3', title: "Orchid Villa Luxuriya", phase: "Phase I", status: "Active", type: "Residential",
    description: "Luxury gated villa community features a personal golf course, smart access systems, individual swimming pools, and signature designer landscaping.",
    location: "Dholera SIR", priceRange: "₹35 Lakh - ₹90 Lakh", sizeRange: "3,000 - 7,000 sq.ft.",
    amenities: ["Smart Gated System", "Golf Course Access"],
    highlights: ["Ultra-luxury Gated Community", "Immediate Possession"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80", featured: true
  }
];


export default function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProperty, setSelectedProperty] = useState('General Inquiry');
  const [testimonials, setTestimonials] = useState([]);
  const [testimonialsLoading, setTestimonialsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 640) {
          setVisibleCount(1);
        } else if (window.innerWidth < 1024) {
          setVisibleCount(2);
        } else {
          setVisibleCount(3);
        }
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const maxSlides = testimonials.length - visibleCount;
        if (maxSlides <= 0) return 0;
        return prev >= maxSlides ? 0 : prev + 1;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [testimonials.length, visibleCount]);

  useEffect(() => { 
    fetchProjects(); 
    fetchTestimonials();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch('${process.env.NEXT_PUBLIC_API_URL || `http://localhost:5000`}/api/projects');
      if (res.ok) {
        const data = await res.json();
        const featured = data.filter(p => p.featured === true || p.status === 'Active');
        setProjects(featured.length > 0 ? featured.slice(0, 3) : STATIC_FEATURED);
      } else { setProjects(STATIC_FEATURED); }
    } catch { setProjects(STATIC_FEATURED); }
    finally { setLoading(false); }
  };

  const fetchTestimonials = async () => {
    try {
      const res = await fetch('${process.env.NEXT_PUBLIC_API_URL || `http://localhost:5000`}/api/testimonials');
      if (res.ok) {
        const data = await res.json();
        setTestimonials(data);
      }
    } catch (err) {
      console.error('Failed to fetch testimonials:', err);
    } finally {
      setTestimonialsLoading(false);
    }
  };

  const handleInquiryTrigger = (propertyName) => {
    setSelectedProperty(propertyName);
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">

      {/* ── HERO ── */}
      <section className="sticky top-20 h-[calc(100vh-80px)] bg-slate-950 text-white flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8 z-0">
        <div className="absolute inset-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80">
            <source src="/video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/70" />
        </div>
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto text-center z-10 px-4 sm:px-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-950/60 backdrop-blur-md border border-slate-800/80 rounded-full text-gold-400 text-xs font-semibold tracking-widest uppercase mb-8 shadow-inner">
            <Star className="h-4 w-4 fill-current text-gold-500 animate-pulse" />
            <span>RERA Registered Developer in Dholera SIR</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-white">
            Leading Real Estate Developer in <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500">
              Dholera SIR Smart City
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed tracking-wide">
            Rudra Group offers premium residential villa plots, strategic commercial land, and heavy industrial parcels in India&apos;s first greenfield smart city.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/projects" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-600 hover:to-amber-700 text-slate-950 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 text-sm tracking-wider uppercase text-center">
              Explore Land Deals
            </Link>
            <button onClick={() => handleInquiryTrigger('General Consultation')} className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-0.5 text-sm tracking-wider uppercase">
              Book Consultation
            </button>
          </div>
        </div>
      </section>

      {/* ── SCROLL-OVER WRAPPER ── */}
      <div className="relative z-10 bg-white dark:bg-slate-950 shadow-2xl">

        {/* Stats */}
        <StatsSection />

        {/* ── DHOLERA SIR HIGHLIGHT ── */}
        <section className="sticky top-20 z-0 py-20 bg-emerald-50/60 dark:bg-slate-900/40 border-y border-emerald-100/80 dark:border-slate-800 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-xs font-extrabold tracking-widest uppercase text-gold-500">The Next Global Hub</p>
                <div>
                  <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-800 dark:text-white leading-tight">India&apos;s First</h2>
                  <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-600 dark:text-blue-400 leading-tight">Semiconductor City</h2>
                </div>
                <blockquote className="border-l-4 border-gold-500 pl-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base italic leading-relaxed">
                  &ldquo;Dholera SIR is 2x the size of Mumbai and bigger than Singapore. It is the flagship node of the $100 Billion Delhi-Mumbai Industrial Corridor (DMIC).&rdquo;
                </blockquote>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed text-justify">
                  The future has arrived. With <strong className="text-slate-700 dark:text-slate-200">Tata Electronics</strong> setting up India&apos;s first Semiconductor Fabrication Plant ($11 Billion investment), Dholera is rapidly transforming into a global manufacturing powerhouse.
                </p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 pt-2">
                  {[
                    { icon: <Cpu className="h-4 w-4" />, label: 'Tata Semiconductor Hub' },
                    { icon: <Train className="h-4 w-4" />, label: 'High-Speed Metro' },
                    { icon: <Plane className="h-4 w-4" />, label: "Int'l Airport (2026)" },
                    { icon: <Zap className="h-4 w-4" />, label: 'Lowest Power Tariff' },
                  ].map(({ icon, label }) => (
                    <div key={label} className="flex items-center space-x-2 text-slate-700 dark:text-slate-300">
                      <span className="p-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-md shrink-0">{icon}</span>
                      <span className="text-sm font-semibold">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Neighborhood animation video — plays like a GIF */}
                <video
                  src="https://cdnl.iconscout.com/lottie/premium/thumb/neighborhood-animation-gif-download-10872020.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[420px] object-cover"
                />
                {/* Subtle dark gradient bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
                {/* Stats card overlay */}
                <div className="absolute bottom-5 left-5 bg-white dark:bg-slate-900 rounded-xl shadow-lg px-5 py-4 border border-slate-100 dark:border-slate-800">
                  <p className="text-xl font-extrabold text-blue-600 dark:text-blue-400">920 Sq. Km</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">Total Developable Area<br />(22 Villages)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY DHOLERA SIR ── */}
        <section className="relative z-10 py-24 bg-slate-900 dark:bg-slate-950 overflow-hidden">
          {/* Background Image with dark overlay */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80" 
              alt="Dholera Smart City Infrastructure Background" 
              className="w-full h-full object-cover opacity-30 dark:opacity-40 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/40 to-slate-900/90 dark:from-slate-950/90 dark:via-slate-950/40 dark:to-slate-950/90" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-gold-500 uppercase tracking-widest">Smart Investment</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 leading-tight">
                Why <span className="text-gold-400">Dholera SIR?</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
                Dholera SIR isn&apos;t just India&apos;s biggest greenfield smart city &mdash; it&apos;s the country&apos;s single largest real estate opportunity of the next 25 years.
              </p>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {[
                { value: '920', unit: 'Sq. Km', label: 'Planned City Area' },
                { value: '$100B', unit: 'DMIC', label: 'Corridor Investment' },
                { value: '22', unit: 'Villages', label: 'Covered Region' },
                { value: '2×', unit: 'Mumbai', label: 'Larger Than Mumbai' },
              ].map(({ value, unit, label }) => (
                <div key={label} className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-3 sm:p-5 text-center flex flex-col justify-center min-h-[100px] sm:min-h-0">
                  <p className="text-2xl sm:text-3xl font-extrabold text-white">{value} <span className="text-gold-400 text-base sm:text-lg">{unit}</span></p>
                  <p className="text-[10px] sm:text-xs text-slate-400 mt-1 font-medium uppercase tracking-wider break-normal line-clamp-2">{label}</p>
                </div>
              ))}
            </div>

            {/* Reason cards — 3 cols */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Cpu className="h-6 w-6" />,
                  color: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
                  title: 'Tata Semiconductor Plant',
                  desc: '$11 Billion Tata Electronics fab plant — the first of its kind in India — is being built in Dholera, making it a global tech manufacturing hub.',
                },
                {
                  icon: <Plane className="h-6 w-6" />,
                  color: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
                  title: 'International Airport (2026)',
                  desc: 'A greenfield international airport is under construction, connecting Dholera to global markets and boosting property demand significantly.',
                },
                {
                  icon: <Train className="h-6 w-6" />,
                  color: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
                  title: 'High-Speed Metro & Expressway',
                  desc: 'A 6-lane expressway and high-speed metro rail connecting Dholera to Ahmedabad (80 km) are operational, reducing travel time to 45 minutes.',
                },
                {
                  icon: <Zap className="h-6 w-6" />,
                  color: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
                  title: 'Lowest Power Tariff in India',
                  desc: 'Dholera offers the most competitive industrial power tariffs in the country, making it the preferred location for large-scale manufacturing.',
                },
                {
                  icon: <ShieldCheck className="h-6 w-6" />,
                  color: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
                  title: 'Government-Backed DMIC Node',
                  desc: 'A direct investment of the central government under the Delhi-Mumbai Industrial Corridor — ensuring consistent infrastructure funding and policy support.',
                },
                {
                  icon: <MapPin className="h-6 w-6" />,
                  color: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
                  title: 'Strategic Location in Gujarat',
                  desc: 'Situated in India\'s most industrially progressive state, Dholera benefits from Gujarat\'s pro-business policies, port access, and investor-friendly climate.',
                },
              ].map(({ icon, color, title, desc }) => (
                <div key={title} className="group bg-slate-800/40 border border-slate-700/50 hover:border-slate-600 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:-translate-y-0.5">
                  <div className={`inline-flex p-3 rounded-xl border mb-4 ${color}`}>
                    {icon}
                  </div>
                  <h4 className="text-white font-bold text-base mb-2 group-hover:text-gold-400 transition-colors">{title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section className="relative z-10 py-20 bg-slate-50 dark:bg-slate-900/40 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
              <div>
                <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-2">Our Projects</h2>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white">Projects</h3>
              </div>
              <Link href="/projects" className="mt-4 md:mt-0 px-5 py-2.5 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-gold-500 font-bold rounded-xl text-sm transition-all">
                See All Projects
              </Link>
            </div>
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map(i => <div key={i} className="animate-pulse bg-slate-100 dark:bg-slate-900 rounded-2xl h-72" />)}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map(project => (
                  <ProjectCard key={project._id} project={project} onInquire={handleInquiryTrigger} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── OUR SERVICES ── */}
        <section className="relative z-10 py-24 bg-white dark:bg-slate-950 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-gold-500 uppercase tracking-widest">What We Do</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-800 dark:text-white mt-3 leading-tight">
                Our <span className="text-blue-600 dark:text-blue-400">Services</span>
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto leading-relaxed">
                Professional consultation, secure land acquisitions, legal clearance, and high-yield investment structures in Dholera SIR.
              </p>
            </div>

            {/* Service cards grid — 3 cols */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: HomeIcon, color: 'text-emerald-500 bg-emerald-50 dark:bg-slate-900', title: 'Residential Plots', desc: 'Aggregating and designing premium gated villa communities. Equipped with internal asphalt roads, continuous water grids, grid power, security, and landscape parks.' },
                { icon: Briefcase, color: 'text-blue-500 bg-blue-50 dark:bg-slate-900', title: 'Commercial Plots', desc: 'Strategic commercial lands in TPS 1 and TPS 2 (Central Business District). Ideal for high-density retail malls, office centers, and standard corporate ventures.' },
                { icon: Factory, color: 'text-purple-500 bg-purple-50 dark:bg-slate-900', title: 'Industrial Plots', desc: 'Heavy-duty industrial lands equipped with massive access corridors, gas line networks, high-voltage power substations, and freight logistics integration.' },
                { icon: HelpCircle, color: 'text-amber-500 bg-amber-50 dark:bg-slate-900', title: 'Property Consultation', desc: 'Bespoke end-to-end guidance to identify suitable plots that align with your budget, layout criteria, and capital gains time horizons.' },
                { icon: FileText, color: 'text-rose-500 bg-rose-50 dark:bg-slate-900', title: 'Legal Assistance', desc: 'Streamlining purchase documentations, Title Clearance Certificates, NA permissions, RERA registrations, and formal deed registrations.' },
                { icon: BarChart3, color: 'text-indigo-500 bg-indigo-50 dark:bg-slate-900', title: 'Investment Advisory', desc: 'Expert market forecasting, TP Scheme mapping analysis, and portfolio diversification strategies tailored specifically for NRI and local retail investors.' },
              ].map(({ icon: Icon, color, title, desc }) => (
                <div
                  key={title}
                  className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-5">
                    <div className={`p-4 rounded-xl ${color} w-14 h-14 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Advisory CTA */}
            <div className="mt-16 bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800 rounded-3xl p-10 text-center space-y-5">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-white leading-tight">
                Request a Custom Investment Proposal
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl mx-auto">
                Connect with our dedicated advisors. We will help draft site visit checklists, legal clearance certificate templates, and details about upcoming land auction timelines in Dholera SIR.
              </p>
              <Link
                href="/contact?property=General%20Inquiry"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-gold text-white font-bold rounded-xl transition-all hover:opacity-90 hover:shadow-lg text-sm"
              >
                <span>Request Custom Proposal</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── ACHIEVEMENTS & AWARDS ── */}
        <section className="relative z-10 py-24 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-800 transition-colors overflow-hidden">
          {/* Subtle bg pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="ach-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ach-grid)" />
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-gold-500 uppercase tracking-widest">Accolades</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-800 dark:text-white mt-3 leading-tight">
                Awards & <span className="text-gold-500">Achievements</span>
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto leading-relaxed">
                Proudly delivering trustworthy, RERA-compliant, and award-winning real estate developments since 2010. Recognized nationally and regionally by prominent chambers and trade organizations.
              </p>
            </div>

            {/* Stats strip */}
            <StatsSection />

            {/* Award Cards — 2 cols */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              {[
                {
                  icon: Sparkles,
                  color: 'text-amber-500 bg-amber-50 dark:bg-slate-900 border-amber-100 dark:border-amber-900/30',
                  year: '2024',
                  title: 'Atmanirbhar Face of Bharat Award',
                  issuer: 'Union Ministry / National Industry Board',
                  desc: 'Awarded to Rudra Buildcon Pvt. Ltd. as the leading real estate developer fostering high-yield smart city infrastructure in Dholera SIR under the Atmanirbhar Bharat initiative.',
                },
                {
                  icon: Award,
                  color: 'text-emerald-500 bg-emerald-50 dark:bg-slate-900 border-emerald-100 dark:border-emerald-900/30',
                  year: '2022',
                  title: 'CREDAI Recognition Award',
                  issuer: 'Confederation of Real Estate Developers Association of India',
                  desc: 'Honoring our compliance standards, customer trust index, and premium quality execution in Dholera township developments.',
                },
                {
                  icon: Building,
                  color: 'text-blue-500 bg-blue-50 dark:bg-slate-900 border-blue-100 dark:border-blue-900/30',
                  year: '2022',
                  title: 'Gujarat Business Glory Award',
                  issuer: 'Gujarat Chamber of Commerce & Industry',
                  desc: 'Acknowledging Rudra Group as the fastest-growing land developer in the Dholera Special Investment Region (DSIR).',
                },
                {
                  icon: Award,
                  color: 'text-rose-500 bg-rose-50 dark:bg-slate-900 border-rose-100 dark:border-rose-900/30',
                  year: '2021',
                  title: '4th Edition India Business Award MSME',
                  issuer: 'Ministry of MSME / National Business Chamber',
                  desc: 'Recognizing operational excellence, legal transparency, and innovative land development planning.',
                },
              ].map(({ icon: Icon, color, year, title, issuer, desc }, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 flex items-start space-x-6 group hover:-translate-y-0.5"
                >
                  <div className={`p-4 rounded-2xl border shrink-0 ${color} group-hover:scale-110 transition-transform`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-extrabold text-gold-500 tracking-widest uppercase">
                      Awarded In {year}
                    </span>
                    <h4 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-gold-500 transition-colors">{title}</h4>
                    <p className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{issuer}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed pt-2">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="relative z-10 py-20 bg-slate-50 dark:bg-slate-900/10 border-t border-slate-100 dark:border-slate-800 transition-colors overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            
            {/* Header with Control Buttons */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
              <div className="text-center md:text-left">
                <span className="text-xs font-bold text-gold-500 uppercase tracking-widest">Client Reviews</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white mt-2">
                  What Our <span className="text-blue-600 dark:text-blue-400">Investors Say</span>
                </h2>
                <div className="h-1 w-20 bg-gradient-gold mt-4 rounded-full mx-auto md:mx-0" />
              </div>

              {/* Slider Arrows */}
              {!testimonialsLoading && testimonials.length > visibleCount && (
                <div className="flex space-x-3">
                  <button 
                    onClick={() => setCurrentSlide((prev) => prev === 0 ? testimonials.length - visibleCount : prev - 1)}
                    className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-gold-500 dark:hover:border-gold-500 hover:text-gold-500 text-slate-600 dark:text-slate-400 transition-all shadow-sm"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => setCurrentSlide((prev) => prev >= testimonials.length - visibleCount ? 0 : prev + 1)}
                    className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-gold-500 dark:hover:border-gold-500 hover:text-gold-500 text-slate-600 dark:text-slate-400 transition-all shadow-sm"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>

            {testimonialsLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map(i => (
                  <div key={i} className="animate-pulse bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl h-60 p-6 space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800" />
                      <div className="space-y-2 flex-grow">
                        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/2" />
                        <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-1/3" />
                      </div>
                    </div>
                    <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-full" />
                    <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-5/6" />
                    <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-2/3" />
                  </div>
                ))}
              </div>
            ) : testimonials.length === 0 ? (
              <div className="text-center py-10 text-slate-500">
                No testimonials posted yet.
              </div>
            ) : (
              <div className="relative overflow-hidden w-full py-4 -mx-3">
                <div 
                  className="flex transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${currentSlide * (100 / visibleCount)}%)` }}
                >
                  {testimonials.map((t) => (
                    <div 
                      key={t._id} 
                      className="shrink-0 px-3 flex"
                      style={{ width: `${100 / visibleCount}%` }}
                    >
                      <div className="w-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between">
                        {/* Stars */}
                        <div className="flex items-center space-x-1 mb-5">
                          {[...Array(t.rating)].map((_, idx) => (
                            <Star key={idx} className="h-4 w-4 fill-current text-amber-500" />
                          ))}
                        </div>

                        {/* Message */}
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed italic mb-8 flex-grow">
                          &ldquo;{t.message}&rdquo;
                        </p>

                        {/* Profile */}
                        <div className="flex items-center space-x-4 border-t border-slate-100 dark:border-slate-800/60 pt-5 mt-auto">
                          <img 
                            src={t.image} 
                            alt={t.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-gold-500/20 group-hover:border-gold-500/60 transition-colors"
                          />
                          <div>
                            <h4 className="font-bold text-slate-800 dark:text-white text-sm leading-snug">
                              {t.name}
                            </h4>
                            <p className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 tracking-wider">
                              {t.designation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dot Pagination indicators */}
                {testimonials.length > visibleCount && (
                  <div className="flex justify-center space-x-2 mt-8">
                    {[...Array(testimonials.length - visibleCount + 1)].map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          currentSlide === idx 
                            ? 'w-6 bg-gradient-gold' 
                            : 'w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* ── VISIONARY LEADERSHIP ── */}
        <section className="relative z-10 py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-gold-500 uppercase tracking-widest">Board of Directors</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-800 dark:text-white mt-3 leading-tight">
                Visionary <span className="text-blue-600 dark:text-blue-400">Leadership</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-gold mt-4 rounded-full mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'ShivKumar Singh Tomar',
                  role: 'Chairman & Director',
                  desc: 'Visionary real estate entrepreneur with over 20 years of experience in property development and land aggregation across central India and Gujarat.',
                  image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80',
                  linkedin: '#',
                  email: 'mailto:shivkumar@rudragroup.com'
                },
                {
                  name: 'Mohan Singh Tomar',
                  role: 'Chief Executive Officer (CEO)',
                  desc: 'Oversees global operations, investor relations, and strategic partnerships, driving Rudra Group to become a major developer in Dholera SIR.',
                  image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80',
                  linkedin: '#',
                  email: 'mailto:mohan@rudragroup.com'
                },
                {
                  name: 'Nitin Singh Tomar',
                  role: 'Managing Director',
                  desc: 'Spearheads site planning, land acquisitions, municipal liaisons, and implementation of smart township infrastructure elements.',
                  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80',
                  linkedin: '#',
                  email: 'mailto:nitin@rudragroup.com'
                }
              ].map((leader, index) => (
                <div 
                  key={index}
                  className="group bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-gold-500/40 dark:hover:border-gold-500/40 transition-all duration-500 flex flex-col h-full transform hover:-translate-y-1.5"
                >
                  <div className="h-80 overflow-hidden bg-slate-100 relative">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-between p-6">
                      <span className="text-white text-xs font-semibold tracking-wider bg-gold-500/80 backdrop-blur-sm px-3 py-1 rounded-full">
                        Rudra Leader
                      </span>
                      <div className="flex space-x-2">
                        <a 
                          href={leader.linkedin} 
                          className="p-2 bg-white/10 hover:bg-gold-500 text-white hover:text-slate-950 rounded-full backdrop-blur-sm transition-all flex items-center justify-center"
                          aria-label="LinkedIn Profile"
                        >
                          <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                        <a 
                          href={leader.email} 
                          className="p-2 bg-white/10 hover:bg-gold-500 text-white hover:text-slate-950 rounded-full backdrop-blur-sm transition-all"
                          aria-label="Email Address"
                        >
                          <Mail className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-gold-500 transition-colors">
                        {leader.name}
                      </h3>
                      <span className="text-xs font-extrabold text-gold-500 dark:text-gold-400 uppercase tracking-widest mt-1.5 block">
                        {leader.role}
                      </span>
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mt-4 font-medium">
                        {leader.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INQUIRIES FORM ── */}
        <section id="contact-section" className="relative z-10 py-20 bg-slate-50 dark:bg-slate-900/30 transition-colors border-t border-slate-100 dark:border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest">Inquire Now</h2>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white leading-tight">
                  Secure Your Premium Lot in Dholera SIR Today
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Whether you are a seasoned investor or a family planning a premium residence, Rudra Group has the perfect solution.
                </p>
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-4">
                  <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-300">
                    <MapPin className="h-5 w-5 text-gold-500 shrink-0" />
                    <span className="text-sm font-semibold">Multiple high-demand schemes in Dholera SIR</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-300">
                    <ShieldCheck className="h-5 w-5 text-gold-500 shrink-0" />
                    <span className="text-sm font-semibold">100% legal clearance & transparent contracts</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <LeadForm defaultProperty={selectedProperty} />
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
