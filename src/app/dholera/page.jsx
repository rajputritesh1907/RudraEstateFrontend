'use client';

import React from 'react';
import { Landmark, Cpu, Radio, Plane, TrendingUp, MapPin, ShieldCheck, ArrowRight, Network, Building, CheckCircle2, Clock, Activity, Zap } from 'lucide-react';
import LeadForm from '../../components/LeadForm';

const DholeraSIR = () => {
  const keyFacts = [
    'Part of the Delhi-Mumbai Industrial Corridor (DMIC)',
    'Located approximately 100 km southwest of Ahmedabad',
    'Total area: 920 sq km (22.5 sq km in Phase 1)',
    'Managed by Dholera Industrial City Development Limited (DICDL) and Dholera Special Investment Regional Development Authority (DSIRDA)',
    'Designated as a National Investment and Manufacturing Zone (NIMZ)',
  ];

  const utilities = [
    { title: 'Power Grid', desc: '24x7 uninterrupted power supply backed by a dedicated 5,000 MW Solar Park grid, automated smart sub-stations, and high-voltage transmission lines to support heavy industrial operations without voltage fluctuations.', color: 'amber', icon: Zap },
    { title: 'Water Systems', desc: 'A zero-waste water system featuring smart meters, high-capacity desalination plants, sewage treatment plants (STPs), and 100% recycling of industrial effluent for non-potable city usage.', color: 'blue', icon: Activity },
    { title: 'Waste Management', desc: 'Advanced solid waste management employing sensor-enabled underground pneumatic trash disposal tubes, automated segregation units, and waste-to-energy conversion systems.', color: 'emerald', icon: ShieldCheck },
    { title: 'ICT Network', desc: 'City-wide high-speed fiber-optic network linked to a central Command & Control Center (CCC) for real-time monitoring of traffic, municipal utilities, safety, and citizen services.', color: 'indigo', icon: Network },
  ];

  const industrialInfra = [
    { title: 'Industrial Zones', desc: 'Vast zones partitioned specifically for defense, aviation, heavy machinery, automotive components, and pharmaceutical production, operating under strict environmental compliance and green building codes.', color: 'blue', icon: Building },
    { title: 'Plug-and-Play Facilities', desc: 'Pre-built manufacturing sheds, pre-cleared land plots, and pre-wired utility hookups allowing global companies to start commercial production within weeks of allocation.', color: 'purple', icon: Cpu },
    { title: 'Logistics Parks', desc: 'Multimodal logistics hubs featuring high-capacity container storage, customs clearance, warehouses with automated cold-storage chains, and direct container rail terminal access.', color: 'rose', icon: Landmark },
    { title: 'R&D Centers', desc: 'Advanced technical incubation labs, testing centers, and academic tie-ups to assist manufacturers in piloting new technologies, testing materials, and training specialized staff.', color: 'emerald', icon: Radio },
  ];

  const keySectors = [
    'Semiconductors & Electronics',
    'Heavy Engineering',
    'Renewable Energy',
    'IT & ITES',
    'Pharmaceuticals & Biotechnology',
    'Aerospace & Defense',
  ];

  const governmentIncentives = [
    'Tax Benefits: GST reimbursements, income tax incentives',
    'Capital Subsidies: For setting up manufacturing units',
    'Land Allocation: Transparent and efficient land allocation process',
    'Single Window Clearance: Streamlined approval process',
    'R&D Support: Incentives for research and development activities',
    'Skill Development: Support for training and workforce development',
  ];

  const majorInvestments = [
    { title: 'Tata Electronics', desc: '$10.9 billion semiconductor fabrication plant in collaboration with PSMC (Taiwan)', color: 'blue' },
    { title: 'Semiconductor Ecosystem', desc: 'Involvement of global leaders and suppliers to build complete value chains', color: 'indigo' },
    { title: 'Renewable Energy', desc: 'Solar park development with a planned 5000 MW capacity', color: 'amber' },
    { title: 'Infrastructure Development', desc: 'Massive public-private funding for roads, metro, and logistics', color: 'emerald' },
  ];

  const investmentSteps = [
    { step: '1', title: 'Initial Consultation', desc: 'Discuss project requirements and feasibility with certified experts.', color: 'blue' },
    { step: '2', title: 'Land Identification', desc: 'Selection of suitable land parcel based on specific project needs.', color: 'purple' },
    { step: '3', title: 'Application Submission', desc: 'Submit formal investment proposal with required documentation.', color: 'rose' },
    { step: '4', title: 'Approval Process', desc: 'Fast-track clearances through single-window clearance cell.', color: 'indigo' },
    { step: '5', title: 'Land Allotment', desc: 'Transparent and legal allocation of land for the project.', color: 'emerald' },
    { step: '6', title: 'Project Implementation', desc: 'Dedicated support during planning, construction, and operation.', color: 'amber' },
  ];

  const keyFeatures = [
    { title: 'Smart Transportation', desc: 'Smart transport systems, automated traffic control, and integrated public transport.', color: 'blue' },
    { title: 'Renewable Energy', desc: 'Powered by clean energy sources, with a planned 5,000 MW solar park.', color: 'amber' },
    { title: 'Water Management', desc: 'Zero waste discharge, smart water metering, and rainwater harvesting.', color: 'teal' },
    { title: 'Digital Connectivity', desc: 'City-wide fiber optic network, high-speed internet, and smart city center.', color: 'indigo' },
    { title: 'Industrial Zones', desc: 'Segregated zones for heavy industries, electronics, and manufacturing.', color: 'purple' },
    { title: 'Green Spaces', desc: '10% of the city area dedicated to parks, gardens, and recreational areas.', color: 'emerald' },
  ];

  const strategicLocations = [
    { title: '100 km from Ahmedabad', desc: 'Located close to the economic hub of Gujarat with a planned expressway connection.', color: 'blue' },
    { title: '30 km from Bhavnagar', desc: 'Proximity to Bhavnagar port and city for industrial and logistics support.', color: 'indigo' },
    { title: 'Dedicated Freight Corridor', desc: 'Easy access to the DFC, connecting major ports and industrial hubs of India.', color: 'purple' },
    { title: 'Planned International Airport', desc: 'Dholera International Airport will provide global air connectivity.', color: 'emerald' },
  ];

  const investmentPotentials = [
    { title: 'High ROI', desc: 'Significant appreciation potential with government backing and planned development.', color: 'amber' },
    { title: 'Multiple Sectors', desc: 'Investment opportunities in residential, commercial, and industrial sectors.', color: 'blue' },
    { title: 'Government Support', desc: 'Strong government backing with special incentives for investors.', color: 'emerald' },
    { title: 'Global Hub', desc: 'Positioned to become a global manufacturing and trading hub.', color: 'indigo' },
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'amber':
        return {
          bg: 'bg-amber-50 dark:bg-amber-950/10',
          border: 'border-amber-200/60 dark:border-amber-900/40 hover:border-amber-500/40',
          text: 'text-amber-600 dark:text-amber-400',
          badge: 'bg-amber-100/80 dark:bg-amber-950/40 text-amber-600 dark:text-gold-400',
        };
      case 'blue':
        return {
          bg: 'bg-blue-50/70 dark:bg-blue-950/10',
          border: 'border-blue-200/60 dark:border-blue-900/40 hover:border-blue-500/40',
          text: 'text-blue-600 dark:text-blue-400',
          badge: 'bg-blue-100/80 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400',
        };
      case 'emerald':
        return {
          bg: 'bg-emerald-50 dark:bg-emerald-950/10',
          border: 'border-emerald-200/60 dark:border-emerald-900/40 hover:border-emerald-500/40',
          text: 'text-emerald-600 dark:text-emerald-400',
          badge: 'bg-emerald-100/80 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400',
        };
      case 'indigo':
        return {
          bg: 'bg-indigo-50 dark:bg-indigo-950/10',
          border: 'border-indigo-200/60 dark:border-indigo-900/40 hover:border-indigo-500/40',
          text: 'text-indigo-600 dark:text-indigo-400',
          badge: 'bg-indigo-100/80 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400',
        };
      case 'purple':
        return {
          bg: 'bg-purple-50 dark:bg-purple-950/10',
          border: 'border-purple-200/60 dark:border-purple-900/40 hover:border-purple-500/40',
          text: 'text-purple-600 dark:text-purple-400',
          badge: 'bg-purple-100/80 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400',
        };
      case 'rose':
        return {
          bg: 'bg-rose-50 dark:bg-rose-950/10',
          border: 'border-rose-200/60 dark:border-rose-900/40 hover:border-rose-500/40',
          text: 'text-rose-600 dark:text-rose-400',
          badge: 'bg-rose-100/80 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400',
        };
      case 'teal':
        return {
          bg: 'bg-teal-50 dark:bg-teal-950/10',
          border: 'border-teal-200/60 dark:border-teal-900/40 hover:border-teal-500/40',
          text: 'text-teal-600 dark:text-teal-400',
          badge: 'bg-teal-100/80 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400',
        };
      default:
        return {
          bg: 'bg-slate-50 dark:bg-slate-900/20',
          border: 'border-slate-100 dark:border-slate-800/80 hover:border-gold-500/40',
          text: 'text-slate-650 dark:text-slate-405',
          badge: 'bg-slate-100 dark:bg-slate-850 text-slate-650 dark:text-slate-450',
        };
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-955 transition-colors relative">
      
      {/* 1. Cinematic Hero Banner */}
      <section className="relative h-[85vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
            alt="Dholera Smart City Infrastructure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/80 to-slate-950/90 backdrop-blur-[2px]" />
          
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-550/15 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-bold text-gold-400 uppercase tracking-widest border border-gold-500/40 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md shadow-lg shadow-gold-500/5">
            Smart Infrastructure Profile
          </span>
          <h1 className="text-4xl sm:text-7xl font-extrabold text-white mt-8 tracking-tight leading-tight">
            About Dholera <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-gold-400 to-amber-500">SIR</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-300 mt-6 max-w-2xl mx-auto leading-relaxed">
            A comprehensive, high-fidelity profile of India&apos;s flagship greenfield industrial smart city under the Delhi-Mumbai Industrial Corridor.
          </p>
        </div>
      </section>

      {/* 2. Overview: The Vision & Greenfield Metropolis (With Image Integration) */}
      <section className="py-24 bg-white dark:bg-slate-900 transition-colors relative">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-blue-500/[0.03] dark:bg-blue-500/[0.015] rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-gold-500 uppercase tracking-widest">
                Chapter 01 — Executive Overview
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-800 dark:text-white leading-tight">
                India&apos;s First <span className="text-blue-600 dark:text-blue-450">Greenfield Smart City</span>
              </h2>
              <div className="h-1.5 w-20 bg-gradient-to-r from-blue-500 to-gold-500 rounded-full" />
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed text-justify">
                Dholera SIR is India&apos;s first greenfield industrial smart city being developed as part of the Delhi-Mumbai Industrial Corridor (DMIC). Located in the Gulf of Khambhat in Gujarat, it spans approximately 920 sq km and is positioned as a global manufacturing and trading hub.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="border-l-4 border-blue-500 pl-4 space-y-1">
                  <span className="text-xs font-bold text-blue-500 uppercase tracking-widest block">Strategic Vision</span>
                  <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed">
                    To develop Dholera as a global manufacturing and trading hub supported by world-class infrastructure, providing a high quality of life.
                  </p>
                </div>
                <div className="border-l-4 border-gold-500 pl-4 space-y-1">
                  <span className="text-xs font-bold text-gold-500 uppercase tracking-widest block">Development Phases</span>
                  <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed">
                    Planned in stages, with Phase 1 covering 22.5 sq km. Designed to support over 2 million residents with high-speed urban zones by 2040.
                  </p>
                </div>
              </div>
            </div>

            {/* Smart City Image Integrated here */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-100 dark:border-slate-800/80 group">
                <img
                  src="https://cdn.slidesharecdn.com/ss_thumbnails/dholeramasterplan-121027083840-phpapp01-thumbnail.jpg?width=640&height=640&fit=bounds"
                  alt="Dholera Smart City Master Plan Map"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              </div>
              
              <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900/60 p-6 rounded-2xl border border-slate-100 dark:border-slate-850 space-y-4">
                <h3 className="text-sm font-bold text-slate-850 dark:text-white flex items-center space-x-2">
                  <Landmark className="h-4.5 w-4.5 text-blue-500" />
                  <span>Key Region Facts</span>
                </h3>
                <ul className="space-y-3">
                  {keyFacts.map((fact, idx) => (
                    <li key={idx} className="flex items-start text-[11px] text-slate-650 dark:text-slate-400 leading-relaxed">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Infrastructure: Utility Grid & Industrial Parks (With Image Integration) */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors border-y border-slate-100 dark:border-slate-900 relative">
        <div className="absolute right-0 top-0 w-80 h-80 bg-gold-500/[0.02] rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold text-gold-500 uppercase tracking-widest">Chapter 02 — World-Class Utilities</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white mt-3">
                State-of-the-Art Infrastructure
              </h2>
              <p className="text-sm text-slate-550 dark:text-slate-400 mt-3 leading-relaxed">
                Dholera SIR integrates intelligent utilities and advanced industrial infrastructure to support high-tech manufacturing, commercial enterprises, and global logistics operations. By combining ICT-enabled services with a centralized command center, the region ensures seamless utility distribution, optimized power grids, and environmentally sustainable waste management networks designed to fuel industrial growth for generations to come.
              </p>
            </div>
            
            {/* Smart Infrastructure Image Integrated here */}
            <div className="lg:col-span-4 relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 aspect-square hidden lg:block group">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80"
                alt="Underground Smart Utilities Network"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-900/30" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Utilities Grid */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center space-x-3">
                <Zap className="h-5 w-5 text-gold-500" />
                <span>Smart Utilities Network</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {utilities.map((item, idx) => {
                  const Icon = item.icon;
                  const colors = getColorClasses(item.color);
                  return (
                    <div key={idx} className={`p-6 ${colors.bg} rounded-2xl border ${colors.border} shadow-sm hover:shadow-md transition-all duration-300`}>
                      <span className={`p-2.5 rounded-xl ${colors.badge} inline-flex mb-4`}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <h4 className="text-sm font-bold text-slate-850 dark:text-white mb-2">{item.title}</h4>
                      <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Industrial Infrastructure */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center space-x-3">
                <Building className="h-5 w-5 text-blue-500" />
                <span>Industrial Zoning & Facilities</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industrialInfra.map((item, idx) => {
                  const Icon = item.icon;
                  const colors = getColorClasses(item.color);
                  return (
                    <div key={idx} className={`p-6 ${colors.bg} rounded-2xl border ${colors.border} shadow-sm hover:shadow-md transition-all duration-300`}>
                      <span className={`p-2.5 rounded-xl ${colors.badge} inline-flex mb-4`}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <h4 className="text-sm font-bold text-slate-855 dark:text-white mb-2">{item.title}</h4>
                      <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Tata Semiconductor Plant Highlight - Deep Indigo & Cobalt blue gradient with chip image */}
          <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 text-white rounded-3xl p-8 lg:p-12 border-2 border-gold-500/20 dark:border-gold-500/10 shadow-2xl shadow-blue-955/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[80px]" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold text-gold-400 uppercase tracking-widest bg-gold-500/10 px-3 py-1.5 rounded-md border border-gold-500/20 inline-block">
                  Silicon Revolution
                </span>
                <h3 className="text-2xl lg:text-4xl font-extrabold text-white leading-tight">
                  Tata Semiconductor Fabrication Facility
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed text-justify">
                  Tata Electronics is building a milestone ₹91,000 Crore ($10.9 billion) semiconductor fabrication plant in Dholera SIR. Partnering with Powerchip Semiconductor Manufacturing Corporation (PSMC) of Taiwan, this facility is designed to manufacture microchips that will power automotive control units, computing platforms, and telecom networks, forming the foundation of India&apos;s electronic ecosystem.
                </p>
              </div>
              
              {/* Integrated chip visual inside Tata Fab section */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-4">
                <div className="relative w-full h-36 rounded-2xl overflow-hidden border border-slate-700/80 shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80"
                    alt="Silicon Wafer Semiconductor Chip"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-950/40" />
                </div>
                <div className="text-center lg:text-left w-full pl-2">
                  <p className="text-2xl lg:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gold-400 to-amber-300">₹91,000 Cr</p>
                  <p className="text-[10px] text-slate-450 uppercase tracking-wider">Total Investment Outlay</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Connectivity: Vertical Timeline layout (With Transit Image) */}
      <section className="py-24 bg-white dark:bg-slate-900 transition-colors relative">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-500/[0.02] rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold text-gold-500 uppercase tracking-widest">Chapter 03 — Multi-Modal Networks</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white mt-3">
                Unrivaled Connectivity Systems
              </h2>
              <p className="text-sm text-slate-550 dark:text-slate-400 mt-3 leading-relaxed">
                Dholera SIR is strategically designed to provide seamless access to domestic and international markets through a multi-modal high-speed transit grid. With a dedicated international cargo airport, a high-speed metro rail system, a massive 109-km expressway, and direct connectivity to the Western Dedicated Freight Corridor and major deep-water seaports, Dholera stands as the ultimate logistics gateway for frictionless global trade.
              </p>
            </div>
            
            {/* expressway/highway image */}
            <div className="lg:col-span-4 relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-855 aspect-square hidden lg:block group">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=500&q=80"
                alt="Highway connectivity link"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/20" />
            </div>
          </div>

          {/* Vertical Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-amber-500 h-full hidden md:block opacity-60" />

            <div className="space-y-12">
              
              {/* Row 1: Road (Blue) */}
              <div className="relative flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-5/12 pr-0 md:pr-8 text-center md:text-right bg-blue-500/[0.02] dark:bg-blue-500/[0.01] p-6 rounded-2xl border border-blue-500/10">
                  <h4 className="text-lg font-bold text-blue-600 dark:text-blue-455">Ahmedabad-Dholera Expressway</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    A critical 109-km, 4-lane (expandable to 8-lane) access-controlled greenfield expressway. Designed for speeds up to 120 km/h, it will drastically reduce travel time between Ahmedabad and Dholera to only 40-45 minutes. The route features modern toll systems, emergency services, and dedicated lanes for cargo trucks, connecting directly to the arterial highway network of Gujarat (Operational by June 2025).
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center border-4 border-white dark:border-slate-900 z-10 shadow-lg shadow-blue-500/20 hidden md:flex">
                  <Activity className="h-4 w-4" />
                </div>
                <div className="w-full md:w-5/12 pl-0 md:pl-8 mt-4 md:mt-0 text-center md:text-left">
                  <span className="px-3 py-1.5 bg-blue-105 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-900/30 rounded-full text-xs font-semibold">
                    Road Link — 109 Km
                  </span>
                </div>
              </div>

              {/* Row 2: Air (Emerald) */}
              <div className="relative flex flex-col md:flex-row-reverse items-center justify-between">
                <div className="w-full md:w-5/12 pl-0 md:pl-8 text-center md:text-left bg-emerald-500/[0.02] dark:bg-emerald-500/[0.01] p-6 rounded-2xl border border-emerald-500/10">
                  <h4 className="text-lg font-bold text-emerald-605 dark:text-emerald-450">Dholera International Airport</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    A massive greenfield international cargo and passenger airport spanning 1,426 hectares near Navagam. Developed under a joint venture (DIACL) with a 4,000-meter runway capable of handling giant cargo carriers like the Antonov An-225. Phase 1 cargo and passenger terminals are scheduled to open by March 2026, initial capacity of 1.5 million passengers per year, scaling up to 30 million upon final phase completion.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center border-4 border-white dark:border-slate-900 z-10 shadow-lg shadow-emerald-500/20 hidden md:flex">
                  <Plane className="h-4 w-4" />
                </div>
                <div className="w-full md:w-5/12 pr-0 md:pr-8 mt-4 md:mt-0 text-center md:text-right">
                  <span className="px-3 py-1.5 bg-emerald-105 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-900/30 rounded-full text-xs font-semibold">
                    Air Link — Phase 1 (2026)
                  </span>
                </div>
              </div>

              {/* Row 3: Rail (Purple) */}
              <div className="relative flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-5/12 pr-0 md:pr-8 text-center md:text-right bg-purple-500/[0.02] dark:bg-purple-500/[0.01] p-6 rounded-2xl border border-purple-500/10">
                  <h4 className="text-lg font-bold text-purple-600 dark:text-purple-450">Rail & Metro Access</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    Dholera SIR is integrated with the Western Dedicated Freight Corridor (DFC), linking northern industrial heartlands to western ports with high-speed cargo movement. Additionally, a double-track high-speed Metro rail transit system (MRTS) is under development, running parallel to the expressway to provide rapid, eco-friendly transit for commuters between Ahmedabad and Dholera.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center border-4 border-white dark:border-slate-900 z-10 shadow-lg shadow-purple-500/20 hidden md:flex">
                  <Network className="h-4 w-4" />
                </div>
                <div className="w-full md:w-5/12 pl-0 md:pl-8 mt-4 md:mt-0 text-center md:text-left">
                  <span className="px-3 py-1.5 bg-purple-105 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 border border-purple-200/50 dark:border-purple-900/30 rounded-full text-xs font-semibold">
                    Rail Link — Metro & DFC
                  </span>
                </div>
              </div>

              {/* Row 4: Sea (Amber) */}
              <div className="relative flex flex-col md:flex-row-reverse items-center justify-between">
                <div className="w-full md:w-5/12 pl-0 md:pl-8 text-center md:text-left bg-amber-500/[0.02] dark:bg-amber-500/[0.01] p-6 rounded-2xl border border-amber-500/10">
                  <h4 className="text-lg font-bold text-amber-600 dark:text-amber-455">Port Connectivity</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    Located adjacent to the Gulf of Khambhat, the city offers seamless maritime logistics via direct access to major active deep-water ports including Kandla, Mundra, Dahej, and Pipavav. Furthermore, a new dedicated cargo port is planned at Dholera itself to handle bulk manufacturing exports and container terminals, establishing a direct gateway to global trade lanes.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-9 h-9 rounded-full bg-amber-500 text-slate-955 flex items-center justify-center border-4 border-white dark:border-slate-900 z-10 shadow-lg shadow-amber-500/20 hidden md:flex">
                  <Building className="h-4 w-4" />
                </div>
                <div className="w-full md:w-5/12 pr-0 md:pr-8 mt-4 md:mt-0 text-center md:text-right">
                  <span className="px-3 py-1.5 bg-amber-105 dark:bg-amber-955/40 text-amber-600 dark:text-amber-450 border border-amber-200/50 dark:border-amber-900/30 rounded-full text-xs font-semibold">
                    Sea Link — Khambhat & Pipavav
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. Investment, Advantages & 6-step roadmap (With Sector Image) */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 transition-colors relative">
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-500/[0.02] rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-455 uppercase tracking-widest font-extrabold">
                Chapter 04 — Opportunities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white leading-tight">
                Global Manufacturing & Investment Hub
              </h2>
              <p className="text-sm text-slate-655 dark:text-slate-350 leading-relaxed text-justify">
                Located in the home state of Gujarat and backed by the central government, Dholera is set to become one of India’s most developed smart cities. Its clean zoning and availability of large land parcels make it the preferred destination for electronics, heavy engineering, and renewable energy clusters.
              </p>

              <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80">
                <h4 className="font-bold text-slate-800 dark:text-white text-sm mb-4">Core Investment Sectors:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {keySectors.map((sector, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-xs text-slate-655 dark:text-slate-350 font-semibold p-2.5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 rounded-xl">
                      <span className="w-2.5 h-2.5 bg-blue-500 rounded-full shrink-0" />
                      <span>{sector}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Industrial Work visual next to sectors */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-850 h-56 group">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
                  alt="Advanced Manufacturing Tech Cleanroom"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/10" />
              </div>
              
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-105 dark:border-slate-850 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-slate-850 dark:text-white flex items-center space-x-2">
                  <ShieldCheck className="h-5 w-5 text-emerald-500" />
                  <span>Incentives & Policies</span>
                </h3>
                <ul className="space-y-3">
                  {governmentIncentives.slice(0, 4).map((incentive, idx) => (
                    <li key={idx} className="flex items-start text-[11px] text-slate-600 dark:text-slate-450 leading-relaxed">
                      <ShieldCheck className="h-4 w-4 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                      <span>{incentive}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Major investments grid - Color coded headers */}
          <div className="border-t border-slate-200 dark:border-slate-900 pt-12 space-y-6">
            <h3 className="text-xl font-bold text-slate-855 dark:text-white text-center">
              Capital Placement & Investments
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {majorInvestments.map((item, idx) => {
                const colors = getColorClasses(item.color);
                return (
                  <div key={idx} className={`p-6 ${colors.bg} rounded-2xl border ${colors.border} shadow-sm space-y-2 hover:scale-[1.02] transition-transform`}>
                    <span className={`text-xs font-bold ${colors.text} uppercase tracking-wider block`}>Investment 0{idx + 1}</span>
                    <h4 className="font-bold text-slate-855 dark:text-white text-sm">{item.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Vertical roadmap list with gradient step numbers */}
          <div className="border-t border-slate-200 dark:border-slate-900 pt-12 space-y-8">
            <h3 className="text-2xl font-bold text-slate-855 dark:text-white text-center">
              Step-by-Step Capital Allotment Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {investmentSteps.map((step, idx) => {
                const colors = getColorClasses(step.color);
                return (
                  <div key={idx} className={`p-6 ${colors.bg} rounded-2xl border ${colors.border} shadow-sm flex items-start space-x-4`}>
                    <div className={`w-10 h-10 rounded-xl ${colors.badge} font-bold text-sm flex items-center justify-center shrink-0 shadow-inner`}>
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-855 dark:text-white text-sm mb-1">{step.title}</h4>
                      <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 6. Key Features Grid */}
      <section className="py-24 bg-white dark:bg-slate-900 transition-colors relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/[0.015] rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-gold-555 uppercase tracking-widest">Chapter 05 — Master Plan Specifications</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-855 dark:text-white mt-3">
              Core Pillars of the Master Plan
            </h2>
            <div className="h-1.5 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feat, idx) => {
              const colors = getColorClasses(feat.color);
              return (
                <div key={idx} className={`p-8 ${colors.bg} rounded-3xl border ${colors.border} shadow-sm relative group hover:-translate-y-1 transition-all duration-300`}>
                  <span className={`text-xs font-bold ${colors.text} uppercase tracking-widest block mb-4`}>Feature 0{idx + 1}</span>
                  <h4 className="text-lg font-bold text-slate-855 dark:text-white mb-2">{feat.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Strategic Location Grid Layout */}
      <section className="py-24 bg-slate-50 dark:bg-slate-955 border-t border-slate-100 dark:border-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-455 uppercase tracking-widest">Chapter 06 — Strategic Location</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-855 dark:text-white leading-tight">
                Positioned for Dynamic Industrial Integration
              </h2>
              <p className="text-sm text-slate-550 dark:text-slate-400 leading-relaxed text-justify">
                Dholera SIR is located in the Delhi-Mumbai Industrial Corridor (DMIC), one of the world&apos;s largest planned infrastructure hubs. This central location offers excellent proximity to regional manufacturing centers and international trade ports.
              </p>
              <div className="flex items-center space-x-3 text-slate-655 dark:text-slate-350 bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-850 inline-flex">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0" />
                <span className="text-sm font-semibold">Gulf of Khambhat, Gujarat, India</span>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {strategicLocations.map((loc, idx) => {
                const colors = getColorClasses(loc.color);
                return (
                  <div key={idx} className={`p-6 ${colors.bg} rounded-2xl border ${colors.border} shadow-sm hover:scale-[1.01] transition-transform`}>
                    <h4 className="font-bold text-slate-855 dark:text-white text-sm mb-1.5">{loc.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-455 leading-relaxed">{loc.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 8. Investment Potential - alternate ROI cards */}
      <section className="py-24 bg-white dark:bg-slate-900 transition-colors border-t border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-gold-555 uppercase tracking-widest">Chapter 07 — Return On Investment</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-855 dark:text-white mt-2">
              Unrivaled Investment Potential
            </h2>
            <div className="h-1.5 w-20 bg-gradient-to-r from-gold-500 to-amber-500 mt-4 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investmentPotentials.map((item, idx) => {
              const colors = getColorClasses(item.color);
              return (
                <div key={idx} className={`${colors.bg} p-8 rounded-3xl border ${colors.border} shadow-sm flex items-start space-x-6 hover:-translate-y-1 transition-all`}>
                  <div className="p-4 bg-white dark:bg-slate-900 text-gold-500 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm shrink-0">
                    <TrendingUp className="h-6 w-6 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-855 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-550 dark:text-slate-450 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Floating Contact / Lead Form Section */}
      <section className="py-24 bg-slate-550 dark:bg-slate-955 border-t border-slate-100 dark:border-slate-900 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-100/80 dark:border-slate-850 rounded-3xl p-8 lg:p-12 shadow-2xl space-y-10 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold-500/5 rounded-full blur-2xl" />
            
            <div className="text-center max-w-2xl mx-auto space-y-4 relative z-10">
              <span className="text-xs font-bold text-gold-500 uppercase tracking-widest">Get Connected</span>
              <h3 className="text-3xl font-extrabold text-slate-855 dark:text-white">
                Request Detailed Investment Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Connect with our certified land consultants. We provide detailed zoning reports, land pooling maps, government allocation letters, and tax advice for local and NRI buyers.
              </p>
            </div>
            
            <div className="relative z-10">
              <LeadForm defaultProperty="General Inquiry" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DholeraSIR;
