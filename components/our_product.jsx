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

const SWATCHES = [
  { name: "Warm Grey", swatch: "#E7E2D8", images: ["Warm Grey — front", "Warm Grey — open lid", "Warm Grey — side"] },
  { name: "Forest Green", swatch: "#1F3A24", images: ["Forest Green — front", "Forest Green — open lid", "Forest Green — side"] },
  { name: "Coffee Brown", swatch: "#4A3226", images: ["Coffee Brown — front", "Coffee Brown — open lid", "Coffee Brown — side"] },
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
  {
    icon: WashingMachine,
    title: "Self-cleaning",
    text: "Just spray water, stir, rinse off the water from the bottom and you are ready to go.",
  },
];


function ProductGallery() {
  const [swatchIndex, setSwatchIndex] = useState(2); // Coffee Brown selected by default, matching your screenshot
  const [slideIndex, setSlideIndex] = useState(0);

  const images = SWATCHES[swatchIndex].images;
  const goTo = (i) => setSlideIndex((i + images.length) % images.length);

  return (
    <div className="flex flex-col items-center">
      {/* Colorway picker */}
      <div className="flex items-center gap-4 mb-6">
        {SWATCHES.map((s, i) => (
          <button
            key={s.name}
            onClick={() => {
              setSwatchIndex(i);
              setSlideIndex(0);
            }}
            aria-label={s.name}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
            style={{ border: i === swatchIndex ? `2px solid ${INK}` : "2px solid #B9C7AE" }}
          >
            <span className="w-6 h-6 rounded-full" style={{ background: s.swatch }} />
          </button>
        ))}
      </div>

      {/* Image slot + arrows — replace the placeholder with a real <img> once you have assets */}
      <div className="relative w-full max-w-sm">
        <div
          className="w-full h-56 md:h-72 rounded-2xl flex flex-col items-center justify-center gap-2"
          style={{ border: `1.5px dashed ${INK}44`, background: "#FFFFFF59" }}
        >
          <ImagePlus size={30} color={INK} strokeWidth={1.5} />
          <span
            className="text-[11px] uppercase tracking-widest text-center px-4"
            style={{ color: MUTED, letterSpacing: "0.15em" }}
          >
            {images[slideIndex]}
          </span>
        </div>

        <button
          onClick={() => goTo(slideIndex - 1)}
          aria-label="Previous image"
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110"
          style={{ background: "#FFFFFFB3" }}
        >
          <ChevronLeft size={16} color={INK} />
        </button>
        <button
          onClick={() => goTo(slideIndex + 1)}
          aria-label="Next image"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110"
          style={{ background: "#FFFFFFB3" }}
        >
          <ChevronRight size={16} color={INK} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlideIndex(i)}
            aria-label={`Go to image ${i + 1}`}
            className="rounded-full transition-all"
            style={{ width: i === slideIndex ? 16 : 6, height: 6, background: i === slideIndex ? INK : `${INK}33` }}
          />
        ))}
      </div>
    </div>
  );
}

function FeatureRow({ icon: Icon, title, text }) {
  return (
    <div className="flex items-start gap-5 mb-8 last:mb-0">
      <Icon size={40} strokeWidth={1} className="flex-shrink-0 text-ink" />
      <div>
        <div className="font-semibold uppercase text-sm tracking-wide text-ink">
          {title}
        </div>
        <div className="mt-1.5 text-sm leading-relaxed text-body">
          {text}
        </div>
      </div>
    </div>
  );
}

export default function OurStory() {
  return (
    <section
      className="w-full flex items-center justify-center px-4 py-14 md:py-20 bg-backdrop"
    >
      <style>{`
        .rawbin-card-scroll::-webkit-scrollbar { display: none; }
        .rawbin-card-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* The card — wider and a little taller than the story version */}
      <div
        className="relative mx-auto w-[95vw] h-[88vh] sm:w-[92vw] sm:h-[84vh] md:w-[85vw] md:h-[78vh] max-w-[1400px] max-h-[820px] min-h-[480px] rounded-[28px] overflow-hidden shadow-2xl bg-card-bg"
      >
        <div className="rawbin-card-scroll w-full h-full overflow-y-auto">
          {/* Hero block */}
          <div className="text-center px-6 md:px-16 pt-10 md:pt-14 pb-4">
            <h2 className="text-3xl md:text-5xl font-semibold text-ink">
              INTRODUCING RAWBIN
            </h2>
            <p className="mt-3 font-semibold text-sm md:text-base tracking-wide text-accent-green">
              INDIA'S FIRST SMART HOME COMPOSTER
            </p>
  
            <button
              className="mt-6 px-7 py-2.5 rounded-full font-semibold text-sm text-white transition-transform hover:scale-105 bg-accent-green"
              // wire this up to your waitlist flow / signup modal
            >
              Join the waitlist
            </button>
          </div>

          {/* Product body: gallery left, features right */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 px-6 md:px-16 pb-12 md:pb-16 mt-6 md:mt-10">
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