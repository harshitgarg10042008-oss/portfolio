"use client";

import { motion, Variants } from "framer-motion";
import LanyardCard from "./LanyardCard";

const aboutText = "I'm Harshit Garg, a Computer Science undergraduate and full-stack developer passionate about building production-oriented web applications and AI-assisted systems. I enjoy working with technologies like React, Next.js, Node.js, PostgreSQL, and computer-vision / speech-AI pipelines, blending clean engineering with real-world impact. With 5+ shipped full-stack and AI projects, I'm committed to writing reliable, scalable, and secure software.";

export default function AboutMe() {
  const words = aboutText.split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.1 },
    },
  };

  const childVariants: Variants = {
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
        duration: 0.4
      },
    },
    hidden: {
      opacity: 0,
      filter: "blur(8px)",
      y: 8,
    },
  };

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-bg-card rounded-2xl border border-purple-glow/40 shadow-glow-purple p-8 md:p-12 relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            
            {/* Left side: Text & Stats */}
            <div className="flex-1">
              <h2 className="font-poppins font-bold text-[clamp(1.6rem,3vw,2.2rem)] text-white mb-6">
                About Me
              </h2>
              
              <motion.div
                className="font-inter text-[0.95rem] leading-[1.7] text-white/70 mb-10 flex flex-wrap gap-x-1"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {words.map((word, index) => (
                  <motion.span variants={childVariants} key={index} className="inline-block">
                    {word}
                  </motion.span>
                ))}
              </motion.div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="flex flex-col">
                  <span className="font-poppins font-bold text-3xl md:text-4xl text-white mb-1">5+</span>
                  <span className="font-inter text-xs text-white/50 uppercase tracking-wider">Projects Shipped</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-poppins font-bold text-3xl md:text-4xl text-white mb-1">1+</span>
                  <span className="font-inter text-xs text-white/50 uppercase tracking-wider">Years of Experience</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-poppins font-bold text-3xl md:text-4xl text-white mb-1">30+</span>
                  <span className="font-inter text-xs text-white/50 uppercase tracking-wider">REST APIs Built</span>
                </div>
              </div>
              
              <div className="text-sm font-poppins font-medium text-white/60 italic border-l-2 border-purple-glow pl-4">
                &quot;Engineering ideas into scalable systems.&quot;
              </div>
            </div>

            {/* Right side: Lanyard */}
            <div className="w-full md:w-1/3 flex justify-center items-start">
              <LanyardCard />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
