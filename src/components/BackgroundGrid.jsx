import React from 'react';

const BackgroundGrid = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
      <div className="absolute inset-0 bg-[#031316]"></div>
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.25]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(45, 212, 191, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(45, 212, 191, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}
      ></div>

      {/* Radial Gradient overlay for vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#031316_100%)]"></div>
      
      {/* Soft teal/cyan glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[600px] bg-teal-900/30 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[50vw] h-[400px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>
    </div>
  );
};

export default BackgroundGrid;
