"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

interface TimerDiv extends HTMLDivElement { timeout?: ReturnType<typeof setTimeout>; }

export default function LanyardCard() {
  const containerRef = useRef<TimerDiv>(null);
  
  // Base swing animation (idle state)
  const baseRotation = useMotionValue(0);
  
  // Interactive impulse rotation
  const impulseRotation = useMotionValue(0);
  const springImpulse = useSpring(impulseRotation, { stiffness: 60, damping: 8, mass: 1.5 });

  // Combined rotation
  const combinedRotation = useTransform(() => baseRotation.get() + springImpulse.get());

  useEffect(() => {
    // Idle pendulum swing
    const start = performance.now();
    let animationFrame: number;
    
    const animate = (time: number) => {
      const elapsed = time - start;
      const angle = Math.sin(elapsed / 800) * 4; // +/- 4 degrees, roughly 5s loop
      baseRotation.set(angle);
      animationFrame = requestAnimationFrame(animate);
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [baseRotation]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Calculate cursor horizontal position relative to center of the card
    const centerX = rect.left + rect.width / 2;
    const distanceX = e.clientX - centerX;
    
    // Apply impulse based on distance (simplified physics)
    // Map -100px..100px to -15deg..15deg impulse
    const maxImpulse = 15;
    const normalizedDist = Math.max(-1, Math.min(1, distanceX / 100));
    
    impulseRotation.set(normalizedDist * maxImpulse);
    
    // Auto reset impulse to 0 so spring settles back
    if (containerRef.current) {
      clearTimeout(containerRef.current.timeout);
      containerRef.current.timeout = setTimeout(() => {
        impulseRotation.set(0);
      }, 100);
    }
  };

  const handleMouseLeave = () => {
    impulseRotation.set(0);
  };

  return (
    <div 
      className="relative w-full h-[300px] flex justify-center perspective-[1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      {/* Anchor Point (Top) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/20 z-10 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
      
      {/* Card and String */}
      <motion.div
        style={{
          rotate: combinedRotation,
          transformOrigin: "top center",
        }}
        className="absolute top-0 flex flex-col items-center"
      >
        {/* String/Lanyard */}
        <div className="w-[2px] h-[60px] bg-gradient-to-b from-white/30 to-white/10" />
        
        {/* Card */}
        <div className="w-[140px] rounded-xl bg-[#1a1a1f] border border-white/10 shadow-lg p-2 flex flex-col items-center gap-2 pb-4">
          <div className="w-6 h-2 bg-black/50 rounded-full mb-1" /> {/* Lanyard hole */}
          
          <div className="w-full aspect-[3/4] relative rounded-lg overflow-hidden bg-black/40 border border-white/5">
            <Image 
              src="/images/lanyard-photo.jpg" 
              alt="Harshit Garg ID" 
              fill 
              className="object-cover"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
          
          <div className="text-center w-full mt-1">
            <h4 className="text-white font-poppins font-bold text-xs">Harshit Garg</h4>
            <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-purple-glow/20 text-white text-[0.55rem] font-semibold whitespace-nowrap">
              Full-Stack & AI
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
