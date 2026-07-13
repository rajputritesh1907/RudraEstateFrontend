'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Phone, Info } from 'lucide-react';
import ProjectCard from '../../components/ProjectCard';

const ALL_STATIC_PROJECTS = [
  {
    _id: '1',
    title: "Orchid River View",
    phase: "Phase I",
    status: "Active",
    type: "Residential",
    description: "Premium river-facing residential plots in Dholera SIR with world-class amenities, close connectivity to the express highway, and a serene lifestyle environment.",
    location: "Dholera SIR",
    priceRange: "₹18 Lakh - ₹45 Lakh",
    sizeRange: "1,500 - 4,000 sq.ft.",
    amenities: ["Riverfront Walkway", "24/7 Security", "Clubhouse Area", "Underground Utilities", "Blacktop Roads"],
    highlights: ["High Return Investment", "Near Activation Area", "Clear Legal Titles"],
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    _id: '2',
    title: "Orchid Villa Greens",
    phase: "Phase II",
    status: "Active",
    type: "Residential",
    description: "Eco-friendly premium villa townships designed for modern sustainable living, complete with solar lighting, community gardening, and premium landscapes.",
    location: "Dholera SIR",
    priceRange: "₹25 Lakh - ₹60 Lakh",
    sizeRange: "2,500 - 6,000 sq.ft.",
    amenities: ["Solar Energy Supply", "Organic Farm Area", "Swimming Pool", "Gymnasium", "Landscape Gardens"],
    highlights: ["Eco-friendly Development", "TPS 2 Location", "Fast Allotment Process"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    _id: '3',
    title: "Orchid Villa Luxuriya",
    phase: "Phase I",
    status: "Active",
    type: "Residential",
    description: "Ultra-luxury residential spaces for high-end villas. Gated community featuring high-tech security, smart homes, and exclusive access to the premium golf courses.",
    location: "Dholera SIR",
    priceRange: "₹35 Lakh - ₹90 Lakh",
    sizeRange: "3,000 - 7,000 sq.ft.",
    amenities: ["Smart Gated System", "Golf Course Access", "Mini Theater", "Premium Clubhouse", "Concierge Service"],
    highlights: ["Ultra-luxury Gated Community", "Immediate Possession Available", "Premium Corner Plots"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    _id: '4',
    title: "Dholera Bhoomi",
    phase: "Phase III",
    status: "Sold Out",
    type: "Residential",
    description: "Rudra's landmark residential project in the heart of Dholera SIR, fully sold out with immediate possession and titles transferred.",
    location: "Dholera SIR",
    priceRange: "₹12 Lakh - ₹30 Lakh",
    sizeRange: "1,200 - 3,500 sq.ft.",
    amenities: ["Security Post", "Street Lights", "Water Storage Tank", "Children Park Area"],
    highlights: ["100% Sold Out", "Completed in 2024", "Satisfied Customers"],
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    _id: '5',
    title: "Rudra Commercial Hub",
    phase: "Phase I",
    status: "Active",
    type: "Commercial",
    description: "Commercial plots positioned in Dholera's central business district (CBD). Perfect for offices, retail stores, and dining hubs.",
    location: "Dholera SIR",
    priceRange: "₹40 Lakh - ₹1.5 Crore",
    sizeRange: "2,000 - 8,000 sq.ft.",
    amenities: ["Heavy Power Connection", "CBD Main Road Access", "High-speed Fiber Internet", "Dedicated Parking Lots"],
    highlights: ["High ROI Potential", "Prime CBD Location", "TPS 1 Corner Plots"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    _id: '6',
    title: "Rudra Industrial Park",
    phase: "Phase II",
    status: "Active",
    type: "Industrial",
    description: "Massive industrial plots equipped with heavy infrastructure, close proximity to the Ahmedabad-Dholera Expressway and the upcoming Dholera International Airport.",
    location: "Dholera SIR",
    priceRange: "₹80 Lakh - ₹4.5 Crore",
    sizeRange: "10,000 - 50,000 sq.ft.",
    amenities: ["220KV Power Supply", "Heavy Transport Access Roads", "Effluent Disposal Line", "Gas Pipelines Connection"],
    highlights: ["Ideal for Warehouses/Manufacturing", "Next to Multi-Modal Logistics Hub", "Easy Government Approvals"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    featured: false
  }
];

function ProjectsContent() {
  const searchParams = useSearchParams();
  const typeFilterParam = searchParams.get('type') || 'All';

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState(typeFilterParam);
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedProperty, setSelectedProperty] = useState('General Inquiry');

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    setFilterType(typeFilterParam);
  }, [typeFilterParam]);

  const fetchProjects = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || `http://localhost:5000`}/api/projects`);
      if (res.ok) {
        const data = await res.json();
        setProjects(data.length > 0 ? data : ALL_STATIC_PROJECTS);
      } else {
        setProjects(ALL_STATIC_PROJECTS);
      }
    } catch (err) {
      setProjects(ALL_STATIC_PROJECTS);
    } finally {
      setLoading(false);
    }
  };

  const router = useRouter();

  const handleInquiryTrigger = (propertyName) => {
    router.push(`/contact?property=${encodeURIComponent(propertyName)}`);
  };

  const filteredProjects = projects.filter((project) => {
    const matchesType = filterType === 'All' || project.type === filterType;
    const matchesStatus = filterStatus === 'All' || project.status === filterStatus;
    return matchesType && matchesStatus;
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-900 dark:bg-slate-950 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
            alt="Rudra Project Site"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900 dark:from-slate-950"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Our Townships & Land Projects
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore our curated residential villa developments, commercial parks, and heavy industrial land plots in Dholera SIR.
          </p>
        </div>
      </section>

      {/* Filter and Catalog Section */}
      <section className="py-16 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 pb-6 border-b border-slate-100 dark:border-slate-800">
            {/* Type Filters */}
            <div className="flex flex-wrap gap-2">
              {['All', 'Residential', 'Commercial', 'Industrial'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    filterType === type
                      ? 'bg-navy-800 dark:bg-slate-800 text-gold-400 border border-gold-500/25 shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-gold-500'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Status Filters */}
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Status:</span>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold rounded-xl text-slate-600 dark:text-slate-300 focus:outline-none"
              >
                <option value="All">All Projects</option>
                <option value="Active">Active / On Sale</option>
                <option value="Sold Out">Sold Out</option>
              </select>
            </div>
          </div>

          {/* Catalog Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse bg-slate-100 dark:bg-slate-900 rounded-2xl h-[450px]"></div>
              ))}
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/50 rounded-2xl">
              <p className="text-slate-500 dark:text-slate-400 font-semibold">No projects found matching the selected filters.</p>
              <button 
                onClick={() => { setFilterType('All'); setFilterStatus('All'); }}
                className="mt-4 text-xs font-bold text-gold-500 hover:underline"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project._id}
                  project={project}
                  onInquire={handleInquiryTrigger}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Custom Project CTA Section */}
      <section className="pb-24 pt-8 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 text-white shadow-2xl py-12 px-6 sm:px-12 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Background Masterplan blueprint pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            {/* Green trend arrow / growth gradient background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-green-500/10 pointer-events-none" />

            {/* Left Graphics: Business Shaking Hands */}
            <div className="shrink-0 flex items-center justify-center relative lg:w-48 lg:h-36">
              <svg className="w-32 h-32 text-gold-400 opacity-90 drop-shadow-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>

            {/* Center Text Column */}
            <div className="flex-1 text-center lg:text-left space-y-4 relative z-10">
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Looking for a <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold-400 to-amber-300">Custom Project</span>?
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-green-500 mx-auto lg:mx-0 rounded-full" />
              <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Contact our team to discuss your specific requirements and explore customized property solutions in Dholera SIR.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto relative z-10">
              <button
                onClick={() => handleInquiryTrigger('Custom Project Request')}
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center space-x-2 w-full sm:w-auto group"
              >
                <Phone className="h-4 w-4 shrink-0 group-hover:scale-110 transition-transform" />
                <span>Contact Our Experts</span>
              </button>
              
              <button
                onClick={() => handleInquiryTrigger('Custom Project Request')}
                className="px-6 py-3.5 bg-transparent hover:bg-slate-800 text-white border border-slate-700 hover:border-slate-500 font-bold rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <Info className="h-4 w-4 shrink-0" />
                <span>Learn More</span>
              </button>
            </div>

            {/* Right Graphics decoration: Skyscrapers */}
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none hidden lg:block">
              <svg className="w-48 h-32 text-blue-500" viewBox="0 0 100 100" fill="currentColor">
                <rect x="10" y="40" width="15" height="60" />
                <rect x="30" y="20" width="20" height="80" />
                <rect x="55" y="50" width="15" height="50" />
                <rect x="75" y="30" width="18" height="70" />
              </svg>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default function Projects() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading Projects...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}
