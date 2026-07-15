import React, { useEffect } from "react";
import { Linkedin, Mail } from "react-feather";

const FONT_ID = "founder-chunkfive-font";

const founderData = {
  name: "Anu Khandelwal",
  designation: "Founder & CEO",
  email: "anu@newcycl.com",
  linkedin: "https://linkedin.com/company/newcycl",
  // UPDATE THIS path to match the image in your public folder (e.g., "/anu-photo.jpg")
  image: "/Anu_khandelwal.jpg",
};

export default function Founders() {
  useEffect(() => {
    if (document.getElementById(FONT_ID)) return;
    const style = document.createElement("style");
    style.id = FONT_ID;
    style.textContent = `
      @import url('https://fonts.cdnfonts.com/css/chunkfive');
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <section className="w-full py-20 md:py-28 bg-[#FBFBFA] border-t border-emerald-500/5 font-source-sans">
      <div className="container mx-auto max-w-6xl px-6 sm:px-8">
        
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-5xl font-black text-ink-dark tracking-tight leading-none" style={{ fontFamily: "'ChunkFive', serif" }}>
            Founder
          </h2>
        </div>

        {/* Two column layout: Founder Card (Left) & Insight (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Left Column: Founder Card */}
          <div className="flex justify-center md:justify-end">
            <div className="group relative flex flex-col items-center text-center bg-white rounded-[2.5rem] p-10 sm:p-12 border border-emerald-500/5 shadow-premium hover:shadow-premium-hover transition-all duration-300 hover:-translate-y-1.5 max-w-md w-full">
              {/* Image container with subtle green accent shadow */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-8 rounded-full overflow-hidden border-2 border-emerald-500/20 bg-backdrop p-1.5 transition-transform duration-500 group-hover:scale-105 shadow-sm">
                <img
                  src={founderData.image}
                  alt={founderData.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Founder details */}
              <h3 className="text-3xl sm:text-4xl font-black text-accent-green mb-1">
                {founderData.name}
              </h3>
              <p className="text-sm uppercase tracking-[0.2em] text-ink/60 font-bold mb-8">
                {founderData.designation}
              </p>

              {/* Divider */}
              <div className="w-16 h-[2px] bg-emerald-500/20 mb-8" />

              {/* Action buttons (Email & LinkedIn) */}
              <div className="flex items-center gap-4 mt-auto">
                <a
                  href={`mailto:${founderData.email}`}
                  className="w-10 h-10 rounded-full bg-backdrop hover:bg-accent-green hover:text-white text-ink flex items-center justify-center border border-emerald-500/5 transition-all duration-200"
                  title={`Email ${founderData.name}`}
                >
                  <Mail size={16} strokeWidth={2} />
                </a>
                <a
                  href={founderData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-backdrop hover:bg-accent-green hover:text-white text-ink flex items-center justify-center border border-emerald-500/5 transition-all duration-200"
                  title={`${founderData.name}'s LinkedIn`}
                >
                  <Linkedin size={16} strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Insight/Vision */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-ink-dark mb-6">
              A vision for a zero-waste future
            </h3>
            <div className="border-l-4 border-accent-green pl-6 py-2">
              <p className="text-body/90 text-lg leading-relaxed italic mb-4">
                "Insert the founder's vision or insight about the company here. This space is dedicated to sharing the story and mission behind Newcycl and why this problem matters."
              </p>
              <p className="text-body/70 text-base leading-relaxed">
                Add any additional background story or technical insight you want to share with your users. You can edit this text directly in the code.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
