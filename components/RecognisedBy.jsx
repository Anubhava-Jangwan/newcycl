import React from "react";
import Image from "next/image";

const logos = [
  { src: "/recognisedby_svg/banasthali .svg", alt: "AIC Banasthali", width: 240 },
  { src: "/recognisedby_svg/climatelaunchpad.svg", alt: "ClimateLaunchpad", width: 320 },
  { src: "/recognisedby_svg/nidhi_prayas.png", alt: "Nidhi Prayas", width: 280 },
  { src: "/recognisedby_svg/villgro.svg", alt: "Villgro", width: 220 },
  { src: "/recognisedby_svg/qwein.svg", alt: "Qualcome", width: 240 },
];

const RecognisedBy = () => {
  // Duplicate logos for seamless infinite loop
  const allLogos = [...logos, ...logos, ...logos];

  return (
    <>
      <style>{`
        @keyframes scroll-logos {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logos-track {
          animation: scroll-logos 18s linear infinite;
        }
        .logos-track:hover {
          animation-play-state: paused;
        }
        .logos-fade-mask {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 12%,
            black 88%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 12%,
            black 88%,
            transparent 100%
          );
        }
      `}</style>

      <section className="w-full py-14 bg-black border-y border-white/5 font-source-sans">
        <p className="text-center text-white/40 text-m font-bold tracking-[0.25em] uppercase mb-8">
          Supported &amp; Recognised by
        </p>

        {/* Scrolling track */}
        <div className="w-full overflow-hidden logos-fade-mask opacity-65 hover:opacity-85 transition-opacity duration-300">
          <div className="logos-track flex w-max items-center gap-24 px-10">
            {allLogos.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center flex-shrink-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={40}
                  className="h-10 md:h-14 w-auto object-contain opacity-70 brightness-0 invert hover:opacity-100 hover:scale-105 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RecognisedBy;
