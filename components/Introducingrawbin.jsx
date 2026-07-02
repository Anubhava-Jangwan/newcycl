"use client";

import { useState } from "react";
import Image from "next/image";
import { Flower2, WheatOff, Recycle, House, WashingMachine } from "lucide-react";

// Each color variant has its own set of product images.
// Paste your actual image paths/imports into the `images` arrays below.
const COLOR_OPTIONS = [
  {
    id: "rose-gold",
    label: "Rose Gold",
    swatchClass: "bg-rose-300",
    images: [
      "", // <-- paste image path here, e.g. "/images/Rawbin_Rose_Gold_1.png"
      "", // <-- paste image path here
      "", // <-- paste image path here
    ],
  },
  {
    id: "forest-green",
    label: "Forest Green",
    swatchClass: "bg-emerald-800",
    images: [
      "", // <-- paste image path here
      "", // <-- paste image path here
      "", // <-- paste image path here
    ],
  },
  {
    id: "coffee-brown",
    label: "Coffee Brown",
    swatchClass: "bg-amber-900",
    images: [
      "", // <-- paste image path here
      "", // <-- paste image path here
      "", // <-- paste image path here
    ],
  },
];

const FEATURES = [
  {
    icon: Flower2,
    title: "100% odor free",
    description:
      "Absolutely odor free, worms free, and fruit flies free. It only smells earthy and magical.",
  },
  {
    icon: WheatOff,
    title: "Throw anything you can't eat",
    description:
      "Throw all kinds of food waste - peels, leftovers, rotten bread, spoiled onion, anything - edible/non-edible.",
  },
  {
    icon: Recycle,
    title: "Compost as you throw",
    description:
      "No need to wait until the food waste is composted, keep adding on top of it and take out your compost when it's ready at the bottom.",
  },
  {
    icon: House,
    title: "Keep it indoor and flaunt it",
    description:
      "No need for a sprawling backyard to do home composting. Do it at the comfort of your apartment's kitchen or even balcony.",
  },
  {
    icon: WashingMachine,
    title: "Self-cleaning",
    description:
      "Just spray water, stir, rinse off the water from the bottom and you are ready to go.",
  },
];

export default function IntroducingRawbin() {
  const [colorIdx, setColorIdx] = useState(0);
  const [slideIdx, setSlideIdx] = useState(0);

  const activeColor = COLOR_OPTIONS[colorIdx];

  const handleColorChange = (idx) => {
    setColorIdx(idx);
    setSlideIdx(0);
  };

  const goPrev = () =>
    setSlideIdx((i) => (i - 1 + activeColor.images.length) % activeColor.images.length);
  const goNext = () =>
    setSlideIdx((i) => (i + 1) % activeColor.images.length);

  return (
    <section className="intro bg-[#45b90026] mx-2 px-2 py-6 relative m-auto rounded-3xl text-center">
      <div className="container m-auto">
        <h2 className="text-4xl leading-normal">INTRODUCING RAWBIN</h2>
        <p className="mt-2 font-semibold text-nc-bgreen">
          INDIA&rsquo;S FIRST SMART HOME COMPOSTER
        </p>
        <p className="mt-4 text-sm max-w-sm sm:max-w-xl m-auto mb-6">
          Rawbin is an IoT powered smart home composter that converts your
          food waste into organic fertilizer in just 7 days, completely
          automatically.
        </p>
        <button className="bg-nc-bgreen text-nc-button font-semibold text-white px-6 py-2 rounded-full">
          Join the waitlist
        </button>

        <div className="flex flex-col md:flex-row items-end mt-12 container">
          {/* Left: color picker + carousel */}
          <div className="md:px-12 md:w-1/2 text-center">
            <div className="flex justify-evenly m-auto my-12 w-32">
              {COLOR_OPTIONS.map((color, idx) => (
                <button
                  key={color.id}
                  type="button"
                  aria-label={`Select ${color.label}`}
                  onClick={() => handleColorChange(idx)}
                  className={`w-7 h-7 rounded-full cursor-pointer flex items-center justify-center border-2 border-solid transition ${
                    idx === colorIdx ? "border-nc-dgreen" : "border-gray-400"
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full ${color.swatchClass}`} />
                </button>
              ))}
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl bg-white/40">
                {activeColor.images[slideIdx] ? (
                  <Image
                    src={activeColor.images[slideIdx]}
                    alt={`Rawbin ${activeColor.label}`}
                    width={1080}
                    height={1080}
                    className="w-full"
                  />
                ) : (
                  <div className="w-full aspect-square flex items-center justify-center text-sm text-gray-400">
                    Add image for {activeColor.label}
                  </div>
                )}
              </div>

              {/* Prev / Next */}
              <button
                type="button"
                aria-label="previous slide"
                onClick={goPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow"
              >
                &#8249;
              </button>
              <button
                type="button"
                aria-label="next slide"
                onClick={goNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow"
              >
                &#8250;
              </button>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {activeColor.images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`slide item ${i + 1}`}
                    onClick={() => setSlideIdx(i)}
                    className={`w-2 h-2 rounded-full transition ${
                      i === slideIdx ? "bg-nc-dgreen" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: feature list */}
          <div className="bg-[#f9f5f3] text-center text-nc-text md:bg-transparent md:w-1/2 md:text-left md:ml-12 pt-12 px-12 md:pt-0 md:px-0">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col md:flex-row items-center mb-10"
              >
                <div>
                  <Icon
                    className="w-14 h-14"
                    strokeWidth={1}
                  />
                </div>
                <div className="ml-6">
                  <div className="font-semibold uppercase">{title}</div>
                  <div className="mt-3 opacity-55 md:opacity-100">
                    {description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
