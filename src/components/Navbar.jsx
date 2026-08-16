import React from 'react';

const Navbar = () => {
  const navItems = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <div className="w-full border-b border-white/5 bg-white/[0.02] px-6 py-4 flex items-center justify-between sticky top-0 z-50 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-teal-500 shadow-[0_0_10px_rgba(45,212,191,0.8)]"></div>
        <span className="text-white font-bold text-sm tracking-wide">Portfolio.</span>
      </div>
      
      <div className="flex gap-4 md:gap-6">
        {navItems.map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] md:text-[11px] uppercase tracking-widest text-gray-400 hover:text-teal-400 font-medium transition-colors">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};
export default Navbar;
