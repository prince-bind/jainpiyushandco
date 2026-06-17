'use client'
import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs(): React.JSX.Element {
  return (
    <section className="relative py-24 px-6 lg:px-12 bg-[#fafbfc] overflow-hidden font-sans">
      
      {/* Background ambient gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-32 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f1b29] mb-4">
            Why Foreign Entrepreneurs Choose Us
          </h2>
          <p className="text-[#64748b] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            7 out of 10 foreign entrepreneurs face significant hurdles when entering India. Here is how we make it different.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Card: The Common Struggles */}
          <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-red-50/50 overflow-hidden flex flex-col hover:scale-105 hover:shadow-md transition-all duration-300">
            
            {/* Top-right subtle pink blob */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#fff5f5] rounded-full blur-2xl z-0 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 rounded-full bg-[#ffecec] flex items-center justify-center text-[#ff4d4f] shrink-0">
                  <AlertCircle size={20} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0f1b29]">The Common Struggles</h3>
              </div>

              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff4d4f] shrink-0 mt-2.5"></div>
                  <p className="text-[#475569] text-[0.95rem] leading-relaxed">
                    Choosing the wrong business structure leading to high tax liabilities.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff4d4f] shrink-0 mt-2.5"></div>
                  <p className="text-[#475569] text-[0.95rem] leading-relaxed">
                    Getting stuck in complex FEMA and RBI compliance loops.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff4d4f] shrink-0 mt-2.5"></div>
                  <p className="text-[#475569] text-[0.95rem] leading-relaxed">
                    Hidden costs and unexpected regulatory hurdles.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff4d4f] shrink-0 mt-2.5"></div>
                  <p className="text-[#475569] text-[0.95rem] leading-relaxed">
                    Lack of clarity on repatriation of funds.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Card: The Advantage */}
          <div className="relative bg-[#0f1b29] rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden border border-[#1a2636] flex flex-col hover:scale-105 hover:shadow-md transition-all duration-300">
            
            {/* Top-right dark blob */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#172538] rounded-full blur-2xl z-0 pointer-events-none"></div>
            
            {/* Accent border shape at top right (matching the image) */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#334155]/20 rounded-bl-[100px] z-0 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 rounded-full bg-[#202e3c] flex items-center justify-center text-[#d8a379] shrink-0 border border-[#2d3d4e]">
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Jain Piyush & Co. Advantage</h3>
              </div>

              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="shrink-0 mt-1">
                    <CheckCircle2 size={20} className="text-[#d8a379]" strokeWidth={2} />
                  </div>
                  <p className="text-[#e2e8f0] text-[0.95rem] leading-relaxed font-medium">
                    Strategic entity structuring tailored to your business goals.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="shrink-0 mt-1">
                    <CheckCircle2 size={20} className="text-[#d8a379]" strokeWidth={2} />
                  </div>
                  <p className="text-[#e2e8f0] text-[0.95rem] leading-relaxed font-medium">
                    Proactive FEMA & RBI compliance management.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="shrink-0 mt-1">
                    <CheckCircle2 size={20} className="text-[#d8a379]" strokeWidth={2} />
                  </div>
                  <p className="text-[#e2e8f0] text-[0.95rem] leading-relaxed font-medium">
                    Transparent pricing with no hidden surprises.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="shrink-0 mt-1">
                    <CheckCircle2 size={20} className="text-[#d8a379]" strokeWidth={2} />
                  </div>
                  <p className="text-[#e2e8f0] text-[0.95rem] leading-relaxed font-medium">
                    Clear roadmap for seamless fund repatriation.
                  </p>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
