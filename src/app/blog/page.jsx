'use client';

import React, { useEffect, useState } from 'react';
import { Calendar, User, Clock, Search, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const STATIC_BLOGS = [
  {
    _id: '1',
    title: "Investing in Dholera SIR: A Beginner's Guide",
    category: "Investment",
    summary: "Discover why Dholera SIR is hailed as India's first smart-planned industrial city and learn the step-by-step land acquisition process.",
    content: "Dholera Special Investment Region (SIR) is a pioneer project of the Government of India under the Delhi-Mumbai Industrial Corridor (DMIC). Spread over 920 sq. km, Dholera is double the size of Ahmedabad. With developments in technology, infrastructure, connectivity, and industrial potential (including Tata's semiconductor plant), early land investment in Dholera is poised to yield up to 10x returns over the next decade. To invest, you must verify the Town Planning Scheme (TPS) zones, obtain legal approvals, and secure clear titles.",
    date: "July 2, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
  },
  {
    _id: '2',
    title: "Understanding the Dholera Town Planning (TP) Scheme",
    category: "Legal",
    summary: "An in-depth explanation of TP schemes, land zoning classifications, and how to verify if your plot falls within the residential or commercial zone.",
    content: "A Town Planning Scheme (TPS) is a land pooling model used in Gujarat. Instead of acquiring land outright, the government aggregates the land, designs infrastructure (roads, parks, utility corridors), and redistributes optimized plots (final plots) back to the owners. This ensures well-planned sectors. When purchasing, check the TPS maps, the Draft/Sanctioned status, and the zone classification (Residential, Commercial, Industrial, or Public Purpose).",
    date: "June 25, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80"
  },
  {
    _id: '3',
    title: "Tata Semiconductor Plant in Dholera: Impact on Real Estate",
    category: "Infrastructure",
    summary: "With Tata Electronics' upcoming $10.9B semiconductor fab in Dholera, we analyze how this massive project is driving real estate demand.",
    content: "Tata Electronics, in partnership with Taiwan's PSMC, is establishing a mega semiconductor fabrication plant in Dholera SIR with a total investment of ₹91,000 Crore ($10.9 Billion). This plant is expected to generate over 20,000 direct and indirect high-tech jobs. The influx of engineers, executives, and auxiliary industries has caused an immediate surge in demand for residential layouts, villa societies, and commercial infrastructure, cementing Dholera as a premier investment hotspot.",
    date: "May 18, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch('${process.env.NEXT_PUBLIC_API_URL || `http://localhost:5000`}/api/blogs');
      if (res.ok) {
        const data = await res.json();
        setBlogs(data.length > 0 ? data : STATIC_BLOGS);
      } else {
        setBlogs(STATIC_BLOGS);
      }
    } catch (err) {
      setBlogs(STATIC_BLOGS);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['All', 'Investment', 'Legal', 'Infrastructure'];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-900 dark:bg-slate-950 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80"
            alt="Rudra Media Blog"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900 dark:from-slate-950"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Investment Guide & Media Center
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Stay updated with educational articles, Town Planning scheme updates, and recent infrastructure announcements in Dholera SIR.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-12 bg-white dark:bg-slate-950 transition-colors border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6 justify-between items-center">
          {/* Categories Tab */}
          <div className="flex overflow-x-auto pb-2 scrollbar-none gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-navy-800 dark:bg-slate-800 text-gold-400 border border-gold-500/20'
                    : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-gold-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold rounded-xl text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-1 focus:ring-gold-500"
            />
            <Search className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-400" />
          </div>
        </div>
      </section>

      {/* Blog list Grid */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="animate-pulse bg-slate-150 dark:bg-slate-900 rounded-3xl h-[420px]"></div>
              ))}
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-900">
              <p className="text-slate-500 dark:text-slate-400 font-semibold">No articles found matching your query.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {filteredBlogs.map((blog) => {
                return (
                  <div 
                    key={blog._id} 
                    className="bg-slate-50/50 dark:bg-slate-900/20 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-700 flex flex-col h-full transition-all group duration-300"
                  >
                    {/* Image section */}
                    <div className="relative h-56 overflow-hidden shrink-0">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="absolute top-4 left-4 px-3 py-1 bg-navy-800 text-gold-400 text-[10px] font-bold uppercase rounded-md shadow-md border border-gold-550/20">
                        {blog.category}
                      </span>
                    </div>

                    {/* Content details */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center space-x-4 text-[10px] text-slate-400 dark:text-slate-500 font-semibold mb-4">
                        <span className="flex items-center">
                          <Calendar className="h-3.5 w-3.5 mr-1 text-gold-500" />
                          {blog.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-3.5 w-3.5 mr-1 text-gold-500" />
                          {blog.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3 line-clamp-2 leading-snug group-hover:text-gold-500 transition-colors">
                        {blog.title}
                      </h3>

                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6 line-clamp-3">
                        {blog.summary}
                      </p>

                      <Link
                        href={`/blog/${blog._id}`}
                        className="font-bold text-xs text-gold-500 hover:text-gold-650 dark:hover:text-gold-400 flex items-center space-x-1.5 mt-auto self-start group/btn"
                      >
                        <span>Read Full Article</span>
                        <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter / Investor Kit Banner */}
      <section className="bg-slate-900 dark:bg-slate-950 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors border-t border-slate-800">
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="newsletter-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#newsletter-grid)" />
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <span className="px-4 py-1.5 bg-gold-500/10 border border-gold-500/20 text-gold-400 text-[10px] font-bold uppercase tracking-wider rounded-full">
            Stay Informed
          </span>
          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Get the Latest Dholera SIR Investment Updates
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Join our weekly digest for exclusive TPS updates, policy announcements, market reports, and hot land deals sent straight to your inbox.
          </p>
          
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 pt-4" onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing to Rudra updates!"); }}>
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="flex-grow px-5 py-3.5 bg-slate-800 border border-slate-700 rounded-xl focus:ring-1 focus:ring-gold-500 focus:outline-none text-xs font-semibold text-white"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-gradient-gold hover:opacity-95 text-white font-bold rounded-xl text-xs transition-all shadow-md shrink-0"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </section>


    </div>
  );
}
