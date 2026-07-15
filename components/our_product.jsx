import React, { useState } from "react";
import {
  Flower,
  WheatOff,
  Recycle,
  House,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const RAWBIN_IMAGES = [
  { label: "Front View", path: "/rawbin/rawbin-main-white-bg.jpeg" },
  { label: "Side View", path: "/rawbin/side-view.png" },
  { label: "Back View", path: "/rawbin/back-view.png" },
  { label: "Top-Down View", path: "/rawbin/Top-Down-view.png" }
];

const FEATURES = [
  {
    icon: Flower,
    title: "100% odor free",
    text: "Absolutely odor free, worms free, and fruit flies free. It only smells earthy and magical.",
  },
  {
    icon: WheatOff,
    title: "Throw anything you can't eat",
    text: "Throw all kinds of food waste - peels, leftovers, rotten bread, spoiled onion, anything - edible/non-edible.",
  },
  {
    icon: Recycle,
    title: "Compost as you throw",
    text: "No need to wait until the food waste is composted, keep adding on top of it and take out your compost when it's ready at the bottom.",
  },
  {
    icon: House,
    title: "Keep it indoor and flaunt it",
    text: "No need for a sprawling backyard to do home composting. Do it at the comfort of your apartment's kitchen or even balcony.",
  },
];

function ProductGallery() {
  const [slideIndex, setSlideIndex] = useState(0);
  const goTo = (i) => setSlideIndex((i + RAWBIN_IMAGES.length) % RAWBIN_IMAGES.length);

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Subtle radial glow behind the product */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-square rounded-full pointer-events-none transition-all duration-700"
        style={{
          background: "radial-gradient(circle, rgba(76, 175, 46, 0.08) 0%, rgba(255,255,255,0) 65%)"
        }}
      />

      {/* Product Image */}
      <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] flex items-center justify-center z-10 px-4">
        <img
          src={RAWBIN_IMAGES[slideIndex].path}
          alt={RAWBIN_IMAGES[slideIndex].label}
          // mix-blend-multiply makes the white background of the JPEG transparent against the off-white section background
          className="w-full h-full object-contain mix-blend-multiply transition-opacity duration-500 select-none"
        />

        {/* Navigation Arrows */}
        <button
          onClick={() => goTo(slideIndex - 1)}
          aria-label="Previous image"
          className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-md shadow-premium border border-emerald-500/10 transition-all duration-300 hover:scale-110 hover:bg-white text-ink active:scale-95 z-20"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => goTo(slideIndex + 1)}
          aria-label="Next image"
          className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-md shadow-premium border border-emerald-500/10 transition-all duration-300 hover:scale-110 hover:bg-white text-ink active:scale-95 z-20"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Label & Dots */}
      <div className="flex flex-col items-center gap-4 mt-8 z-10">
        <span className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-ink/70">
          {RAWBIN_IMAGES[slideIndex].label}
        </span>
        <div className="flex items-center gap-2">
          {RAWBIN_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlideIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === slideIndex ? 24 : 8,
                height: 8,
                background: i === slideIndex ? "#4CAF2E" : "rgba(31, 46, 27, 0.15)"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, text }) {
  return (
    <div className="group bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-premium-hover border border-emerald-500/5 transition-all duration-500 hover:-translate-y-1.5 flex flex-col items-start gap-5">
      <div className="w-12 h-12 rounded-2xl bg-emerald-50/50 border border-emerald-500/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:bg-emerald-50 shrink-0">
        <Icon size={22} className="text-accent-green" strokeWidth={1.5} />
      </div>
      <div>
        <h3 className="font-bold text-ink-dark mb-2 text-xs uppercase tracking-wider">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-body/80 font-medium">
          {text}
        </p>
      </div>
    </div>
  );
}

export default function OurProduct() {
  return (
    <section className="w-full pt-12 pb-24 md:pt-16 md:pb-32 bg-[#FBFBFA] border-t border-emerald-500/5 font-source-sans relative overflow-hidden">

      <div className="container mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column: Text & Features */}
          <div className="flex flex-col">
            {/* Header */}
            <div className="mb-12 md:mb-16 text-center lg:text-left">
              <span className="text-[10px] tracking-[0.3em] uppercase text-accent-green font-bold block mb-4">

              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink-dark tracking-tight leading-none mb-6">
                Meet Rawbin
              </h2>
              <p className="text-lg sm:text-xl text-body/80 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
                Rawbin is the first smart home composter designed for the modern Indian household. It turns your everyday kitchen waste into nutrient-rich compost, right in your kitchen or balcony.
              </p>
              <button className="bg-accent-green hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold tracking-wide transition-all duration-300 shadow-premium hover:shadow-premium-hover hover:-translate-y-1">
                Explore Rawbin
              </button>
            </div>

            {/* Feature Grid (2x2) */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {FEATURES.map((f) => (
                <FeatureCard key={f.title} {...f} />
              ))}
            </div>
          </div>

          {/* Right Column: Large Gallery */}
          <div className="lg:pl-8 xl:pl-16 mt-8 lg:mt-0">
            <ProductGallery />
          </div>

        </div>
      </div>
    </section>
  );
}