
const NAVBAR_HEIGHT = "116px";

const HERO_ICONS = [
  // Row 1 (top y: 2%-12%)
  { src: "/background/svgs/11.png", top: "5%", left: "2%", className: "-rotate-12 scale-95" },
  { src: "/background/svgs/14.png", top: "8%", left: "10%", className: "rotate-6" },
  { src: "/background/svgs/3.png", top: "3%", left: "18%", className: "-rotate-6 scale-90" },
  { src: "/background/svgs/5.PNG", top: "10%", left: "26%", className: "rotate-12" },
  { src: "/background/svgs/6.PNG", top: "4%", left: "34%", className: "-rotate-3 scale-95" },
  { src: "/background/svgs/7.png", top: "11%", left: "42%", className: "rotate-6" },
  { src: "/background/svgs/IMG_3817.PNG", top: "5%", left: "50%", className: "-rotate-12 scale-90" },
  { src: "/background/svgs/IMG_3818.PNG", top: "9%", left: "58%", className: "rotate-6" },
  { src: "/background/svgs/IMG_3819.PNG", top: "3%", left: "66%", className: "-rotate-6 scale-95" },
  { src: "/background/svgs/IMG_3821.PNG", top: "12%", left: "74%", className: "rotate-12" },
  { src: "/background/svgs/IMG_3822.PNG", top: "4%", left: "82%", className: "-rotate-6" },
  { src: "/background/svgs/IMG_3823.PNG", top: "10%", left: "90%", className: "rotate-6 scale-105" },

  // Row 2 (y: 18%-28%)
  { src: "/background/svgs/IMG_3824.PNG", top: "20%", left: "4%", className: "rotate-12 scale-105" },
  { src: "/background/svgs/IMG_3825.PNG", top: "26%", left: "12%", className: "-rotate-6 scale-95" },
  { src: "/background/svgs/IMG_3826.PNG", top: "19%", left: "20%", className: "rotate-3" },
  { src: "/background/svgs/IMG_3827.PNG", top: "25%", left: "28%", className: "-rotate-12 scale-90" },
  { src: "/background/svgs/IMG_3828.PNG", top: "18%", left: "36%", className: "rotate-6" },
  { src: "/background/svgs/IMG_3829.PNG", top: "27%", left: "44%", className: "-rotate-12 scale-110" },
  { src: "/background/svgs/Rawbin Line Drawing-02.png", top: "22%", left: "52%", className: "rotate-6 scale-90" },
  { src: "/background/svgs/11.png", top: "28%", left: "60%", className: "-rotate-6" },
  { src: "/background/svgs/14.png", top: "20%", left: "68%", className: "rotate-12 scale-105" },
  { src: "/background/svgs/3.png", top: "26%", left: "76%", className: "-rotate-3 scale-95" },
  { src: "/background/svgs/5.PNG", top: "18%", left: "84%", className: "rotate-6" },
  { src: "/background/svgs/6.PNG", top: "24%", left: "92%", className: "-rotate-12 scale-90" },

  // Row 3 (y: 34%-44%)
  { src: "/background/svgs/7.png", top: "35%", left: "2%", className: "-rotate-6 scale-90" },
  { src: "/background/svgs/IMG_3817.PNG", top: "42%", left: "10%", className: "rotate-12" },
  { src: "/background/svgs/IMG_3818.PNG", top: "36%", left: "18%", className: "-rotate-12 scale-105" },
  { src: "/background/svgs/IMG_3819.PNG", top: "43%", left: "26%", className: "rotate-6 scale-95" },
  { src: "/background/svgs/IMG_3821.PNG", top: "34%", left: "34%", className: "-rotate-6" },
  { src: "/background/svgs/IMG_3822.PNG", top: "40%", left: "42%", className: "rotate-3 scale-95" },
  { src: "/background/svgs/IMG_3823.PNG", top: "37%", left: "50%", className: "-rotate-12" },
  { src: "/background/svgs/IMG_3824.PNG", top: "44%", left: "58%", className: "rotate-12 scale-110" },
  { src: "/background/svgs/IMG_3825.PNG", top: "35%", left: "66%", className: "-rotate-3 scale-90" },
  { src: "/background/svgs/IMG_3826.PNG", top: "41%", left: "74%", className: "rotate-6" },
  { src: "/background/svgs/IMG_3827.PNG", top: "38%", left: "82%", className: "-rotate-6 scale-105" },
  { src: "/background/svgs/IMG_3828.PNG", top: "42%", left: "90%", className: "rotate-12 scale-95" },

  // Row 4 (y: 50%-60%)
  { src: "/background/svgs/IMG_3829.PNG", top: "52%", left: "4%", className: "rotate-6 scale-105" },
  { src: "/background/svgs/Rawbin Line Drawing-02.png", top: "58%", left: "12%", className: "-rotate-12 scale-95" },
  { src: "/background/svgs/11.png", top: "50%", left: "20%", className: "rotate-12" },
  { src: "/background/svgs/14.png", top: "59%", left: "28%", className: "-rotate-6 scale-90" },
  { src: "/background/svgs/3.png", top: "54%", left: "36%", className: "rotate-12 scale-110" },
  { src: "/background/svgs/5.PNG", top: "51%", left: "44%", className: "-rotate-6 scale-95" },
  { src: "/background/svgs/6.PNG", top: "57%", left: "52%", className: "rotate-6" },
  { src: "/background/svgs/7.png", top: "53%", left: "60%", className: "-rotate-12 scale-105" },
  { src: "/background/svgs/IMG_3817.PNG", top: "58%", left: "68%", className: "rotate-3 scale-90" },
  { src: "/background/svgs/IMG_3818.PNG", top: "51%", left: "76%", className: "-rotate-6" },
  { src: "/background/svgs/IMG_3819.PNG", top: "59%", left: "84%", className: "rotate-12 scale-95" },
  { src: "/background/svgs/IMG_3821.PNG", top: "54%", left: "92%", className: "-rotate-12 scale-105" },

  // Row 5 (y: 66%-76%)
  { src: "/background/svgs/IMG_3822.PNG", top: "68%", left: "2%", className: "rotate-12 scale-95" },
  { src: "/background/svgs/IMG_3823.PNG", top: "74%", left: "10%", className: "-rotate-12 scale-105" },
  { src: "/background/svgs/IMG_3824.PNG", top: "66%", left: "18%", className: "rotate-6 scale-90" },
  { src: "/background/svgs/IMG_3825.PNG", top: "72%", left: "26%", className: "-rotate-6" },
  { src: "/background/svgs/IMG_3826.PNG", top: "69%", left: "34%", className: "rotate-12 scale-110" },
  { src: "/background/svgs/IMG_3827.PNG", top: "75%", left: "42%", className: "-rotate-12 scale-95" },
  { src: "/background/svgs/IMG_3828.PNG", top: "67%", left: "50%", className: "rotate-6" },
  { src: "/background/svgs/IMG_3829.PNG", top: "73%", left: "58%", className: "-rotate-6 scale-95" },
  { src: "/background/svgs/Rawbin Line Drawing-02.png", top: "68%", left: "66%", className: "rotate-12 scale-105" },
  { src: "/background/svgs/11.png", top: "75%", left: "74%", className: "-rotate-12 scale-90" },
  { src: "/background/svgs/14.png", top: "67%", left: "82%", className: "rotate-3 scale-95" },
  { src: "/background/svgs/3.png", top: "72%", left: "90%", className: "-rotate-6" },

  // Row 6 (y: 82%-92%)
  { src: "/background/svgs/5.PNG", top: "85%", left: "4%", className: "-rotate-12 scale-95" },
  { src: "/background/svgs/6.PNG", top: "90%", left: "12%", className: "rotate-6" },
  { src: "/background/svgs/7.png", top: "82%", left: "20%", className: "-rotate-6 scale-90" },
  { src: "/background/svgs/IMG_3817.PNG", top: "89%", left: "28%", className: "rotate-12" },
  { src: "/background/svgs/IMG_3818.PNG", top: "83%", left: "36%", className: "-rotate-3 scale-95" },
  { src: "/background/svgs/IMG_3819.PNG", top: "91%", left: "44%", className: "rotate-6" },
  { src: "/background/svgs/IMG_3821.PNG", top: "84%", left: "52%", className: "-rotate-12 scale-90" },
  { src: "/background/svgs/IMG_3822.PNG", top: "88%", left: "60%", className: "rotate-6" },
  { src: "/background/svgs/IMG_3823.PNG", top: "82%", left: "68%", className: "-rotate-6 scale-95" },
  { src: "/background/svgs/IMG_3824.PNG", top: "90%", left: "76%", className: "rotate-12" },
  { src: "/background/svgs/IMG_3825.PNG", top: "85%", left: "84%", className: "-rotate-6" },
  { src: "/background/svgs/IMG_3826.PNG", top: "92%", left: "92%", className: "rotate-6 scale-105" }
];

