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
      className="relative overflow-hidden bg-cover bg-center bg-black"
      style={{
        marginTop: `-${NAVBAR_HEIGHT}`,
        height: `calc(480px + ${NAVBAR_HEIGHT})`,
        backgroundImage: "url('/newcycl-banner.png')",
      }}
    >
      {shouldLoadVideo && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover object-top"
          style={{ maxHeight: "600px", objectFit: "cover" }}
          src="/hero_page_foodcrushingvideo.mp4"
          poster="/newcycl-banner.png"
          preload="metadata"
          autoPlay
          loop
          muted
          playsInline
        />
      )}

      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0) 100%)",
        }}
      />

      <div
        className="relative z-10 mx-auto text-center"
        style={{ paddingTop: `calc(${NAVBAR_HEIGHT} + 5rem)` }}
      >
        <h1 className="w-full py-2 font-bold text-5xl lg:text-6xl tracking-tight leading-tight text-center text-white drop-shadow-md">
          UNLOCKING VALUE FROM THE WORLD'S LARGEST WASTE STREAM: FOOD
        </h1>

        <div className="px-12 mt-8 mb-4 font-normal text-xl lg:text-2xl text-white/90 leading-relaxed drop-shadow-sm max-w-4xl mx-auto">
          Newcycl is building breakthrough technologies that transform food
          waste into valuable products for households, communities, and
          industries.
        </div>
      </div>
    </div>
  );
};

export default Hero;
