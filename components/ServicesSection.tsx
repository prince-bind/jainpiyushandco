'use client'
import React from 'react';

// Updated services based on new verticals
const servicesData = [
  {
    title: "GST Advisory & Litigation",
    desc: "Comprehensive GST solutions including registrations, return compliances, audits, assessments, advisory, and litigation support.",
    img: "/services/1.png"
  },
  {
    title: "Credit Underwriting",
    desc: "Comprehensive credit appraisal, risk assessment, financial statement analysis, financial modelling, ratio analysis, and forecasting.",
    img: "/services/2.png"
  },
  {
    title: "DGFT & Foreign Trade",
    desc: "Advisory on Advance Authorization, EPCG, DFIA, Export Incentive Schemes, and other foreign trade compliances.",
    img: "/services/3.png"
  },
  {
    title: "GST Refunds",
    desc: "End-to-end assistance in obtaining GST refunds relating to exports, inverted duty structures, and accumulated input tax credits.",
    img: "/services/4.png"
  },
  {
    title: "IEPF Advisory",
    desc: "Assistance in recovery of unclaimed shares, dividends, and other investments from the IEPF Authority.",
    img: "/services/5.png"
  },
  {
    title: "Internal Audit & ICFR",
    desc: "Designing and evaluating internal controls, ICFR frameworks, SOPs, and risk management processes for operational efficiency.",
    img: "/services/6.png"
  },
  {
    title: "Audit & Assurance",
    desc: "Statutory audits, tax audits, internal audits, and limited reviews aimed at improving transparency and stakeholder confidence.",
    img: "/services/7.png"
  },
  {
    title: "Income Tax Advisory",
    desc: "Tax planning, return filing, assessments, appeals, TDS compliance, and advisory on domestic and international taxation matters.",
    img: "/services/8.png"
  },
  {
    title: "Company Incorporation",
    desc: "Company and LLP incorporation, ROC compliances, annual filings, corporate restructuring, and governance documentation.",
    img: "/services/9.avif"
  },
  {
    title: "Dubai Setup & UAE VAT",
    desc: "Business setup assistance across Mainland, Free Zone, and Offshore jurisdictions, along with UAE VAT registration & compliance.",
    img: "/services/10.png"
  },
  {
    title: "Corporate Compliance",
    desc: "Advisory on Companies Act, FEMA, RBI regulations, startup compliances, business restructuring, and regulatory risk management.",
    img: "/services/11.png"
  },
  {
    title: "CFO & Business Advisory",
    desc: "Virtual CFO services including MIS reporting, budgeting, financial planning, fundraising support, and strategic financial management.",
    img: "/services/12.png"
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
            We act as a single-window advisory ecosystem for modern enterprises, providing a comprehensive suite of professional services:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 max-w-7xl mx-auto">
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