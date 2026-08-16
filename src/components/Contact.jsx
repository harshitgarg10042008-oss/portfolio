import React from 'react';
import { Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="pt-8 pb-12 border-t border-white/5">
      <div className="flex items-center gap-3 mb-8">
        <h3 className="text-xl font-bold text-white tracking-tight">Contact & Chat</h3>
        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Chat Room */}
        <div className="bg-[#0A101A] border border-white/5 rounded-xl p-5 flex flex-col">
          <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-4">
            <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Chat Room</h4>
              <p className="text-[10px] text-teal-500/80">Online & Available</p>
            </div>
          </div>
          
          <div className="flex-1 space-y-3 mb-4">
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-white/10 shrink-0"></div>
              <div className="bg-white/5 text-xs text-gray-300 p-2.5 rounded-r-xl rounded-bl-xl leading-relaxed">
                Want to discuss a project, internship, or technical idea? I'm currently seeking software engineering opportunities.
              </div>
            </div>
            <div className="flex gap-2 flex-row-reverse">
              <div className="bg-teal-500/20 border border-teal-500/20 text-xs text-teal-100 p-2.5 rounded-l-xl rounded-br-xl">
                I'll review your CV right now!
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-auto">
            <input type="text" placeholder="Type a message..." className="flex-1 bg-[#05080c] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-teal-500/50" />
            <button className="bg-teal-500 hover:bg-teal-400 text-[#05080c] p-2 rounded-lg transition-colors">
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#0A101A] border border-white/5 rounded-xl p-5">
           <h4 className="text-sm font-bold text-white mb-4">Send Message</h4>
           <form className="space-y-3" onSubmit={e => e.preventDefault()}>
             <div className="space-y-1">
               <label className="text-[10px] text-gray-500 uppercase tracking-widest">Full Name</label>
               <input type="text" className="w-full bg-[#05080c] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-teal-500/50" />
             </div>
             <div className="space-y-1">
               <label className="text-[10px] text-gray-500 uppercase tracking-widest">Email</label>
               <input type="email" className="w-full bg-[#05080c] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-teal-500/50" />
             </div>
             <div className="space-y-1">
               <label className="text-[10px] text-gray-500 uppercase tracking-widest">Message</label>
               <textarea rows={3} className="w-full bg-[#05080c] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-teal-500/50 resize-none"></textarea>
             </div>
             <button className="w-full bg-white/5 hover:bg-teal-500/20 hover:text-teal-400 hover:border-teal-500/30 border border-white/10 text-white text-xs font-bold py-2.5 rounded-lg transition-all mt-2">
               Submit
             </button>
           </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
