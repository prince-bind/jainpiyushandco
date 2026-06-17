'use client'
import React from 'react';
import { Mail, TrendingUp } from 'lucide-react';

export default function StayUpdated(): React.JSX.Element {
  return (
    <div className="bg-[#fafbfc] min-h-[calc(100vh-115px)] flex items-center justify-center font-sans text-[#0f1b29] relative overflow-hidden py-12 px-6 lg:px-12">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl w-full mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <span className="flex items-center gap-2 text-[#d8a379] text-sm font-bold tracking-widest uppercase mb-4 bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/20">
            <TrendingUp size={16} /> Latest Insights
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f1b29] mb-6 leading-tight tracking-tight">
            Stay Updated with <br />Industry Shifts
          </h1>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
            Curated perspectives, regulatory updates, and expert opinions on taxation, compliance, and corporate finance.
          </p>
        </div>

        {/* Newsletter Premium CTA */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[80px] rounded-full pointer-events-none"></div>

          <div className="relative p-8 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-xl text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-50 text-orange-500 mb-6">
                <Mail size={24} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#0f1b29] mb-4 tracking-tight">
                Subscribe to our Newsletter
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                Get curated legal and financial insights, expert opinions, and regulatory updates directly in your inbox. No spam, ever.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-gray-50 border border-gray-200 text-[#0f1b29] px-6 py-4 rounded-xl w-full sm:w-80 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-all placeholder:text-gray-400"
              />
              <button className="bg-gradient-to-r from-[#d8a379] to-orange-400 hover:from-orange-400 hover:to-orange-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-[0_4px_15px_rgba(216,163,121,0.3)] hover:shadow-[0_6px_20px_rgba(216,163,121,0.5)] shrink-0 whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}