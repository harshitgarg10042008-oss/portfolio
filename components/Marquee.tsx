"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  const text = "Maybe we won't see each other again. Subscribe so you don't lose me ";
  
  return (
    <div className="w-full overflow-hidden bg-bg-card-2 py-4 border-t border-white/5 flex items-center relative group">
      <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_20px_0_40px_#0a0a0c,inset_-20px_0_40px_#0a0a0c]" />
      
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"]
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20
        }}
        style={{
          // Pause on hover
          animationPlayState: "inherit"
        }}
      >
        <div className="group-hover:[animation-play-state:paused] flex gap-8 pr-8">
          <span className="text-white/60 font-poppins font-bold text-lg md:text-xl tracking-wider">
            {text}
          </span>
          <span className="text-white/60 font-poppins font-bold text-lg md:text-xl tracking-wider">
            {text}
          </span>
          <span className="text-white/60 font-poppins font-bold text-lg md:text-xl tracking-wider">
            {text}
          </span>
          <span className="text-white/60 font-poppins font-bold text-lg md:text-xl tracking-wider">
            {text}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
