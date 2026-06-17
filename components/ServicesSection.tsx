'use client'
import React from 'react';

// Content strictly matching the provided image
const servicesData = [
  {
    title: "Audit and Assurance",
    desc: "The firm endeavours to understand the client and its business needs before chalking out an audit programme.",
    img: "/services/audit.png" // Replace with actual image paths
  },
  {
    title: "Management Services",
    desc: "With the management concentrating on their core competencies, the concept of outsourcing a company's accounts, finance, taxation..",
    img: "/services/management.png"
  },
  {
    title: "Legal and Secretarial Services",
    desc: "We deliver complete menu of legal and secretarial services for businesses.",
    img: "/services/legal.png"
  },
  {
    title: "Taxation",
    desc: "New legislation is regularly added to an already formidable body of law, so merely keeping abreast of the changes is a considerable challenge.",
    img: "/services/taxation.png"
  },
  {
    title: "BPO Activities",
    desc: "The barriers to entry in the financial BPO services business are not very high, particularly for lower value services such as accounting transcription.",
    img: "/services/bpo.png"
  },
  {
    title: "International Business Services",
    desc: "Today India is looked at as an investment destination by many international organizations.",
    img: "/services/international.png"
  },
  {
    title: "IFRS",
    desc: "The implementation of IFRS, a principle-based set of standards, is not just about changing accounting policies.",
    img: "/services/ifrs.png"
  }
];

export default function ServicesSection(): React.JSX.Element {
  return (
    <section id="services" className="bg-[#fafbfc] py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="text-[#f1a458] text-xs font-bold tracking-widest uppercase block mb-3">
            JAIN PIYUSH & CO.
          </span>
          <h2 className="text-[#0f1b29] text-4xl md:text-[2.5rem] font-bold mb-4 tracking-tight">
            Welcome to Jain Piyush & Co.
          </h2>
          <p className="text-gray-500 text-lg">
            Simplifying bookkeeping, accounting, taxes, compliance and payroll management.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              // Center the 7th item in the bottom row on large screens
              className={`flex ${index === 6 ? 'lg:col-start-2' : ''}`}
            >
              {/* Card Container: 
                Margin-left accommodates the overlapping image. 
                Subtle shadow and white background to match the design.
              */}
              <div className="relative bg-white w-full shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center ml-12 min-h-[180px] hover:scale-105 hover:shadow-md transition-all duration-300">
                
                {/* Overlapping Image Wrapper */}
                <div className="absolute -left-12 w-24 h-24 p-1 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="pl-16 pr-6 py-6 w-full">
                  <h3 className="text-[1.1rem] font-bold text-[#0b131e] mb-2 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-[0.85rem] leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}