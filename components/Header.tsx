'use client'
import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaBars, FaTimes, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

export default function Header(): React.JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full flex flex-col z-50 relative">
      {/* Top Contact Bar */}
      <div className="hidden md:flex bg-[#151f2b] text-[#cbd5e1] text-xs py-2 px-4 flex-row justify-center gap-8 items-center tracking-wide border-b border-gray-800">
        <Link href="mailto:jainpiyushandco@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
          <FaEnvelope size={14} /> jainpiyushandco@gmail.com
        </Link>
        <Link href="tel:+919999972659" className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
          <FaPhoneAlt size={14} /> +91-9999972659
        </Link>
        <div className="flex items-center gap-4 ml-2 pl-6 border-l border-gray-700">
          <Link href="https://wa.me/919999972659" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors" title="WhatsApp">
            <FaWhatsapp size={15} />
          </Link>
          <Link href="https://www.linkedin.com/in/piyush-jain-27260489/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2] transition-colors" title="LinkedIn">
            <FaLinkedin size={15} />
          </Link>
        </div>
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
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-[#0f1b29]">
          <a href="/about" className="hover:text-orange-500 transition-colors">About Us</a>
          <a href="/#services" className="hover:text-orange-500 transition-colors">Services</a>
          <a href="/careers" className="hover:text-orange-500 transition-colors">Careers</a>
          <a href="/updates" className="hover:text-orange-500 transition-colors">Stay Updated</a>
          <a href="/contact" className="hover:text-orange-500 transition-colors">Contact Us</a>
          <Link href="/contact" className="bg-[#0f1b29] text-white px-6 py-2.5 rounded-md hover:bg-orange-500 transition-all ml-2 font-medium">
            Let's Talk
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-100 flex flex-col py-4 px-6 z-40">
          <div className="flex flex-col gap-4 text-sm font-semibold text-[#0f1b29]">
            <a href="/about" className="hover:text-orange-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
            <a href="/#services" className="hover:text-orange-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="/careers" className="hover:text-orange-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Careers</a>
            <a href="/updates" className="hover:text-orange-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Stay Updated</a>
            <a href="/contact" className="hover:text-orange-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
            <Link href="/contact" className="bg-[#0f1b29] text-white px-6 py-2.5 rounded-md hover:bg-orange-500 transition-all font-medium mt-2 w-fit">
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}