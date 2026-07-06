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
      className={`flex flex-col items-center justify-center text-center px-6 py-10 flex-1 
        ${!isLast ? "border-b md:border-b-0 md:border-r border-gray-100" : ""}`}
    >
      {/* Number with monospace font for consistent width */}
      <p className="font-mono text-5xl lg:text-6xl font-light tracking-tight text-ink leading-none tabular-nums">
        {count.toLocaleString()}
      </p>

      {/* Unit label */}
      {metric.unit && (
        <p className="mt-2.5 text-xs font-light text-gray-400 uppercase letter-spacing">
          {metric.unit}
        </p>
      )}

      {/* Description */}
      <p className="mt-5 text-sm text-gray-600 leading-relaxed max-w-xs font-light">
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
    <div className="relative z-10 px-0 sm:px-2 -mt-16 sm:-mt-24 md:-mt-28 mb-20">
      <Link
        href="/impact"
        ref={ref}
        className="group relative mx-auto block max-w-6xl overflow-hidden rounded-3xl bg-white
          shadow-lg hover:shadow-2xl
          border border-gray-100 transition-shadow duration-500"
      >
        {/* 4-column metric grid */}
        <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-100">
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
        <p className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-center
          text-xs font-medium text-ink opacity-0 transition-all duration-500
          group-hover:bottom-3 group-hover:opacity-100 max-md:hidden">
          View full impact report →
        </p>
      </Link>
    </div>
  );
}