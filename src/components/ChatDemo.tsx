"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Step = { from: "buyer" | "ai" | "booked"; text: string };

// Plot enquiry, following the flow of the PDF's Property Information section
// (price → approved info → site visit). ₹1,500/sq.ft is a sample rate.
const script: Step[] = [
  { from: "buyer", text: "Plot rate evlo?" },
  { from: "ai", text: "Sq.ft-⁠க்கு ₹1,500 முதல். எந்த location prefer பண்றீங்க?" },
  { from: "buyer", text: "Madurai side, 1200 sq.ft venum" },
  { from: "ai", text: "Approved plots இருக்கு. Layout, price details அனுப்புறேன்." },
  { from: "buyer", text: "Site visit pannalama?" },
  { from: "ai", text: "கண்டிப்பா! Saturday 11 AM confirm பண்ணட்டுமா?" },
  { from: "buyer", text: "OK 👍" },
  { from: "booked", text: "Saturday, 11 AM · Salesperson notified" },
];

const BUYER_DELAY = 900;
const TYPING_DELAY = 1200;
const RESTART_DELAY = 4000;

export function ChatDemo() {
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);
  const [active, setActive] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  // Start only when the phone scrolls into view; show everything if reduced motion is preferred.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const t = setTimeout(() => setShown(script.length), 0);
      return () => clearTimeout(t);
    }
    const io = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    // Backup: start right away if the phone is already on screen when the page loads.
    const t = setTimeout(() => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) setActive(true);
    }, 300);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);

  // Play the script one step at a time, then loop.
  useEffect(() => {
    if (!active) return;
    let t: ReturnType<typeof setTimeout>;
    if (shown >= script.length) {
      t = setTimeout(() => setShown(0), RESTART_DELAY);
    } else if (script[shown].from === "buyer") {
      t = setTimeout(() => setShown((n) => n + 1), BUYER_DELAY);
    } else {
      t = setTimeout(() => setTyping(true), 0);
      const t2 = setTimeout(() => {
        setTyping(false);
        setShown((n) => n + 1);
      }, TYPING_DELAY);
      return () => {
        clearTimeout(t);
        clearTimeout(t2);
      };
    }
    return () => clearTimeout(t);
  }, [active, shown]);

  // Keep the newest message in view.
  useEffect(() => {
    const body = bodyRef.current;
    if (body) body.scrollTo({ top: body.scrollHeight, behavior: "smooth" });
  }, [shown, typing]);

  return (
    <div ref={rootRef} className="relative mx-auto w-full max-w-[300px] text-left sm:max-w-[320px]">
      <div className="absolute -inset-8 rounded-[56px] bg-accent/15 blur-3xl" aria-hidden />

      {/* phone: frame image (585×1140) with a transparent screen; the chat sits in that screen area */}
      <div className="relative aspect-[585/1140] drop-shadow-2xl">
        <div className="absolute left-[7.35%] top-[3.6%] flex h-[92.37%] w-[85.47%] flex-col overflow-hidden rounded-[8.2%/3.9%] bg-wa-bg">
          {/* header (extra top padding clears the camera punch-hole) */}
          <div className="flex items-center gap-3 bg-wa-header px-4 pb-3 pt-9 text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-xs font-extrabold">AI</span>
            <div className="leading-tight">
              <p className="text-sm font-semibold">iSuite AI</p>
              <p className="text-[11px] text-white/75">{typing ? "typing…" : "online"}</p>
            </div>
          </div>
  
          {/* messages */}
          <div
            ref={bodyRef}
            className="min-h-0 flex-1 space-y-2 overflow-hidden bg-wa-bg px-3 py-4 text-[13px] leading-relaxed text-ink"
            aria-live="polite"
          >
            {script.slice(0, shown).map((m, i) =>
              m.from === "booked" ? (
                <div key={i} className="chat-pop mx-auto mt-3 w-fit rounded-xl border border-accent-deep/30 bg-white px-4 py-2.5 text-center shadow-sm">
                  <p className="flex items-center justify-center gap-1.5 font-bold text-accent-deep">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                    Site visit booked
                  </p>
                  <p className="text-[11px] text-muted">{m.text}</p>
                </div>
              ) : (
                <div key={i} className={`chat-pop flex ${m.from === "buyer" ? "justify-end" : "justify-start"}`}>
                  <p
                    className={`max-w-[85%] rounded-xl px-3 py-2 shadow-sm ${
                      m.from === "buyer" ? "rounded-tr-sm bg-wa-out" : "rounded-tl-sm bg-white"
                    }`}
                  >
                    {m.text}
                  </p>
                </div>
              ),
            )}
            {typing && (
              <div className="chat-pop flex justify-start">
                <p className="flex gap-1 rounded-xl rounded-tl-sm bg-white px-3 py-3 shadow-sm" aria-label="typing">
                  <span className="typing-dot" />
                  <span className="typing-dot [animation-delay:150ms]" />
                  <span className="typing-dot [animation-delay:300ms]" />
                </p>
              </div>
            )}
          </div>
        </div>

        {/* frame on top of the screen content */}
        <Image
          src="/images/phone-frame.png"
          alt=""
          width={585}
          height={1140}
          className="pointer-events-none absolute inset-0 h-full w-full select-none"
          aria-hidden
        />
      </div>
    </div>
  );
}
