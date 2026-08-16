import React from 'react';

const CodeWindow = () => {
  return (
    <div className="w-full bg-[#0B1120] border border-white/10 rounded-[20px] overflow-hidden shadow-2xl relative z-10 mx-auto">
      <div className="flex items-center justify-between px-4 py-3 bg-[#0a1018] border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
        </div>
        <div className="text-[10px] text-gray-500 font-mono">portfolio.config.ts</div>
        <div className="w-8"></div>
      </div>
      <div className="p-6 overflow-x-auto text-xs leading-loose font-mono">
        <pre>
          <code className="text-gray-400">
            <span className="text-pink-400">const</span> <span className="text-blue-400">developer</span> <span className="text-teal-400">=</span> {'{\n'}
            {'  '}name: <span className="text-yellow-300">"Harshit Garg"</span>,\n
            {'  '}role: <span className="text-yellow-300">"Full-Stack Developer"</span>,\n
            {'  '}focus: [<span className="text-yellow-300">"AI Systems"</span>, <span className="text-yellow-300">"Cloud SaaS"</span>],\n
            {'  '}build: <span className="text-pink-400">()</span> <span className="text-pink-400">{'=>'}</span> {'{\n'}
            {'    '}<span className="text-pink-400">return</span> <span className="text-yellow-300">"Production-oriented web applications"</span>;\n
            {'  '}{'}\n'}
            {'}'};\n\n
            <span className="text-gray-600">// Ready to compile new ideas.</span>
          </code>
        </pre>
      </div>
    </div>
  );
};
export default CodeWindow;
