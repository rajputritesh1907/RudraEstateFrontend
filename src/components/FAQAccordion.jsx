'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQAccordion = () => {
  const categories = [
    { id: 'general', name: 'General' },
    { id: 'property', name: 'Property Related' },
    { id: 'investment', name: 'Investment' },
    { id: 'dholera', name: 'About Dholera SIR' },
    { id: 'legal', name: 'Legal & Documentation' },
  ];

  const faqs = {
    general: [
      {
        question: "What is Rudra Buildcon Pvt. Ltd.?",
        answer: "Rudra Buildcon is a licensed real estate developer established in 2010. Since 2018, we have focused exclusively on Dholera SIR, delivering premium residential, commercial, and industrial plots with high-yield potential."
      },
      {
        question: "Where is the Rudra Group head office located?",
        answer: "Our corporate head office is located at 304-306, Signature-1, Near Iscon Cross Road, SG Highway, Ahmedabad, Gujarat 380051. You are welcome to visit during our working hours: Monday to Saturday from 9:30 AM to 6:30 PM."
      }
    ],
    property: [
      {
        question: "What types of plots do you offer?",
        answer: "We offer three types of plots in Dholera SIR: Residential plots (suitable for houses, villas, and housing societies), Commercial plots (ideal for retail, offices, and hotels), and Industrial plots (for manufacturing, logistics, and warehousing)."
      },
      {
        question: "What are the sizes available for residential villa plots?",
        answer: "Our premium residential villa plots range in size from 1,500 sq.ft. to 7,000 sq.ft. depending on the specific township (e.g. Orchid River View, Orchid Villa Greens, or Orchid Villa Luxuriya)."
      }
    ],
    investment: [
      {
        question: "Why should I invest in Dholera SIR?",
        answer: "Dholera SIR is India's first greenfield planned smart city. It features double the land size of Ahmedabad, high connectivity infrastructure (International Airport, Greenfield Expressway, Metro), and is attracting massive industrial giants, making early land investment highly lucrative."
      },
      {
        question: "What is the expected ROI in Dholera real estate?",
        answer: "Due to the development phase, land prices in Dholera SIR are currently very attractive. With milestones like the opening of the Expressway in late 2026/2027, the International Airport, and the operational Tata Semiconductor Fab, investors can expect significant capital appreciation over a 3 to 5-year horizon."
      }
    ],
    dholera: [
      {
        question: "What is Dholera Special Investment Region (SIR)?",
        answer: "Dholera SIR is a major industrial smart city project of the Government of India under the Delhi-Mumbai Industrial Corridor (DMIC). It is designed to be a self-sustaining hub equipped with state-of-the-art information technology, smart utilities, and global connectivity."
      },
      {
        question: "What is the role of Tata Electronics in Dholera?",
        answer: "Tata Electronics is building a ₹91,000 Crore ($10.9 Billion) semiconductor fabrication plant in Dholera SIR. This is a monumental project that will generate tens of thousands of skilled jobs and bring massive auxiliary industries to the region, boosting residential and commercial land values."
      }
    ],
    legal: [
      {
        question: "Are Rudra projects RERA registered?",
        answer: "Yes, all our active projects are fully compliant with the Real Estate Regulatory Authority (RERA) rules of Gujarat, ensuring transparent transactions, secure titles, and timely development completion."
      },
      {
        question: "Can NRIs purchase property in Dholera SIR?",
        answer: "Yes. Non-Resident Indians (NRIs) and Persons of Indian Origin (PIOs) are legally permitted to invest in residential and commercial properties/plots in Dholera SIR under FEMA guidelines. Our legal assistance team handles the entire documentation, registration, and tax compliance process for our NRI clients."
      }
    ]
  };

  const [activeCategory, setActiveCategory] = useState('general');
  const [openIndex, setOpenIndex] = useState(0);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setOpenIndex(0); // Open the first FAQ of the new category
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Category Selection Sidebar */}
      <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-2 shrink-0 border-b lg:border-b-0 lg:border-r border-slate-200/50 dark:border-slate-800/50 lg:pr-6 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            className={`px-4 py-3 rounded-xl text-sm font-bold whitespace-nowrap text-left transition-all ${
              activeCategory === cat.id
                ? 'bg-gradient-gold text-white shadow-md'
                : 'text-slate-600 hover:text-gold-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/50 dark:hover:text-gold-400'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Accordion Questions */}
      <div className="lg:col-span-8 space-y-4">
        {faqs[activeCategory].map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left text-slate-800 dark:text-white focus:outline-none"
              >
                <div className="flex items-center space-x-3 pr-4">
                  <HelpCircle className="h-5 w-5 text-gold-500 shrink-0" />
                  <span className="font-bold text-sm sm:text-base leading-snug">
                    {faq.question}
                  </span>
                </div>
                {isOpen ? (
                  <ChevronUp className="h-5 w-5 text-gold-500 shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-400 shrink-0" />
                )}
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-96 opacity-100 border-t border-slate-100 dark:border-slate-800/50' : 'max-h-0 opacity-0 pointer-events-none'
                }`}
              >
                <div className="px-6 py-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-900/50">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQAccordion;
