import React, { useEffect, useRef, useState } from "react";
import { ChevronRight, ImagePlus } from "lucide-react";

/**
 * Rawbin — Our Story
 *
 * Landing: a full-bleed grid of dots that flee the cursor.
 * Click anywhere to enter the story, which scrolls sideways —
 * each panel has an image slot on the left and a text slot on
 * the right. Write your copy directly in the SLIDES array below.
 * Page position is shown as three dots that grow on the active page.
 */

const FONT_ID = "rawbin-story-fonts";
const DOT_SPACING = 34;
const DOT_RADIUS = 2.2;
const REPEL_RADIUS = 110;
const MAX_PUSH = 26;
const EASE = 0.15;

const BG = "#F4F1EA";
const DOT_COLOR = "#6B7A63";
const INK = "#1F2E1B";

// ---- Write your story here --------------------------------------------
// `label` is the small eyebrow tag, `heading` is the slide's title,
// `text` is the body copy. Leave a blank line between paragraphs in
// `text` and it'll show up as a real paragraph break.
const SLIDES = [
  {
    label: "Phase 01",
    heading: "The Uncomfortable Truth",
    text: `We thought waste was someone else's problem. Throw it away. Someone takes it away. Problem solved.

But it wasn't. It was just moved—to a landfill.

India generates 150 million tonnes of waste yearly. In Bengaluru alone, households dump 2,000 tonnes of organic waste to landfills every day. It doesn't disappear. It rots. It produces methane. It fuels climate change.

We asked ourselves the uncomfortable question: What if waste was our responsibility? What if the power to change lived in our homes, not in someone else's policy? What if the person who created the problem could solve it?

These questions haunted us. They still do.`,
  },
  {
    label: "Phase 02",
    heading: "The Garage Experiments",
    text: `We tried everything. Pit composting. Worm bins. Bokashi. We failed miserably. Apartments smelled. Worms died. Systems demanded time we didn't have.

We discovered the real problem: traditional composting doesn't fit modern life.

It demands too much—time, space, knowledge, consistency. Most people give up. So waste stays someone else's problem.

Then we asked differently: What if composting was as easy as throwing food in a bin and pressing a button? What if technology could handle the complexity while you lived your life?

That obsession changed everything.`,
  },
  {
    label: "Phase 03",
    heading: "Rawbin — The Solution",
    text: `Rawbin isn't just a composter. It's us saying: your waste is your responsibility. And we made it effortless.
Cook. Eat. Throw scraps into Rawbin. Get compost in 7 days.

When you compost with Rawbin, you remove 1,500 kg CO2e annually—more impact than solar panels. You build soil instead of feeding landfills. You teach your kids that their actions matter. You prove that one household can change the world.

Rawbin exists for everyone: the climate-anxious Gen Z. The busy millennial who cares. The parent modeling responsibility. Anyone who wants to do something—without it becoming another burden.

Rawbin works because people don't change for the planet. They change for convenience. The planet just benefits.

Rawbin is the tool. You're the revolution. We're just making it easy.

Cook. Eat. Compost.™`,
  },
];
// -------------------------------------------------------------------------



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
      <div className="relative h-full w-full flex flex-col items-center justify-center px-6 pointer-events-none ">
        <h1
          className="text-5xl md:text-6xl text-center font-medium"
          style={{ color: INK }}
        >
          OUR STORY
        </h1>
        <p
          className="mt-4 text-base md:text-lg text-center"
          style={{ color: "#4A4640" }}
        >
          the way we throw waste is broken. we’re here to fix it.
        </p>
        <p
          className="mt-10 text-xs uppercase tracking-widest"
          style={{ color: DOT_COLOR, letterSpacing: "0.25em" }}
        >
          Click to begin
        </p>
      </div>
    </div>
  );
}

function StorySlide({ label, heading, text }) {
  return (
    // w-full (not min-w-full) is the fix: with flex-shrink-0 and no width,
    // this item's size was being driven by its content's max-content width —
    // which for a long paragraph means "as one unbroken line" — so it blew
    // out to thousands of px wide instead of wrapping. w-full pins it to
    // 100% of the scroller, forcing the text to wrap inside that instead.
    <div
      className="w-full h-full flex-shrink-0 grid md:grid-cols-2"
      style={{ scrollSnapAlign: "start" }}
    >
      {/* Image slot, left */}
      <div className="min-w-0 flex items-center justify-center p-10 md:p-16" style={{ background: BG }}>
        <div
          className="w-full h-full rounded-2xl flex flex-col items-center justify-center gap-3"
          style={{ border: `1.5px dashed ${DOT_COLOR}55` }}
        >
          <ImagePlus size={32} color={DOT_COLOR} strokeWidth={1.5} />
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: "#8A8378", letterSpacing: "0.2em" }}
          >
            Import image
          </span>
        </div>
      </div>

      {/* Text slot, right — label / heading / text all come from SLIDES up top */}
      <div className="min-w-0 flex flex-col justify-center p-10 md:p-16 overflow-y-auto" style={{ background: "#FFFFFF" }}>
        <span
          className="text-xs uppercase tracking-widest mb-3"
          style={{ color: DOT_COLOR, letterSpacing: "0.2em" }}
        >
          {label}
        </span>

        {heading && (
          <h3
            className="text-2xl md:text-3xl mb-4 font-medium"
            style={{ color: INK }}
          >
            {heading}
          </h3>
        )}

        {/* whitespace-pre-line keeps the blank lines between paragraphs in
            `text` as real breaks, instead of collapsing them into one line. */}
        <p
          className="text-base md:text-lg leading-relaxed whitespace-pre-line"
          style={{ color: "#3A352F" }}
        >
          {text}
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
              <StorySlide key={s.label} label={s.label} heading={s.heading} text={s.text} />
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