import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";


const SLIDES = [
  {
    id: 1,
    eyebrow: "Land",
    title: "Soil Degradation",
    caption: "Fertile land is shrinking faster than it can recover.",
    image: "/mission_vision/soilDegradation.jpg",
 
  },
  {
    id: 2,
    eyebrow: "Supply Chain",
    title: "Food Waste",
    caption: "Nearly a third of all food produced is never eaten.",
    image: "/mission_vision/foodWaste.jpg",
  },
  {
    id: 3,
    eyebrow: "Households",
    title: "Cost of Living",
    caption: "Everyday essentials are outpacing household incomes.",
    image: "/mission_vision/costOfLivingCrisis.jpg",
    
  },
];



const N = SLIDES.length;
const COPIES = 5;
const EXTENDED = Array.from({ length: N * COPIES }, (_, i) => SLIDES[i % N]);
const HOME = Math.floor(COPIES / 2) * N;
const START_INDEX = HOME + 1; // center = SLIDES[1], matching the original layout

const CARD_W = 360;
const CARD_H = 540;
const SPACING = 320; // px an adjacent card sits from the centered card
const DURATION = 500; // ms, must match the transition below

function CardPattern({ type }) {
  const common = { className: "absolute inset-0 w-full h-full", viewBox: `0 0 ${CARD_W} ${CARD_H}` };

  if (type === "contour") {
    const rows = [70, 150, 230, 310, 390, 470];
    return (
      <svg {...common} style={{ opacity: 0.14 }} fill="none">
        {rows.map((y) => (
          <path
            key={y}
            d={`M-20 ${y} C 70 ${y - 40}, 150 ${y + 40}, 230 ${y - 10} S 340 ${y - 40}, ${CARD_W + 20} ${y + 10}`}
            stroke="white"
            strokeWidth="1.1"
          />
        ))}
      </svg>
    );
  }

  if (type === "dots") {
    const dots = [];
    for (let r = 0; r < Math.ceil(CARD_H / 42); r++) {
      for (let c = 0; c < Math.ceil(CARD_W / 42); c++) {
        dots.push(<circle key={`${r}-${c}`} cx={16 + c * 42} cy={16 + r * 42} r={1.5} fill="white" />);
      }
    }
    return (
      <svg {...common} style={{ opacity: 0.16 }}>
        {dots}
      </svg>
    );
  }

  // grid
  const lines = [];
  for (let x = 0; x <= CARD_W; x += 36) lines.push(<line key={`v${x}`} x1={x} y1={0} x2={x} y2={CARD_H} stroke="white" strokeWidth="0.6" />);
  for (let y = 0; y <= CARD_H; y += 36) lines.push(<line key={`h${y}`} x1={0} y1={y} x2={CARD_W} y2={y} stroke="white" strokeWidth="0.6" />);
  return (
    <svg {...common} style={{ opacity: 0.12 }}>
      {lines}
    </svg>
  );
}

