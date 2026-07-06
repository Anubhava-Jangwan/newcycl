import React, { useEffect, useState } from "react";
import {
  Flower,
  WheatOff,
  Recycle,
  House,
  WashingMachine,
  ChevronLeft,
  ChevronRight,
  ImagePlus,
} from "lucide-react";

/**
 * Rawbin — Our Product (embedded card)
 *
 * This is the same "floating card" file that used to hold the Our Story
 * slider. All of that — the dot field, click-to-enter, story slides — is
 * gone. In its place is the product-intro content from your screenshot:
 * heading, subtitle, description, CTA, a colorway switcher + image slot,
 * and the feature list.
 *
 * SIZE — bumped up from the previous version. Desktop card is now
 * ~85% of the viewport wide and ~78% tall (was 70% / 70%). Width grew
 * more than height since you asked for the width increase specifically.
 *
 * IMAGES — there's no real product photo in this environment to embed,
 * so each slide is a labeled placeholder (dashed box). Swap the
 * `SWATCHES` array below to point at your real images, e.g.:
 *
 *   import warmGrey1 from "../public/images/rawbin-warm-grey-1.png";
 *   ...
 *   { name: "Warm Grey", swatch: "#E7E2D8", images: [warmGrey1, warmGrey2] }
 *
 * and render <img src={images[slideIndex]} /> instead of the ImagePlus
 * placeholder inside ProductGallery.
 *
 * The component keeps the default export name `OurStory` so it still
 * matches your existing `import("../components/OurStory")` — but since
 * it's product content now, not a story, you may want to rename the
 * file itself (and the import) to something like OurProductCard.jsx
 * whenever it's convenient.
 */

const FONT_ID = "rawbin-product-card-font";

const CARD_BG = "#E4F1CB"; // pale lime-sage — whole card background
const PAGE_BACKDROP = "#F4F1EA"; // preview-only backdrop behind the card;
// delete this or set to "transparent" once it's living on your real page.
const INK = "#1F2E1B"; // deep forest — heading + feature titles
const ACCENT_GREEN = "#4CAF2E"; // vivid green — subtitle + CTA button
const BODY = "#3E4A38"; // muted green-grey — description copy
const MUTED = "#6B7A63"; // secondary / caption text

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
    <div className="flex flex-col items-center w-full max-w-md mx-auto">
      {/* Image slot + arrows — polished as a premium display container */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/12]">
        <div
          className="w-full h-full rounded-[2rem] flex flex-col items-center justify-center p-4 transition-all duration-500 border border-emerald-500/10 shadow-glass"
          style={{ 
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.6) 100%)",
            backdropFilter: "blur(10px)"
          }}
        >
          <div className="w-full h-[82%] flex items-center justify-center overflow-hidden rounded-2xl bg-white/40">
            <img
              src={RAWBIN_IMAGES[slideIndex].path}
              alt={RAWBIN_IMAGES[slideIndex].label}
              className="w-full h-full object-contain p-2"
            />
          </div>
          <div className="text-center mt-2.5">
            <span
              className="text-[10px] uppercase tracking-[0.25em] font-extrabold block text-ink"
            >
              {RAWBIN_IMAGES[slideIndex].label}
            </span>
          </div>
        </div>

        <button
          onClick={() => goTo(slideIndex - 1)}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-premium border border-emerald-500/5 transition-all duration-300 hover:scale-110 hover:bg-neutral-50 active:scale-95 z-10"
        >
          <ChevronLeft size={18} className="text-ink" />
        </button>
        <button
          onClick={() => goTo(slideIndex + 1)}
          aria-label="Next image"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-premium border border-emerald-500/5 transition-all duration-300 hover:scale-110 hover:bg-neutral-50 active:scale-95 z-10"
        >
          <ChevronRight size={18} className="text-ink" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center gap-2 mt-6">
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
  );
}

function FeatureRow({ icon: Icon, title, text }) {
  return (
    <div className="flex items-start gap-6 mb-8 last:mb-0 group">
      <div className="w-12 h-12 rounded-2xl bg-white border border-emerald-500/5 shadow-premium flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:bg-emerald-50 text-ink">
        <Icon size={22} strokeWidth={1.5} className="text-accent-green" />
      </div>
      <div>
        <div className="font-bold uppercase text-xs tracking-wider text-ink-dark">
          {title}
        </div>
        <div className="mt-2 text-sm leading-relaxed text-body/95">
          {text}
        </div>
      </div>
    </div>
  );
}

export default function OurStory() {
  return (
    <section
      className="w-full flex items-center justify-center px-4 py-20 md:py-28 bg-backdrop-dark/20 font-source-sans border-t border-emerald-500/5"
    >
      <style>{`
        .rawbin-card-scroll::-webkit-scrollbar { display: none; }
        .rawbin-card-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Flagship Card Showcase */}
      <div
        className="relative mx-auto w-11/12 max-w-[1400px] rounded-[2.5rem] overflow-hidden shadow-premium border border-emerald-500/10 bg-gradient-to-br from-[#E4F1CB] to-[#D4E8B5]"
      >
        <div className="w-full h-full">
          {/* Hero block */}
          <div className="text-center px-6 md:px-16 pt-12 md:pt-16 pb-6">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-ink/60">
              INDIA'S FIRST SMART HOME COMPOSTER
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-ink-dark mt-3 tracking-tight leading-none">
              INTRODUCING RAWBIN
            </h2>
          </div>

          {/* Product body: gallery left, features right */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 px-6 md:px-16 pb-16 md:pb-20 mt-6 md:mt-10 items-center">
            <ProductGallery />
            <div className="flex flex-col justify-center">
              {FEATURES.map((f) => (
                <FeatureRow key={f.title} {...f} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}