'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Search, HelpCircle, Home, FileText, Landmark, IndianRupee, MapPin, ShieldCheck, Phone, ArrowRight } from 'lucide-react';

const FAQ_CATEGORIES = [
  { id: 'all', label: 'All Questions', icon: HelpCircle },
  { id: 'investment', label: 'Investment', icon: IndianRupee },
  { id: 'legal', label: 'Legal & Docs', icon: FileText },
  { id: 'dholera', label: 'About Dholera', icon: Landmark },
  { id: 'property', label: 'Property & Plots', icon: Home },
  { id: 'process', label: 'Buying Process', icon: ShieldCheck },
];

const FAQS = [
  // Investment
  {
    category: 'investment',
    question: 'Is investing in Dholera SIR safe and profitable?',
    answer: 'Yes, Dholera SIR is one of the safest and most lucrative investment destinations in India right now. It is a centrally-funded smart city under the Delhi-Mumbai Industrial Corridor (DMIC), backed by the Government of India. With Tata Electronics investing ₹91,000 Crore for a semiconductor plant, an international airport under construction, and high-speed metro connectivity, early investors stand to benefit from 5x–10x appreciation over the next 10 years.'
  },
  {
    category: 'investment',
    question: 'What is the expected ROI on Dholera SIR land investment?',
    answer: 'Based on current market trends, property prices in Dholera SIR have already appreciated 3x–5x since 2015. Industry analysts project further appreciation of 8x–12x by 2035 as infrastructure milestones are completed. The ROI is driven by semiconductor investments, airport development, and rapid industrial growth making Dholera a top-tier investment zone.'
  },
  {
    category: 'investment',
    question: 'How much is the minimum investment required to buy land in Dholera SIR?',
    answer: 'At Rudra Group, residential plots start from ₹12 Lakhs for entry-level locations, while premium villa plots range from ₹18 Lakhs to ₹90 Lakhs depending on size and location. Commercial and industrial parcels range from ₹40 Lakhs to ₹4.5 Crore. We offer flexible payment plans to suit a variety of budgets — reach out to our advisors for a personalized investment plan.'
  },
  {
    category: 'investment',
    question: 'Can NRIs (Non-Resident Indians) invest in Dholera SIR land?',
    answer: 'Absolutely. NRIs are fully eligible to purchase land in Dholera SIR under FEMA (Foreign Exchange Management Act) regulations. Rudra Group specializes in NRI investment consulting — we handle all documentation, provide video walkthroughs, offer digital signing, and ensure complete compliance so that NRIs can invest securely from abroad without needing to travel to India.'
  },
  // Legal
  {
    category: 'legal',
    question: 'Are Rudra Group projects RERA registered?',
    answer: 'Yes, all Rudra Group projects are fully registered under the Gujarat Real Estate (Regulation and Development) Act (RERA). RERA registration ensures complete transparency in pricing, project timelines, and buyer rights. You can verify any project&apos;s RERA registration number on the official Gujarat RERA portal (gujrera.gujarat.gov.in).'
  },
  {
    category: 'legal',
    question: 'What documents are required to purchase a plot in Dholera SIR?',
    answer: 'The primary documents needed are: (1) Government-issued photo ID (Aadhar, Passport, or Voter ID), (2) PAN Card, (3) Recent bank statements (last 3–6 months), (4) Address proof, (5) For NRIs — Passport, OCI/PIO card, and NRE/NRO bank account details. Rudra&apos;s legal team handles all purchase agreements, stamp duty, and registration on your behalf.'
  },
  {
    category: 'legal',
    question: 'What is a Town Planning (TP) Scheme and how does it affect my plot?',
    answer: 'A Town Planning Scheme (TPS) is a structured land development model used in Gujarat. The government pools land from multiple owners, plans high-quality infrastructure (wide roads, utilities, drainage, parks), and returns well-delineated, legally clear Final Plots (FPs) back to investors. All Rudra projects are within sanctioned TPS zones, ensuring your plot has clear title, proper zoning, and planned infrastructure access.'
  },
  {
    category: 'legal',
    question: 'Is the land title clear and free from encumbrances?',
    answer: 'Yes. Every plot sold by Rudra Group undergoes rigorous legal due diligence including 7/12 extract verification, mutation entries, title chain examination, and encumbrance certificate review. We also provide a complete Title Clearance Certificate from our empaneled legal team before any sale. Our buyers receive full legal clarity before committing to any transaction.'
  },
  // Dholera
  {
    category: 'dholera',
    question: 'What is Dholera SIR and why is it significant?',
    answer: 'Dholera Special Investment Region (SIR) is India\'s first and largest planned greenfield smart city, spanning 920 sq. km — twice the size of Ahmedabad and larger than Singapore. It is the flagship node of the $100 Billion Delhi-Mumbai Industrial Corridor (DMIC). With a dedicated semiconductor fab (Tata Electronics, $11B), an international airport, high-speed metro, 220KV power grid, and full smart infrastructure, Dholera is poised to be India\'s global manufacturing and tech hub.'
  },
  {
    category: 'dholera',
    question: 'When will the Dholera International Airport be operational?',
    answer: 'The Dholera International Airport is currently under construction and is projected to be operational by 2026–2027. Once completed, it will significantly boost real estate demand and connect Dholera directly to domestic and international markets. Land prices near the airport zone have already seen strong appreciation in anticipation of this milestone.'
  },
  {
    category: 'dholera',
    question: 'What infrastructure is already in place in Dholera SIR?',
    answer: 'Significant infrastructure is already built and operational: (1) 6-lane Ahmedabad-Dholera Expressway (80 km, 45-min drive), (2) 220KV high-capacity power substation, (3) Water treatment and distribution network, (4) TPS-1 and TPS-2 road networks and sector planning, (5) Tata Electronics foundation stone laid. More infrastructure including metro rail and the airport are under active development.'
  },
  // Property
  {
    category: 'property',
    question: 'What types of plots does Rudra Group offer?',
    answer: 'Rudra Group offers three categories of land investments: (1) Residential Plots — premium villa townships, gated communities, and housing societies for end-users and investors; (2) Commercial Plots — CBD-located plots ideal for offices, malls, and retail hubs; (3) Industrial Plots — large-format industrial and logistics land equipped with heavy power, gas lines, and freight access.'
  },
  {
    category: 'property',
    question: 'What amenities are included with your residential plots?',
    answer: 'Our residential projects include a comprehensive set of premium amenities: internal blacktop roads, compound wall with gated entry, 24/7 security, underground utilities (water, electricity), street lighting, landscaped parks, children&apos;s play areas, and visitor parking. Premium projects additionally feature clubhouses, swimming pools, golf course access, and smart home-ready infrastructure.'
  },
  {
    category: 'property',
    question: 'Can I get a site visit before purchasing?',
    answer: 'Absolutely. We encourage all prospective buyers to visit the site before making a decision. Rudra Group offers complimentary guided site visits with dedicated corporate transport from Ahmedabad to Dholera SIR. Our site experts will walk you through the plot, show you the infrastructure, explain the zoning classification, and answer all on-ground questions. Book your free site visit through our Contact page.'
  },
  // Process
  {
    category: 'process',
    question: 'What is the step-by-step process to buy a plot through Rudra?',
    answer: 'The buying process has 5 simple steps: (1) Initial Consultation — discuss your budget, purpose, and timeline with our advisors; (2) Site Visit — complimentary guided tour of the property; (3) Plot Selection & Booking — select your preferred plot and pay a booking amount to reserve it; (4) Documentation — legal agreement, stamp duty, and registration handled by our team; (5) Possession — receive your title deed, plot demarcation, and possession certificate. The entire process typically takes 30–45 days.'
  },
  {
    category: 'process',
    question: 'Are there flexible payment plans available?',
    answer: 'Yes. Rudra Group offers structured flexible payment plans designed to suit varied financial situations. Options include: (1) One-time lump-sum with a discount benefit; (2) Down payment + EMI-linked payment schedule; (3) Construction-linked milestone plans for villa projects. Our finance advisors will help you choose the plan that best aligns with your cash flow and investment timeline.'
  },
  {
    category: 'process',
    question: 'How long does it take to complete the registration of a plot?',
    answer: 'Typically, plot registration is completed within 7–21 working days from the date of full payment. The timeline depends on document preparation, sub-registrar appointment availability, and stamp duty payment. Rudra\'s in-house legal team coordinates the entire registration process on your behalf to ensure a smooth and timely completion.'
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const filteredFAQs = FAQS.filter((faq) => {
    const matchCat = activeCategory === 'all' || faq.category === activeCategory;
    const matchSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <div className="flex flex-col min-h-screen">

      {/* ── HERO BANNER ── */}
      <section className="bg-slate-900 dark:bg-slate-950 text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80"
            alt="FAQ Background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-slate-900 dark:from-slate-950" />
        </div>
        {/* Decorative orbs */}
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gold-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center z-10 space-y-6">
          <span className="px-4 py-1.5 bg-gold-500/10 border border-gold-500/20 text-gold-400 text-[10px] font-bold uppercase tracking-widest rounded-full inline-block">
            Help Center
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Frequently Asked <span className="text-gold-400">Questions</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about investing in Dholera SIR land through Rudra Group — from legal clarity to site visits and payment plans.
          </p>

          {/* Search bar */}
          <div className="relative max-w-lg mx-auto mt-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-5 py-4 bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/50 backdrop-blur-md transition-all"
            />
          </div>
        </div>
      </section>

      {/* ── CATEGORY TABS ── */}
      <section className="py-8 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 transition-colors sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-none gap-2 pb-1">
            {FAQ_CATEGORIES.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => { setActiveCategory(id); setOpenIndex(null); }}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border shrink-0 ${
                  activeCategory === id
                    ? 'bg-navy-800 text-gold-400 border-gold-500/30 shadow-sm'
                    : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:text-gold-500 hover:border-gold-500/20'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ACCORDION ── */}
      <section className="py-16 bg-slate-50/50 dark:bg-slate-950 flex-grow transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {filteredFAQs.length === 0 ? (
            <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/50 dark:border-slate-800/50">
              <HelpCircle className="h-12 w-12 text-slate-300 dark:text-slate-700 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-700 dark:text-white mb-2">No questions found</h3>
              <p className="text-sm text-slate-400">Try a different search term or select another category.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`bg-white dark:bg-slate-900 border rounded-2xl overflow-hidden transition-all duration-300 shadow-sm ${
                      isOpen
                        ? 'border-gold-500/40 shadow-md'
                        : 'border-slate-200/50 dark:border-slate-800/50 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <button
                      onClick={() => toggle(idx)}
                      className="w-full flex items-start justify-between px-6 py-5 text-left group"
                    >
                      <div className="flex items-start space-x-4 pr-4">
                        <span className={`mt-0.5 p-2 rounded-lg shrink-0 transition-colors ${
                          isOpen ? 'bg-gold-500/10 text-gold-500' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-gold-500/10 group-hover:text-gold-500'
                        }`}>
                          <HelpCircle className="h-4 w-4" />
                        </span>
                        <span className={`font-bold text-sm sm:text-base leading-snug transition-colors ${
                          isOpen ? 'text-gold-500' : 'text-slate-800 dark:text-white group-hover:text-gold-500'
                        }`}>
                          {faq.question}
                        </span>
                      </div>
                      <span className={`shrink-0 p-1.5 rounded-full transition-all duration-300 mt-0.5 ${
                        isOpen ? 'bg-gold-500 text-white rotate-180' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                      }`}>
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </button>

                    {/* Answer panel */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-6 pl-16 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-5">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Count indicator */}
          <p className="text-center text-xs text-slate-400 dark:text-slate-600 mt-8 font-semibold">
            Showing {filteredFAQs.length} of {FAQS.length} questions
          </p>
        </div>
      </section>

      {/* ── STILL HAVE QUESTIONS CTA ── */}
      <section className="py-20 bg-slate-900 dark:bg-slate-950 text-white transition-colors border-t border-slate-800 relative overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="faq-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#faq-grid)" />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 z-10">
          <span className="px-4 py-1.5 bg-gold-500/10 border border-gold-500/20 text-gold-400 text-[10px] font-bold uppercase tracking-widest rounded-full inline-block">
            Still Confused?
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Talk to a Dholera SIR Investment Expert
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Our advisors are available Mon–Sat, 9:30 AM–6:30 PM. Get a free 30-minute consultation with a senior investment advisor — no strings attached.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-gold text-white font-bold rounded-xl text-sm hover:opacity-90 hover:shadow-lg transition-all"
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+919000000000"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-white font-bold rounded-xl text-sm transition-all"
            >
              <Phone className="h-4 w-4 text-gold-400" />
              <span>Call: +91 900 000 0000</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
