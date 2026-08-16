"use client";
import { useEffect, useState, useCallback } from "react";
import confetti from "canvas-confetti";

const KONAMI = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight",
  "b", "a",
];

export default function KonamiEasterEgg() {
  const [_, setBuffer] = useState<string[]>([]);
  const [showToast, setShowToast] = useState(false);

  // Dev console greeting on mount
  useEffect(() => {
    console.log(
      "%cHey, you found the console 👀\n%cLooks like you're a developer too. Let's connect — harshitgarg.10042008@gmail.com",
      "color:#E9FF57; font-size:18px; font-weight:bold;",
      "color:#8b5cf6; font-size:13px;"
    );
  }, []);

  const fireConfetti = useCallback(() => {
    const colors = ["#8b5cf6", "#a78bfa", "#E9FF57", "#34d399", "#f472b6"];

    // Left burst
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 70,
      origin: { x: 0, y: 0.65 },
      colors,
      gravity: 1.1,
      scalar: 1.1,
    });
    // Right burst
    confetti({
      particleCount: 80,
      angle: 120,
      spread: 70,
      origin: { x: 1, y: 0.65 },
      colors,
      gravity: 1.1,
      scalar: 1.1,
    });
    // Center rain after short delay
    setTimeout(() => {
      confetti({
        particleCount: 60,
        spread: 120,
        startVelocity: 20,
        origin: { x: 0.5, y: 0 },
        colors,
        gravity: 0.8,
      });
    }, 250);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      setBuffer((prev) => {
        const next = [...prev, e.key].slice(-KONAMI.length);
        if (next.join(",") === KONAMI.join(",")) {
          fireConfetti();
          setShowToast(true);
          setTimeout(() => setShowToast(false), 3500);
          return [];
        }
        // Reset if wrong key
        if (KONAMI[next.length - 1] !== e.key) return [];
        return next;
      });
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [fireConfetti]);

  return (
    <>
      {/* Toast notification */}
      <div
        aria-live="polite"
        className={`
          fixed bottom-8 left-1/2 -translate-x-1/2 z-[9998]
          px-6 py-3 rounded-2xl
          bg-[rgba(20,10,40,0.9)] backdrop-blur-md
          border border-purple-500/40
          font-poppins font-semibold text-sm text-white
          shadow-[0_0_30px_rgba(139,92,246,0.5)]
          flex items-center gap-2
          transition-all duration-500
          ${showToast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
        `}
      >
        <span className="text-lg">🎉</span>
        You found the secret!
        <span className="text-[#E9FF57]">↑↑↓↓←→←→BA</span>
      </div>
    </>
  );
}
