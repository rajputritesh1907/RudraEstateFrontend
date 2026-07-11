'use client';

import React, { useState } from 'react';
import { Landmark, Cpu, Radio, Plane, TrendingUp, MapPin, ShieldCheck, ArrowRight, Network, Building, CheckCircle2, Clock, Activity, Zap } from 'lucide-react';
import LeadForm from '../../components/LeadForm';

const AboutDholera = () => {
  const tabs = [
    { id: 'overview', name: 'Overview', icon: Landmark },
    { id: 'infra', name: 'Infrastructure', icon: Radio },
    { id: 'connectivity', name: 'Connectivity', icon: Plane },
    { id: 'investment', name: 'Investment Hub', icon: TrendingUp },
  ];

  const [activeTab, setActiveTab] = useState('overview');

  const keyFacts = [
    'Part of the Delhi-Mumbai Industrial Corridor (DMIC)',
    'Located approximately 100 km southwest of Ahmedabad',
    'Total area: 920 sq km (22.5 sq km in Phase 1)',
    'Managed by Dholera Industrial City Development Limited (DICDL) and Dholera Special Investment Regional Development Authority (DSIRDA)',
    'Designated as a National Investment and Manufacturing Zone (NIMZ)',
  ];

  const utilities = [
    { title: 'Power Grid', desc: '24x7 uninterrupted power supply backed by a dedicated 5,000 MW Solar Park grid, automated smart sub-stations, and high-voltage transmission lines to support heavy industrial operations without voltage fluctuations.' },
    { title: 'Water Systems', desc: 'A zero-waste water system featuring smart meters, high-capacity desalination plants, sewage treatment plants (STPs), and 100% recycling of industrial effluent for non-potable city usage.' },
    { title: 'Waste Management', desc: 'Advanced solid waste management employing sensor-enabled underground pneumatic trash disposal tubes, automated segregation units, and waste-to-energy conversion systems.' },
    { title: 'ICT Network', desc: 'City-wide high-speed fiber-optic network linked to a central Command & Control Center (CCC) for real-time monitoring of traffic, municipal utilities, safety, and citizen services.' },
  ];

  const industrialInfra = [
    { title: 'Industrial Zones', desc: 'Vast zones partitioned specifically for defense, aviation, heavy machinery, automotive components, and pharmaceutical production, operating under strict environmental compliance and green building codes.' },
    { title: 'Plug-and-Play Facilities', desc: 'Pre-built manufacturing sheds, pre-cleared land plots, and pre-wired utility hookups allowing global companies to start commercial production within weeks of allocation.' },
    { title: 'Logistics Parks', desc: 'Multimodal logistics hubs featuring high-capacity container storage, customs clearance, warehouses with automated cold-storage chains, and direct container rail terminal access.' },
    { title: 'R&D Centers', desc: 'Advanced technical incubation labs, testing centers, and academic tie-ups to assist manufacturers in piloting new technologies, testing materials, and training specialized staff.' },
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
    { title: 'Tata Electronics', desc: '$10.9 billion semiconductor fabrication plant in collaboration with PSMC (Taiwan)' },
    { title: 'Semiconductor Ecosystem', desc: 'Involvement of global leaders and suppliers to build complete value chains' },
    { title: 'Renewable Energy', desc: 'Solar park development with a planned 5000 MW capacity' },
    { title: 'Infrastructure Development', desc: 'Massive public-private funding for roads, metro, and logistics' },
  ];

  const investmentSteps = [
    { step: '1', title: 'Initial Consultation', desc: 'Discuss project requirements and feasibility with certified experts.' },
    { step: '2', title: 'Land Identification', desc: 'Selection of suitable land parcel based on specific project needs.' },
    { step: '3', title: 'Application Submission', desc: 'Submit formal investment proposal with required documentation.' },
    { step: '4', title: 'Approval Process', desc: 'Fast-track clearances through single-window clearance cell.' },
    { step: '5', title: 'Land Allotment', desc: 'Transparent and legal allocation of land for the project.' },
    { step: '6', title: 'Project Implementation', desc: 'Dedicated support during planning, construction, and operation.' },
  ];

  const keyFeatures = [
    { title: 'Smart Transportation', desc: 'Smart transport systems, automated traffic control, and integrated public transport.' },
    { title: 'Renewable Energy', desc: 'Powered by clean energy sources, with a planned 5,000 MW solar park.' },
    { title: 'Water Management', desc: 'Zero waste discharge, smart water metering, and rainwater harvesting.' },
    { title: 'Digital Connectivity', desc: 'City-wide fiber optic network, high-speed internet, and smart city center.' },
    { title: 'Industrial Zones', desc: 'Segregated zones for heavy industries, electronics, and manufacturing.' },
    { title: 'Green Spaces', desc: '10% of the city area dedicated to parks, gardens, and recreational areas.' },
  ];

  const strategicLocations = [
    { title: '100 km from Ahmedabad', desc: 'Located close to the economic hub of Gujarat with a planned expressway connection.' },
    { title: '30 km from Bhavnagar', desc: 'Proximity to Bhavnagar port and city for industrial and logistics support.' },
    { title: 'Dedicated Freight Corridor', desc: 'Easy access to the DFC, connecting major ports and industrial hubs of India.' },
    { title: 'Planned International Airport', desc: 'Dholera International Airport will provide global air connectivity.' },
  ];

  const investmentPotentials = [
    { title: 'High ROI', desc: 'Significant appreciation potential with government backing and planned development.' },
    { title: 'Multiple Sectors', desc: 'Investment opportunities in residential, commercial, and industrial sectors.' },
    { title: 'Government Support', desc: 'Strong government backing with special incentives for investors.' },
    { title: 'Global Hub', desc: 'Positioned to become a global manufacturing and trading hub.' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-900 dark:bg-slate-955 text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80"
            alt="Dholera Master Plan map"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900 dark:from-slate-950"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <span className="text-xs font-bold text-gold-500 uppercase tracking-widest bg-gold-500/10 px-3 py-1.5 rounded-full">
            India's First Greenfield Smart City
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mt-6 mb-6 leading-tight">
            Dholera Special Investment Region (SIR)
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Discover the future of urban development. Spanning approximately 920 sq km, Dholera SIR is being developed as a global manufacturing and trading hub under the DMIC.
          </p>
        </div>
      </section>

      {/* Tabs System - Dashboard Style */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Dashboard Tab Buttons */}
          <div className="bg-slate-50 dark:bg-slate-900/40 p-2.5 rounded-2xl border border-slate-100 dark:border-slate-800 flex overflow-x-auto pb-2.5 mb-12 scrollbar-none gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-4 rounded-xl text-sm font-bold whitespace-nowrap flex items-center space-x-3 transition-all flex-1 justify-center ${
                    activeTab === tab.id
                      ? 'bg-gradient-gold text-white shadow-lg'
                      : 'text-slate-655 hover:text-gold-500 hover:bg-white dark:text-slate-300 dark:hover:bg-slate-900/60 dark:hover:text-gold-400'
                  }`}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>

          {/* Dashboard Tab Panels */}
          <div className="bg-slate-50 dark:bg-slate-900/20 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-8 lg:p-12 transition-all">
            
            {/* 1. OVERVIEW PANEL */}
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center space-x-2 text-xs font-bold text-gold-500 uppercase tracking-widest">
                    <Landmark className="h-4 w-4" />
                    <span>Executive Summary</span>
                  </div>
                  <h2 className="text-3xl font-extrabold text-slate-800 dark:text-white leading-tight">
                    The Greenfield Metropolis of Tomorrow
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
                    Dholera SIR is India's first greenfield industrial smart city being developed as part of the Delhi-Mumbai Industrial Corridor (DMIC). Located in the Gulf of Khambhat in Gujarat, it spans approximately 920 sq km and is positioned as a global manufacturing and trading hub.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/60 shadow-sm">
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">Our Vision</span>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                        To develop Dholera as a global manufacturing and trading hub supported by world-class infrastructure, providing a high quality of life, sustainable development, and investment opportunities.
                      </p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/60 shadow-sm">
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">Development Plan</span>
                      <p className="text-xs text-slate-550 dark:text-slate-400 mt-2 leading-relaxed">
                        The development is planned in phases, with Phase 1 covering 22.5 sq km. The city is designed to accommodate a population of 2 million people by 2040 with a focus on sustainable urban planning.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-sm space-y-6">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800">
                    Key Facts & Figures
                  </h3>
                  <ul className="space-y-4">
                    {keyFacts.map((fact, idx) => (
                      <li key={idx} className="flex items-start text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        <CheckCircle2 className="h-4 w-4 text-gold-500 mr-3 shrink-0 mt-0.5" />
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* 2. INFRASTRUCTURE PANEL */}
            {activeTab === 'infra' && (
              <div className="space-y-12">
                <div className="max-w-3xl">
                  <div className="flex items-center space-x-2 text-xs font-bold text-gold-500 uppercase tracking-widest mb-3">
                    <Cpu className="h-4 w-4" />
                    <span>Infrastructure & Engineering</span>
                  </div>
                  <h2 className="text-3xl font-extrabold text-slate-855 dark:text-white leading-tight">
                    World-Class Infrastructure & Smart Utilities
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-3 text-justify">
                    Dholera SIR integrates intelligent utilities and advanced industrial infrastructure to support high-tech manufacturing, commercial enterprises, and global logistics operations. By combining ICT-enabled services with a centralized command center, the region ensures seamless utility distribution, optimized power grids, and environmentally sustainable waste management networks designed to fuel industrial growth for generations to come.
                  </p>
                </div>

                {/* Tata semiconductor highlights */}
                <div className="bg-gradient-to-r from-blue-950 to-slate-900 text-white rounded-3xl p-8 lg:p-10 border border-blue-900/50 shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-8 space-y-4">
                      <span className="px-3.5 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs font-semibold tracking-wider text-blue-450 uppercase inline-block">
                        Mega Project Spotlight
                      </span>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                        Tata $10.9 Billion Semiconductor Fabrication Plant
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        Tata Electronics is establishing a ₹91,000 Crore ($10.9 billion) semiconductor fabrication plant in Dholera SIR, one of the largest high-tech investments in Indian history. Built in collaboration with PSMC (Taiwan), this facility will manufacture advanced chips for automotive, computing, and telecom networks.
                      </p>
                    </div>
                    <div className="lg:col-span-4 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 text-center shadow-inner">
                      <div className="inline-flex p-3 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-xl mb-3">
                        <Cpu className="h-6 w-6 animate-pulse" />
                      </div>
                      <p className="text-2xl font-bold text-white">20,000+</p>
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">High-Tech Jobs Created</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Utilities */}
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-sm space-y-6">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800 flex items-center space-x-2">
                      <Zap className="h-5 w-5 text-gold-500" />
                      <span>Smart Utilities Grid</span>
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      {utilities.map((item, idx) => (
                        <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-950/40 rounded-xl border border-slate-100/50 dark:border-slate-900/40">
                          <p className="text-sm font-bold text-slate-800 dark:text-white">{item.title}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Industrial Infrastructure */}
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-sm space-y-6">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800 flex items-center space-x-2">
                      <Building className="h-5 w-5 text-gold-500" />
                      <span>Industrial Facilities</span>
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      {industrialInfra.map((item, idx) => (
                        <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-955/40 rounded-xl border border-slate-100/50 dark:border-slate-900/40">
                          <p className="text-sm font-bold text-slate-800 dark:text-white">{item.title}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. CONNECTIVITY PANEL */}
            {activeTab === 'connectivity' && (
              <div className="space-y-8">
                <div className="max-w-3xl">
                  <div className="flex items-center space-x-2 text-xs font-bold text-gold-500 uppercase tracking-widest mb-3">
                    <Network className="h-4 w-4" />
                    <span>Logistics Channels</span>
                  </div>
                  <h2 className="text-3xl font-extrabold text-slate-800 dark:text-white leading-tight">
                    Multi-Modal Global Connectivity Network
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-3 text-justify">
                    Dholera SIR is strategically designed to provide seamless access to domestic and international markets through a multi-modal high-speed transit grid. With a dedicated international cargo airport, a high-speed metro rail system, a massive 109-km expressway, and direct connectivity to the Western Dedicated Freight Corridor and major deep-water seaports, Dholera stands as the ultimate logistics gateway for frictionless global trade.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Road */}
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/60 shadow-sm flex items-start space-x-4">
                    <span className="p-3 bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 rounded-xl shrink-0">
                      <Activity className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-white text-base">Ahmedabad-Dholera Expressway</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed text-justify">
                        A critical 109-km, 4-lane (expandable to 8-lane) access-controlled greenfield expressway. Designed for speeds up to 120 km/h, it will drastically reduce travel time between Ahmedabad and Dholera to only 40-45 minutes. The route features modern toll systems, emergency services, and dedicated lanes for cargo trucks, connecting directly to the arterial highway network of Gujarat (Operational by June 2025).
                      </p>
                    </div>
                  </div>

                  {/* Air */}
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/60 shadow-sm flex items-start space-x-4">
                    <span className="p-3 bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 rounded-xl shrink-0">
                      <Plane className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-white text-base">Dholera International Airport</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed text-justify">
                        A massive greenfield international cargo and passenger airport spanning 1,426 hectares near Navagam. Developed under a joint venture (DIACL) with a 4,000-meter runway capable of handling giant cargo carriers like the Antonov An-225. Phase 1 cargo and passenger terminals are scheduled to open by March 2026, initial capacity of 1.5 million passengers per year, scaling up to 30 million upon final phase completion.
                      </p>
                    </div>
                  </div>

                  {/* Rail */}
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/60 shadow-sm flex items-start space-x-4">
                    <span className="p-3 bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 rounded-xl shrink-0">
                      <Network className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-white text-base">Rail & Freight Access</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed text-justify">
                        Dholera SIR is integrated with the Western Dedicated Freight Corridor (DFC), linking northern industrial heartlands to western ports with high-speed cargo movement. Additionally, a double-track high-speed Metro rail transit system (MRTS) is under development, running parallel to the expressway to provide rapid, eco-friendly transit for commuters between Ahmedabad and Dholera.
                      </p>
                    </div>
                  </div>

                  {/* Sea */}
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/60 shadow-sm flex items-start space-x-4">
                    <span className="p-3 bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 rounded-xl shrink-0">
                      <Building className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-white text-base">Port Connectivity</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed text-justify">
                        Located adjacent to the Gulf of Khambhat, the city offers seamless maritime logistics via direct access to major active deep-water ports including Kandla, Mundra, Dahej, and Pipavav. Furthermore, a new dedicated cargo port is planned at Dholera itself to handle bulk manufacturing exports and container terminals, establishing a direct gateway to global trade lanes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. INVESTMENT PANEL */}
            {activeTab === 'investment' && (
              <div className="space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center space-x-2 text-xs font-bold text-gold-500 uppercase tracking-widest">
                      <TrendingUp className="h-4 w-4" />
                      <span>Opportunities & Growth</span>
                    </div>
                    <h2 className="text-3xl font-extrabold text-slate-800 dark:text-white leading-tight">
                      The Destination of Choice for Global Capital
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
                      Dholera SIR is set to become one of India’s most developed regions wherein all aspects of life, work and play seamlessly converge to create a world-class city. Located in the Prime Minister&apos;s home state of Gujarat, it is well-connected, sustainable, and perfect for large manufacturing clusters.
                    </p>

                    <div className="border-t border-slate-200/50 dark:border-slate-800/60 pt-6">
                      <h4 className="font-bold text-slate-800 dark:text-white text-sm mb-4">Key Investment Sectors:</h4>
                      <div className="flex flex-wrap gap-2">
                        {keySectors.map((sector, idx) => (
                          <span key={idx} className="px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-655 dark:text-slate-300 rounded-lg text-xs font-semibold">
                            {sector}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-sm space-y-6">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800">
                      Government Incentives
                    </h3>
                    <ul className="space-y-4">
                      {governmentIncentives.map((incentive, idx) => (
                        <li key={idx} className="flex items-start text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          <ShieldCheck className="h-4 w-4 text-emerald-500 mr-3 shrink-0 mt-0.5" />
                          <span>{incentive}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Major Investments grid */}
                <div className="border-t border-slate-200/50 dark:border-slate-800/60 pt-10 space-y-6">
                  <h3 className="text-xl font-bold text-slate-855 dark:text-white text-center">
                    Major Industrial Investments
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {majorInvestments.map((item, idx) => (
                      <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/60 shadow-sm space-y-2">
                        <span className="text-xs font-bold text-gold-500 uppercase tracking-widest">0{idx + 1}</span>
                        <h4 className="font-bold text-slate-800 dark:text-white text-sm">{item.title}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Investment Roadmap */}
                <div className="border-t border-slate-200/50 dark:border-slate-800/60 pt-10 space-y-8">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white text-center">
                    Step-by-Step Investment Process
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {investmentSteps.map((step, idx) => (
                      <div key={idx} className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-100 dark:border-slate-800/60 relative group shadow-sm text-center">
                        <div className="w-8 h-8 rounded-full bg-gold-500 text-slate-950 font-bold text-xs flex items-center justify-center mx-auto mb-3">
                          {step.step}
                        </div>
                        <h4 className="font-bold text-slate-800 dark:text-white text-xs mb-1">{step.title}</h4>
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 leading-normal">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Common Section: Key Features */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/10 border-t border-slate-100 dark:border-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-gold-500 uppercase tracking-widest">Smart Master Plan</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white mt-2">
              Key Features of Dholera SIR
            </h2>
            <div className="h-1 w-20 bg-gradient-gold mt-4 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyFeatures.map((feat, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <span className="text-xs font-bold text-gold-500 uppercase tracking-wider block mb-3">Feature 0{idx + 1}</span>
                <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-2">{feat.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Section: Strategic Location */}
      <section className="py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-gold-500 uppercase tracking-widest">Prime Location</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white">
                Perfectly Positioned for Industrial Growth
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed text-justify">
                Dholera SIR is strategically located in the Delhi-Mumbai Industrial Corridor (DMIC), one of the world&apos;s largest infrastructure projects. This prime location offers unparalleled access to regional markets and ports.
              </p>
              <div className="border-t border-slate-100 dark:border-slate-800 pt-6 space-y-4">
                <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-300">
                  <MapPin className="h-5 w-5 text-gold-500 shrink-0" />
                  <span className="text-sm font-semibold">Gulf of Khambhat, Gujarat, India</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {strategicLocations.map((loc, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-slate-900/30 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-sm">
                  <h4 className="font-bold text-slate-855 dark:text-white text-sm mb-1.5">{loc.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{loc.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Common Section: Investment Potential */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/10 border-t border-slate-100 dark:border-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-gold-500 uppercase tracking-widest">ROI Analysis</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white mt-2">
              Unrivaled Investment Potential
            </h2>
            <div className="h-1 w-20 bg-gradient-gold mt-4 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentPotentials.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800/80 shadow-sm text-center space-y-3">
                <span className="p-3 bg-amber-50 dark:bg-slate-800 text-gold-500 rounded-2xl inline-block border border-slate-100 dark:border-slate-800">
                  <TrendingUp className="h-5 w-5" />
                </span>
                <h4 className="text-base font-bold text-slate-800 dark:text-white">{item.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Section: Inquiry Form */}
      <section className="py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-gold-500 uppercase tracking-widest">Inquire Now</span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white leading-tight">
                Request Detailed Dholera Investment Information
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Connect with our certified land consultants. We provide detailed zoning reports, land pooling maps, government allocation letters, and tax advice for local and NRI buyers.
              </p>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
                <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-300">
                  <ShieldCheck className="h-5 w-5 text-gold-500 shrink-0" />
                  <span className="text-sm font-semibold">100% legal clearance & transparent contracts</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <LeadForm defaultProperty="General Inquiry" />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutDholera;
