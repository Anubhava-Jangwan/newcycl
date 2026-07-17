import React, { useEffect, useRef, useState } from "react";
import { Linkedin, Mail } from "react-feather";

const founderData = {
  name: "Anu Khandelwal",
  designation: "Decentralising domestic food waste management",
  email: "anu@newcycl.com",
  linkedin: "https://linkedin.com/company/newcycl",
  image: "/Anu_khandelwal.jpg",
};



function FadeIn({ children, delay = 0 }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(domRef.current);
        }
      });
    }, { threshold: 0.1 });
    
    if (domRef.current) observer.observe(domRef.current);
    
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-[1200ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Founders() {
  return (
    <section className="w-full bg-[#EBE9DF] font-source-sans relative overflow-hidden">
      
      {/* Editorial Hero Section */}
      <div className="w-full min-h-[90vh] flex flex-col md:flex-row relative">
        
        {/* Background shape mimicking the reference image */}
        <div className="absolute bottom-0 right-0 w-[120%] md:w-[60%] h-[70%] md:h-full bg-white/40 rounded-tl-[100%] md:rounded-tl-[80%] pointer-events-none" />

        {/* Text Content (Left) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-24 md:pt-0 z-10 relative">
          <FadeIn>
            <span className="text-xl md:text-2xl font-bold text-[#14432C] mb-4 block">
              Meet our leader
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black text-[#14432C] leading-[0.9] tracking-tight mb-8">
              {founderData.name.split(' ').map((n, i) => (
                <React.Fragment key={i}>
                  {n}<br />
                </React.Fragment>
              ))}
            </h1>
            <p className="text-xl md:text-2xl text-ink/80 font-medium max-w-sm leading-snug">
              {founderData.designation}
            </p>
            
            <div className="flex items-center gap-4 mt-12">
              <a
                href={`mailto:${founderData.email}`}
                className="w-12 h-12 rounded-full bg-[#14432C] hover:bg-emerald-600 text-white flex items-center justify-center transition-colors duration-300 shadow-lg"
                title={`Email ${founderData.name}`}
              >
                <Mail size={20} strokeWidth={2} />
              </a>
              <a
                href={founderData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#14432C] hover:bg-emerald-600 text-white flex items-center justify-center transition-colors duration-300 shadow-lg"
                title={`${founderData.name}'s LinkedIn`}
              >
                <Linkedin size={20} strokeWidth={2} />
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Portrait Image (Right) */}
        <div className="w-full md:w-1/2 flex items-end justify-center md:justify-end px-8 pt-12 md:pt-32 relative z-10">
          <FadeIn delay={200}>
            <div className="relative w-full max-w-[500px] aspect-[3/4] overflow-hidden rounded-t-[200px] shadow-2xl border-4 border-white/50">
              <img
                src={founderData.image}
                alt={founderData.name}
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>


    </section>
  );
}
