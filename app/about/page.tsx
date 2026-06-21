'use client'
import React from 'react';
import { Shield, Lightbulb, Scale, TrendingUp } from 'lucide-react';

export default function AboutPage(): React.JSX.Element {
  return (
    <div className="bg-[#fafbfc] min-h-screen font-sans text-[#0f1b29] pb-24">
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 lg:px-12 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <span className="text-[#e8af81] text-sm font-bold tracking-widest uppercase block mb-4">
            WHO WE ARE
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#0f1b29] mb-8 leading-tight tracking-tight">
            Bridging Complex Legal Frameworks <br className="hidden md:block" />
            with Practical Corporate Strategy
          </h1>
          <p className="text-lg md:text-xl text-[#596778] leading-relaxed max-w-4xl mx-auto mb-8">
            <strong className="text-[#0f1b29]">Jain Piyush & Co.</strong> is a premier, multi-disciplinary Chartered Accountancy firm. Built on a foundation of technical excellence and a business-first philosophy, we redefine how organizations navigate compliance—turning regulatory obligations into drivers of sustainable corporate growth.
          </p>
          <p className="text-base md:text-lg text-[#596778] leading-relaxed max-w-3xl mx-auto">
            Today, we proudly serve a diverse roster of clients across India and overseas, including fast-scaling startups, established SMEs, financial institutions, and global investors.
          </p>
        </div>
      </section>

      {/* Core Value & Philosophy Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Core Value */}
          <div className="bg-white rounded-[2rem] p-10 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full opacity-50"></div>
            <div className="w-14 h-14 bg-[#fdf3ec] rounded-2xl flex items-center justify-center text-[#e8af81] mb-8">
              <Shield size={28} strokeWidth={2} />
            </div>
            <h2 className="text-2xl font-bold text-[#0f1b29] mb-4">The Core Value We Deliver</h2>
            <p className="text-[#596778] leading-relaxed">
              We don't merely point out systemic gaps or hand you standard compliance reports. We actively partner with your leadership team to protect profit margins, mitigate balance-sheet risks, and map out compliant paths toward your long-term expansion goals.
            </p>
          </div>

          {/* Philosophy */}
          <div className="bg-[#0f1c2b] rounded-[2rem] p-10 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
             <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#1d2a3a] rounded-tl-full opacity-50"></div>
            <div className="w-14 h-14 bg-[#1d2a3a] rounded-2xl flex items-center justify-center text-[#e8af81] mb-8 relative z-10">
              <Lightbulb size={28} strokeWidth={2} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4 relative z-10">Our Philosophy</h2>
            <p className="text-[#94a3b8] leading-relaxed relative z-10">
              We believe every business deserves practical advice, transparent communication, and proactive compliance support. Our approach combines technical excellence with commercial understanding to deliver solutions that are legally sound, commercially viable, and growth-oriented.
            </p>
          </div>

        </div>
      </section>

      {/* Leadership Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[#e8af81] text-sm font-bold tracking-widest uppercase block mb-3">
            OUR LEADERSHIP
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f1b29] mb-6 tracking-tight">
            The Co-Leadership Paradigm
          </h2>
          <p className="text-[#596778] text-lg">
            Our practice is anchored by a dynamic leadership pair combining robust litigation capabilities with sharp risk-mitigation insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Piyush Jain Profile */}
          <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col group hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8 border-b border-gray-100 pb-8">
              <div className="w-24 h-24 bg-[#fdf3ec] rounded-full flex items-center justify-center text-[#e8af81] shrink-0 border border-[#f5d7be]">
                <Scale size={40} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0f1b29] mb-2 group-hover:text-[#e8af81] transition-colors">CA Piyush Jain</h3>
                <p className="text-sm font-semibold text-[#596778] mb-2">Founder & Partner</p>
                <div className="flex flex-wrap text-[0.75rem] font-bold text-[#d9905b] bg-[#fdf3ec] px-3 py-1.5 rounded-lg inline-block">
                  CA | LL.B | B.Com (Hons.) – SGGSCC, DU
                </div>
              </div>
            </div>
            
            <div className="space-y-4 text-[#596778] text-[0.95rem] leading-relaxed flex-grow">
              <p>
                <strong className="text-[#0f1b29] font-semibold">Backed by over 12 years of specialized expertise</strong>, Piyush operates at the precise intersection of tax law and commercial strategy. He acts as a trusted Pan-India advisor to multinational corporations, helping cross-border and domestic entities structure seamless operations.
              </p>
              <p>
                He has extensive experience in GST Advisory, GST Litigation, GST Refunds, Income Tax, DGFT matters, Internal Audits, ICFR Testing, IEPF claims, and corporate compliance.
              </p>
              <p>
                Driven by the belief that compliance should enable growth rather than hinder it, he established his practice with a vision to help businesses navigate regulatory complexities with clarity, confidence, and commercial practicality.
              </p>
            </div>
          </div>

          {/* Megha Jain Profile */}
          <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col group hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8 border-b border-gray-100 pb-8">
              <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 shrink-0 border border-blue-100">
                <TrendingUp size={40} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0f1b29] mb-2 group-hover:text-blue-500 transition-colors">CA Megha Jain</h3>
                <p className="text-sm font-semibold text-[#596778] mb-2">Partner</p>
                <div className="flex flex-wrap text-[0.75rem] font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg inline-block">
                  CA | B.Com (Hons.)
                </div>
              </div>
            </div>
            
            <div className="space-y-4 text-[#596778] text-[0.95rem] leading-relaxed flex-grow">
              <p>
                <strong className="text-[#0f1b29] font-semibold">Bringing 11 years of extensive experience</strong> in financial analysis and corporate auditing, Megha leads our credit underwriting and risk advisory workflows. Her deep-dive financial appraisals provide the data-driven insights businesses and financial institutions need to make sound capital allocations.
              </p>
              <p>
                She specializes in evaluating financial health, assessing creditworthiness, identifying business risks, and delivering actionable financial insights that support lending, investment, and strategic decision-making.
              </p>
              <p>
                At the firm, she leads financial due diligence, credit appraisal, financial modelling, and risk evaluation assignments. Her analytical approach enables clients to strengthen financial controls, improve performance, and achieve sustainable growth.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}