import React, { useEffect, useRef, useState } from "react";

const Hero = () => {
  const heroRef = useRef(null);
  const animationRef = useRef();

  const mouse = useRef({
    x: -1000,
    y: -1000,
  });

  const [positions, setPositions] = useState(
    HERO_ICONS.map(() => ({
      x: 0,
      y: 0,
    }))
  );

  useEffect(() => {
    const animate = () => {
      if (!heroRef.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const width = heroRef.current.offsetWidth;
      const height = heroRef.current.offsetHeight;

      setPositions((previous) =>
        previous.map((pos, index) => {
          const icon = HERO_ICONS[index];

          const baseX = (parseFloat(icon.left) / 100) * width;
          const baseY = (parseFloat(icon.top) / 100) * height;

          const dx = baseX - mouse.current.x;
          const dy = baseY - mouse.current.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          const radius = 170;
          const maxPush = 55;

          let targetX = 0;
          let targetY = 0;

          if (distance < radius && distance > 0) {
            const strength = (radius - distance) / radius;

            targetX = (dx / distance) * strength * maxPush;
            targetY = (dy / distance) * strength * maxPush;
          }

          return {
            x: pos.x + (targetX - pos.x) * 0.12,
            y: pos.y + (targetY - pos.y) * 0.12,
          };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative overflow-hidden bg-black"
      style={{
        marginTop: `-${NAVBAR_HEIGHT}`,
        height: `calc(600px + ${NAVBAR_HEIGHT})`,
      }}
      onMouseMove={(e) => {
        const rect = heroRef.current.getBoundingClientRect();

        mouse.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
      }}
      onMouseLeave={() => {
        mouse.current = {
          x: -1000,
          y: -1000,
        };
      }}
    >
      {/* Background Icons */}

      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          maskImage: 'radial-gradient(circle at 30% 50%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,1) 60%)',
          WebkitMaskImage: 'radial-gradient(circle at 30% 50%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,1) 60%)'
        }}
      >

        {HERO_ICONS.map((icon, index) => (
          <img
            key={index}
            src={icon.src}
            alt=""
            draggable={false}
            className={`
              absolute
              w-[80px]
              h-[80px]
              object-contain
              opacity-40
              hover:opacity-100
              hover:scale-110
              pointer-events-none
              select-none
              ${icon.className}
            `}
            style={{
              top: icon.top,
              left: icon.left,
              transform: `translate(${positions[index].x}px, ${positions[index].y}px)`,
              willChange: "transform",
            }}
          />
        ))}
      </div>

      {/* Content */}

      <div
        className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 h-full flex flex-col justify-center items-start pb-28 md:pb-40"
        style={{
          paddingTop: NAVBAR_HEIGHT,
        }}
      >
        <div className="max-w-4xl">

          <h1
            className="fade-up delay-1"
            style={{
              fontFamily: 'var(--font-display, "Fraunces", serif)',
              fontWeight: 800,
              fontSize: 'clamp(3rem, 7.5vw, 5.75rem)',
              lineHeight: 1.03,
              letterSpacing: '-0.04em',
              color: 'rgb(255, 255, 255)',
              margin: '0px',
              maxWidth: '760px'
            }}
          >
            Convert waste to
            <br />
            <span className="shimmer-text">
              something beautiful.
            </span>
          </h1>

          <p className="mt-8 text-xl text-gray-400 max-w-2xl">
            Newcycl is building breakthrough technologies that transform food
            waste into valuable products.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Hero;