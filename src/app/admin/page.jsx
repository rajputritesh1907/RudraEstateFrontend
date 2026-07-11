'use client';

import React, { useEffect, useState } from 'react';
import { Mail, Phone, Calendar, Trash2, ShieldCheck, Sparkles, Loader2, ArrowRight, Plus, FileText, BookOpen, Layers, MessageSquare, Star, Rocket } from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('leads'); // 'leads', 'blogs', 'testimonials', 'prelaunches'
  
  // Leads States
  const [leads, setLeads] = useState([]);
  const [leadsLoading, setLeadsLoading] = useState(true);
  const [leadsError, setLeadsError] = useState('');
  const [updatingLeadId, setUpdatingLeadId] = useState(null);

  // Blogs States
  const [blogs, setBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);
  const [blogsError, setBlogsError] = useState('');
  const [submittingBlog, setSubmittingBlog] = useState(false);
  const [blogSuccess, setBlogSuccess] = useState(false);

  // Testimonials States
  const [testimonials, setTestimonials] = useState([]);
  const [testimonialsLoading, setTestimonialsLoading] = useState(true);
  const [testimonialsError, setTestimonialsError] = useState('');
  const [submittingTestimonial, setSubmittingTestimonial] = useState(false);
  const [testimonialSuccess, setTestimonialSuccess] = useState(false);

  // Pre-Launch States
  const [preLaunches, setPreLaunches] = useState([]);
  const [preLaunchLoading, setPreLaunchLoading] = useState(true);
  const [preLaunchError, setPreLaunchError] = useState('');
  const [submittingPreLaunch, setSubmittingPreLaunch] = useState(false);
  const [preLaunchSuccess, setPreLaunchSuccess] = useState(false);
  const [newPreLaunch, setNewPreLaunch] = useState({
    heading: '', description: '', image: '', launchDate: '', category: 'Residential', location: 'Dholera SIR', priceRange: ''
  });

  // New Blog Form State
  const [newBlog, setNewBlog] = useState({
    title: '',
    category: 'Investment',
    summary: '',
    content: '',
    image: '',
    readTime: '5 min read',
    author: 'Rudra Editorial'
  });

  // New Testimonial Form State
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    designation: '',
    message: '',
    rating: 5,
    image: ''
  });

  useEffect(() => {
    fetchLeads();
    fetchBlogs();
    fetchTestimonials();
    fetchPreLaunches();
  }, []);

  const fetchLeads = async () => {
    setLeadsLoading(true);
    setLeadsError('');
    try {
      const res = await fetch('${process.env.NEXT_PUBLIC_API_URL || `http://localhost:5000`}/api/leads');
      if (res.ok) {
        const data = await res.json();
        setLeads(data);
      } else {
        setLeadsError('Failed to fetch leads. Verify server status.');
      }
    } catch (err) {
      setLeadsError('Unable to connect to the backend server.');
    } finally {
      setLeadsLoading(false);
    }
  };

  const fetchBlogs = async () => {
    setBlogsLoading(true);
    setBlogsError('');
    try {
      const res = await fetch('${process.env.NEXT_PUBLIC_API_URL || `http://localhost:5000`}/api/blogs');
      if (res.ok) {
        const data = await res.json();
        setBlogs(data);
      } else {
        setBlogsError('Failed to fetch blogs.');
      }
    } catch (err) {
      setBlogsError('Unable to connect to the backend server.');
    } finally {
      setBlogsLoading(false);
    }
  };

  const handleUpdateLeadStatus = async (id, currentStatus) => {
    setUpdatingLeadId(id);
    let nextStatus = 'New';
    if (currentStatus === 'New') nextStatus = 'Contacted';
    else if (currentStatus === 'Contacted') nextStatus = 'Closed';

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || `http://localhost:5000`}/api/leads/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: nextStatus })
      });

      if (res.ok) {
        const updatedLead = await res.json();
        setLeads(leads.map(l => l._id === id ? updatedLead : l));
      }
    } catch (err) {
      alert('Failed to update status.');
    } finally {
      setUpdatingLeadId(null);
    }
  };

  const handleDeleteLead = async (id) => {
    if (!window.confirm('Are you sure you want to delete this lead?')) return;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || `http://localhost:5000`}/api/leads/${id}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        setLeads(leads.filter(l => l._id !== id));
      } else {
        alert('Failed to delete lead.');
      }
    } catch (err) {
      alert('Connection error.');
    }
  };

  const handleBlogChange = (e) => {
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
  };

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    setSubmittingBlog(true);
    setBlogSuccess(false);

    const payload = {
      ...newBlog,
      image: newBlog.image.trim() || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    };

    try {
      const res = await fetch('${process.env.NEXT_PUBLIC_API_URL || `http://localhost:5000`}/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        const addedBlog = await res.json();
        setBlogs([addedBlog, ...blogs]);
        setBlogSuccess(true);
        setNewBlog({
          title: '',
          category: 'Investment',
          summary: '',
          content: '',
          image: '',
          readTime: '5 min read',
          author: 'Rudra Editorial'
        });
        setTimeout(() => setBlogSuccess(false), 5000);
      } else {
        alert('Failed to create blog. Check values.');
      }
    } catch (error) {
      alert('Connection error creating blog.');
    } finally {
      setSubmittingBlog(false);
    }
  };

  const handleDeleteBlog = async (id) => {
    if (!window.confirm('Are you sure you want to delete this blog post?')) return;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || `http://localhost:5000`}/api/blogs/${id}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        setBlogs(blogs.filter(b => b._id !== id));
      } else {
        alert('Failed to delete blog.');
      }
    } catch (err) {
      alert('Connection error.');
    }
  };

  const fetchPreLaunches = async () => {
    setPreLaunchLoading(true);
    try {
      const res = await fetch('${process.env.NEXT_PUBLIC_API_URL || `http://localhost:5000`}/api/prelaunches');
      if (res.ok) setPreLaunches(await res.json());
      else setPreLaunchError('Failed to fetch pre-launches.');
    } catch { setPreLaunchError('Unable to connect to server.'); }
    finally { setPreLaunchLoading(false); }
  };

  const handlePreLaunchChange = (e) => {
    setNewPreLaunch({ ...newPreLaunch, [e.target.name]: e.target.value });
  };

  const handleCreatePreLaunch = async (e) => {
    e.preventDefault();
    setSubmittingPreLaunch(true);
    setPreLaunchSuccess(false);
    try {
      const payload = {
        ...newPreLaunch,
        image: newPreLaunch.image.trim() || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      };
      const res = await fetch('${process.env.NEXT_PUBLIC_API_URL || `http://localhost:5000`}/api/prelaunches', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
      });
      if (res.ok) {
        const added = await res.json();
        setPreLaunches([added, ...preLaunches]);
        setPreLaunchSuccess(true);
        setNewPreLaunch({ heading: '', description: '', image: '', launchDate: '', category: 'Residential', location: 'Dholera SIR', priceRange: '' });
        setTimeout(() => setPreLaunchSuccess(false), 5000);
      } else { alert('Failed to create pre-launch item.'); }
    } catch { alert('Connection error.'); }
    finally { setSubmittingPreLaunch(false); }
  };

  const handleDeletePreLaunch = async (id) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || `http://localhost:5000`}/api/prelaunches/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setPreLaunches(prev => prev.filter(p => p._id !== id));
      } else {
        const err = await res.json();
        alert('Delete failed: ' + (err.message || 'Unknown error'));
      }
    } catch (e) {
      alert('Connection error: ' + e.message);
    }
  };

  const fetchTestimonials = async () => {
    setTestimonialsLoading(true);
    setTestimonialsError('');
    try {
      const res = await fetch('${process.env.NEXT_PUBLIC_API_URL || `http://localhost:5000`}/api/testimonials');
      if (res.ok) {
        const data = await res.json();
        setTestimonials(data);
      } else {
        setTestimonialsError('Failed to fetch testimonials.');
      }
    } catch (err) {
      setTestimonialsError('Unable to connect to the backend server.');
    } finally {
      setTestimonialsLoading(false);
    }
  };

  const handleTestimonialChange = (e) => {
    setNewTestimonial({ ...newTestimonial, [e.target.name]: e.target.value });
  };

  const handleCreateTestimonial = async (e) => {
    e.preventDefault();
    setSubmittingTestimonial(true);
    setTestimonialSuccess(false);

    const payload = {
      ...newTestimonial,
      image: newTestimonial.image.trim() || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      rating: parseInt(newTestimonial.rating) || 5
    };

    try {
      const res = await fetch('${process.env.NEXT_PUBLIC_API_URL || `http://localhost:5000`}/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        const addedTestimonial = await res.json();
        setTestimonials([addedTestimonial, ...testimonials]);
        setTestimonialSuccess(true);
        setNewTestimonial({
          name: '',
          designation: '',
          message: '',
          rating: 5,
          image: ''
        });
        setTimeout(() => setTestimonialSuccess(false), 5000);
      } else {
        alert('Failed to create testimonial. Check values.');
      }
    } catch (error) {
      alert('Connection error creating testimonial.');
    } finally {
      setSubmittingTestimonial(false);
    }
  };

  const handleDeleteTestimonial = async (id) => {
    if (!window.confirm('Are you sure you want to delete this testimonial?')) return;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || `http://localhost:5000`}/api/testimonials/${id}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        setTestimonials(testimonials.filter(t => t._id !== id));
      } else {
        alert('Failed to delete testimonial.');
      }
    } catch (err) {
      alert('Connection error.');
    }
  };

  // Leads Stats
  const totalLeads = leads.length;
  const newLeads = leads.filter(l => l.status === 'New').length;
  const contactedLeads = leads.filter(l => l.status === 'Contacted').length;
  const closedLeads = leads.filter(l => l.status === 'Closed').length;

  // Blogs Stats
  const totalBlogs = blogs.length;
  const investmentBlogs = blogs.filter(b => b.category === 'Investment').length;
  const legalBlogs = blogs.filter(b => b.category === 'Legal').length;
  const infraBlogs = blogs.filter(b => b.category === 'Infrastructure').length;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900/10 transition-colors">
      {/* Header Banner */}
      <section className="bg-slate-900 dark:bg-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors shrink-0">
        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 z-10">
          <div>
            <div className="flex items-center space-x-2 text-gold-400 text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="h-4 w-4" />
              <span>Admin Console</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Rudra Group Manager
            </h1>
          </div>

          {/* Tab Selection Controls */}
          <div className="flex bg-slate-800/80 border border-slate-700/60 p-1.5 rounded-2xl space-x-1 shrink-0">
            <button
              onClick={() => setActiveTab('leads')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                activeTab === 'leads'
                  ? 'bg-gradient-gold text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Mail className="h-4 w-4" />
              <span>Inquiries ({leads.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('blogs')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                activeTab === 'blogs'
                  ? 'bg-gradient-gold text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen className="h-4 w-4" />
              <span>Blog Articles ({blogs.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                activeTab === 'testimonials'
                  ? 'bg-gradient-gold text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <MessageSquare className="h-4 w-4" />
              <span>Testimonials ({testimonials.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('prelaunches')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                activeTab === 'prelaunches'
                  ? 'bg-gradient-gold text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Rocket className="h-4 w-4" />
              <span>Pre-Launch ({preLaunches.length})</span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Board */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full shrink-0">
        {activeTab === 'leads' ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-5 rounded-2xl shadow-sm text-center">
              <span className="text-3xl font-extrabold text-slate-800 dark:text-white block">{totalLeads}</span>
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-1 block">Total Inquiries</span>
            </div>
            <div className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-5 rounded-2xl shadow-sm text-center">
              <span className="text-3xl font-extrabold text-blue-500 block">{newLeads}</span>
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-1 block">New Inquiries</span>
            </div>
            <div className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-5 rounded-2xl shadow-sm text-center">
              <span className="text-3xl font-extrabold text-amber-500 block">{contactedLeads}</span>
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-1 block">Contacted</span>
            </div>
            <div className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-5 rounded-2xl shadow-sm text-center">
              <span className="text-3xl font-extrabold text-emerald-500 block">{closedLeads}</span>
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-1 block">Closed / Resolved</span>
            </div>
          </div>
        ) : activeTab === 'blogs' ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-5 rounded-2xl shadow-sm text-center">
              <span className="text-3xl font-extrabold text-slate-800 dark:text-white block">{totalBlogs}</span>
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-1 block">Total Blogs</span>
            </div>
            <div className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-5 rounded-2xl shadow-sm text-center">
              <span className="text-3xl font-extrabold text-blue-500 block">{investmentBlogs}</span>
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-1 block">Investment</span>
            </div>
            <div className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-5 rounded-2xl shadow-sm text-center">
              <span className="text-3xl font-extrabold text-purple-500 block">{legalBlogs}</span>
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-1 block">Legal</span>
            </div>
            <div className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-5 rounded-2xl shadow-sm text-center">
              <span className="text-3xl font-extrabold text-emerald-500 block">{infraBlogs}</span>
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-1 block">Infrastructure</span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-5 rounded-2xl shadow-sm text-center">
              <span className="text-3xl font-extrabold text-slate-800 dark:text-white block">{testimonials.length}</span>
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-1 block">Total Reviews</span>
            </div>
            <div className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-5 rounded-2xl shadow-sm text-center">
              <span className="text-3xl font-extrabold text-amber-500 block">{testimonials.filter(t => t.rating === 5).length}</span>
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-1 block">5 Star Rating</span>
            </div>
            <div className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-5 rounded-2xl shadow-sm text-center">
              <span className="text-3xl font-extrabold text-blue-500 block">{testimonials.filter(t => t.rating === 4).length}</span>
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-1 block">4 Star Rating</span>
            </div>
            <div className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-5 rounded-2xl shadow-sm text-center">
              <span className="text-3xl font-extrabold text-slate-400 block">{testimonials.filter(t => t.rating < 4).length}</span>
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-1 block">3 Star or Less</span>
            </div>
          </div>
        )}
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow pb-16">
        {/* LEADS TAB VIEW */}
        {activeTab === 'leads' && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl overflow-hidden shadow-sm">
            {leadsLoading ? (
              <div className="py-20 flex flex-col items-center justify-center space-y-3">
                <Loader2 className="h-8 w-8 animate-spin text-gold-500" />
                <span className="text-sm text-slate-500 dark:text-slate-400">Loading inquiries...</span>
              </div>
            ) : leadsError ? (
              <div className="py-20 text-center px-4">
                <p className="text-rose-500 dark:text-rose-400 font-bold mb-4">{leadsError}</p>
                <button 
                  onClick={fetchLeads}
                  className="px-4 py-2 bg-gold-500 text-white text-xs font-bold rounded-xl shadow-sm hover:opacity-95"
                >
                  Retry Connection
                </button>
              </div>
            ) : leads.length === 0 ? (
              <div className="py-20 text-center text-slate-500 dark:text-slate-400">
                <Sparkles className="h-8 w-8 mx-auto text-slate-300 dark:text-slate-700 mb-2" />
                <p className="font-semibold text-sm">No inquiries recorded yet.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100 dark:border-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50/50 dark:bg-slate-900/30">
                      <th className="px-6 py-4">Visitor</th>
                      <th className="px-6 py-4">Message</th>
                      <th className="px-6 py-4">Property</th>
                      <th className="px-6 py-4 text-center">Status</th>
                      <th className="px-6 py-4 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {leads.map((lead) => {
                      const dateStr = new Date(lead.createdAt).toLocaleDateString(undefined, {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      });

                      return (
                        <tr key={lead._id} className="hover:bg-slate-50/30 dark:hover:bg-slate-900/20 text-xs text-slate-700 dark:text-slate-300">
                          <td className="px-6 py-5 align-top space-y-1.5 whitespace-nowrap min-w-[200px]">
                            <p className="font-extrabold text-sm text-slate-800 dark:text-white leading-none">
                              {lead.name}
                            </p>
                            <p className="flex items-center text-[10px] text-slate-400 dark:text-slate-500">
                              <Mail className="h-3.5 w-3.5 mr-1" />
                              {lead.email}
                            </p>
                            <p className="flex items-center text-[10px] text-slate-400 dark:text-slate-500">
                              <Phone className="h-3.5 w-3.5 mr-1" />
                              {lead.phone}
                            </p>
                            <p className="flex items-center text-[10px] text-slate-400 dark:text-slate-500 pt-0.5">
                              <Calendar className="h-3.5 w-3.5 mr-1" />
                              {dateStr}
                            </p>
                          </td>
                          <td className="px-6 py-5 align-top min-w-[250px] leading-relaxed">
                            {lead.message}
                          </td>
                          <td className="px-6 py-5 align-top font-bold text-navy-800 dark:text-gold-400 whitespace-nowrap">
                            {lead.propertyOfInterest}
                          </td>
                          <td className="px-6 py-5 align-top text-center whitespace-nowrap">
                            <button
                              onClick={() => handleUpdateLeadStatus(lead._id, lead.status)}
                              disabled={updatingLeadId === lead._id}
                              className={`px-3 py-1.5 rounded-xl font-bold text-[10px] uppercase tracking-wider inline-flex items-center space-x-1 border ${
                                lead.status === 'New'
                                  ? 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/20 dark:text-blue-400 dark:border-blue-800/30'
                                  : lead.status === 'Contacted'
                                    ? 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-800/30'
                                    : 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-800/30'
                              }`}
                            >
                              <span>{lead.status}</span>
                              <ArrowRight className="h-3 w-3 text-current ml-0.5 opacity-60" />
                            </button>
                          </td>
                          <td className="px-6 py-5 align-top text-center">
                            <button
                              onClick={() => handleDeleteLead(lead._id)}
                              className="p-2 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl transition-all"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* BLOGS MANAGEMENT TAB VIEW */}
        {activeTab === 'blogs' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Create Blog Form */}
            <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2 flex items-center space-x-2 text-slate-800 dark:text-white">
                <Plus className="h-5 w-5 text-gold-500" />
                <span>Write New Article</span>
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 mb-6">
                Publish a new research analysis or infrastructure update for investors.
              </p>

              {blogSuccess && (
                <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-400 rounded-xl text-xs font-semibold border border-emerald-200/50 dark:border-emerald-800/30">
                  ✓ Blog article successfully published!
                </div>
              )}

              <form onSubmit={handleCreateBlog} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    Article Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    required
                    value={newBlog.title}
                    onChange={handleBlogChange}
                    placeholder="e.g. Dholera Expressway Project Updates"
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-gold-500 text-xs text-slate-800 dark:text-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                      Category
                    </label>
                    <select
                      name="category"
                      value={newBlog.category}
                      onChange={handleBlogChange}
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-gold-500 text-xs text-slate-800 dark:text-white"
                    >
                      <option value="Investment">Investment</option>
                      <option value="Legal">Legal</option>
                      <option value="Infrastructure">Infrastructure</option>
                      <option value="News">News</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                      Read Time
                    </label>
                    <input
                      type="text"
                      name="readTime"
                      value={newBlog.readTime}
                      onChange={handleBlogChange}
                      placeholder="e.g. 5 min read"
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-gold-500 text-xs text-slate-800 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    Image URL (Optional)
                  </label>
                  <input
                    type="text"
                    name="image"
                    value={newBlog.image}
                    onChange={handleBlogChange}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-gold-500 text-xs text-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    Short Summary
                  </label>
                  <textarea
                    name="summary"
                    required
                    rows="2"
                    value={newBlog.summary}
                    onChange={handleBlogChange}
                    placeholder="Brief description of the article..."
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-gold-500 text-xs text-slate-800 dark:text-white resize-none"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    Full Content
                  </label>
                  <textarea
                    name="content"
                    required
                    rows="6"
                    value={newBlog.content}
                    onChange={handleBlogChange}
                    placeholder="Write detailed article paragraphs..."
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-gold-500 text-xs text-slate-800 dark:text-white resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submittingBlog}
                  className="w-full py-3 bg-gradient-gold hover:opacity-95 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-1.5 transition-all disabled:opacity-50"
                >
                  {submittingBlog ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      <Plus className="h-4 w-4" />
                      <span>Publish Blog Post</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* List & Manage Blogs */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl overflow-hidden shadow-sm">
              {blogsLoading ? (
                <div className="py-20 flex flex-col items-center justify-center space-y-3">
                  <Loader2 className="h-8 w-8 animate-spin text-gold-500" />
                  <span className="text-sm text-slate-500 dark:text-slate-400">Loading articles...</span>
                </div>
              ) : blogsError ? (
                <div className="py-20 text-center px-4">
                  <p className="text-rose-500 dark:text-rose-400 font-bold mb-2">{blogsError}</p>
                </div>
              ) : blogs.length === 0 ? (
                <div className="py-20 text-center text-slate-500 dark:text-slate-400">
                  <p className="font-semibold text-sm">No blogs published yet.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-100 dark:border-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50/50 dark:bg-slate-900/30">
                        <th className="px-6 py-4">Article</th>
                        <th className="px-6 py-4">Category</th>
                        <th className="px-6 py-4 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {blogs.map((blog) => (
                        <tr key={blog._id} className="hover:bg-slate-50/30 dark:hover:bg-slate-900/20 text-xs text-slate-700 dark:text-slate-300">
                          <td className="px-6 py-4 min-w-[200px]">
                            <p className="font-bold text-slate-800 dark:text-white leading-tight mb-1">{blog.title}</p>
                            <p className="text-[10px] text-slate-400">{blog.date} • {blog.readTime}</p>
                          </td>
                          <td className="px-6 py-4 font-semibold text-gold-500">
                            {blog.category}
                          </td>
                          <td className="px-6 py-4 text-center">
                            <button
                              onClick={() => handleDeleteBlog(blog._id)}
                              className="p-2 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl transition-all"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

          </div>
        )}

        {/* TESTIMONIALS MANAGEMENT TAB VIEW */}
        {activeTab === 'testimonials' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in-up">
            
            {/* Create Testimonial Form */}
            <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2 flex items-center space-x-2 text-slate-800 dark:text-white">
                <Plus className="h-5 w-5 text-gold-500" />
                <span>Add Testimonial</span>
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 mb-6">
                Publish a review from a client or land investor on the homepage.
              </p>

              {testimonialSuccess && (
                <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-400 rounded-xl text-xs font-semibold border border-emerald-200/50 dark:border-emerald-800/30">
                  ✓ Testimonial successfully added!
                </div>
              )}

              <form onSubmit={handleCreateTestimonial} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    Client Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={newTestimonial.name}
                    onChange={handleTestimonialChange}
                    placeholder="e.g. Rajesh Shah"
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-gold-500 text-xs text-slate-800 dark:text-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                      Designation
                    </label>
                    <input
                      type="text"
                      name="designation"
                      required
                      value={newTestimonial.designation}
                      onChange={handleTestimonialChange}
                      placeholder="e.g. NRI Investor, UK"
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-gold-500 text-xs text-slate-800 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                      Rating (1-5 Stars)
                    </label>
                    <select
                      name="rating"
                      value={newTestimonial.rating}
                      onChange={handleTestimonialChange}
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-gold-500 text-xs text-slate-800 dark:text-white"
                    >
                      <option value="5">5 Stars</option>
                      <option value="4">4 Stars</option>
                      <option value="3">3 Stars</option>
                      <option value="2">2 Stars</option>
                      <option value="1">1 Star</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    Profile Image URL (Optional)
                  </label>
                  <input
                    type="text"
                    name="image"
                    value={newTestimonial.image}
                    onChange={handleTestimonialChange}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-gold-500 text-xs text-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={newTestimonial.message}
                    onChange={handleTestimonialChange}
                    placeholder="Client feedback message here..."
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-gold-500 text-xs text-slate-800 dark:text-white resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submittingTestimonial}
                  className="w-full py-3 bg-gradient-gold hover:opacity-95 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-1.5 transition-all disabled:opacity-50"
                >
                  {submittingTestimonial ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      <Plus className="h-4 w-4" />
                      <span>Add Testimonial</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* List & Manage Testimonials */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl overflow-hidden shadow-sm">
              {testimonialsLoading ? (
                <div className="py-20 flex flex-col items-center justify-center space-y-3">
                  <Loader2 className="h-8 w-8 animate-spin text-gold-500" />
                  <span className="text-sm text-slate-500 dark:text-slate-400">Loading testimonials...</span>
                </div>
              ) : testimonialsError ? (
                <div className="py-20 text-center px-4">
                  <p className="text-rose-500 dark:text-rose-400 font-bold mb-2">{testimonialsError}</p>
                </div>
              ) : testimonials.length === 0 ? (
                <div className="py-20 text-center text-slate-500 dark:text-slate-400">
                  <p className="font-semibold text-sm">No testimonials added yet.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-100 dark:border-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50/50 dark:bg-slate-900/30">
                        <th className="px-6 py-4">Client</th>
                        <th className="px-6 py-4">Feedback</th>
                        <th className="px-6 py-4 text-center">Rating</th>
                        <th className="px-6 py-4 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {testimonials.map((t) => (
                        <tr key={t._id} className="hover:bg-slate-50/30 dark:hover:bg-slate-900/20 text-xs text-slate-700 dark:text-slate-300">
                          <td className="px-6 py-4 min-w-[150px]">
                            <div className="flex items-center space-x-3">
                              <img src={t.image} className="w-8 h-8 rounded-full object-cover" alt="" />
                              <div>
                                <p className="font-bold text-slate-800 dark:text-white leading-tight">{t.name}</p>
                                <p className="text-[10px] text-slate-400">{t.designation}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 max-w-[250px] truncate leading-relaxed">
                            {t.message}
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className="font-bold text-gold-500 flex items-center justify-center space-x-0.5">
                              <span>{t.rating}</span>
                              <Star className="h-3 w-3 fill-current text-amber-500 inline" />
                            </span>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <button
                              onClick={() => handleDeleteTestimonial(t._id)}
                              className="p-2 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl transition-all"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

          </div>
        )}

        {/* PRE-LAUNCH MANAGEMENT TAB */}
        {activeTab === 'prelaunches' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Create Form */}
            <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2 flex items-center space-x-2 text-slate-800 dark:text-white">
                <Rocket className="h-5 w-5 text-gold-500" />
                <span>Add Pre-Launch Listing</span>
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 mb-6">Add an upcoming property with launch date — a live countdown will auto-generate on the website.</p>

              {preLaunchSuccess && (
                <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-400 rounded-xl text-xs font-semibold border border-emerald-200/50 dark:border-emerald-800/30">
                  ✓ Pre-launch listing published!
                </div>
              )}

              <form onSubmit={handleCreatePreLaunch} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Property Heading</label>
                  <input type="text" name="heading" required value={newPreLaunch.heading} onChange={handlePreLaunchChange}
                    placeholder="e.g. Orchid Sky Residences Phase III"
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-gold-500 text-xs text-slate-800 dark:text-white" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Category</label>
                    <select name="category" value={newPreLaunch.category} onChange={handlePreLaunchChange}
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-gold-500 text-xs text-slate-800 dark:text-white">
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Industrial</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Launch Date</label>
                    <input type="datetime-local" name="launchDate" required value={newPreLaunch.launchDate} onChange={handlePreLaunchChange}
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-gold-500 text-xs text-slate-800 dark:text-white" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Location</label>
                    <input type="text" name="location" value={newPreLaunch.location} onChange={handlePreLaunchChange}
                      placeholder="e.g. TPS-2, Dholera SIR"
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-gold-500 text-xs text-slate-800 dark:text-white" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Price Range</label>
                    <input type="text" name="priceRange" value={newPreLaunch.priceRange} onChange={handlePreLaunchChange}
                      placeholder="e.g. ₹45 L – ₹1.2 Cr"
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-gold-500 text-xs text-slate-800 dark:text-white" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Image URL (Optional)</label>
                  <input type="text" name="image" value={newPreLaunch.image} onChange={handlePreLaunchChange}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-gold-500 text-xs text-slate-800 dark:text-white" />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Description</label>
                  <textarea name="description" required rows="4" value={newPreLaunch.description} onChange={handlePreLaunchChange}
                    placeholder="Detailed property description for investors..."
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-gold-500 text-xs text-slate-800 dark:text-white resize-none"></textarea>
                </div>

                <button type="submit" disabled={submittingPreLaunch}
                  className="w-full py-3 bg-gradient-gold hover:opacity-95 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-1.5 transition-all disabled:opacity-50">
                  {submittingPreLaunch ? <Loader2 className="h-4 w-4 animate-spin" /> : (<><Rocket className="h-4 w-4" /><span>Publish Pre-Launch</span></>)}
                </button>
              </form>
            </div>

            {/* List & Manage Pre-Launches */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl overflow-hidden shadow-sm">
              {preLaunchLoading ? (
                <div className="py-20 flex flex-col items-center justify-center space-y-3">
                  <Loader2 className="h-8 w-8 animate-spin text-gold-500" />
                  <span className="text-sm text-slate-500 dark:text-slate-400">Loading listings...</span>
                </div>
              ) : preLaunchError ? (
                <div className="py-20 text-center px-4"><p className="text-rose-500 font-bold">{preLaunchError}</p></div>
              ) : preLaunches.length === 0 ? (
                <div className="py-20 text-center text-slate-500 dark:text-slate-400">
                  <Rocket className="h-8 w-8 mx-auto text-slate-300 dark:text-slate-700 mb-2" />
                  <p className="font-semibold text-sm">No pre-launch listings yet. Add one!</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-100 dark:border-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50/50 dark:bg-slate-900/30">
                        <th className="px-6 py-4">Property</th>
                        <th className="px-6 py-4">Launch Date</th>
                        <th className="px-6 py-4">Category</th>
                        <th className="px-6 py-4 text-center">Delete</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {preLaunches.map((item) => (
                        <tr key={item._id} className="hover:bg-slate-50/30 dark:hover:bg-slate-900/20 text-xs text-slate-700 dark:text-slate-300">
                          <td className="px-6 py-4 min-w-[200px]">
                            <p className="font-bold text-slate-800 dark:text-white leading-tight mb-1">{item.heading}</p>
                            <p className="text-[10px] text-slate-400">{item.location} • {item.priceRange}</p>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <p className="font-semibold">{new Date(item.launchDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                          </td>
                          <td className="px-6 py-4 font-semibold text-gold-500">{item.category}</td>
                          <td className="px-6 py-4 text-center">
                            <button onClick={() => handleDeletePreLaunch(item._id)}
                              className="p-2 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl transition-all">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

          </div>
        )}
      </section>
    </div>
  );
}
