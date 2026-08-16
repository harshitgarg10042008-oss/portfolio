"use client";

import { useEffect, useState, ReactNode } from "react";
import { animate, motion } from "framer-motion";

export default function Loader({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (hasVisited) {
      setShouldRender(false);
      setIsLoaded(true);
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

  return (
    <>
      <div
        className={`transition-all duration-700 ease-in-out ${
          !isLoaded ? "blur-[20px] pointer-events-none select-none" : "blur-0"
        }`}
      >
        {children}
      </div>

      {shouldRender && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 1 }}
          animate={isLoaded ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 0.1 }}
        >
          <div className="relative z-10 text-[3rem] md:text-[5rem] font-poppins font-bold text-white">
            {progress}
          </div>
        </motion.div>
      )}
    </>
  );
}
