import React, { useEffect, useRef, useState } from "react";
import { ChevronRight, ImagePlus } from "lucide-react";

/**
 * Rawbin — Our Story
 *
 * Landing: a full-bleed grid of dots that flee the cursor.
 * Click anywhere to enter the story, which scrolls sideways —
 * each panel has an image slot on the left and an empty text
 * slot on the right, ready for real copy and photography.
 * Page position is shown as three dots that grow on the active page.
 */

const FONT_ID = "rawbin-story-fonts";
const DOT_SPACING = 34;
const DOT_RADIUS = 2.2;
const REPEL_RADIUS = 110;
const MAX_PUSH = 26;
const EASE = 0.15;

const BG = "#b9c0b4";
const DOT_COLOR = "#0a061f";
const INK = "#150303";

const SLIDES = [
  { label: "Chapter 01" },
  { label: "Chapter 02" },
  { label: "Chapter 03" },
];

function useGoogleFonts() {
  useEffect(() => {
    if (document.getElementById(FONT_ID)) return;
    const link = document.createElement("link");
    link.id = FONT_ID;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500&family=Inter:wght@400;500&display=swap";
    document.head.appendChild(link);
  }, []);
}

function DotField({ onEnter }) {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const frameRef = useRef(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas) return;

    const ctx = canvas.getContext("2d");

    const buildGrid = () => {
      const { width, height } = wrapper.getBoundingClientRect();
      const w = Math.max(1, Math.floor(width));
      const h = Math.max(1, Math.floor(height));
      canvas.width = w;
      canvas.height = h;
      const dots = [];
      const cols = Math.ceil(w / DOT_SPACING) + 1;
      const rows = Math.ceil(h / DOT_SPACING) + 1;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const ox = i * DOT_SPACING;
          const oy = j * DOT_SPACING;
          dots.push({ ox, oy, x: ox, y: oy });
        }
      }
      dotsRef.current = dots;
    };

    buildGrid();
    const resizeObserver = new ResizeObserver(buildGrid);
    resizeObserver.observe(wrapper);

    const handleMove = (e) => {
      const rect = wrapper.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };
    const handleLeave = () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };
    wrapper.addEventListener("mousemove", handleMove);
    wrapper.addEventListener("mouseleave", handleLeave);

    const draw = () => {
      const { x: mx, y: my } = mouseRef.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = DOT_COLOR;

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const clearRx = Math.min(canvas.width * 0.36, 460);
      const clearRy = Math.min(canvas.height * 0.24, 220);

      for (const dot of dotsRef.current) {
        // Skip dots that fall inside the text clear-zone at center
        const ndx = (dot.ox - cx) / clearRx;
        const ndy = (dot.oy - cy) / clearRy;
        if (ndx * ndx + ndy * ndy < 1) continue;

        const dx = dot.ox - mx;
        const dy = dot.oy - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let targetX = dot.ox;
        let targetY = dot.oy;

        if (dist < REPEL_RADIUS) {
          const force = (REPEL_RADIUS - dist) / REPEL_RADIUS;
          const angle = Math.atan2(dy, dx);
          targetX = dot.ox + Math.cos(angle) * force * MAX_PUSH;
          targetY = dot.oy + Math.sin(angle) * force * MAX_PUSH;
        }

        dot.x += (targetX - dot.x) * EASE;
        dot.y += (targetY - dot.y) * EASE;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fill();
      }

      frameRef.current = requestAnimationFrame(draw);
    };

    frameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frameRef.current);
      resizeObserver.disconnect();
      wrapper.removeEventListener("mousemove", handleMove);
      wrapper.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="absolute inset-0 cursor-pointer select-none"
      style={{ background: BG }}
      onClick={onEnter}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onEnter()}
      aria-label="Enter our story"
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="relative h-full w-full flex flex-col items-center justify-center px-6 pointer-events-none">
        <h1
          className="text-5xl md:text-6xl text-center"
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, color: INK }}
        >
          OUR STORY
        </h1>
        <p
          className="mt-4 text-base md:text-lg text-center"
          style={{ fontFamily: "'Inter', sans-serif", color: "#4A4640" }}
        >
          the way we throw waste is broken. we’re here to fix it.
        </p>
        <p
          className="mt-10 text-xs uppercase tracking-widest"
          style={{ fontFamily: "'Inter', sans-serif", color: "#8A8378", letterSpacing: "0.25em" }}
        >
          Click to begin
        </p>
      </div>
    </div>
  );
}

