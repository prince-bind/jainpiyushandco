'use client'
import React from 'react';
import { Briefcase, ArrowRight, Mail, Sparkles } from 'lucide-react';

export default function Careers(): React.JSX.Element {
  return (
    <div className="relative min-h-[80vh] bg-[#f8fafc] font-sans text-[#0f1b29] flex items-center justify-center p-6 py-8 overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-200/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-orange-200/20 blur-[120px]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm mb-10 transition-transform hover:scale-105 cursor-default">
          <Sparkles size={16} className="text-[#e8af81]" />
          <span className="text-sm font-semibold tracking-wide text-gray-700 uppercase">Join Our Team</span>
        </div>

        {/* Main Card */}
        <div className="bg-white/90 backdrop-blur-2xl rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white/60 w-full p-8 md:p-14 text-center flex flex-col items-center transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1">
          
          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#fdf3ec] to-[#f9e5d5] shadow-inner flex items-center justify-center text-[#d98b53] mb-8 transform transition-transform duration-500 hover:scale-110 hover:rotate-3">
            <Briefcase size={34} strokeWidth={1.5} />
          </div>

          {/* Title & Subtitle */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f1b29] mb-6 tracking-tight leading-tight">
            Build Your Career with <br className="hidden md:block"/> Jain Piyush & Co.
          </h1>
          <p className="text-[#596778] text-lg md:text-xl leading-relaxed mb-12 max-w-2xl font-light">
            We are always on the lookout for talented, driven individuals who share our commitment to <span className="font-medium text-[#0f1b29]">excellence</span>, <span className="font-medium text-[#0f1b29]">integrity</span>, and <span className="font-medium text-[#0f1b29]">proactive problem-solving</span>.
          </p>

          {/* CTA Box */}
          <div className="group relative w-full max-w-2xl rounded-2xl bg-gradient-to-br from-[#0f1b29] to-[#1a2e44] p-[1px] overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#0f1b29]/10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
            
            <div className="relative bg-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#0f1b29] mb-2 flex items-center justify-center md:justify-start gap-2">
                  <Mail className="text-[#e8af81]" size={22} />
                  Get in Touch
                </h3>
                <p className="text-[#596778] text-[0.95rem] leading-relaxed">
                  Send your updated resume and a brief cover letter to our HR team.
                </p>
              </div>
              
              <a 
                href="mailto:jainpiyushandco@gmail.com" 
                className="group/btn relative inline-flex items-center justify-center gap-2 bg-[#0f1b29] text-white font-medium text-base px-8 py-4 rounded-xl overflow-hidden transition-all hover:bg-[#1a2e44] w-full md:w-auto flex-shrink-0"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Email Us
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}