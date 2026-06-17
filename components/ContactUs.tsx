'use client'
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactUs(): React.JSX.Element {
  return (
    <section className="bg-[#fafbfc] py-24 font-sans" id="contact">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f1b29] mb-16 tracking-tight">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          
          {/* Office Address */}
          <div className="bg-[#15202b] rounded-2xl p-8 lg:p-10 shadow-xl flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-blue-500 mb-6 shadow-sm">
              <MapPin size={24} strokeWidth={2} />
            </div>
            <h3 className="text-white font-bold text-[1.1rem] mb-3 tracking-wide">Office Address</h3>
            <p className="text-[#94a3b8] text-[0.85rem] leading-relaxed max-w-[260px]">
              CP-68, FF, Pitampura, Maurya Enclave, New Delhi - 110034
            </p>
          </div>

          {/* Call Us */}
          <div className="bg-[#15202b] rounded-2xl p-8 lg:p-10 shadow-xl flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <div className="w-14 h-14 bg-[#10b981] rounded-full flex items-center justify-center text-white mb-6 shadow-sm">
              <Phone size={24} strokeWidth={2} />
            </div>
            <h3 className="text-white font-bold text-[1.1rem] mb-3 tracking-wide">Call Us</h3>
            <p className="text-[#94a3b8] text-[0.85rem] leading-relaxed">
              +91-9999972659
            </p>
          </div>

          {/* Email Us */}
          <div className="bg-[#15202b] rounded-2xl p-8 lg:p-10 shadow-xl flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-red-500 mb-6 shadow-sm">
              <Mail size={24} strokeWidth={2} />
            </div>
            <h3 className="text-white font-bold text-[1.1rem] mb-3 tracking-wide">Email Us</h3>
            <p className="text-[#94a3b8] text-[0.85rem] leading-relaxed">
              jainpiyushandco@gmail.com
            </p>
            <p className="text-[#94a3b8] text-[0.85rem] leading-relaxed">
              office@jainpiyushandco.in
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