function StorySlide({ label }) {
  return (
    <div
      className="min-w-full h-full flex-shrink-0 grid md:grid-cols-2"
      style={{ scrollSnapAlign: "start" }}
    >
      {/* Image slot, left */}
      <div className="flex items-center justify-center p-10 md:p-16" style={{ background: BG }}>
        <div
          className="w-full h-full rounded-2xl flex flex-col items-center justify-center gap-3"
          style={{ border: `1.5px dashed ${DOT_COLOR}55` }}
        >
          <ImagePlus size={32} color={DOT_COLOR} strokeWidth={1.5} />
          <span
            className="text-xs uppercase tracking-widest"
            style={{ fontFamily: "'Inter', sans-serif", color: "#8A8378", letterSpacing: "0.2em" }}
          >
            Import image
          </span>
        </div>
      </div>

      {/* Text slot, right */}
      <div className="flex flex-col justify-center p-10 md:p-16" style={{ background: "#FFFFFF" }}>
        <span
          className="text-xs uppercase tracking-widest mb-4"
          style={{ fontFamily: "'Inter', sans-serif", color: DOT_COLOR, letterSpacing: "0.2em" }}
        >
          {label}
        </span>
        <p
          className="text-lg md:text-xl italic"
          style={{ fontFamily: "'Fraunces', serif", color: "#B4ADA2" }}
        >
          Write your story here...
        </p>
      </div>
    </div>
  );
}

function PageDots({ count, activeIndex, onSelect }) {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
      {Array.from({ length: count }).map((_, i) => {
        const isActive = i === activeIndex;
        return (
          <button
            key={i}
            onClick={() => onSelect(i)}
            aria-label={`Go to page ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width: isActive ? 22 : 9,
              height: 9,
              background: isActive ? DOT_COLOR : `${DOT_COLOR}44`,
            }}
          />
        );
      })}
    </div>
  );
}

export default function OurStory() {
  useGoogleFonts();
  const [entered, setEntered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollerRef = useRef(null);

  const scrollToIndex = (index) => {
    const el = scrollerRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(SLIDES.length - 1, index));
    el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
    setActiveIndex(clamped);
  };

  const scrollNext = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const width = el.clientWidth;
    const atEnd = el.scrollLeft + width >= el.scrollWidth - 4;
    scrollToIndex(atEnd ? 0 : activeIndex + 1);
  };

  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    setActiveIndex(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden" style={{ background: BG }}>
      <style>{`
        .rawbin-scroller::-webkit-scrollbar { display: none; }
        .rawbin-scroller { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {!entered && <DotField onEnter={() => setEntered(true)} />}

      {entered && (
        <>
          <div
            ref={scrollerRef}
            onScroll={handleScroll}
            className="rawbin-scroller w-full h-full flex overflow-x-auto overflow-y-hidden"
            style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
          >
            {SLIDES.map((s) => (
              <StorySlide key={s.label} label={s.label} />
            ))}
          </div>

          <PageDots count={SLIDES.length} activeIndex={activeIndex} onSelect={scrollToIndex} />

          <button
            onClick={scrollNext}
            aria-label="Next"
            className="absolute bottom-10 right-8 md:right-16 flex items-center justify-center rounded-full transition-transform hover:scale-110"
            style={{
              width: 56,
              height: 56,
              background: DOT_COLOR,
              color: BG,
              boxShadow: "0 8px 20px rgba(33,22,83,0.3)",
            }}
          >
            <ChevronRight size={24} strokeWidth={2} />
          </button>
        </>
      )}
    </div>
  );
}