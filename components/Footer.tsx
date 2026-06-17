import React from 'react';

export default function Footer(): React.JSX.Element {
  return (
    <footer className="bg-[#050b14] text-[#94a3b8] py-16 px-6 lg:px-12 font-sans border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Company Info */}
          <div className="md:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Jain Piyush <span className="text-[#d8a379]">& Co.</span>
            </h3>
            <p className="text-sm leading-relaxed max-w-md text-[#94a3b8]">
              Expert CA firm specializing in India entry, company registration, and compliance services for foreign companies and NRIs.
            </p>
            
            <div className="space-y-4 pt-4">
              <div>
                <h4 className="text-white font-bold text-sm mb-1">Delhi Office</h4>
                <p className="text-sm text-[#94a3b8]">
                  CP-68, FF, Pitampura, Maurya Enclave, New Delhi - 110034
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">Haryana Office</h4>
                <p className="text-sm text-[#94a3b8]">
                  C/o Chet Ram Sis Ram, Old Gur Mandi, Samalkha, Panipat - 132101
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="/" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Jain Piyush & Co. All rights reserved.</p>
          <p>Designed for modern businesses.</p>
        </div>
      </div>
    </footer>
  );
}
