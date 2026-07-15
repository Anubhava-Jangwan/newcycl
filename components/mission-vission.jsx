import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";


const SLIDES = [
  {
    id: 1,
    name: "Startup Founder",
    role: "Incubated Startup",
    testimonial: "Brilliant innovation, much needed for the environment. Kudos to your team 👏👏"
  },
  {
    id: 2,
    name: "Shashi Bhatnagar",
    role: "Planetary Risk & Resilience",
    testimonial: "Dream come true. Brilliant product and congratulations. So glad to see this."
  },
  {
    id: 3,
    name: "Nischay Gupta",
    role: "Sustainability Advocate",
    testimonial: "Real product solving a real problem 💯"
  },
  {
    id: 4,
    name: "Apoorva Jhala",
    role: "Manager | PwC | Ex 7N, Fidelity, Ericsson",
    testimonial: "A great achievement and a great product much needed in today's time. We also compost waste at home and this would be incredibly handy and a way forward for everyone."
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
    <div className="w-full max-w-5xl mx-auto py-24 px-6 sm:px-8 font-source-sans border-t border-emerald-500/5">
      <style>{`
        .facarousel-serif { font-family: 'Fraunces', serif; }
        .facarousel-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Section heading */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <span className="text-[10px] tracking-[0.3em] uppercase text-accent-green font-bold block mb-2">

        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-ink-dark tracking-tight leading-none mb-4">
          What People Are Saying
        </h2>
        <p className="text-body/70 text-base sm:text-lg">
          Industry leaders, startup founders, sustainability advocates, and early adopters sharing their thoughts about Newcycl and Rawbin.
        </p>
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
                    ? "0 40px 80px -25px rgba(76, 175, 46, 0.25), 0 10px 30px -10px rgba(76, 175, 46, 0.15)"
                    : "0 20px 40px -20px rgba(0,0,0,0.05)",
                  transition: instant
                    ? "none"
                    : `transform ${DURATION}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${DURATION}ms ease, box-shadow ${DURATION}ms ease, border-color ${DURATION}ms ease`,
                }}
              >
                {/* Large Background Quote Icon */}
                <div className="absolute -top-4 right-4 text-emerald-500/10 font-serif text-[180px] leading-none select-none pointer-events-none">
                  "
                </div>

                <div className="relative z-10 flex flex-col h-full p-8 sm:p-10 text-left justify-between">
                  <div>
                    {/* Star Rating */}
                    <div className="flex gap-1 mb-6 text-accent-green">
                      {[...Array(5)].map((_, idx) => (
                        <svg key={idx} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    {/* Testimonial Text */}
                    <p className="text-xl sm:text-2xl text-ink-dark leading-snug font-medium">
                      "{slide.testimonial}"
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 mt-8 pt-6 border-t border-emerald-500/10">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 text-accent-green flex items-center justify-center font-bold text-lg border border-emerald-500/20 shrink-0">
                      {slide.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </div>
                    <div>
                      <h4 className="font-bold text-ink-dark text-base leading-tight mb-0.5">{slide.name}</h4>
                      <p className="text-xs text-body/70 leading-tight">{slide.role}</p>
                    </div>
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
