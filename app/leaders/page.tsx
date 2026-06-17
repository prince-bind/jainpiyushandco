'use client'
import React from 'react';
import { GraduationCap, Scale, ShieldCheck, Sparkles } from 'lucide-react';

export default function Leaders(): React.JSX.Element {
  return (
    <div className="bg-[#fafbfc] min-h-screen font-sans text-[#0f1b29] pb-24">
      {/* Hero Section */}
      <div className="relative py-24 px-6 lg:px-12 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
            <span className="flex items-center gap-2 text-[#d8a379] text-sm font-bold tracking-widest uppercase mb-4 bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/20">
              <Sparkles size={16} /> Our Leadership
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f1b29] mb-6 leading-tight tracking-tight">
              The Co-Leadership <br />Paradigm
            </h1>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl">
              Our practice is anchored by a dynamic leadership pair combining robust litigation capabilities with sharp risk-mitigation insights. Together, they bridge the gap between complex legal frameworks and practical corporate strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* CA Piyush Jain */}
            <div className="group relative bg-white rounded-[2.5rem] p-10 md:p-14 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-orange-500/10 transition-colors duration-500"></div>
              
              <div className="relative z-10 flex-grow">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 shrink-0">
                    <Scale size={32} />
                  </div>
                  <div>
                    <span className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-1 block">Founder</span>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#0f1b29]">CA Piyush Jain</h3>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 mb-8 border border-gray-100 inline-flex items-center gap-3">
                  <GraduationCap className="text-orange-400" size={20} />
                  <span className="text-sm font-semibold text-gray-600">CA | LL.B | B.Com (Hons.) – SGGSCC, Delhi Univ.</span>
                </div>

                <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                  <p>
                    CA Piyush Jain is a Chartered Accountant and Law Graduate with over <strong className="text-[#0f1b29]">12 years of specialized expertise</strong> in GST Advisory, GST Litigation, GST Refunds, Income Tax, DGFT matters, Internal Audits, ICFR Testing, IEPF claims, and corporate compliance.
                  </p>
                  <p>
                    His expertise lies at the precise intersection of law, taxation, and business strategy. He acts as a trusted Pan-India advisor, helping clients make informed decisions while structuring seamless, fully compliant operations.
                  </p>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-gray-100 flex items-center gap-6 relative z-10">
                <div className="flex flex-col">
                  <span className="text-3xl font-extrabold text-[#0f1b29]">12+</span>
                  <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">Years Experience</span>
                </div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-extrabold text-[#0f1b29]">Litigation</span>
                  <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">& Advisory Focus</span>
                </div>
              </div>
            </div>

            {/* CA Megha Jain */}
            <div className="group relative bg-white rounded-[2.5rem] p-10 md:p-14 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-orange-500/10 transition-colors duration-500"></div>
              
              <div className="relative z-10 flex-grow">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 shrink-0">
                    <ShieldCheck size={32} />
                  </div>
                  <div>
                    <span className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-1 block">Partner</span>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#0f1b29]">CA Megha Jain</h3>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 mb-8 border border-gray-100 inline-flex items-center gap-3">
                  <GraduationCap className="text-orange-400" size={20} />
                  <span className="text-sm font-semibold text-gray-600">CA | B.Com (Hons.)</span>
                </div>

                <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                  <p>
                    CA Megha Jain is a Chartered Accountant with over <strong className="text-[#0f1b29]">11 years of extensive experience</strong> in credit underwriting, financial analysis, risk assessment, and audit advisory.
                  </p>
                  <p>
                    She specializes in evaluating financial health, rigorously assessing creditworthiness, identifying hidden business risks, and delivering highly actionable financial insights that support lending, investment, and top-level strategic decision-making.
                  </p>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-gray-100 flex items-center gap-6 relative z-10">
                <div className="flex flex-col">
                  <span className="text-3xl font-extrabold text-[#0f1b29]">11+</span>
                  <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">Years Experience</span>
                </div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-extrabold text-[#0f1b29]">Risk & Audit</span>
                  <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">Analysis Focus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}