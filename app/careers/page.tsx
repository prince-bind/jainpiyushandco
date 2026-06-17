'use client'
import React from 'react';
import { ChevronRight, Users, BookOpen, Briefcase, Award, TrendingUp, Sparkles } from 'lucide-react';

export default function Careers(): React.JSX.Element {
  return (
    <div className="bg-[#fafbfc] min-h-screen font-sans text-[#0f1b29] pb-24">
      {/* Hero Section */}
      <div className="relative py-24 px-6 lg:px-12 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
            <span className="flex items-center gap-2 text-[#d8a379] text-sm font-bold tracking-widest uppercase mb-4 bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/20">
              <Sparkles size={16} /> Join Our Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f1b29] mb-6 leading-tight tracking-tight">
              Build a Legacy of <br />Excellence With Us
            </h1>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
              Join a firm where technical brilliance meets a business-first philosophy. We are actively seeking driven professionals ready to redefine corporate compliance and advisory.
            </p>
          </div>

          {/* Why Join Us Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {[
              { icon: Users, title: "Collaborative Culture", desc: "Work alongside industry veterans in a highly supportive environment." },
              { icon: BookOpen, title: "Continuous Learning", desc: "Regular training sessions and professional development programs." },
              { icon: TrendingUp, title: "Fast-Track Growth", desc: "Clear paths for career progression based strictly on merit." },
              { icon: Award, title: "Premium Client Roster", desc: "Gain exposure working with top-tier multinationals and fast-scaling startups." }
            ].map((perk, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <perk.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#0f1b29] mb-3">{perk.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>

          {/* Open Positions Section */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0f1b29] flex items-center gap-3">
                <Briefcase className="text-orange-500" /> Open Positions
              </h3>
              <span className="text-sm font-semibold text-gray-400 bg-gray-100 px-3 py-1 rounded-full">3 Roles</span>
            </div>

            <div className="space-y-4">
              {[
                { title: "Senior Associate - GST Litigation", exp: "4-6 Years", type: "Full Time", location: "New Delhi" },
                { title: "Financial Analyst - Credit Risk", exp: "2-4 Years", type: "Full Time", location: "Remote / Hybrid" },
                { title: "Articled Assistant (CA Trainee)", exp: "Fresher", type: "Trainee", location: "New Delhi" }
              ].map((job, idx) => (
                <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-orange-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-[#0f1b29] group-hover:text-orange-500 transition-colors mb-3">{job.title}</h4>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5"><Briefcase size={14} className="text-gray-400"/> {job.exp}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span className="text-orange-600 font-medium bg-orange-50 px-2 py-0.5 rounded-md">{job.type}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <button className="flex items-center justify-center gap-2 text-white bg-[#0f1b29] px-6 py-3 rounded-xl hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition-all font-semibold shrink-0 w-full md:w-auto">
                    Apply Now <ChevronRight size={18} />
                  </button>
                </div>
              ))}
            </div>

            {/* General Application CTA */}
            <div className="mt-12 bg-gradient-to-r from-orange-50 to-white border border-orange-100 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div>
                <h4 className="text-xl font-bold text-[#0f1b29] mb-2">Don't see a fit?</h4>
                <p className="text-gray-500 max-w-lg">We are always eager to connect with exceptional talent. Send us your resume and we'll reach out if a role opens up.</p>
              </div>
              <button className="bg-white text-[#0f1b29] border border-gray-200 px-8 py-3.5 rounded-xl font-bold shadow-sm hover:shadow-md hover:border-orange-200 transition-all shrink-0">
                Submit Open Application
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}