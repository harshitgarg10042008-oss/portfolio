"use client";

import { motion, Variants } from "framer-motion";
import { tools } from "@/lib/data";

export default function ToolsGrid() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 12 } }
  };

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center md:text-left">
          <h2 className="font-poppins font-bold text-[clamp(1.6rem,3vw,2.2rem)] text-white mb-2">
            Tools & Technologies
          </h2>
          <p className="font-inter text-white/70">
            My Professional Skills
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {tools.map((tool, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="bg-bg-card-2 border border-white/5 rounded-xl p-4 flex items-center gap-4 hover:border-purple-glow/40 hover:-translate-y-0.5 hover:shadow-glow-purple transition-all duration-300 group"
            >
              <div className="text-3xl text-white/70 group-hover:text-purple-glow transition-colors">
                <tool.icon />
              </div>
              <div>
                <h4 className="font-poppins font-semibold text-white text-sm">{tool.name}</h4>
                <p className="font-inter text-white/50 text-xs">{tool.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
