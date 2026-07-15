import React from "react";
import Image from "next/image";

const logos = [
  { src: "/recognisedby_svg/banasthali .svg", alt: "AIC Banasthali" },
  { src: "/recognisedby_svg/climatelaunchpad.svg", alt: "ClimateLaunchpad" },
  { src: "/recognisedby_svg/nidhi_prayas.png", alt: "Nidhi Prayas" },
  { src: "/recognisedby_svg/villgro.svg", alt: "Villgro" },
  { src: "/recognisedby_svg/qwein.svg", alt: "Qualcomm" },
];

const RecognisedBy = () => {
  // Duplicate logos enough times for a seamless infinite loop
  const allLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <>
      <style>{`
        @keyframes scroll-logos {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logos-track {
          animation: scroll-logos 30s linear infinite;
        }
        .logos-track:hover {
          animation-play-state: paused;
        }
        .logos-fade-mask {
          mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
        }
      `}</style>

      <section className="w-full pt-20 pb-10 md:pt-28 md:pb-12 bg-[#FBFBFA] border-t border-emerald-500/5 font-source-sans relative overflow-hidden">

        {/* Subtle background glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-7xl aspect-[3/1] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(76, 175, 46, 0.05) 0%, rgba(255,255,255,0) 70%)"
          }}
        />

        <div className="container mx-auto max-w-7xl px-6 sm:px-8 relative z-10 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-5xl sm:text-6xl font-black text-ink-dark tracking-tight leading-none mb-6">
              Recognised & <span className="text-green-500">Supported</span> By
            </h2>
          </div>
        </div>

        {/* Scrolling track */}
        <div className="w-full overflow-hidden logos-fade-mask relative z-10">
          <div className="logos-track flex w-max items-center gap-16 md:gap-24 px-10 py-6">
            {allLogos.map((logo, i) => (
              <div
                key={i}
                className="group flex items-center justify-center flex-shrink-0 w-48 sm:w-56 h-24 sm:h-28"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 hover:scale-105 cursor-pointer"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
};

export default RecognisedBy;
