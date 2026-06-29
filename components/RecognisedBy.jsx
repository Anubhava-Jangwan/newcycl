import React from "react";
import Image from "next/image";

const logos = [
  { src: "/aic.png", alt: "AIC Banasthali", width: 120 },
  { src: "/ClimateLaunchpad.png", alt: "ClimateLaunchpad", width: 160 },
  { src: "/nidhi_prayas.png", alt: "Nidhi Prayas", width: 140 },
  { src: "/villgro-logo.png", alt: "Villgro", width: 110 },
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

      <section className="w-full py-16 bg-[#000]">
        <p className="text-center text-white/70 text-sm font-medium tracking-widest uppercase mb-10">
          Supported &amp; Recognised by
        </p>

        {/* Scrolling track */}
        <div className="w-full overflow-hidden logos-fade-mask">
          <div className="logos-track flex w-max items-center gap-20 px-10">
            {allLogos.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center flex-shrink-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={48}
                  className="h-10 w-auto object-contain opacity-80 brightness-0 invert hover:opacity-100 transition-opacity duration-300"
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
