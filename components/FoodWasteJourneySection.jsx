import React, { useEffect, useRef, useState } from "react";

const STAGES = [
  { label: "Eat", color: "var(--c1)", textColor: "#B8A72A" },
  { label: "Dump", color: "var(--c2)", textColor: "var(--c2)" },
  { label: "Landfills", color: "var(--c3)", textColor: "var(--c3)" },
  { label: "Methane", color: "var(--c4)", textColor: "var(--c4)" },
];

const STEP_CONTENT = [
  {
    title: "Eat",
    text: "Food travels from farm to plate — but close to a third of everything grown never gets eaten. It's left on the plate, forgotten in the fridge, or trimmed away before it's served.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none">
        <path d="M8 18c0-6 6.5-10 14-10s14 4 14 10" stroke="#16233F" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M7 18h30" stroke="#16233F" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M8 23h28" stroke="#16233F" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M9 28c0 3 5.8 5.5 13 5.5s13-2.5 13-5.5" stroke="#16233F" strokeWidth="2.2" strokeLinecap="round" />
        <rect x="6" y="30.5" width="32" height="5.5" rx="2.75" stroke="#16233F" strokeWidth="2.2" />
      </svg>
    ),
  },
  {
    title: "Dump",
    text: "Leftovers and scraps go straight in the bin instead of the compost. Once mixed in with the rest of the trash, that food is on its way to only one place.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none">
        <path d="M9 13h26" stroke="#16233F" strokeWidth="2.2" strokeLinecap="round" />
        <path
          d="M17 13v-3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3"
          stroke="#16233F"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.5 13l1.8 21a2.5 2.5 0 0 0 2.5 2.3h12.4a2.5 2.5 0 0 0 2.5-2.3l1.8-21"
          stroke="#16233F"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M18.5 18.5v13" stroke="#16233F" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M25.5 18.5v13" stroke="#16233F" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Landfills",
    text: "Wasted food piles up in landfill, buried under layer after layer of other trash — sealed away from the oxygen and organisms that would normally help it break down cleanly.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none">
        <path
          d="M5 33c3.5-10.5 10-17 17-17s13.5 6.5 17 17"
          stroke="#16233F"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M5 33h34" stroke="#16233F" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M14 12.5v3.2M22 8.5v3.2M30 12.5v3.2" stroke="#16233F" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Methane",
    text: "Buried without air, that food rots anaerobically and releases methane — a greenhouse gas over 80x more powerful than CO2 over its first 20 years in the atmosphere.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none">
        <path d="M22 4 36.6 12.5v17L22 38 7.4 29.5v-17Z" stroke="#16233F" strokeWidth="2.2" strokeLinejoin="round" />
        <text x="22" y="24.5" textAnchor="middle" fontSize="11" fontWeight="700" fill="#16233F">
          CH<tspan fontSize="7" dy="2">4</tspan>
        </text>
      </svg>
    ),
  },
];

