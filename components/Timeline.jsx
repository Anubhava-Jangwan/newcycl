import React, { useRef, useState, useEffect, createRef } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const TIMELINE_EVENTS = [
  {
    year: "2021",
    title: "The Vision is Born",
    text: "Witnessing the devastating impact of organic waste in urban landfills, our founders decided to act. The idea for Newcycl—a completely decentralized food waste management system—was sketched on a napkin.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=60"
  },
  {
    year: "2022",
    title: "The First Prototype",
    text: "After hundreds of failed experiments in the garage, we finally built the first working prototype of Rawbin. It wasn't pretty, but it successfully composted food waste in record time.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60"
  },
  {
    year: "2023",
    title: "Securing the Patent",
    text: "Newcycl officially filed its first patent for our proprietary rapid-composting technology, ensuring that our innovative process could scale globally.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60"
  },
  {
    year: "2024",
    title: "Beta Testing in 100 Homes",
    text: "We deployed our first 100 Rawbin units to early adopters across the city. The results were astounding: zero odor, zero hassle, and tons of organic waste saved from landfills.",
    image: "/newcycl-map.png"
  },
  {
    year: "2025",
    title: "Award-Winning Design",
    text: "Newcycl was recognized globally, winning the 'Best Climate-Tech Innovation' award for our seamless integration of technology and sustainability.",
    image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=800&auto=format&fit=crop&q=60"
  },
  {
    year: "2026",
    title: "The Rawbin Launch",
    text: "Rawbin officially enters the consumer market. Thousands of households join the revolution, decentralising domestic food waste management one kitchen at a time.",
    image: "/rawbin/rawbin-main-white-bg.jpeg"
  }
];

export default function Timeline() {
  const scrollRef = useRef(null);
  const itemRefs = useRef(TIMELINE_EVENTS.map(() => createRef()));
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    
    // Find the item that is closest to the center
    let closestIndex = 0;
    let minDistance = Infinity;
    
    itemRefs.current.forEach((ref, index) => {
      if (ref.current) {
        const itemLeft = ref.current.offsetLeft;
        const itemCenter = itemLeft + ref.current.clientWidth / 2;
        const scrollCenter = scrollLeft + clientWidth / 2;
        const distance = Math.abs(itemCenter - scrollCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      }
    });
    
    setActiveIndex(closestIndex);
  };

  const scrollTo = (index) => {
    const clampedIndex = Math.min(Math.max(index, 0), TIMELINE_EVENTS.length - 1);
    const targetRef = itemRefs.current[clampedIndex].current;
    if (targetRef && scrollRef.current) {
      // Calculate position to center the item
      const scrollPos = targetRef.offsetLeft - (scrollRef.current.clientWidth / 2) + (targetRef.clientWidth / 2);
      scrollRef.current.scrollTo({
        left: scrollPos,
        behavior: "smooth"
      });
      setActiveIndex(clampedIndex);
    }
  };

  const next = () => scrollTo(activeIndex + 1);
  const prev = () => scrollTo(activeIndex - 1);

  return (
    <section className="w-full py-24 bg-[#ffffff] font-source-sans overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 max-w-4xl text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-ink-dark tracking-tight mb-6" style={{ fontFamily: "'Fraunces', serif" }}>
          Newcycl on a timeline
        </h2>
        <p className="text-lg md:text-xl text-ink/70 leading-relaxed max-w-3xl mx-auto">
          Newcycl was founded to save the world from organic waste. Our innovation first made waves in the climate-tech industry, but its impact goes far beyond: Today, households replace conventional dumping with sustainable, beautiful, and functional Newcycl® solutions. Click through our journey below.
        </p>
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto">
        <style>{`
          .timeline-scroller::-webkit-scrollbar { display: none; }
          .timeline-scroller { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
        
        {/* Horizontal Scroller */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="timeline-scroller w-full flex overflow-x-auto snap-x snap-mandatory px-4 md:px-[12.5%] pb-12 pt-8 scroll-smooth"
        >
          {TIMELINE_EVENTS.map((event, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div 
                key={idx}
                ref={itemRefs.current[idx]}
                className="snap-center shrink-0 w-[85vw] md:w-[75%] px-2 md:px-4 transition-all duration-500 ease-out"
                style={{
                  opacity: isActive ? 1 : 0.4,
                  transform: isActive ? 'scale(1)' : 'scale(0.95)'
                }}
              >
                <div className="bg-white flex flex-col md:flex-row h-full min-h-[400px] rounded-sm shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] border border-black/5 overflow-hidden">
                  {/* Image side */}
                  <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-100 relative shrink-0">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover absolute inset-0"
                    />
                  </div>
                  {/* Content side */}
                  <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-left">
                    <h4 className="text-2xl md:text-3xl font-bold text-ink-dark mb-4 leading-tight">
                      {event.title}
                    </h4>
                    <p className="text-base md:text-lg text-ink/80 leading-relaxed font-normal">
                      {event.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Dots, Line & Arrows */}
        <div className="relative w-full max-w-4xl mx-auto px-8 mt-4 flex items-center justify-between gap-6">
          
          <button 
            onClick={prev} 
            disabled={activeIndex === 0}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-ink hover:bg-gray-200 transition-colors disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="relative w-full flex-grow">
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-black/10 -translate-y-1/2 z-0" />
            
            <div className="relative z-10 flex justify-between items-center w-full">
              {TIMELINE_EVENTS.map((event, idx) => {
                const isActive = idx === activeIndex;
                const isPast = idx <= activeIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => scrollTo(idx)}
                    className="group relative flex flex-col items-center justify-center outline-none"
                  >
                    {/* Year Label */}
                    <span 
                      className={`absolute -top-10 text-sm font-bold transition-all duration-300 ${isActive ? 'text-[#C99859] opacity-100 translate-y-0' : 'text-ink/40 opacity-0 translate-y-2 group-hover:opacity-100'}`}
                    >
                      {event.year}
                    </span>
                    
                    {/* Dot */}
                    <div 
                      className={`w-4 h-4 rounded-full transition-all duration-300 z-10 relative ${isActive ? 'bg-[#C99859] scale-125' : isPast ? 'bg-[#C99859]/50' : 'bg-gray-300 hover:bg-gray-400'}`}
                    />
                  </button>
                );
              })}
            </div>
            
            {/* Active Line Fill overlay */}
            <div 
              className="absolute top-1/2 left-0 h-[2px] bg-[#C99859] -translate-y-1/2 z-0 transition-all duration-500 ease-out" 
              style={{ width: `${(activeIndex / (TIMELINE_EVENTS.length - 1)) * 100}%` }}
            />
          </div>

          <button 
            onClick={next} 
            disabled={activeIndex === TIMELINE_EVENTS.length - 1}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-ink hover:bg-gray-200 transition-colors disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
          >
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}
