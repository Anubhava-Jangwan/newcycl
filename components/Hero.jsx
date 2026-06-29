import React from "react";

const NAVBAR_HEIGHT = "116px"; // Banner (~44px) + Header (~72px)

const Hero = () => {
  return (
    <div
      className={{ transform: "scale(0.5)", transformOrigin: "top center" }}
      style={{
        marginTop: `-${NAVBAR_HEIGHT}`,
        height: `calc(400px + ${NAVBAR_HEIGHT})`,
      }}
    >
      {/* 🎬 Replace src with your actual video path */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover object-top"
        style={{ maxHeight: "600px", objectFit: "cover" }}
        src="\dist\assets\hero_page_foodcrushingvideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark at top → transparent at bottom */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Text — pushed down past the navbar with paddingTop */}
      <div
        className="relative z-10 mx-auto text-center"
        style={{ paddingTop: `calc(${NAVBAR_HEIGHT} + 5rem)` }}
      >
        <h1 className="w-full py-2 font-extrabold text-5xl lg:text-6xl tracking-tight text-center text-white">
          UNLOCKING VALUE FROM THE WORLD'S LARGEST WASTE STREAM: FOOD
        </h1>

        <div className="px-12 mt-12 mb-4 font-light text-2xl text-white/80">
          Newcycl is building breakthrough technologies that transform food waste into valuable products for households, communities, and industries.
        </div>
      </div>
    </div>
  );
};

export default Hero;