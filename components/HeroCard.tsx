"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export default function HeroCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for tilt
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  // Map mouse positions to rotation degrees
  const rotateX = useTransform(springY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-15deg", "15deg"]);
  
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile to disable hover effects
    const checkMobile = () => setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to center (-0.5 to 0.5)
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    
    x.set(relX);
    y.set(relY);
  };

  const handleMouseEnter = () => {
    if (isMobile) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  // Position for holographic sheen based on mouse
  const sheenX = useTransform(springX, [-0.5, 0.5], ["100%", "0%"]);
  const sheenY = useTransform(springY, [-0.5, 0.5], ["100%", "0%"]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered && !isMobile ? rotateX : 0,
        rotateY: isHovered && !isMobile ? rotateY : 0,
        scale: isHovered && !isMobile ? 1.04 : 1,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full max-w-[280px] h-[380px] mx-auto rounded-2xl bg-[--bg-card] border border-[--purple-glow-soft] shadow-[0_0_40px_-10px_var(--purple-glow-soft)] transition-shadow duration-300 overflow-hidden flex flex-col p-5 group"
    >
      {/* Holographic Sheen Overlay */}
      <motion.div
        style={{
          backgroundPositionX: sheenX,
          backgroundPositionY: sheenY,
          opacity: isHovered && !isMobile ? 0.55 : 0,
          background: `linear-gradient(115deg, transparent 0%, #ff00c8 10%, #00ffee 25%, #7cff00 40%, #ffee00 55%, #ff00c8 70%, transparent 90%)`,
          backgroundSize: "200% 200%",
        }}
        className="absolute inset-0 pointer-events-none z-20 mix-blend-color-dodge transition-opacity duration-300"
      />

      {/* Card Content */}
      <div className="relative z-10 flex flex-col h-full" style={{ transform: "translateZ(30px)" }}>
        <h3 className="text-white font-poppins font-bold text-xl">Harshit Garg</h3>
        <p className="text-[--text-secondary] font-inter text-sm mb-4">Full-Stack Developer</p>
        
        <div className="flex-grow rounded-xl overflow-hidden relative mb-4 bg-black/40">
           {/* Placeholder for real photo. The user will place /images/hero-photo.jpg */}
           <Image 
             src="/images/hero-photo.jpg" 
             alt="Harshit Garg" 
             fill 
             priority
             className="object-cover"
             onError={(e) => {
               // Fallback if image doesn't exist yet
               e.currentTarget.style.display = 'none';
             }}
           />
           <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs text-center p-4">
             [Photo: /public/images/hero-photo.jpg]
           </div>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-white/60 text-xs font-inter mb-1 flex items-center gap-2">
              @harshitgarg10042008
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" title="Online"></span>
            </span>
          </div>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-xs font-poppins font-semibold bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 text-white py-1.5 px-3 rounded-full transition-all"
          >
            Contact Me
          </button>
        </div>
      </div>
    </motion.div>
  );
}
