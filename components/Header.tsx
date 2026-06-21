'use client'
import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Menu, X } from 'lucide-react';

export default function Header(): React.JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full flex flex-col z-50 relative">
      {/* Top Contact Bar */}
      <div className="hidden md:flex bg-[#151f2b] text-[#cbd5e1] text-xs py-2 px-4 flex-row justify-center gap-12 items-center tracking-wide border-b border-gray-800">
        <div className="flex items-center gap-2">
          <Mail size={14} /> jainpiyushandco@gmail.com
        </div>
        <div className="flex items-center gap-2">
          <Phone size={14} /> +91-9999972659
        </div>
        {/* <div className="flex items-center gap-3">
          <span>Follow Us:</span>
          <a href="#" className="hover:text-white transition-colors text-[#25D366]">
            <MessageCircle size={14} />
          </a>
        </div> */}
      </div>

      {/* Main Navigation */}
      <nav className="bg-white py-2 px-4 md:px-6 lg:px-12 flex justify-between items-center shadow-sm z-50">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Jain Piyush & Co." 
            className="h-10 md:h-12 lg:h-14 w-auto object-contain"
          />
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-[#0f1b29] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-[#0f1b29]">
          <a href="/about" className="hover:text-orange-500 transition-colors">About Us</a>
          <a href="/leaders" className="hover:text-orange-500 transition-colors">Leaders</a>
          <a href="/#services" className="hover:text-orange-500 transition-colors">Services</a>
          <a href="/careers" className="hover:text-orange-500 transition-colors">Careers</a>
          <a href="/updates" className="hover:text-orange-500 transition-colors">Stay Updated</a>
          <a href="/contact" className="hover:text-orange-500 transition-colors">Contact Us</a>
          <button className="bg-[#0f1b29] text-white px-6 py-2.5 rounded-md hover:bg-orange-500 transition-all ml-2 font-medium">
            Let's Talk
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-100 flex flex-col py-4 px-6 z-40">
          <div className="flex flex-col gap-4 text-sm font-semibold text-[#0f1b29]">
            <a href="/#about" className="hover:text-orange-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
            <a href="/leaders" className="hover:text-orange-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Leaders</a>
            <a href="/#services" className="hover:text-orange-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="/careers" className="hover:text-orange-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Careers</a>
            <a href="/updates" className="hover:text-orange-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Stay Updated</a>
            <a href="/#contact" className="hover:text-orange-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
            <button className="bg-[#0f1b29] text-white px-6 py-2.5 rounded-md hover:bg-orange-500 transition-all font-medium mt-2 w-fit">
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </header>
  );
}