"use client";

import { useState } from "react";
import { SiGithub, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Marquee from "./Marquee";

function MagneticButton({ onClick }: { onClick: () => void }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    const maxOffset = 8;
    const offsetX = Math.max(-maxOffset, Math.min(maxOffset, distanceX * 0.2));
    const offsetY = Math.max(-maxOffset, Math.min(maxOffset, distanceY * 0.2));
    
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      className="p-8 -m-8 cursor-pointer relative z-20" 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <motion.button
        style={{ x: springX, y: springY }}
        animate={{
          boxShadow: [
            "0 0 0 0px rgba(139,92,246,0.4)",
            "0 0 0 12px rgba(139,92,246,0)",
          ]
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className="w-10 h-10 rounded-full bg-bg-card-2 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
        title="Back to top"
      >
        ↑
      </motion.button>
    </div>
  );
}

export default function Footer() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer 
      className="pt-20 relative overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
    >
      {/* Spotlight glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139,92,246,0.15), transparent 70%)`,
        }}
      />

      <div className="max-w-6xl mx-auto px-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left */}
        <div className="text-white font-poppins font-bold text-xl tracking-wide">
          Portfolio
        </div>
        
        {/* Center - Socials */}
        <div className="flex items-center gap-6">
          <motion.a 
            href="https://github.com/harshitgarg10042008-oss" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors duration-300"
            whileHover={{ 
              scale: 1.15, 
              rotate: [0, -8, 8, -8, 8, 0],
              filter: "drop-shadow(0 0 12px var(--purple-glow, rgba(139,92,246,0.8)))"
            }}
            transition={{ rotate: { duration: 0.4, ease: "easeInOut" } }}
          >
            <SiGithub className="text-2xl" />
          </motion.a>
          <motion.a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors duration-300"
            whileHover={{ 
              scale: 1.15, 
              rotate: [0, -8, 8, -8, 8, 0],
              filter: "drop-shadow(0 0 12px var(--purple-glow, rgba(139,92,246,0.8)))"
            }}
            transition={{ rotate: { duration: 0.4, ease: "easeInOut" } }}
          >
            <FaLinkedin className="text-2xl" />
          </motion.a>
          <motion.a 
            href="https://instagram.com/harshit_garg77" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors duration-300"
            whileHover={{ 
              scale: 1.15, 
              rotate: [0, -8, 8, -8, 8, 0],
              filter: "drop-shadow(0 0 12px var(--purple-glow, rgba(139,92,246,0.8)))"
            }}
            transition={{ rotate: { duration: 0.4, ease: "easeInOut" } }}
          >
            <SiInstagram className="text-2xl" />
          </motion.a>
        </div>
        
        {/* Right - Back to Top */}
        <MagneticButton onClick={scrollToTop} />
      </div>

      <div className="relative z-10">
        <Marquee />
      </div>
    </footer>
  );
}
