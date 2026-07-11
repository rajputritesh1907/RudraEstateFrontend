'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Calendar, User, Clock, ArrowLeft, Share2, Link2, FileText, Download } from 'lucide-react';
import Link from 'next/link';
import LeadForm from '../../../components/LeadForm';

const STATIC_BLOGS = [
  {
    _id: '1',
    title: "Investing in Dholera SIR: A Beginner's Guide",
    category: "Investment",
    summary: "Discover why Dholera SIR is hailed as India's first smart-planned industrial city and learn the step-by-step land acquisition process.",
    content: `Dholera Special Investment Region (SIR) is a pioneer project of the Government of India under the Delhi-Mumbai Industrial Corridor (DMIC). Spread over 920 sq. km, Dholera is double the size of Ahmedabad. With developments in technology, infrastructure, connectivity, and industrial potential (including Tata's semiconductor plant), early land investment in Dholera is poised to yield up to 10x returns over the next decade.

To invest, you must verify the Town Planning Scheme (TPS) zones, obtain legal approvals, and secure clear titles. We recommend seeking professional advice before committing.`,
    date: "July 2, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
  },
  {
    _id: '2',
    title: "Understanding the Dholera Town Planning (TP) Scheme",
    category: "Legal",
    summary: "An in-depth explanation of TP schemes, land zoning classifications, and how to verify if your plot falls within the residential or commercial zone.",
    content: `A Town Planning Scheme (TPS) is a land pooling model used in Gujarat. Instead of acquiring land outright, the government aggregates the land, designs infrastructure (roads, parks, utility corridors), and redistributes optimized plots (final plots) back to the owners. This ensures well-planned sectors.

When purchasing, check the TPS maps, the Draft/Sanctioned status, and the zone classification (Residential, Commercial, Industrial, or Public Purpose). Make sure the title deed is clear of any encumbrances.`,
    date: "June 25, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=80"
  },
  {
    _id: '3',
    title: "Tata Semiconductor Plant in Dholera: Impact on Real Estate",
    category: "Infrastructure",
    summary: "With Tata Electronics' upcoming $10.9B semiconductor fab in Dholera, we analyze how this massive project is driving real estate demand.",
    content: `Tata Electronics, in partnership with Taiwan's PSMC, is establishing a mega semiconductor fabrication plant in Dholera SIR with a total investment of ₹91,000 Crore ($10.9 Billion). This plant is expected to generate over 20,000 direct and indirect high-tech jobs.

The influx of engineers, executives, and auxiliary industries has caused an immediate surge in demand for residential layouts, villa societies, and commercial infrastructure, cementing Dholera as a premier investment hotspot.`,
    date: "May 18, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function BlogPostDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [recommended, setRecommended] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (id) {
      fetchBlogPost();
    }
  }, [id]);

  const fetchBlogPost = async () => {
    try {
      // Fetch details of the current blog
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || `http://localhost:5000`}/api/blogs/${id}`);
      let currentBlog = null;

      if (res.ok) {
        currentBlog = await res.json();
      } else {
        currentBlog = STATIC_BLOGS.find(b => b._id === id);
      }

      if (!currentBlog) {
        // Try finding by name slug or fallback
        currentBlog = STATIC_BLOGS[0];
      }

      setBlog(currentBlog);

      // Fetch all blogs to filter recommended ones
      const allRes = await fetch('${process.env.NEXT_PUBLIC_API_URL || `http://localhost:5000`}/api/blogs');
      let allBlogs = [];
      if (allRes.ok) {
        allBlogs = await allRes.json();
      } else {
        allBlogs = STATIC_BLOGS;
      }

      // Filter out current blog and keep 3 recommended
      const filtered = allBlogs.filter(b => b._id !== currentBlog._id).slice(0, 3);
      setRecommended(filtered);

    } catch (err) {
      const currentBlog = STATIC_BLOGS.find(b => b._id === id) || STATIC_BLOGS[0];
      setBlog(currentBlog);
      const filtered = STATIC_BLOGS.filter(b => b._id !== currentBlog._id).slice(0, 3);
      setRecommended(filtered);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 py-20 w-full animate-pulse space-y-8">
          <div className="h-10 bg-slate-200 dark:bg-slate-800 w-1/3 rounded-lg"></div>
          <div className="h-[400px] bg-slate-200 dark:bg-slate-800 rounded-3xl"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-4">
              <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded w-full"></div>
              <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded w-full"></div>
              <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded w-5/6"></div>
            </div>
            <div className="lg:col-span-4 h-96 bg-slate-200 dark:bg-slate-800 rounded-3xl"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-950 px-4">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Article Not Found</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">The article you are looking for does not exist or has been removed.</p>
        <Link href="/blog" className="px-6 py-3 bg-navy-800 text-gold-400 font-bold text-xs rounded-xl border border-gold-500/20 hover:bg-gold-500 hover:text-white transition-all">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50 dark:bg-slate-950 transition-colors">
      
      {/* Article Header Banner */}
      <section className="bg-slate-900 dark:bg-slate-950 text-white py-20 relative overflow-hidden transition-colors">
        <div className="absolute inset-0">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900 dark:from-slate-950"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-4">
          <Link 
            href="/blog"
            className="inline-flex items-center text-xs font-bold text-gold-400 hover:text-gold-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Articles
          </Link>
          
          <div className="space-y-4">
            <span className="px-3 py-1 bg-gold-500/10 border border-gold-500/20 text-gold-400 text-[10px] font-bold uppercase rounded-md shadow-md inline-block">
              {blog.category}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight max-w-4xl">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-350 font-semibold border-t border-slate-800/80 max-w-2xl">
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1.5 text-gold-500" />
                {blog.date}
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1.5 text-gold-500" />
                {blog.readTime}
              </span>
              <span className="flex items-center">
                <User className="h-4 w-4 mr-1.5 text-gold-500" />
                By Rudra Editorial Team
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Article content (8 Columns) */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
            
            {/* Featured Image */}
            <div className="relative rounded-2xl overflow-hidden h-[300px] sm:h-[450px]">
              <img 
                src={blog.image} 
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Summary Block */}
            <div className="font-semibold text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-850 p-6 rounded-2xl border-l-4 border-gold-500 italic text-base leading-relaxed">
              {blog.summary}
            </div>

            {/* Content Text */}
            <div className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line space-y-6 pt-2">
              {blog.content}
            </div>

            {/* Share and Social widgets */}
            <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center">
                <Share2 className="h-4 w-4 mr-2" />
                Share this Article:
              </span>
              
              <div className="flex items-center space-x-2">
                <button 
                  onClick={handleCopyLink}
                  className="p-2.5 bg-slate-50 dark:bg-slate-800 hover:bg-gold-500/10 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 hover:text-gold-500 hover:border-gold-500/30 transition-all flex items-center space-x-2"
                >
                  <Link2 className="h-4 w-4" />
                  <span className="text-xs font-bold">{copied ? 'Link Copied!' : 'Copy Link'}</span>
                </button>

                {/* Facebook */}
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-50 dark:bg-slate-800 hover:bg-blue-600 hover:text-white border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 hover:border-blue-600 transition-all"
                  title="Share on Facebook"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* X / Twitter */}
                <a 
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(blog.title)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-50 dark:bg-slate-800 hover:bg-slate-950 hover:text-white border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 hover:border-slate-950 transition-all"
                  title="Share on X (Twitter)"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-50 dark:bg-slate-800 hover:bg-blue-700 hover:text-white border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 hover:border-blue-700 transition-all"
                  title="Share on LinkedIn"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Sidebar widget panel (4 Columns) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Lead Consultation Form widget */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-6 shadow-sm">
              <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center">
                <FileText className="h-5 w-5 mr-2 text-gold-500" />
                Direct Inquiry
              </h4>
              <LeadForm defaultProperty={`Inquiry from blog: ${blog.title}`} />
            </div>

            {/* Dholera SIR Investor Kit Download Card */}
            <div className="bg-gradient-to-br from-navy-900 to-slate-900 text-white rounded-3xl p-8 border border-gold-500/20 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
              <span className="text-[10px] font-bold text-gold-400 uppercase tracking-widest bg-gold-500/10 border border-gold-500/20 px-3 py-1 rounded-md inline-block mb-4">
                Resources
              </span>
              <h4 className="text-xl font-extrabold mb-2 leading-tight">
                Dholera SIR Investor Kit 2026
              </h4>
              <p className="text-xs text-slate-350 leading-relaxed mb-6">
                Get high-resolution TPS maps, land feasibility booklets, and legal checklists before buying land plots.
              </p>
              <button 
                onClick={() => alert("Your Dholera SIR Investor Kit download has started!")}
                className="w-full py-3.5 bg-gradient-gold hover:opacity-95 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-2 transition-all shadow-md"
              >
                <Download className="h-4 w-4" />
                <span>Download Free Kit (PDF)</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Recommended Articles Section */}
      {recommended.length > 0 && (
        <section className="py-16 bg-white dark:bg-slate-900/10 border-t border-slate-100 dark:border-slate-900 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8">
              Recommended Reads
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recommended.map((post) => (
                <Link 
                  key={post._id}
                  href={`/blog/${post._id}`}
                  className="bg-slate-50/50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 flex flex-col h-full transition-all group"
                >
                  <div className="relative h-48 overflow-hidden shrink-0">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-navy-800 text-gold-400 text-[10px] font-bold uppercase rounded-md shadow-md border border-gold-550/20">
                      {post.category}
                    </span>
                  </div>
                  
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold mb-2 block">
                      {post.date}
                    </span>
                    <h4 className="text-base font-bold text-slate-800 dark:text-white line-clamp-2 leading-snug group-hover:text-gold-500 transition-colors">
                      {post.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Digest */}
      <section className="bg-slate-900 dark:bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors border-t border-slate-800">
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
