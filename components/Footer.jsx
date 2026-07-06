import React from "react";
import { Facebook, Linkedin, Twitter, Instagram } from "react-feather";
import Link from "next/link";

const SocialIcon = ({ Icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="flex items-center justify-center w-8 h-8 rounded-full border border-white/70 text-white/70 hover:text-white hover:border-white transition-colors duration-300"
  >
    <Icon size={14} />
  </a>
);

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-[#050505] pt-24 pb-12 text-white/80 font-source-sans border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Top section: 3 Columns */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between gap-12 md:gap-8 lg:gap-24 mb-16 text-sm">
          
          {/* Column 1 */}
          <div className="flex flex-col w-full md:w-1/3">
            <h3 className="text-white font-bold mb-6">Be social with us</h3>
            <div className="flex items-center gap-3 mb-12">
              <SocialIcon Icon={Facebook} href="https://facebook.com/newcyclofficial" label="Facebook" />
              <SocialIcon Icon={Linkedin} href="https://linkedin.com/company/newcycl" label="LinkedIn" />
              <SocialIcon Icon={Twitter} href="https://x.com/NewcyclOfficial" label="X (formerly Twitter)" />
              <SocialIcon Icon={Instagram} href="https://instagram.com/newcycl" label="Instagram" />
            </div>
            
            <button className="text-white/80 hover:text-white text-left transition-colors w-fit">
              Cookies Settings
            </button>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col w-full md:w-1/3 gap-4">
            <h3 className="text-white font-bold mb-2">Company</h3>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/careers" className="hover:text-white transition-colors">
              Join our team
            </Link>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col w-full md:w-1/3 gap-4">
            <h3 className="text-white font-bold mb-2">Important documents</h3>
            <Link href="/impact" className="hover:text-white transition-colors">
              Impact report
            </Link>
            <Link href="/faq" className="hover:text-white transition-colors">
              FAQ
            </Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Terms and privacy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
          
        </div>

        {/* Separator with NEWCYCL logo text */}
        <div className="flex items-center justify-center my-12 opacity-80">
          <div className="flex-1 border-t border-white/20"></div>
          <div className="px-6 md:px-10 font-serif text-2xl md:text-3xl text-white tracking-[0.2em] uppercase">
            NEWCYCL
          </div>
          <div className="flex-1 border-t border-white/20"></div>
        </div>

        {/* Bottom bar */}
        <div className="flex justify-center text-xs text-white/40 tracking-wider">
          © 2026 Newcycl - All Rights Reserved
        </div>

      </div>
    </footer>
  );
}