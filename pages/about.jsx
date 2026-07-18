"use client";

import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import art from "../public/art.png";

function FadeIn({ children, delay = 0, className = "" }) {
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
      className={`transition-all duration-[1200ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function About({ user }) {
  return (
    <div className="bg-[#FAFAFA] min-h-screen selection:bg-[#14432C] selection:text-white font-source-sans">
      <Head>
        <title>Mission & Vision | Newcycl</title>
        <meta name="description" content="Newcycl is making household waste management easy, exciting, and rewarding." />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 sm:px-8 overflow-hidden text-center">
          <div className="max-w-5xl mx-auto relative z-10">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#14432C] tracking-tight leading-[1.1] mb-8" style={{ fontFamily: "'Fraunces', serif" }}>
                Making zero waste a <br/>
                <span className="text-[#C99859] italic font-medium">New Normal.</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="w-24 h-1 bg-[#14432C]/10 mx-auto my-12" />
            </FadeIn>

            <FadeIn delay={300}>
              <p className="text-xl md:text-2xl text-[#14432C]/80 font-light max-w-4xl mx-auto leading-relaxed">
                Hey there, we are a small team of engineers and data scientists who are super pumped to reduce household waste through decentralized solutions. In this age of the Internet, with hectic lifestyles and instant gratification being the norm, we have decided to unravel old valuable principles in a modern age form.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* SPLIT EDITORIAL SECTION 1 */}
        <section className="py-24 px-6 sm:px-8 border-t border-[#14432C]/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn>
              <div>
                <span className="text-sm font-bold text-[#14432C]/50 tracking-[0.2em] uppercase mb-4 block">
                  The Vision
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#14432C] mb-8 leading-tight" style={{ fontFamily: "'Fraunces', serif" }}>
                  Harnessing the power of AI & Science.
                </h2>
                <div className="text-lg md:text-xl text-[#14432C]/80 font-light leading-relaxed space-y-6">
                  <p>
                    Our company is harnessing the power of technology to create some seriously cool solutions for waste reduction that eliminate the need for garbage collection for micro waste generators—our households.
                  </p>
                  <p>
                    We're making the RRR (Reduce, Reuse, Recycle) easier for everyone and relentlessly finding new ways to repurpose waste. It's all about making sustainable living accessible and making waste reduction a seamless part of our lifestyle.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={200} className="h-full">
              <div className="bg-[#14432C] text-[#C99859] rounded-[2rem] p-12 md:p-16 h-full flex flex-col justify-center shadow-premium relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Fraunces', serif" }}>What we Believe</h3>
                <p className="text-lg md:text-xl font-light leading-relaxed text-white/90">
                  We truly believe that the key to success lies in empowering individuals to take control of their own waste. Together, we can make a real difference, creating a better future for all of us. And that's something worth getting excited about!
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* MASSIVE ART INTEGRATION */}
        <section className="py-24 md:py-32 px-6 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-black text-[#14432C]" style={{ fontFamily: "'Fraunces', serif" }}>
                  The Art of the Newcycl
                </h2>
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="group relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-white shadow-premium border border-black/5 aspect-[4/3] md:aspect-video w-full">
                <Image
                  src={art}
                  alt="Newcycl Art Illustration"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                {/* Subtle dark gradient at bottom for depth */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
