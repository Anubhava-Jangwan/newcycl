import React, { useEffect, useRef } from "react";

const NAVBAR_HEIGHT = "116px";
const DOT_SPACING = 34;
const DOT_RADIUS = 2.2;
const REPEL_RADIUS = 110;
const MAX_PUSH = 26;
const EASE = 0.15;

const Hero = () => {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const textContainerRef = useRef(null);
  const dotsRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const wrapper = heroRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas) return;

    let clearOval = null;

    const ctx = canvas.getContext("2d");

    const buildGrid = () => {
      const { width, height, left: wrapLeft, top: wrapTop } = wrapper.getBoundingClientRect();
      const w = Math.max(1, Math.floor(width));
      const h = Math.max(1, Math.floor(height));
      canvas.width = w;
      canvas.height = h;

      clearOval = null;
      if (textContainerRef.current) {
        const r = textContainerRef.current.getBoundingClientRect();
        clearOval = {
          cx: r.left - wrapLeft + r.width / 2,
          cy: r.top - wrapTop + r.height / 2,
          rx: r.width / 1.8,
          ry: r.height / 1.2
        };
      }

      const dots = [];
      const cols = Math.ceil(w / DOT_SPACING) + 1;
      const rows = Math.ceil(h / DOT_SPACING) + 1;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const ox = i * DOT_SPACING + DOT_SPACING / 2;
          const oy = j * DOT_SPACING + DOT_SPACING / 2;
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
      ctx.fillStyle = "#000000";

      for (const dot of dotsRef.current) {
        const dx = dot.ox - mx;
        const dy = dot.oy - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let targetX = dot.ox;
        let targetY = dot.oy;

        if (dist < REPEL_RADIUS) {
          const force = (REPEL_RADIUS - dist) / REPEL_RADIUS;
          targetX = dot.ox + (dx / dist) * force * MAX_PUSH;
          targetY = dot.oy + (dy / dist) * force * MAX_PUSH;
        }

        dot.x += (targetX - dot.x) * EASE;
        dot.y += (targetY - dot.y) * EASE;

        let opacity = 1;
        if (clearOval) {
          const ndx = (dot.x - clearOval.cx) / clearOval.rx;
          const ndy = (dot.y - clearOval.cy) / clearOval.ry;
          const dist = Math.sqrt(ndx * ndx + ndy * ndy);

          if (dist < 0.6) {
            opacity = 0;
          } else if (dist < 1.2) {
            opacity = (dist - 0.6) / 0.6;
          }
        }

        if (opacity > 0) {
          ctx.globalAlpha = opacity;
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, DOT_RADIUS, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1; // reset
      requestAnimationFrame(draw);
    };

    const animId = requestAnimationFrame(draw);

    return () => {
      resizeObserver.disconnect();
      wrapper.removeEventListener("mousemove", handleMove);
      wrapper.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative overflow-hidden bg-white"
      style={{
        marginTop: `-${NAVBAR_HEIGHT}`,
        height: `calc(600px + ${NAVBAR_HEIGHT})`,
      }}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Content */}
      <div
        className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 h-full flex flex-col justify-center items-center pb-28 md:pb-40 pointer-events-none text-center"
        style={{
          paddingTop: NAVBAR_HEIGHT,
        }}
      >
        <div
          className="max-w-4xl flex flex-col items-center"
          ref={textContainerRef}
          style={{ marginTop: "40px" }}
        >
          <h1
            className="fade-up delay-1"
            style={{
              fontFamily: 'var(--font-display, "Fraunces", serif)',
              fontWeight: 900,
              fontSize: 'clamp(2rem, 5vw, 3.8rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.04em',
              color: '#000000',
              margin: '0px',
              maxWidth: '960px',
              textAlign: 'center'
            }}
          >
            UNLOCKING VALUE FROM THE WORLD'S
            <br />
            <span style={{
              background: "linear-gradient(to right, #9dfccf, #28b8fb, #4b34f2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              LARGEST WASTE STREAM: FOOD
            </span>
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
            Newcycl is building breakthrough technologies that transform food
            waste into valuable products for households, communities, and industries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;