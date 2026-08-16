import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-base': '#0a0a0c',
        'bg-card': '#141417',
        'bg-card-2': '#1a1a1f',
        'teal-glow': '#14b8c4',
        'purple-glow': '#8b5cf6',
        'accent': '#E9FF57',
      },
      boxShadow: {
        'glow-purple': '0 0 40px -10px rgba(139,92,246,0.45)',
        'glow-purple-lg': '0 0 60px -5px rgba(139,92,246,0.6)',
      },
    },
  },
  plugins: [],
};
export default config;