const CSS = `
  .fwj-root {
    --navy: #16233F;
    --slate: #5B677A;
    --accent: #4FA857;
    --c1: #E7D64A;
    --c2: #A9D257;
    --c3: #4FA857;
    --c4: #0F5C3B;
    margin: 0;
    padding: 0;
    background: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, Roboto, sans-serif;
    color: var(--navy);
  }
  .fwj-root * { box-sizing: border-box; }

  .fwj-intro {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    padding: 5rem 1.5rem 3.5rem;
  }
  .fwj-intro h1 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, Roboto, sans-serif;
    font-size: clamp(5.5rem, 5vw, 3.2rem);
    font-weight: 800;
    letter-spacing: -0.01em;
    line-height: 1.15;
    margin: 0;
    color: var(--navy);
    white-space: nowrap;
  }


  .fwj-scrolly {
    display: flex;
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .fwj-sticky-visual {
    flex: 0 0 46%;
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    padding-right: 2rem;
  }

  .fwj-wall {
    flex: 0 0 1px;
    align-self: stretch;
    background: rgba(22, 35, 63, 0.08);
  }

  .fwj-steps {
    flex: 1;
    min-width: 0;
    padding-left: 2.5rem;
  }

  .fwj-bubble-row {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .fwj-bubble {
    position: relative;
    width: min(84vw, 420px, 64vh);
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    overflow: hidden;
    background: #F1F2EA;
    box-shadow:
      0 22px 46px -18px rgba(15, 92, 59, 0.35),
      0 6px 18px rgba(22, 35, 63, 0.10);
  }
  .fwj-wave {
    position: absolute;
    left: 50%;
    width: 300%;
    aspect-ratio: 1 / 1;
    border-radius: 45%;
    background: var(--fill-color, #4FA857);
    transform: translateX(-50%);
    transition: background-color 0.7s ease;
  }
  .fwj-wave-back {
    top: 100%;
    opacity: 0.45;
    animation: fwj-spin 10s linear infinite;
  }
  .fwj-wave-front {
    top: 100%;
    opacity: 0.85;
    animation: fwj-spin 7s linear infinite reverse;
  }
  @keyframes fwj-spin {
    from { transform: translateX(-50%) rotate(0deg); }
    to   { transform: translateX(-50%) rotate(360deg); }
  }

  .fwj-scale {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 62%;
  }
  .fwj-scale-tick {
    display: flex;
    align-items: center;
    gap: 0.45rem;
  }
  .fwj-tick-line {
    width: 16px;
    height: 1.5px;
    border-radius: 1px;
    background: #E3E6DD;
    transition: background-color 0.45s ease, width 0.3s ease;
  }
  .fwj-tick-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #E3E6DD;
    transition: background-color 0.45s ease, transform 0.3s ease;
  }
  .fwj-scale-tick.fwj-current .fwj-tick-dot { transform: scale(1.7); }
  .fwj-scale-tick.fwj-current .fwj-tick-line { width: 22px; }

  .fwj-stage-caption {
    text-align: center;
  }
  .fwj-stage-count {
    display: block;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--slate);
    margin-bottom: 0.3rem;
  }
  .fwj-stage-name {
    display: block;
    font-size: 1.35rem;
    font-weight: 800;
    letter-spacing: -0.01em;
    transition: color 0.5s ease;
  }

  .fwj-step {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0.32;
    transition: opacity 0.5s ease;
  }
  .fwj-step.fwj-active { opacity: 1; }

  .fwj-step-icon {
    width: 64px;
    height: 64px;
    margin-bottom: 1.5rem;
  }
  .fwj-step-icon svg { width: 100%; height: 100%; }

  .fwj-step h3 {
    font-size: clamp(1rem, 2vw, 1.4rem);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--slate);
    margin: 0 0 0.75rem;
    transition: color 0.5s ease;
  }
  .fwj-step.fwj-active h3 {
    color: var(--accent);
  }
  .fwj-step p {
    max-width: 650px;
    font-family: var(--font-display, inherit);
    font-size: clamp(1.6rem, 3.5vw, 2.8rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.15;
    color: var(--slate);
    margin: 0;
    transition: color 0.5s ease;
  }
  .fwj-step.fwj-active p {
    color: #0d2a27;
  }

  .fwj-end-spacer { height: 20vh; }

  @media (max-width: 820px) {
    .fwj-scrolly { flex-direction: column; }
    .fwj-wall { display: none; }
    .fwj-sticky-visual {
      flex: none;
      height: 48vh;
      top: 0;
      padding-right: 0;
      padding: 1.5rem 1rem;
      border-bottom: 1px solid rgba(22, 35, 63, 0.08);
      background: #ffffff;
      z-index: 10;
    }
    .fwj-steps { padding-left: 0; padding-top: 1.5rem; }
    .fwj-step { min-height: 58vh; }
    .fwj-bubble { width: min(58vw, 260px, 34vh); }
  }

  @media (max-width: 480px) {
    .fwj-intro { padding: 3rem 1.25rem 2rem; }
    .fwj-scale { display: none; }
    .fwj-bubble-row { gap: 0; }
    .fwj-bubble { width: min(64vw, 230px, 32vh); }
    .fwj-stage-name { font-size: 1.15rem; }
  }
`;

export default function FoodWasteJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const stepRefs = useRef([]);
  const scrollyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            setActiveIndex(idx);
          }
        });
      },
      { threshold: 0, rootMargin: "-45% 0px -45% 0px" }
    );

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollyRef.current) return;
      const rect = scrollyRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable > 0) {
        let p = -rect.top / totalScrollable;
        p = Math.max(0, Math.min(1, p));
        setScrollProgress(p);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stage = STAGES[activeIndex];
  const fillPercent = Math.max(10, scrollProgress * 100);
  const level = 100 - fillPercent;
  const frontTop = `${Math.max(level - 2, -8)}%`;
  const backTop = `${level + 3}%`;

  return (
    <div className="fwj-root">
      <style>{CSS}</style>

      <div className="fwj-intro">
        <h1>From plate to planet</h1>
      </div>


      <div className="fwj-scrolly" ref={scrollyRef}>
        <div className="fwj-sticky-visual">
          <div className="fwj-bubble-row">
            <div
              className="fwj-bubble"
              style={{ "--fill-color": stage.color }}
            >
              <div
                className="fwj-wave fwj-wave-back"
                style={{ top: backTop }}
              />
              <div
                className="fwj-wave fwj-wave-front"
                style={{ top: frontTop }}
              />
            </div>
            <div className="fwj-scale">
              {[3, 2, 1, 0].map((i) => {
                const reached = i <= activeIndex;
                const color = reached ? STAGES[i].color : "#E3E6DD";
                const isCurrent = i === activeIndex;
                return (
                  <div
                    key={i}
                    className={`fwj-scale-tick${isCurrent ? " fwj-current" : ""}`}
                  >
                    <span className="fwj-tick-line" style={{ background: color }} />
                    <span className="fwj-tick-dot" style={{ background: color }} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="fwj-stage-caption">
            <span className="fwj-stage-count">0{activeIndex + 1} / 04</span>
            <span className="fwj-stage-name" style={{ color: stage.textColor }}>
              {stage.label}
            </span>
          </div>
        </div>

        <div className="fwj-wall" />

        <div className="fwj-steps">
          {STEP_CONTENT.map((step, i) => (
            <section
              key={step.title}
              className={`fwj-step${i === activeIndex ? " fwj-active" : ""}`}
              data-index={i}
              ref={(el) => (stepRefs.current[i] = el)}
            >
              <div className="fwj-step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p className="framer-text framer-styles-preset-14r17cu" data-styles-preset="ovnrA127c">{step.text}</p>
            </section>
          ))}
          <div className="fwj-end-spacer" />
        </div>
      </div>
    </div>
  );
}