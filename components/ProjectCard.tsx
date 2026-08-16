"use client";

import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export default function ProjectCard({ title, description, tech, link }: ProjectProps) {
  // Generate a placeholder image name based on title
  const imageSlug = title.split(" ")[0].toLowerCase().replace(/[^a-z0-9]/g, "");
  
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-bg-card rounded-2xl border border-white/10 overflow-hidden group hover:border-purple-glow/40 hover:-translate-y-1 hover:shadow-glow-purple-lg transition-all duration-300"
    >
      <div className="w-full h-48 bg-black/40 relative overflow-hidden">
        <Image 
          src={`/images/projects/${imageSlug}.jpg`}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </div>
      
      <div className="p-6">
        <h3 className="font-poppins font-bold text-white text-lg mb-2 line-clamp-1">{title}</h3>
        <p className="font-inter text-white/70 text-sm leading-relaxed mb-6 line-clamp-2">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {tech.map((t, i) => (
            <span key={i} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[0.65rem] font-medium text-white/80">
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
