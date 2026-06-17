'use client'
import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

export default function Header(): React.JSX.Element {
  return (
    <header className="w-full flex flex-col z-50">
      {/* Top Contact Bar */}
      <div className="bg-[#151f2b] text-[#cbd5e1] text-xs py-2 px-4 flex flex-col md:flex-row justify-center md:gap-12 items-center tracking-wide border-b border-gray-800">
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <Mail size={14} /> jainpiyushandco@gmail.com
        </div>
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <Phone size={14} /> +91-9999972659
        </div>
        <div className="flex items-center gap-3">
          <span>Follow Us:</span>
          <a href="#" className="hover:text-white transition-colors text-[#25D366]">
            <MessageCircle size={14} />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white py-1 md:py-2 px-6 md:px-12 flex justify-between items-center relative shadow-sm z-50">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Jain Piyush & Co." 
            className="h-10 md:h-12 lg:h-14 w-auto object-contain"
          />
        </a>

        {/* Navigation Links - Updated with requested pages */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-[#0f1b29]">
          <a href="/#about" className="hover:text-orange-500 transition-colors">About Us</a>
          <a href="/leaders" className="hover:text-orange-500 transition-colors">Leaders</a>
          <a href="/#services" className="hover:text-orange-500 transition-colors">Services</a>
          <a href="/careers" className="hover:text-orange-500 transition-colors">Careers</a>
          <a href="/updates" className="hover:text-orange-500 transition-colors">Stay Updated</a>
          <a href="/#contact" className="hover:text-orange-500 transition-colors">Contact Us</a>
          <button className="bg-[#0f1b29] text-white px-6 py-2.5 rounded-md hover:bg-orange-500 transition-all ml-2 font-medium">
            Let's Talk
          </button>
        </div>
      </nav>
    </header>
  );
}