export default function FocusAreasCarousel() {
  const [activeIndex, setActiveIndex] = useState(START_INDEX);
  const [instant, setInstant] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const settleTimer = useRef(null);

  useEffect(() => () => clearTimeout(settleTimer.current), []);

  const go = (dir) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((i) => i + dir);

    clearTimeout(settleTimer.current);
    settleTimer.current = setTimeout(() => {
      setIsAnimating(false);
      setActiveIndex((i) => {
        const offset = i - HOME;
        if (Math.abs(offset) < N) return i;
        setInstant(true);
        requestAnimationFrame(() => requestAnimationFrame(() => setInstant(false)));
        return i - Math.sign(offset) * N;
      });
    }, DURATION);
  };

  const next = () => go(1);
  const prev = () => go(-1);

  const activeSlide = SLIDES[((((activeIndex - HOME) % N) + N) % N)];
  const position = ((((activeIndex - HOME) % N) + N) % N) + 1;

  return (
    <div className="w-full max-w-5xl mx-auto py-24 px-6 sm:px-8 font-source-sans border-t border-emerald-500/5">
      <style>{`
        .facarousel-serif { font-family: 'Fraunces', serif; }
        .facarousel-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Section heading */}
      <div className="text-center mb-16">
        <span className="text-[10px] tracking-[0.3em] uppercase text-accent-green font-bold block mb-2">
          Why it matters
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-ink-dark tracking-tight leading-none">
          Mission &amp; Vision
        </h2>
      </div>

      {/* Ambient glow behind the stage, tuned to focus area */}
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-500"
          style={{
            width: 520,
            height: 520,
            background: activeSlide.glow || "rgba(76, 175, 46, 0.15)",
            opacity: 0.15,
            filter: "blur(120px)",
          }}
        />

        <div className="relative h-[580px] overflow-hidden">
          {EXTENDED.map((slide, i) => {
            const offset = i - activeIndex;
            const dist = Math.abs(offset);

            const scale = dist === 0 ? 1 : dist === 1 ? 0.84 : 0.72;
            const opacity = dist === 0 ? 1 : dist === 1 ? 0.45 : 0;
            const zIndex = dist === 0 ? 30 : dist === 1 ? 10 : 0;

            return (
              <div
                key={i}
                onClick={dist === 1 ? () => go(offset) : undefined}
                className={`absolute top-1/2 left-1/2 rounded-[2.5rem] overflow-hidden border ${
                  dist === 0 ? "border-white/20" : "border-white/5"
                } ${dist === 1 ? "cursor-pointer" : ""}`}
                style={{
                  width: CARD_W,
                  height: CARD_H,
                  transform: `translate(-50%, -50%) translateX(calc(${offset * SPACING}px)) scale(${scale})`,
                  opacity,
                  zIndex,
                  pointerEvents: dist <= 1 ? "auto" : "none",
                  boxShadow: dist === 0 
                    ? "0 40px 80px -25px rgba(31, 46, 27, 0.25), 0 10px 30px -10px rgba(31, 46, 27, 0.15)" 
                    : "0 20px 40px -20px rgba(0,0,0,0.2)",
                  transition: instant
                    ? "none"
                    : `transform ${DURATION}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${DURATION}ms ease, box-shadow ${DURATION}ms ease`,
                }}
              >
                {slide.image ? (
                  <img
                    src={slide.image}
                    alt={slide.title}
                    draggable={false}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center select-none"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0" style={{ backgroundImage: slide.gradient }} />
                    <CardPattern type={slide.pattern} />
                  </>
                )}

                {/* Scrim */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(17,32,14,0.4) 0%, rgba(17,32,14,0.05) 32%, rgba(17,32,14,0.12) 55%, rgba(17,32,14,0.85) 100%)",
                  }}
                />

                <div className="relative z-10 flex flex-col h-full p-9">
                  <span className="inline-block self-start text-[10px] tracking-[0.25em] uppercase text-white font-bold px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
                    {slide.eyebrow}
                  </span>

                  <div className="mt-auto">
                    <h3 className="text-3xl font-black text-white mb-3 leading-tight tracking-tight">
                      {slide.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/80 max-w-[90%] font-light">
                      {slide.caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-8 mt-6">
        <button
          onClick={prev}
          disabled={isAnimating}
          aria-label="Previous slide"
          className="w-12 h-12 rounded-full border border-ink/10 bg-white text-ink flex items-center justify-center hover:bg-neutral-50 shadow-premium hover:scale-105 disabled:opacity-30 transition-all duration-300 active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <span className="text-xs font-bold tabular-nums text-muted tracking-widest uppercase">
          {String(position).padStart(2, "0")} <span className="text-neutral-300 px-1">/</span> {String(N).padStart(2, "0")}
        </span>

        <button
          onClick={next}
          disabled={isAnimating}
          aria-label="Next slide"
          className="w-12 h-12 rounded-full border border-ink/10 bg-white text-ink flex items-center justify-center hover:bg-neutral-50 shadow-premium hover:scale-105 disabled:opacity-30 transition-all duration-300 active:scale-95"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
