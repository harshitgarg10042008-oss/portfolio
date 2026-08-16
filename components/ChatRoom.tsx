"use client";

const staticMessages = [
  { name: "Harshit Garg (Portfolio Owner)", text: "Welcome to my portfolio! Hope you like it 👋", self: true },
  { name: "Visitor", text: "yo does this chat actually work or is it just for show? 😄", self: false },
  { name: "Harshit Garg (Portfolio Owner)", text: "Haha it's just a demo for now — use the form to actually reach me!", self: true },
];

export default function ChatRoom() {
  return (
    <div className="bg-[--bg-card] rounded-2xl border border-[--purple-glow-soft] shadow-[0_0_40px_-10px_var(--purple-glow-soft)] flex flex-col h-[500px] overflow-hidden">
      {/* Header */}
      <div className="bg-[--bg-card-2] p-4 border-b border-white/5 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[--purple-glow-soft] flex items-center justify-center text-white">
          💬
        </div>
        <h3 className="font-poppins font-semibold text-white">Chat Room</h3>
        <div className="ml-auto flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-inter text-[--text-muted]">Demo</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 justify-end">
        {staticMessages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex gap-3 max-w-[85%] ${msg.self ? "ml-auto flex-row-reverse" : ""}`}
          >
            {/* Avatar circle */}
            <div className="w-8 h-8 rounded-full shrink-0 bg-[--bg-card-2] border border-white/10 flex items-center justify-center text-white text-xs font-poppins font-bold">
              {msg.name.charAt(0)}
            </div>

            <div className={`flex flex-col ${msg.self ? "items-end" : "items-start"}`}>
              <span className="text-[0.65rem] text-[--text-muted] mb-1 px-1">{msg.name}</span>
              <div
                className={`px-4 py-2 rounded-2xl text-sm font-inter ${
                  msg.self
                    ? "bg-[--purple-glow] text-white rounded-tr-none"
                    : "bg-[--bg-card-2] text-[--text-primary] border border-white/5 rounded-tl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="p-3 bg-[--bg-card-2] border-t border-white/5 text-center">
        <span className="text-[0.65rem] font-inter text-[--text-muted] italic">
          This is a demo chat. Use the contact form to reach Harshit →
        </span>
      </div>
    </div>
  );
}
