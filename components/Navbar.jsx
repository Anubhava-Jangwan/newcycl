"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import Banner from "./Banner";

const leftNavigation = [
  { name: "Rawbin", href: "https://rawbin.in", featured: true },
  { name: "Impact", href: "/impact" },
];

const rightNavigation = [
  { name: "Our Story", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const mobileNavigation = [...leftNavigation, ...rightNavigation];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function isExternal(href) {
  return href.startsWith("http");
}

function BrandMark({ isScrolled }) {
  return (
    <Link
      href="/"
      aria-label="Newcycl homepage"
      className="flex items-center justify-center gap-3"
    >
      <span className="relative flex flex-shrink-0 items-center">
        <svg
          width="68"
          height="44"
          viewBox="0 0 68 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-12 sm:w-16"
        >
          <path d="M36.3402 36.0837L47.1891 25.644L51.6802 34.4835C52.857 36.7992 51.1038 39.8367 48.617 39.9581C45.0063 40.1353 40.4396 39.8287 36.2343 37.5626L35.7261 36.9637L36.3402 36.0837Z" fill="url(#paint0_linear_2_2)" />
          <path d="M31.9338 36.0837L21.085 25.644L16.5939 34.4835C15.417 36.7992 17.1702 39.8367 19.657 39.9581C23.2678 40.1353 27.8345 39.8287 32.0397 37.5626L32.548 36.9637L31.9338 36.0837Z" fill="url(#paint1_linear_2_2)" />
          <path d="M32.3429 37.6986C32.4825 37.6227 32.6026 37.5122 32.6929 37.3765C32.7831 37.2409 32.8409 37.0843 32.8612 36.9199C32.8816 36.7556 32.864 36.5885 32.8098 36.433C32.7556 36.2775 32.6665 36.1381 32.5501 36.0268L1.02007 5.65034C-1.46381 3.25749 0.982261 -1.00178 4.14191 0.213786L29.0276 8.8791C31.324 9.76286 33.5342 12.0345 33.5342 14.8644V36.5931C33.5359 36.7585 33.4756 36.9179 33.3664 37.0366C33.1351 37.2902 32.544 37.5886 32.352 37.6938L32.3429 37.6986Z" fill="url(#paint2_linear_2_2)" />
          <path d="M35.8215 37.6986C35.6819 37.6227 35.5618 37.5122 35.4716 37.3765C35.3813 37.2409 35.3235 37.0843 35.3032 36.9199C35.2828 36.7556 35.3005 36.5885 35.3547 36.433C35.4089 36.2775 35.498 36.1381 35.6144 36.0268L67.1444 5.65034C69.6282 3.25749 67.1822 -1.00178 64.0225 0.213786L39.1368 8.8791C36.8404 9.76286 34.6302 12.0345 34.6302 14.8644V36.5931C34.6285 36.7585 34.6888 36.9179 34.798 37.0366C35.0293 37.2902 35.6204 37.5886 35.8124 37.6938L35.8215 37.6986Z" fill="url(#paint3_linear_2_2)" />
          <defs>
            <linearGradient id="paint0_linear_2_2" x1="36.0517" y1="40.0002" x2="54.1719" y2="36.0653" gradientUnits="userSpaceOnUse">
              <stop offset="0.152251" stopColor="#5433FF" stopOpacity="0.81" />
              <stop offset="0.555615" stopColor="#20BDFF" />
              <stop offset="1" stopColor="#A5FECB" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="paint1_linear_2_2" x1="32.2224" y1="40.0002" x2="14.1021" y2="36.0653" gradientUnits="userSpaceOnUse">
              <stop offset="0.152251" stopColor="#5433FF" stopOpacity="0.81" />
              <stop offset="0.555615" stopColor="#20BDFF" />
              <stop offset="1" stopColor="#A5FECB" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="paint2_linear_2_2" x1="40.9863" y1="42.5753" x2="34.3213" y2="-6.83518" gradientUnits="userSpaceOnUse">
              <stop offset="0.152251" stopColor="#5433FF" stopOpacity="0.81" />
              <stop offset="0.555615" stopColor="#20BDFF" />
              <stop offset="1" stopColor="#A5FECB" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="paint3_linear_2_2" x1="27.1781" y1="42.5753" x2="33.8431" y2="-6.83518" gradientUnits="userSpaceOnUse">
              <stop offset="0.152251" stopColor="#5433FF" stopOpacity="0.81" />
              <stop offset="0.555615" stopColor="#20BDFF" />
              <stop offset="1" stopColor="#A5FECB" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={classNames(
          "text-3xl font-black tracking-normal md:text-4xl transition-colors duration-300",
          isScrolled ? "text-[#1f1f1f]" : "text-white"
        )}>
          NewCycl
        </span>
        <span className={classNames(
          "mt-0.5 text-[10px] font-bold uppercase tracking-normal md:text-xs transition-colors duration-300",
          isScrolled ? "text-[#3a3a3a]" : "text-white/60"
        )}>
          Clean Technologies
        </span>
      </span>
    </Link>
  );
}

function NavLink({ item, pathname, mobile = false, isScrolled = false }) {
  const active = pathname === item.href;
  const className = classNames(
    active
      ? isScrolled ? "text-[#111111] font-semibold" : "text-white font-semibold"
      : isScrolled ? "text-[#2f2f2f]" : "text-white/80",
    item.featured && !mobile
      ? "rawbin-nav-highlight relative isolate rounded-full px-5 py-3"
      : "",
    mobile
      ? "block rounded-xl px-4 py-3 text-lg font-semibold hover:bg-white/10"
      : "underline-animation relative whitespace-nowrap text-lg font-normal transition-colors duration-300 hover:text-opacity-100"
  );

  if (isExternal(item.href)) {
    return <a href={item.href} className={className}>{item.name}</a>;
  }

  return (
    <Link href={item.href} className={className} aria-current={active ? "page" : undefined}>
      {item.name}
    </Link>
  );
}

export default function Navbar() {
  const { pathname } = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Triggers once user scrolls past the hero video
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Banner />
      <header className="sticky top-0 z-50 px-4 py-3 font-source-sans">
        <div className={classNames(
          "mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-10 rounded-[2rem] px-6 py-2.5 shadow-2xl shadow-black/20 backdrop-blur-2xl transition-all duration-300 md:rounded-full md:px-10",
          // Dark glass over video → light glass over white content
          isScrolled ? "bg-white/80" : "bg-black/55"
        )}>
          <menu className="hidden list-none items-center gap-12 lg:flex">
            {leftNavigation.map((item) => (
              <li key={item.name}>
                <NavLink item={item} pathname={pathname} isScrolled={isScrolled} />
              </li>
            ))}
          </menu>

          <div className="col-start-2 justify-self-center">
            <BrandMark isScrolled={isScrolled} />
          </div>

          <menu className="hidden list-none items-center justify-end gap-12 lg:flex">
            {rightNavigation.map((item) => (
              <li key={item.name}>
                <NavLink item={item} pathname={pathname} isScrolled={isScrolled} />
              </li>
            ))}
          </menu>

          <div className="col-start-3 flex justify-end lg:hidden">
            <button
              type="button"
              className="group relative flex h-7 w-9 flex-col justify-between"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
            >
              <span className={classNames(
                menuOpen ? "translate-y-0.5 rotate-45" : "",
                "block h-0.5 w-full origin-top-left rounded-full transition",
                isScrolled ? "bg-black" : "bg-white"
              )} />
              <span className={classNames(
                menuOpen ? "opacity-0" : "",
                "block h-0.5 w-full rounded-full transition",
                isScrolled ? "bg-black" : "bg-white"
              )} />
              <span className={classNames(
                menuOpen ? "-translate-y-0.5 -rotate-45" : "",
                "block h-0.5 w-full origin-bottom-left rounded-full transition",
                isScrolled ? "bg-black" : "bg-white"
              )} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className={classNames(
            "mt-3 rounded-[2rem] px-4 pb-5 font-source-sans shadow-2xl shadow-black/20 backdrop-blur-2xl lg:hidden",
            isScrolled ? "bg-white/90 text-gray-900" : "bg-black/65 text-white"
          )}>
            <div className="grid gap-1 pt-3">
              {mobileNavigation.map((item) => (
                <NavLink key={item.name} item={item} pathname={pathname} mobile isScrolled={isScrolled} />
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}