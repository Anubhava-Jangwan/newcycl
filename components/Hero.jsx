import React, { useEffect, useState } from "react";

const NAVBAR_HEIGHT = "116px";

const Hero = () => {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    if (prefersReducedMotion || !isDesktop) {
      return;
    }

    const idleCallback =
      window.requestIdleCallback ||
      ((callback) => window.setTimeout(callback, 1200));
    const cancelIdleCallback =
      window.cancelIdleCallback || ((id) => window.clearTimeout(id));
    const idleId = idleCallback(() => setShouldLoadVideo(true));

    return () => cancelIdleCallback(idleId);
  }, []);

  return (
    <div
      className="relative overflow-hidden bg-cover bg-center bg-ink-dark"
      style={{
        marginTop: `-${NAVBAR_HEIGHT}`,
        height: `calc(520px + ${NAVBAR_HEIGHT})`,
        backgroundImage: "url('/newcycl-banner.png')",
      }}
    >
      {shouldLoadVideo && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover object-top opacity-85"
          style={{ maxHeight: "700px", objectFit: "cover" }}
          src="/hero_page_foodcrushingvideo.mp4"
          poster="/newcycl-banner.png"
          preload="metadata"
          autoPlay
          loop
          muted
          playsInline
        />
      )}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-100 { animation-delay: 150ms; opacity: 0; }
        .delay-200 { animation-delay: 300ms; opacity: 0; }
        .delay-300 { animation-delay: 450ms; opacity: 0; }
      `}</style>

      {/* Modern gradient overlay using ink-dark colors for better contrast and integration */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background:
            "linear-gradient(to bottom, rgba(17, 32, 14, 0.6) 0%, rgba(17, 32, 14, 0.3) 50%, rgba(17, 32, 14, 0.7) 100%)",
        }}
      />

      <div
        className="relative z-10 mx-auto px-6 md:px-12 max-w-7xl flex flex-col justify-center items-start h-full pb-20 md:pb-28"
        style={{ paddingTop: NAVBAR_HEIGHT }}
      >
        <div className="max-w-4xl animate-fade-in-up text-left">
          
          <h1 
            className="w-full font-black text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem] tracking-tight leading-[1.1] text-white font-source-sans animate-fade-in-up delay-200"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.5), 0 2px 10px rgba(0,0,0,0.3)' }}
          >
            Convert waste to <br />
            <span className="text-accent-green" style={{ textShadow: '0 4px 30px rgba(76,175,46,0.4)' }}>something beautiful.</span>
          </h1>

          <div 
            className="mt-6 md:mt-8 mb-2 font-medium text-lg sm:text-xl lg:text-2xl text-white/95 leading-relaxed font-source-sans animate-fade-in-up delay-300 max-w-2xl"
            style={{ textShadow: '0 2px 16px rgba(0,0,0,0.6)' }}
          >
            Newcycl is building breakthrough technologies that transform food
            waste into valuable products.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
