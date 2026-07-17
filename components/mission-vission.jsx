import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";


const SLIDES = [
  {
    id: 1,
    name: "Startup Founder",
    role: "Incubated Startup",
    testimonial: "Brilliant innovation, much needed for the environment. Kudos to your team 👏👏",
    avatar: "/avatar-m-1.svg"
  },
  {
    id: 2,
    name: "Shashi Bhatnagar",
    role: "Planetary Risk & Resilience",
    testimonial: "Dream come true. Brilliant product and congratulations. So glad to see this.",
    avatar: "/avatar-w-1.svg"
  },
  {
    id: 3,
    name: "Nischay Gupta",
    role: "Sustainability Advocate",
    testimonial: "Real product solving a real problem 💯",
    avatar: "/avatar-m-3.svg"
  },
  {
    id: 4,
    name: "Apoorva Jhala",
    role: "Manager | PwC | Ex 7N, Fidelity, Ericsson",
    testimonial: "A great achievement and a great product much needed in today's time. We also compost waste at home and this would be incredibly handy and a way forward for everyone.",
    avatar: "/avatar-w-2.svg"
  }
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

export default function TestimonialsCarousel() {
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
    <div className="w-full py-24 bg-[#F7F7F7] font-source-sans border-t border-black/5">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap');
        .facarousel-serif { font-family: 'Fraunces', serif; }
        .facarousel-sans { font-family: 'Inter', sans-serif; }
        .handwriting { font-family: 'Caveat', cursive; }
      `}</style>

      {/* Section heading */}
      <div className="mb-16 max-w-5xl mx-auto px-6 sm:px-8">
        <span className="text-[10px] tracking-[0.3em] uppercase text-ink-dark/50 font-bold block mb-4 text-left">
          TESTIMONIALS
        </span>
        <h2 className="text-4xl sm:text-6xl font-light text-ink-dark tracking-tight leading-tight text-left">
          Don't take our word for it! <br/> Hear it from our partners.
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
                className={`absolute top-1/2 left-1/2 rounded-[2.5rem] overflow-hidden border bg-white ${dist === 0 ? "border-emerald-500/20" : "border-emerald-500/5"
                  } ${dist === 1 ? "cursor-pointer" : ""}`}
                style={{
                  width: CARD_W,
                  height: CARD_H,
                  transform: `translate(-50%, -50%) translateX(calc(${offset * SPACING}px)) scale(${scale})`,
                  opacity,
                  zIndex,
                  pointerEvents: dist <= 1 ? "auto" : "none",
                  boxShadow: dist === 0
                    ? "0 30px 60px -15px rgba(0, 0, 0, 0.1), 0 10px 25px -5px rgba(0, 0, 0, 0.05)"
                    : "0 10px 25px -10px rgba(0,0,0,0.05)",
                  transition: instant
                    ? "none"
                    : `transform ${DURATION}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${DURATION}ms ease, box-shadow ${DURATION}ms ease, border-color ${DURATION}ms ease`,
                }}
              >
                <div className="relative z-10 flex flex-col h-full p-8 sm:p-10 text-left justify-between bg-white rounded-[2.5rem]">
                  <div>
                    {/* Avatar at the top left */}
                    <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 bg-gray-100 mb-6 shadow-sm border border-black/5">
                      <img src={slide.avatar} alt={slide.name} className="w-full h-full object-cover" />
                    </div>
                    {/* Testimonial Text */}
                    <p className="text-lg sm:text-[19px] text-ink-dark/80 leading-relaxed font-normal">
                      "{slide.testimonial}"
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="mt-8 pt-6">
                    <h4 className="text-3xl sm:text-4xl text-ink-dark mb-1 handwriting transform -rotate-2">{slide.name}</h4>
                    <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-ink/40 font-semibold">{slide.role}</p>
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
