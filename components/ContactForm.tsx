"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-bg-card rounded-2xl border border-purple-glow/40 shadow-glow-purple p-8 h-[500px] flex flex-col">
      <h3 className="font-poppins font-semibold text-white text-xl mb-6">Send a Message</h3>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">
        <div>
          <input
            type="text"
            required
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-bg-card-2 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-glow transition-colors"
          />
        </div>
        <div>
          <input
            type="email"
            required
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-bg-card-2 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-glow transition-colors"
          />
        </div>
        <div className="flex-1">
          <textarea
            required
            placeholder="Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full h-full min-h-[120px] bg-bg-card-2 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-glow transition-colors resize-none"
          />
        </div>
        
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-white text-black font-poppins font-semibold py-3 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-70 mt-2"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-400 text-xs text-center font-inter mt-2">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-xs text-center font-inter mt-2">Failed to send. Please try again.</p>
        )}
      </form>
    </div>
  );
}
