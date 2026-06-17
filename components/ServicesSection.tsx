'use client'
import React from 'react';

// Updated services based on new verticals
const servicesData = [
  {
    title: "Taxation & Indirect Tax Litigation",
    desc: "End-to-end GST management, complex litigation representation, cross-border direct tax planning, UAE VAT compliance, and structured GST refund recovery to free up blocked working capital.",
    img: "/services/taxation.png"
  },
  {
    title: "Credit Risk & Financial Appraisals",
    desc: "Advanced financial modeling, ratio evaluation, deep-dive due diligence, cash flow mapping, and institutional credit underwriting.",
    img: "/services/management.png"
  },
  {
    title: "Audit, Assurance & Process Design",
    desc: "Statutory and tax audits tailored to boost stakeholder trust, paired with internal financial control evaluations (ICFR) and robust Standard Operating Procedure (SOP) design.",
    img: "/services/audit.png"
  },
  {
    title: "Corporate Secretarial & Trade Frameworks",
    desc: "Hassle-free company formations in India and Dubai, foreign trade incentives (DGFT, EPCG, Advance Authorization), RBI/FEMA regulatory filings, and dedicated Investor Education and Protection Fund (IEPF) asset recoveries.",
    img: "/services/legal.png"
  }
];

export default function ServicesSection(): React.JSX.Element {
  return (
    <section id="services" className="bg-[#fafbfc] py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-[#f1a458] text-xs font-bold tracking-widest uppercase block mb-3">
            JAIN PIYUSH & CO.
          </span>
          <h2 className="text-[#0f1b29] text-4xl md:text-[2.5rem] font-bold mb-4 tracking-tight">
            Our Multi-Dimensional Services
          </h2>
          <p className="text-gray-500 text-lg">
            We act as a single-window advisory ecosystem for modern enterprises, focusing on four high-impact verticals:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-6xl mx-auto">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="flex"
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