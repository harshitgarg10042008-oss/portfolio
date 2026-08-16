"use client";

import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import Marquee from "./Marquee";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-20 bg-bg-base">
      <div className="max-w-6xl mx-auto px-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <div className="text-white font-poppins font-bold text-xl tracking-wide">
          Portfolio
        </div>
        
        {/* Center - Socials */}
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/harshitgarg10042008-oss" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300"
          >
            <SiGithub className="text-2xl" />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
        
        {/* Right - Back to Top */}
        <button 
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-bg-card-2 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          title="Back to top"
        >
          ↑
        </button>
      </div>

      <Marquee />
    </footer>
  );
}
