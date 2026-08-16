"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-black/60 backdrop-blur-md py-4 shadow-md" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-white font-poppins font-bold text-xl md:text-2xl tracking-wide">
          Portfolio
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-[0.9rem] font-poppins font-semibold text-white/80">
          <Link href="#home" className="hover:text-white transition-colors">Home</Link>
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
          <Link href="#projects" className="hover:text-white transition-colors">Project</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Mobile Nav Toggle (Optional for now, sticking to basics) */}
        <div className="md:hidden flex items-center">
           <div className="text-white font-poppins text-sm">
             <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
           </div>
        </div>
      </div>
    </motion.nav>
  );
}
