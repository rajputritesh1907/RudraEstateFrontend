'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const LeadForm = ({ defaultProperty = 'General Inquiry', darkBg = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyOfInterest: defaultProperty
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' or 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setErrorMessage('');

    // Phone Validation
    const phoneRegex = /^[0-9+\s-]{10,15}$/;
    if (!phoneRegex.test(formData.phone.trim())) {
      setLoading(false);
      setStatus('error');
      setErrorMessage('Please enter a valid phone number (10-15 digits).');
      return;
    }

    try {
      const response = await fetch('${process.env.NEXT_PUBLIC_API_URL || `http://localhost:5000`}/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          propertyOfInterest: defaultProperty
        });
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Unable to connect to the server. Please check if the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`p-6 rounded-2xl border transition-all ${
      darkBg 
        ? 'bg-slate-900 border-slate-800 text-white' 
        : 'bg-white border-slate-200/50 text-slate-800 dark:bg-slate-900 dark:border-slate-800 dark:text-white'
    } shadow-lg`}>
      <h3 className="text-xl font-bold mb-2">Schedule a Consultation</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
        Fill out the form below and our real estate experts will connect with you within 24 hours.
      </p>

      {status === 'success' && (
        <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-400 rounded-xl flex items-start space-x-3 border border-emerald-200/50 dark:border-emerald-800/30">
          <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold text-sm">Inquiry Submitted Successfully!</p>
            <p className="text-xs mt-0.5">Thank you for contacting Rudra Group. We will get back to you shortly.</p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 bg-rose-50 dark:bg-rose-950/30 text-rose-800 dark:text-rose-400 rounded-xl flex items-start space-x-3 border border-rose-200/50 dark:border-rose-800/30">
          <AlertCircle className="h-5 w-5 mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold text-sm">Submission Failed</p>
            <p className="text-xs mt-0.5">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 focus:outline-none transition-colors text-slate-800 dark:text-white"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 focus:outline-none transition-colors text-slate-800 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 focus:outline-none transition-colors text-slate-800 dark:text-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
            Property of Interest
          </label>
          <select
            name="propertyOfInterest"
            value={formData.propertyOfInterest}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 focus:outline-none transition-colors text-slate-800 dark:text-white"
          >
            <option value="General Inquiry">General Consultation</option>
            <option value="Orchid River View">Orchid River View</option>
            <option value="Orchid Villa Greens">Orchid Villa Greens</option>
            <option value="Orchid Villa Luxuriya">Orchid Villa Luxuriya</option>
            <option value="Dholera Bhoomi">Dholera Bhoomi</option>
            <option value="Rudra Commercial Hub">Rudra Commercial Hub</option>
            <option value="Rudra Industrial Park">Rudra Industrial Park</option>
            <option value="Other Land Deals">Other Land Deals</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
            Message
          </label>
          <textarea
            name="message"
            required
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your budget, size requirements, or questions..."
            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 focus:outline-none transition-colors text-slate-800 dark:text-white resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 px-6 bg-gradient-gold hover:opacity-95 text-white font-bold rounded-xl flex items-center justify-center space-x-2 transition-all hover:shadow-lg disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Submitting Inquiries...</span>
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
