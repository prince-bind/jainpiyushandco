'use client'
import React, { useState, useEffect, useRef } from 'react';
import { FaBuilding, FaBriefcase, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

// --- Custom Animated Counter Component ---
interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  suffixColor?: string;
}

const AnimatedCounter = ({ end, duration = 2000, suffix = "", suffixColor = "text-white" }: CounterProps) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;
    let hasStarted = false;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // easeOutExpo function for a smooth deceleration at the end of the animation
      const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);

      setCount(Math.floor(end * easeOut));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    // Intersection Observer to trigger animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasStarted) {
          hasStarted = true;
          animationFrame = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 } // Triggers when 10% of the element is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      if (counterRef.current) observer.unobserve(counterRef.current);
      observer.disconnect();
    };
  }, [end, duration]);

  return (
    <span ref={counterRef} className="flex items-center justify-center font-bold text-5xl md:text-6xl text-white">
      {count}
      <span className={suffixColor}>{suffix}</span>
    </span>
  );
};

export default function HeroSection(): React.JSX.Element {
  return (
    <div className="font-sans flex flex-col bg-[#0b131e]">
      {/* Custom Keyframes for Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: gentleFloat 5s ease-in-out infinite;
        }
      `}} />

      {/* Hero Section Main Fold */}
      <main className="flex flex-col lg:flex-row relative overflow-hidden bg-[#0b131e] min-h-[calc(100vh-115px)]">

        {/* Left Column - Content */}
        <div className="w-full lg:w-[55%] p-8 lg:p-16 xl:p-24 flex flex-col justify-center z-10">
          <h1 className="text-5xl md:text-[3.5rem] lg:text-[4.5rem] font-extrabold text-[#d8a379] mb-8 leading-[1.1] tracking-tight">
            Jain Piyush & Co.
          </h1>
          
          <div className="border-l-[3px] border-[#d8a379] pl-6 mb-8 py-2">
            <p className="text-white/90 text-xl md:text-2xl italic font-light leading-relaxed">
              "Where there's a way, we'll show it.
              <br className="hidden md:block" />
              Where there isn't, we'll help create one."
            </p>
          </div>

          <p className="text-[#94a3b8] text-lg leading-relaxed max-w-xl mb-12">
            Bridging the gap between complex legal frameworks and practical corporate strategy. We turn regulatory obligations into drivers of sustainable corporate growth.
          </p>

          <p className="text-white/90 text-base md:text-lg mb-8">
            Trusted by <span className="text-[#d8a379] font-bold">500+ enterprises</span> locally and globally.
          </p>
        </div>

        {/* Right Column - Image with Static Offset Boundary */}
        <div className="w-full lg:w-[45%] relative min-h-[500px] lg:min-h-full bg-[#0b131e]">
          <div className="absolute inset-0 lg:left-[5%] flex items-center justify-center p-6 lg:p-12 z-10">
            
            {/* Wrapper for both the image and the offset border, floating together */}
            <div className="relative w-full h-full max-h-[650px] animate-float will-change-transform mt-12 lg:mt-0">
              
              {/* Static Offset Border */}
              <div className="absolute -top-5 -left-5 w-full h-full border-[3px] border-[#f8b485] rounded-tl-[100px] rounded-br-[100px] rounded-tr-3xl rounded-bl-3xl z-0 pointer-events-none opacity-90"></div>

              {/* Main Image Container */}
              <div className="relative w-full h-full bg-slate-800 rounded-tl-[100px] rounded-br-[100px] rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-2xl z-10">
                <img
                  src="/hero-image.avif"
                  alt="Professional wearing a suit"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
              </div>

            </div>
          </div>
        </div>
      </main>

      {/* Animated Statistics Banner */}
      <div className="bg-[#0b131e] py-16 px-6 lg:px-12 relative z-20 flex-grow border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-[#1f2d3d]/50 rounded-[24px] p-8 flex flex-col items-center justify-center text-center shadow-lg hover:bg-[#253548]/70 transition-colors duration-300">
            <AnimatedCounter end={50} duration={2000} suffix="+" suffixColor="text-[#d8a379] ml-1" />
            <p className="text-white text-xs md:text-sm font-bold tracking-[0.15em] mt-3 uppercase">Industries Served</p>
          </div>

          <div className="bg-[#1f2d3d]/50 rounded-[24px] p-8 flex flex-col items-center justify-center text-center shadow-lg hover:bg-[#253548]/70 transition-colors duration-300">
            <AnimatedCounter end={15} duration={1500} suffix="+" suffixColor="text-[#d8a379] ml-1" />
            <p className="text-white text-xs md:text-sm font-bold tracking-[0.15em] mt-3 uppercase">Countries Served</p>
          </div>

          <div className="bg-[#1f2d3d]/50 rounded-[24px] p-8 flex flex-col items-center justify-center text-center shadow-lg hover:bg-[#253548]/70 transition-colors duration-300">
            <AnimatedCounter end={200} duration={2500} suffix="+" suffixColor="text-[#d8a379] ml-1" />
            <p className="text-white text-xs md:text-sm font-bold tracking-[0.15em] mt-3 uppercase leading-relaxed">Foreign Companies<br />Setup</p>
          </div>

          <div className="bg-[#1f2d3d]/50 rounded-[24px] p-8 flex flex-col items-center justify-center text-center shadow-lg hover:bg-[#253548]/70 transition-colors duration-300">
            <AnimatedCounter end={98} duration={2000} suffix="%" suffixColor="text-[#d8a379] ml-1" />
            <p className="text-white text-xs md:text-sm font-bold tracking-[0.15em] mt-3 uppercase leading-relaxed">Client Retention<br />Rate</p>
          </div>

        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <Link href={"https://wa.me/919999972659"} className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-[#128C7E] hover:-translate-y-1 transition-all z-50 flex items-center justify-center">
        <FaWhatsapp size={28} />
      </Link>
    </div>
  );
}