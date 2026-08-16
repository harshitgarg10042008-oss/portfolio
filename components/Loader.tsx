"use client";

import { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (hasVisited) {
      setShouldRender(false);
      return;
    }

    sessionStorage.setItem("hasVisited", "true");

    const controls = animate(0, 100, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1], // ease-out-expo
      onUpdate: (value) => setProgress(Math.floor(value)),
      onComplete: () => {
        setIsLoaded(true);
        setTimeout(() => setShouldRender(false), 500);
      }
    });

    return () => controls.stop();
  }, []);

  if (!shouldRender) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[--bg-black]"
      initial={{ opacity: 1, y: 0 }}
      animate={isLoaded ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] rounded-full bg-[--teal-glow] blur-[120px] opacity-30 animate-pulse"></div>
      </div>
      <div className="relative z-10 text-[3rem] md:text-[5rem] font-poppins font-bold text-white">
        {progress}
      </div>
    </motion.div>
  );
}
