'use client'
import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function page(): React.JSX.Element {
  return (
    <section className="bg-[#fafbfc] py-24 font-sans" id="contact">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-[#e8af81] text-sm font-bold tracking-widest uppercase block mb-3">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-[2.5rem] font-bold text-[#0f1b29] mb-4 tracking-tight">
            Contact Us
          </h2>
          <p className="text-gray-500 text-lg">
            Reach out to discuss how we can help your business thrive.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-center">
          
          {/* Left Side - Contact Info Cards */}
          <div className="w-full lg:w-[45%] flex flex-col gap-5">
            
            {/* Office Address */}
            <div className="bg-[#0f1c2b] rounded-xl p-6 lg:p-8 flex items-start shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 min-w-[3rem] bg-[#1d2a3a] rounded-lg flex items-center justify-center text-[#e8af81] mr-6">
                <MapPin size={20} strokeWidth={2} />
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-white font-bold text-[1rem] mb-1">Delhi Office</h3>
                  <p className="text-[#94a3b8] text-[0.85rem] leading-relaxed">
                    CP-68, FF, Pitampura, Maurya Enclave, New Delhi - 110034
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-bold text-[1rem] mb-1">Haryana Office</h3>
                  <p className="text-[#94a3b8] text-[0.85rem] leading-relaxed">
                    C/o Chet Ram Sis Ram, Old Gur Mandi, Samalkha, Panipat - 132101
                  </p>
                </div>
              </div>
            </div>

            {/* Call Us */}
            <div className="bg-[#0f1c2b] rounded-xl p-6 lg:p-8 flex items-center shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 min-w-[3rem] bg-[#1d2a3a] rounded-lg flex items-center justify-center text-[#e8af81] mr-6">
                <Phone size={20} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-white font-bold text-[1.1rem] mb-1">Call Us</h3>
                <p className="text-[#94a3b8] text-[0.85rem] leading-relaxed">
                  +91 99999 72659
                </p>
              </div>
            </div>

            {/* Email Us */}
            <div className="bg-[#0f1c2b] rounded-xl p-6 lg:p-8 flex items-center shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 min-w-[3rem] bg-[#1d2a3a] rounded-lg flex items-center justify-center text-[#e8af81] mr-6">
                <Mail size={20} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-white font-bold text-[1.1rem] mb-1">Email Us</h3>
                <p className="text-[#94a3b8] text-[0.85rem] leading-relaxed">
                  jainpiyushandco@gmail.com
                </p>
                <p className="text-[#94a3b8] text-[0.85rem] leading-relaxed">
                  office@jainpiyushandco.in
                </p>
              </div>
            </div>

          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full lg:w-[55%] bg-white rounded-2xl p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
            <h3 className="text-2xl font-bold text-[#0f1b29] mb-8">Send us a Message</h3>
            
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[0.85rem] font-semibold text-[#475569]">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="bg-[#f8fafc] border border-transparent focus:border-[#e8af81] focus:bg-white outline-none rounded-lg px-4 py-3 text-[0.9rem] transition-all w-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[0.85rem] font-semibold text-[#475569]">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-[#f8fafc] border border-transparent focus:border-[#e8af81] focus:bg-white outline-none rounded-lg px-4 py-3 text-[0.9rem] transition-all w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[0.85rem] font-semibold text-[#475569]">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can we help?" 
                  className="bg-[#f8fafc] border border-transparent focus:border-[#e8af81] focus:bg-white outline-none rounded-lg px-4 py-3 text-[0.9rem] transition-all w-full"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[0.85rem] font-semibold text-[#475569]">Message</label>
                <textarea 
                  placeholder="Tell us about your requirements..." 
                  rows={4}
                  className="bg-[#f8fafc] border border-transparent focus:border-[#e8af81] focus:bg-white outline-none rounded-lg px-4 py-3 text-[0.9rem] transition-all w-full resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="mt-2 bg-[#e8af81] hover:bg-[#d9a173] text-[#0f1b29] font-bold text-[0.95rem] py-3.5 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors w-full"
              >
                Send Message
                <Send size={18} strokeWidth={2} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
