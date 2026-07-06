"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const metrics = [
  {
    value: 7,
    label: "Households empowered",
    unit: "HOUSES",
  },
  {
    value: 1341,
    label: "waste diverted",
    unit: "tonnes",
  },
  {
    value: 5325,
    label: "Compost produced",
    unit: "tonnes",
  },
  {
    value: 2355,
    label: "CO₂eq. avoided",
    unit: "tonnes CO₂e",
  },
];

function useCountUp(target, duration = 2200, started = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    };
    requestAnimationFrame(animate);
  }, [target, duration, started]);

  return count;
}

function MetricCard({ metric, started, isLast }) {
  const count = useCountUp(metric.value, 2200, started);

  return (
    <div
      className={`flex flex-col items-center justify-center text-center px-6 py-10 flex-1 transition-all duration-300 hover:bg-emerald-50/30 group/card
        ${!isLast ? "border-b md:border-b-0 md:border-r border-emerald-500/5" : ""}`}
    >
      {/* Number with monospace font for consistent width */}
      <p className="font-mono text-5xl lg:text-6xl font-light tracking-tight text-ink-dark leading-none tabular-nums transition-transform duration-300 group-hover/card:scale-105">
        {count.toLocaleString()}
      </p>

      {/* Unit label */}
      {metric.unit && (
        <p className="mt-3 text-[10px] font-bold text-accent-green uppercase tracking-widest">
          {metric.unit}
        </p>
      )}

      {/* Description */}
      <p className="mt-4 text-sm text-body/90 leading-relaxed max-w-xs font-normal">
        {metric.label}
      </p>
    </div>
  );
}

export default function ImpactMetrics() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative z-10 px-4 sm:px-8 -mt-16 sm:-mt-24 md:-mt-28 mb-24">
      <Link
        href="/impact"
        ref={ref}
        className="group relative mx-auto block max-w-5xl overflow-hidden rounded-[2rem] bg-white
          shadow-premium hover:shadow-premium-hover border border-emerald-500/10 transition-all duration-500"
      >
        {/* 4-column metric grid */}
        <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-emerald-500/10">
          {metrics.map((metric, i) => (
            <MetricCard
              key={metric.label}
              metric={metric}
              started={started}
              isLast={i === metrics.length - 1}
            />
          ))}
        </div>

        {/* Hover CTA */}
        <p className="absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-center
          text-xs font-semibold tracking-wider uppercase text-accent-green opacity-0 transition-all duration-300
          group-hover:bottom-3 group-hover:opacity-100 max-md:hidden">
          View full impact report →
        </p>
      </Link>
    </div>
  );
}