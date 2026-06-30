import { useState } from "react";
import { ChevronLeft, ChevronRight, DollarSign, Sun, Trash2 } from "react-feather";

// Paste your image path/URL into the `image` field for each card below.
// Leave it empty ("") to keep the icon + gradient placeholder.
const SLIDES = [
  {
    id: 1,
    title: "Soil Degradation",
    caption: "Fertile land is shrinking faster than it can recover.",
    image: "", // <-- paste image path here
    icon: Sun,
    from: "from-emerald-700",
    to: "to-emerald-950",
  },
  {
    id: 2,
    title: "Food Waste",
    caption: "Nearly a third of all food produced is never eaten.",
    image: "", // <-- paste image path here
    icon: Trash2,
    from: "from-amber-700",
    to: "to-amber-950",
  },
  {
    id: 3,
    title: "Cost of Living",
    caption: "Everyday essentials are outpacing household incomes.",
    image: "", // <-- paste image path here
    icon: DollarSign,
    from: "from-rose-700",
    to: "to-rose-950",
  },
];

// position layout: where each slot sits on screen
const LAYOUT = {
  left: {
    x: "-62%",
    scale: 0.82,
    opacity: 0.55,
    z: 10,
    blur: "blur-[1px]",
  },
  center: {
    x: "0%",
    scale: 1,
    opacity: 1,
    z: 30,
    blur: "",
  },
  right: {
    x: "62%",
    scale: 0.82,
    opacity: 0.55,
    z: 10,
    blur: "blur-[1px]",
  },
};

export default function FocusAreasCarousel() {
  // order[0] = left card, order[1] = center card, order[2] = right card
  const [order, setOrder] = useState([0, 1, 2]);

  const goNext = () => {
    // right -> center, center -> left, left -> wraps to right
    setOrder(([l, c, r]) => [c, r, l]);
  };

  const goPrev = () => {
    // left -> center, center -> right, right -> wraps to left
    setOrder(([l, c, r]) => [r, l, c]);
  };

  const positionFor = (slotIdx) =>
    slotIdx === 0 ? "left" : slotIdx === 1 ? "center" : "right";

  return (
    <div className="w-full bg-gradient-to-b from-neutral-950 to-black py-20 px-4 flex flex-col items-center overflow-hidden">
      <h2 className="text-white text-xl md:text-2xl font-bold tracking-wide mb-2 text-center">
        Key Challenges We Address
      </h2>
      <p className="text-neutral-400 text-sm mb-12 text-center max-w-md">
        Three issues shaping the way we think about sustainability and impact.
      </p>

      <div className="relative w-full max-w-5xl h-[480px] flex items-center justify-center">
        {/* Prev arrow */}
        <button
          onClick={goPrev}
          aria-label="Previous"
          className="absolute left-2 md:left-10 z-40 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition active:scale-90"
        >
          <ChevronLeft className="w-6 h-6 text-white" strokeWidth={2.5} />
        </button>

        {/* Card stage */}
        <div className="relative w-full h-full flex items-center justify-center">
          {order.map((slideIdx, slotIdx) => {
            const slide = SLIDES[slideIdx];
            const pos = positionFor(slotIdx);
            const { x, scale, opacity, z, blur } = LAYOUT[pos];
            const Icon = slide.icon;
            const isCenter = pos === "center";

            return (
              <div
                key={slide.id}
                onClick={() => {
                  if (pos === "left") goPrev();
                  if (pos === "right") goNext();
                }}
                style={{
                  transform: `translateX(${x}) scale(${scale})`,
                  opacity,
                  zIndex: z,
                }}
                className={`absolute w-[270px] h-[420px] md:w-[320px] md:h-[460px] rounded-[28px] overflow-hidden
                  transition-all duration-500 ease-out cursor-pointer
                  shadow-[0_20px_50px_rgba(0,0,0,0.55)] ring-1 ring-white/10
                  ${blur} ${!isCenter ? "cursor-pointer" : "cursor-default"}`}
              >
                {/* Image or gradient placeholder */}
                {slide.image ? (
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${slide.from} ${slide.to} flex items-center justify-center`}
                  >
                    <Icon
                      className="w-20 h-20 text-white/25"
                      strokeWidth={1.2}
                    />
                  </div>
                )}

                {/* Top shade for readability/aesthetics */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/30" />

                {/* Topic label top-left */}
                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
                    <Icon className="w-4 h-4 text-white" strokeWidth={2} />
                  </div>
                  <span className="text-white/80 text-xs font-medium uppercase tracking-wider">
                    Focus area
                  </span>
                </div>

                {/* Bottom caption */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white text-xl font-bold mb-1">
                    {slide.title}
                  </h3>
                  <p className="text-neutral-200 text-sm leading-snug">
                    {slide.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Next arrow */}
        <button
          onClick={goNext}
          aria-label="Next"
          className="absolute right-2 md:right-10 z-40 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition active:scale-90"
        >
          <ChevronRight className="w-6 h-6 text-white" strokeWidth={2.5} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-8">
        {SLIDES.map((slide, i) => {
          const isCenter = order[1] === i;
          return (
            <div
              key={slide.id}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                isCenter ? "w-6 bg-white" : "w-1.5 bg-white/30"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}

export function MissionVisionCarousel() {
  return (
    <div className="w-full bg-gradient-to-b from-neutral-950 to-black py-20 px-4 flex flex-col items-center overflow-hidden">
      <FocusAreasCarousel />
    </div>
  );
}
