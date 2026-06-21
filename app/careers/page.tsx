'use client'
import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Careers(): React.JSX.Element {
  return (
    <div className="bg-[#fafbfc] min-h-[80vh] font-sans text-[#0f1b29] flex items-center justify-center p-6 py-24">
      
      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 max-w-2xl w-full p-8 md:p-12 text-center flex flex-col items-center">
        
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-[#fdf3ec] flex items-center justify-center text-[#e8af81] mb-6">
          <Briefcase size={28} strokeWidth={2} />
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#0f1b29] mb-4 tracking-tight">
          Careers at Jain Piyush & Co.
        </h1>
        <p className="text-[#596778] text-[0.95rem] md:text-[1.05rem] leading-relaxed mb-10 max-w-lg">
          We are always on the lookout for talented, driven individuals who share our commitment to excellence, integrity, and proactive problem-solving.
        </p>

        {/* CTA Box */}
        <div className="bg-[#f8fafc] w-full rounded-2xl p-8 border border-gray-50 flex flex-col items-center">
          <h3 className="text-[1.1rem] font-bold text-[#0f1b29] mb-2">
            Interested in joining our team?
          </h3>
          <p className="text-[#596778] text-[0.9rem] mb-6">
            Send your updated resume and a brief cover letter to our HR team.
          </p>
          <a 
            href="mailto:hr@jainpiyushandco.in" 
            className="inline-block bg-[#0f1b29] text-white font-semibold text-[0.95rem] px-8 py-3.5 rounded-lg hover:bg-[#1a2e44] hover:shadow-lg transition-all"
          >
            Email CV to us
          </a>
        </div>

      </div>
    </div>
  );
}