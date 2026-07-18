"use client";

import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import foodWaste from "../public/mission_vision/foodWaste.jpg";
import soilDegradation from "../public/mission_vision/soilDegradation.jpg";
import costOfLivingCrisis from "../public/mission_vision/costOfLivingCrisis.jpg";
import linearVsCicularGraph from "../public/linear-vs-circular-graph.png";

function FadeIn({ children, delay = 0 }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    });
    const current = domRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-[1200ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const STATS = [
  { label: "Food produced wasted in households", value: "40%" },
  { label: "GHG (methane) emissions from food waste", value: "10%" },
  { label: "Economic value loss in India per year", value: "$15B+" },
  { label: "Food waste in landfills per year", value: "40M Tons" },
];

export default function Impact({ user }) {
  return (
    <div className="bg-[#FAFAFA] min-h-screen selection:bg-[#14432C] selection:text-white">
      <Head>
        <title>Impact | Newcycl</title>
        <meta name="description" content="Newcycl is making household waste management easy, exciting, and rewarding." />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <Navbar />

      <main className="font-source-sans">
        
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 sm:px-8 overflow-hidden bg-[#14432C] text-white">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
          
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-8" style={{ fontFamily: "'Fraunces', serif" }}>
                Solving 3 Crises <br/> <span className="text-[#C99859] italic font-medium">At Once.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
                Across the world, we’re experiencing the consequences of interconnected crises: cost of living, food waste, and soil pollution. The problems are huge, but what if a simple solution could make a big difference?
              </p>
            </FadeIn>
          </div>
        </section>

        {/* QUOTE SECTION */}
        <section className="py-24 md:py-32 px-6 sm:px-8 max-w-4xl mx-auto">
          <FadeIn>
            <div className="relative">
              <span className="absolute -top-16 -left-8 md:-left-16 text-[120px] md:text-[180px] text-[#14432C]/10 font-serif leading-none select-none">"</span>
              <p className="text-2xl md:text-4xl text-[#14432C] leading-snug font-light mb-12 relative z-10" style={{ fontFamily: "'Fraunces', serif" }}>
                Nutrition is fundamentally a form of energy that can only be converted from one form to another. Food represents a physical manifestation of this energy. When we waste food, we squander this energy, transforming it into a negative force like methane emissions. It is crucial that we preserve this energy.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-[#C99859]"></div>
                <div>
                  <h4 className="text-lg font-bold text-[#14432C] tracking-wide uppercase">Anu Khandelwal</h4>
                  <p className="text-[#14432C]/60 text-sm">Co-Founder & CEO, Newcycl</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* THREE PROBLEMS CARDS */}
        <section className="py-24 px-6 sm:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-black text-[#14432C] mb-16 text-center" style={{ fontFamily: "'Fraunces', serif" }}>
                The Interconnected Impact
              </h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { img: foodWaste, title: "Food Waste" },
                { img: soilDegradation, title: "Soil Degradation" },
                { img: costOfLivingCrisis, title: "Cost of Living Crisis" }
              ].map((item, i) => (
                <FadeIn key={item.title} delay={i * 150}>
                  <div className="group relative rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer shadow-premium border border-black/5">
                    <Image
                      src={item.img}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <div className="w-12 h-1 bg-[#C99859] rounded-full transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100" />
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* BIG NUMBERS STATS */}
        <section className="py-24 md:py-32 px-6 sm:px-8 bg-[#14432C] text-white">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: "'Fraunces', serif" }}>
                  The Reality in Numbers
                </h2>
                <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
                  Food waste occurs at every point in the supply chain, but the majority happens at the consumer level—in our households.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-center">
              {STATS.map((stat, i) => (
                <FadeIn key={stat.label} delay={i * 100}>
                  <div className="pt-8 sm:pt-0 px-4">
                    <div className="text-5xl md:text-6xl font-black text-[#C99859] mb-4 tracking-tighter" style={{ fontFamily: "'Fraunces', serif" }}>
                      {stat.value}
                    </div>
                    <p className="text-base md:text-lg text-white/80 font-light">
                      {stat.label}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* LINEAR VS CIRCULAR */}
        <section className="py-24 md:py-32 px-6 sm:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <div>
                  <h2 className="text-4xl md:text-5xl font-black text-[#14432C] mb-8 leading-tight" style={{ fontFamily: "'Fraunces', serif" }}>
                    Enrouting food waste from plate to soil.
                  </h2>
                  <p className="text-lg text-[#14432C]/80 font-light leading-relaxed mb-6">
                    Today, our waste disposing system is primarily a linear economy based on a take-make-waste model, which assumes our planet has infinite resources.
                  </p>
                  <p className="text-lg text-[#14432C]/80 font-light leading-relaxed">
                    In the circular economy, products are sourced from reused or renewable materials. <strong className="text-[#14432C] font-semibold">Newcycl</strong> is institutionalizing this circular system for your kitchen waste to enable micro circular economies in every household.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={200}>
                <div className="rounded-[2rem] p-4 bg-[#FAFAFA] border border-black/5 shadow-premium">
                  <Image
                    src={linearVsCicularGraph}
                    alt="Linear vs Circular Graph"
                    layout="responsive"
                    className="rounded-2xl"
                  />
                  <div className="text-center mt-6 mb-2">
                    <span className="text-sm font-bold text-[#14432C]/50 tracking-[0.2em] uppercase">
                      The Shift to Circular
                    </span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
