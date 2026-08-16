"use client";

import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="font-poppins font-bold text-[clamp(1.6rem,3vw,2.2rem)] text-white mb-4">
            Project
          </h2>
          <p className="font-inter text-white/70 max-w-2xl mx-auto text-balance italic">
            &ldquo;A selection of full-stack and AI projects reflecting my focus on production-ready, secure, and scalable systems.&rdquo;
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={
                // Center the last item if it's the 5th item in a 3-column layout
                index === 4 ? "lg:col-start-2 lg:col-span-1" : ""
              }
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
