import React from "react";
import { Linkedin, Mail } from "react-feather";

const foundersList = [
  {
    name: "Anu Khandelwal",
    designation: "Co-Founder & CEO",
    email: "anu@newcycl.com",
    linkedin: "https://linkedin.com/company/newcycl",
    image: "/avatar-w-1.svg",
  },
  {
    name: "Dr. Kabir Sen",
    designation: "Co-Founder & CTO",
    email: "kabir@newcycl.com",
    linkedin: "https://linkedin.com/company/newcycl",
    image: "/avatar-m-1.svg",
  },
  {
    name: "Meera Nair",
    designation: "Head of Product Design",
    email: "meera@newcycl.com",
    linkedin: "https://linkedin.com/company/newcycl",
    image: "/avatar-w-2.svg",
  },
];

export default function Founders() {
  return (
    <section className="w-full py-20 md:py-28 bg-[#FBFBFA] border-t border-emerald-500/5 font-source-sans">
      <div className="container mx-auto max-w-5xl px-6 sm:px-8">
        
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[10px] tracking-[0.3em] uppercase text-accent-green font-bold block mb-2">
            The Team
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-ink-dark tracking-tight leading-none">
            Founders
          </h2>
          <p className="mt-4 text-sm sm:text-base text-body/70 max-w-lg mx-auto font-light leading-relaxed">
            We are engineers, scientists, and designers passionate about creating decentralized zero-waste solutions.
          </p>
        </div>

        {/* Responsive grid of founder cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {foundersList.map((founder, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center bg-white rounded-3xl p-8 border border-emerald-500/5 shadow-premium hover:shadow-premium-hover transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Image container with subtle green accent shadow */}
              <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border border-emerald-500/10 bg-backdrop p-1 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Founder details */}
              <h3 className="text-xl font-bold text-ink-dark group-hover:text-accent-green transition-colors duration-200">
                {founder.name}
              </h3>
              <p className="text-xs uppercase tracking-wider text-muted font-semibold mt-1 mb-6">
                {founder.designation}
              </p>

              {/* Divider */}
              <div className="w-12 h-[1px] bg-emerald-500/10 mb-6" />

              {/* Action buttons (Email & LinkedIn) */}
              <div className="flex items-center gap-4 mt-auto">
                <a
                  href={`mailto:${founder.email}`}
                  className="w-10 h-10 rounded-full bg-backdrop hover:bg-accent-green hover:text-white text-ink flex items-center justify-center border border-emerald-500/5 transition-all duration-200"
                  title={`Email ${founder.name}`}
                >
                  <Mail size={16} strokeWidth={2} />
                </a>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-backdrop hover:bg-accent-green hover:text-white text-ink flex items-center justify-center border border-emerald-500/5 transition-all duration-200"
                  title={`${founder.name}'s LinkedIn`}
                >
                  <Linkedin size={16} strokeWidth={2} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
