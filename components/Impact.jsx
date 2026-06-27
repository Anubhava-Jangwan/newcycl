"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const TODAY = new Date().toLocaleDateString("en-US", {
  month: "short",
  day: "2-digit",
  year: "numeric",
}).toUpperCase();

const metrics = [
  {
    value: 7,
    label: "Households empowered",
    unit: null,
    icon: "🏠",
  },
  {
    value: 1341,
    label: "Tonnes of food waste diverted from landfill",
    unit: "tonnes",
    icon: null,
  },
  {
    value: 5325,
    label: "Tonnes of compost produced",
    unit: "tonnes",
    icon: null,
  },
  {
    value: 2355,
    label: "Tonnes of CO₂eq. avoided",
    unit: "tonnes CO₂e",
    icon: null,
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
      // easeOutExpo — fast start, gentle landing
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
      className={`flex flex-col items-center justify-center text-center px-6 py-10 flex-1 min-w-0
        ${!isLast ? "border-b md:border-b-0 md:border-r border-gray-100" : ""}`}
    >
      <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-4 whitespace-nowrap">
        Data for {TODAY}
      </p>

      <p className="text-5xl xl:text-6xl font-light tracking-tight text-[#1a1f4e] leading-none">
        {count.toLocaleString()}
      </p>

      {metric.unit && (
        <p className="mt-2 text-base text-gray-400 font-light">
          {metric.unit}
        </p>
      )}

      <p className="mt-4 text-sm text-gray-500 leading-snug max-w-[150px]">
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
    // Negative margin pulls the card up to overlap the section above — adjust -mt value to taste
    <div className="relative z-10 px-4 sm:px-6 -mt-20 mb-20">
      <Link
        href="/impact"
        ref={ref}
        className="group relative mx-auto block max-w-6xl overflow-hidden rounded-[2.5rem] bg-white
          shadow-[0_8px_48px_rgba(0,0,0,0.10)] hover:shadow-[0_16px_64px_rgba(0,0,0,0.15)]
          border border-gray-100 transition-all duration-500"
      >
        {/* 4-column metric grid */}
        <div className="flex flex-col md:flex-row">
          {metrics.map((metric, i) => (
            <MetricCard
              key={metric.label}
              metric={metric}
              started={started}
              isLast={i === metrics.length - 1}
            />
          ))}
        </div>

        {/* Hover CTA — slides up from bottom */}
        <p className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-center
          text-xs font-medium text-[#1a1f4e] opacity-0 transition-all duration-500
          group-hover:bottom-3 group-hover:opacity-100 max-md:hidden">
          View Newcycl's full impact report →
        </p>

        {/* Subtle gradient footer strip */}
        <div className="h-1 w-full bg-gradient-to-r from-[#5433FF] via-[#20BDFF] to-[#A5FECB]" />
      </Link>
    </div>
  );
  
}
