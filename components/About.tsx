'use client'
import React from 'react';
import { BookOpen, User, Target, Eye, Award, ShieldCheck } from 'lucide-react';

export default function About(): React.JSX.Element {
  return (
    <section id="about" className="bg-white py-24 font-sans overflow-hidden">
      
      {/* SECTION 1: Firm Overview (4 Cards) */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 mb-32">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f1b29] text-center mb-16 tracking-tight">
          Jain Piyush & Co. - Chartered Accountants
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Our Story */}
          <div className="bg-[#f8fafc] rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100 hover:scale-105 hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-orange-100/50 p-2.5 rounded-xl text-[#d8a379]">
                <BookOpen size={24} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-[#0f1b29]">Our Story</h3>
            </div>
            <div className="space-y-4 text-gray-600 text-[0.95rem] leading-relaxed">
              <p>
                Founded with a vision to provide reliable and value-driven professional services, Piyush Jain & Co. has grown into a trusted Chartered Accountancy firm offering comprehensive solutions in accounting, taxation, compliance, and advisory.
              </p>
              <p>
                From humble beginnings, we have steadily expanded our expertise and client base, serving businesses across industries with dedication, transparency, and integrity.
              </p>
            </div>
          </div>

          {/* Card 2: Who We Are */}
          <div className="bg-[#f8fafc] rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100 hover:scale-105 hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-orange-100/50 p-2.5 rounded-xl text-[#d8a379]">
                <User size={24} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-[#0f1b29]">Who We Are</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#d8a379] shrink-0 mt-2"></div>
                <p className="text-gray-600 text-[0.95rem] leading-relaxed">
                  Experienced Professionals with deep knowledge of Indian corporate, tax, and compliance frameworks.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#d8a379] shrink-0 mt-2"></div>
                <p className="text-gray-600 text-[0.95rem] leading-relaxed">
                  Specialists in Business Setup & Incorporation, guiding entrepreneurs through seamless market entry.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#d8a379] shrink-0 mt-2"></div>
                <p className="text-gray-600 text-[0.95rem] leading-relaxed">
                  Trusted Advisors in Taxation & International Compliance, ensuring businesses remain compliant and competitive.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#d8a379] shrink-0 mt-2"></div>
                <p className="text-gray-600 text-[0.95rem] leading-relaxed">
                  Dedicated Team of Chartered Accountants & Company Secretaries, committed to delivering practical solutions.
                </p>
              </li>
            </ul>
          </div>

          {/* Card 3: Our Mission */}
          <div className="relative bg-[#0f1b29] rounded-3xl p-8 lg:p-10 shadow-lg overflow-hidden border border-[#1a2636] hover:scale-105 hover:shadow-md transition-all duration-300">
            {/* Top-right accent shape */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#172538] rounded-full blur-2xl z-0 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-[#1c2e43] rounded-bl-[80px] z-0 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#1c2e43] p-2.5 rounded-xl text-[#d8a379] border border-[#2d3d4e]">
                  <Target size={24} strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-[#94a3b8] text-[0.95rem] leading-relaxed">
                To empower businesses with accurate, timely, and strategic financial solutions that enable growth, compliance, and long-term success.
              </p>
            </div>
          </div>

          {/* Card 4: Our Vision */}
          <div className="relative bg-[#deb896] rounded-3xl p-8 lg:p-10 shadow-lg overflow-hidden border border-[#d2a884] hover:scale-105 hover:shadow-md transition-all duration-300">
             {/* Top-right accent shape */}
             <div className="absolute top-0 right-0 w-24 h-24 bg-[#e8c6a8] rounded-bl-[80px] z-0 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#e8c6a8] p-2.5 rounded-xl text-[#0f1b29] border border-[#d2a884]/30">
                  <Eye size={24} strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#0f1b29] mb-4">Our Vision</h3>
              <p className="text-[#0f1b29]/80 text-[0.95rem] leading-relaxed font-medium">
                To be recognized as a trusted partner for entrepreneurs and global businesses in India, delivering excellence in every engagement.
              </p>
            </div>
          </div>

        </div>
      </div>


      {/* SECTION 2: Meet the Founder */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-start">
          
          {/* Left: Founder Image */}
          <div className="w-full lg:w-5/12 relative mt-8 lg:mt-0">
            {/* Background offset card */}
            <div className="absolute inset-0 bg-[#f4ece3] rounded-3xl transform rotate-[-4deg] scale-[1.02] z-0 origin-bottom-left"></div>
            
            <div className="relative z-10 w-full rounded-3xl overflow-hidden shadow-xl aspect-[4/5] bg-gray-100">
              <img 
                src="/CA-Piyush-Jain.png" // Using placeholder as image path may vary, adjust later
                alt="CA Piyush Jain" 
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x800?text=CA+Piyush+Jain';
                }}
              />
              
              {/* Floating Quote Card */}
              <div className="absolute -bottom-6 -right-6 lg:bottom-8 lg:-right-12 bg-[#0f1b29] text-white p-6 md:p-8 rounded-2xl shadow-2xl w-[90%] md:w-[80%] z-20 border border-gray-800">
                <p className="text-lg md:text-xl font-bold mb-4 leading-snug">
                  "Knowledge and integrity can build something lasting."
                </p>
                <p className="text-[#d8a379] font-semibold text-sm">
                  - CA Piyush Jain
                </p>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="w-full lg:w-7/12 pt-8 lg:pt-0">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1b29] mb-8 leading-tight tracking-tight">
              Meet the Man Behind the <br className="hidden md:block" />
              Mission: <span className="text-[#d8a379]">CA Piyush Jain</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 text-[0.95rem] leading-relaxed">
              <p>
                Jain Piyush & Co. is a premier, multi-disciplinary Chartered Accountancy firm. We bridge the gap between complex legal frameworks and practical corporate strategy. Built on a foundation of technical excellence and a business-first philosophy, we redefine how organizations navigate compliance—turning regulatory obligations into drivers of sustainable corporate growth.
              </p>
              <p>
                Today, we proudly serve a diverse roster of clients across India and overseas, including fast-scaling startups, established SMEs, financial institutions, and global investors.
              </p>
              <p className="flex items-start gap-2">
                <span>
                  <strong>CA Piyush Jain (Founder | CA, LL.B, B.Com Hons. - DU):</strong> Backed by over 12 years of specialized expertise, Piyush operates at the precise intersection of tax law and commercial strategy. He acts as a trusted Pan-India advisor to multinational corporations, helping cross-border and domestic entities structure seamless operations.
                </span>
              </p>
            </div>

            {/* Badges / Pills */}
            <div className="flex flex-wrap gap-4 mt-10">
              <div className="flex items-center gap-3 bg-[#f8fafc] border border-gray-100 px-6 py-3 rounded-xl shadow-sm">
                <Award size={20} className="text-[#d8a379]" />
                <span className="font-bold text-[#0f1b29] text-sm">10+ Years Expertise</span>
              </div>
              <div className="flex items-center gap-3 bg-[#f8fafc] border border-gray-100 px-6 py-3 rounded-xl shadow-sm">
                <ShieldCheck size={20} className="text-[#d8a379]" />
                <span className="font-bold text-[#0f1b29] text-sm">Trusted Partner</span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
