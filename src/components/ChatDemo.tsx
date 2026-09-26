"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { channels } from "@/components/WorksWith";

type Step = { from: "buyer" | "ai" | "booked"; text: string };


// Each app's chat screen (the switcher above the phone); each has its own sample conversation below.
const platforms = [
  {
    id: "whatsapp",
    name: "WhatsApp",
    screen: "bg-wa-bg",
    header: "bg-wa-header text-white",
    sub: "text-white/75",
    avatar: "bg-white/20 text-white",
    buyer: "rounded-xl rounded-tr-sm bg-wa-out text-ink shadow-sm",
    ai: "rounded-xl rounded-tl-sm bg-white text-ink shadow-sm",
    status: "online",
  },
  {
    id: "instagram",
    name: "Instagram",
    screen: "bg-white",
    header: "border-b border-black/10 bg-white text-ink",
    sub: "text-black/50",
    avatar: "bg-ink text-white", // drawn inside Instagram's gradient ring (see header)
    buyer: "rounded-[20px] rounded-br-md bg-gradient-to-br from-[#a033ff] to-[#0a84ff] text-white",
    ai: "rounded-[20px] rounded-bl-md bg-[#efefef] text-ink",
    status: "Active now",
  },
  {
    id: "messenger",
    name: "Messenger",
    screen: "bg-white",
    header: "border-b border-black/10 bg-white text-ink",
    sub: "text-black/50",
    avatar: "bg-[#0084ff] text-white",
    buyer: "rounded-[18px] rounded-br-md bg-[#0084ff] text-white",
    ai: "rounded-[18px] rounded-bl-md bg-[#e4e6eb] text-ink",
    status: "Active now",
  },
  {
    // chat widget on the builder's own website (a browser address bar sits above it)
    id: "website",
    name: "Website",
    screen: "bg-[#f4f6f9]",
    header: "bg-ink text-white",
    sub: "text-white/70",
    avatar: "bg-accent text-on-accent",
    buyer: "rounded-2xl rounded-br-md bg-ink text-white",
    ai: "rounded-2xl rounded-bl-md border border-black/5 bg-white text-ink shadow-sm",
    status: "online",
  },
] as const;

// Icons for the switcher. WhatsApp / Instagram / Website reuse the "Works with" strip's marks;
// Messenger is its speech bubble with the lightning bolt.
const MESSENGER_BUBBLE =
  "M12 2C6.4 2 2 6.1 2 11.7c0 2.9 1.2 5.4 3.1 7.2.2.1.3.3.3.6l.1 1.8a.8.8 0 0 0 1.1.7l2-.9c.2-.1.4-.1.5 0 .9.3 1.9.4 2.9.4 5.6 0 10-4.1 10-9.7S17.6 2 12 2z";
const MESSENGER_BOLT =
  "M6 15.1l2.9-4.7c.5-.7 1.5-.9 2.2-.4l2.3 1.8c.2.2.5.2.7 0l3.2-2.4c.4-.3 1 .2.7.6l-2.9 4.7c-.5.7-1.5.9-2.2.4l-2.3-1.8a.6.6 0 0 0-.7 0l-3.2 2.4c-.4.3-1-.2-.7-.6z";

function TabIcon({ name }: { name: string }) {
  if (name === "Messenger") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
        <path d={MESSENGER_BUBBLE} fill="#0084ff" />
        <path d={MESSENGER_BOLT} fill="#fff" />
      </svg>
    );
  }
  const c = channels.find((x) => x.name === name);
  if (!c) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      // the Website mark's light grey would vanish on the white (selected) button
      style={{ color: name === "Website" ? "currentColor" : c.color }}
      fill={c.fill ? "currentColor" : "none"}
      stroke={c.fill ? "none" : "currentColor"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={c.d} />
    </svg>
  );
}

type PlatformId = (typeof platforms)[number]["id"];

// A different buyer, property, city and language per app — every chat ends with a booked visit.
// All prices, places and times are sample values. (The WhatsApp plot chat follows the PDF's
// Property Information flow: price → approved info → site visit.)
const scripts: Record<PlatformId, Step[]> = {
  // Tanglish — plot, Madurai
  whatsapp: [
    { from: "buyer", text: "Plot rate evlo?" },
    { from: "ai", text: "Sq.ft-⁠க்கு ₹1,500 முதல். எந்த location prefer பண்றீங்க?" },
    { from: "buyer", text: "Madurai side, 1200 sq.ft venum" },
    { from: "ai", text: "Approved plots இருக்கு. Layout, price details அனுப்புறேன்." },
    { from: "buyer", text: "Site visit pannalama?" },
    { from: "ai", text: "கண்டிப்பா! Saturday 11 AM confirm பண்ணட்டுமா?" },
    { from: "buyer", text: "OK 👍" },
    { from: "booked", text: "Saturday, 11 AM · Salesperson notified" },
  ],
  // Tanglish — 2BHK flat seen in an Instagram Reel, Coimbatore
  instagram: [
    { from: "buyer", text: "Reel-la paatha 2BHK flat details venum" },
    { from: "ai", text: "Coimbatore, Saravanampatti project. 2BHK ₹48 லட்சம் முதல். உங்க budget என்ன?" },
    { from: "buyer", text: "50L kulla. Ready to move ah?" },
    { from: "ai", text: "ஆம், ready-to-move units இருக்கு. Floor plan, brochure அனுப்புறேன் 📄" },
    { from: "buyer", text: "Sunday paakalama?" },
    { from: "ai", text: "Sunday 4 PM free-⁠ஆ இருக்கு. Book பண்ணட்டுமா?" },
    { from: "buyer", text: "Yes 👍" },
    { from: "booked", text: "Sunday, 4 PM · Salesperson notified" },
  ],
  // Tamil — villa, Trichy
  messenger: [
    { from: "buyer", text: "வணக்கம், Trichy-⁠ல villa இருக்கா?" },
    { from: "ai", text: "வணக்கம்! 3BHK villas இருக்கு, ₹85 லட்சம் முதல். எப்போ வாங்க plan பண்றீங்க?" },
    { from: "buyer", text: "அடுத்த 3 மாசத்துல" },
    { from: "ai", text: "சரி! Villa photos, location map அனுப்புறேன்." },
    { from: "buyer", text: "நேர்ல பார்க்கணும்" },
    { from: "ai", text: "Tuesday 10 AM site visit fix பண்ணட்டுமா?" },
    { from: "buyer", text: "சரி, fix பண்ணுங்க" },
    { from: "booked", text: "Tuesday, 10 AM · Salesperson notified" },
  ],
  // English — 3BHK apartment, Chennai
  website: [
    { from: "buyer", text: "Hi, looking for a 3BHK in Chennai" },
    { from: "ai", text: "Hi! We have 3BHK apartments on OMR from ₹95 L. Which area do you prefer?" },
    { from: "buyer", text: "OMR is fine. Budget around 1 Cr" },
    { from: "ai", text: "Two projects fit your budget. Sharing floor plans and the price sheet now." },
    { from: "buyer", text: "Can I visit this weekend?" },
    { from: "ai", text: "Sure! Saturday 5 PM works. Shall I confirm?" },
    { from: "buyer", text: "Please do" },
    { from: "booked", text: "Saturday, 5 PM · Salesperson notified" },
  ],
};

// "AI" sparkle marking the AI's replies: a big and a small four-point star
const AI_SPARKLE =
  "M10 3l1.9 5.6L17.5 10.5l-5.6 1.9L10 18l-1.9-5.6L2.5 10.5l5.6-1.9zM18.5 13l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9z";

const BUYER_DELAY = 900;
const TYPING_DELAY = 1200;
const RESTART_DELAY = 4000;

export function ChatDemo() {
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);
  const [active, setActive] = useState(false);
  const [paused, setPaused] = useState(false);
  const [platformId, setPlatformId] = useState<PlatformId>("whatsapp");
  const rootRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const reducedRef = useRef(false);

  const p = platforms.find((x) => x.id === platformId) ?? platforms[0];
  const script = scripts[platformId];

  // Start only when the phone scrolls into view; show everything if reduced motion is preferred.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      reducedRef.current = true;
      const t = setTimeout(() => setShown(scripts.whatsapp.length), 0);
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

  // Play the script one step at a time. When it ends, move on to the next app and play again
  // (unless the visitor paused it), so everyone sees all four chats without clicking.
  useEffect(() => {
    if (!active || paused) return;
    let t: ReturnType<typeof setTimeout>;
    if (shown >= script.length) {
      t = setTimeout(() => {
        setShown(0);
        setPlatformId((id) => platforms[(platforms.findIndex((x) => x.id === id) + 1) % platforms.length].id);
      }, RESTART_DELAY);
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
  }, [active, paused, shown, script]);

  const togglePause = () => {
    setTyping(false); // stop the typing dots too while paused
    setPaused((v) => !v);
  };

  // Picking an app starts that app's conversation from the beginning.
  const choose = (id: PlatformId) => {
    setPlatformId(id);
    setTyping(false);
    setPaused(false);
    setShown(reducedRef.current ? scripts[id].length : 0);
  };

  // Keep the newest message in view.
  useEffect(() => {
    const body = bodyRef.current;
    if (body) body.scrollTo({ top: body.scrollHeight, behavior: "smooth" });
  }, [shown, typing]);

  return (
    <div ref={rootRef} className="mx-auto w-full max-w-[560px] text-left">
      {/* app switcher — 2 × 2 on phones, one row from tablet width up */}
      <div
        role="group"
        aria-label="Show the chat as"
        lang="en"
        className="relative mx-auto grid max-w-[360px] grid-cols-2 gap-2 sm:flex sm:max-w-none sm:justify-center"
      >
        {platforms.map((x) => {
          const on = x.id === platformId;
          return (
            <button
              key={x.id}
              type="button"
              aria-pressed={on}
              onClick={() => choose(x.id)}
              className={`flex items-center justify-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold transition sm:text-sm ${
                on ? "border-white bg-white text-ink shadow-lg" : "border-white/15 bg-white/[0.06] text-white/80 hover:bg-white/10"
              }`}
            >
              <TabIcon name={x.name} />
              {x.name}
            </button>
          );
        })}
      </div>

      <div className="relative mx-auto mt-6 max-w-[300px] sm:max-w-[320px]">
        <div className="absolute -inset-8 rounded-[56px] bg-accent/15 blur-3xl" aria-hidden />

        {/* screen readers get the whole conversation once, instead of the looping animation */}
        <div className="sr-only">
          <p>Sample {p.name} chat between a buyer and iSuite AI:</p>
          <ol>
            {script.map((m, i) => (
              <li key={i}>
                {m.from === "buyer" ? "Buyer" : m.from === "ai" ? "iSuite AI" : "Site visit booked"}: {m.text}
              </li>
            ))}
          </ol>
        </div>

        {/* phone: frame image (585×1140) with a transparent screen; the chat sits in that screen area */}
        <div className="relative aspect-[585/1140] drop-shadow-2xl" aria-hidden>
          <div
            className={`absolute left-[7.35%] top-[3.6%] flex h-[92.37%] w-[85.47%] flex-col overflow-hidden rounded-[8.2%/3.9%] ${p.screen}`}
          >
            {/* website chat: a browser address bar on top (its padding clears the camera punch-hole) */}
            {p.id === "website" && (
              <div className="bg-[#e9ecf1] px-3 pb-2 pt-8">
                <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[10px] text-black/55">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4M5 11h14v10H5z" />
                  </svg>
                  yourwebsite.com
                </div>
              </div>
            )}

            {/* header (extra top padding clears the camera punch-hole, except under the address bar) */}
            <div className={`flex items-center gap-3 px-4 pb-3 ${p.id === "website" ? "pt-3" : "pt-9"} ${p.header}`}>
              <span
                className={`relative rounded-full ${
                  p.id === "instagram" ? "bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] p-[2px]" : ""
                }`}
              >
                <span
                  className={`flex items-center justify-center rounded-full text-xs font-extrabold ${p.avatar} ${
                    p.id === "instagram" ? "h-8 w-8 border-2 border-white" : "h-9 w-9"
                  }`}
                >
                  AI
                </span>
                {/* Messenger's green "active" dot */}
                {p.id === "messenger" && (
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[#31a24c] ring-2 ring-white" />
                )}
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold">iSuite AI</p>
                <p className={`text-[11px] ${p.sub}`}>{typing ? "typing…" : p.status}</p>
              </div>
            </div>

            {/* messages */}
            <div ref={bodyRef} className="min-h-0 flex-1 space-y-2 overflow-hidden px-3 py-4 text-[13px] leading-relaxed">
              {script.slice(0, shown).map((m, i) =>
                m.from === "booked" ? (
                  <div
                    key={i}
                    className="chat-pop mx-auto mt-3 w-fit rounded-xl border border-accent-deep/30 bg-white px-4 py-2.5 text-center text-ink shadow-sm"
                  >
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
                    <p className={`max-w-[85%] px-3 py-2 ${m.from === "buyer" ? p.buyer : p.ai}`}>
                      {m.text}
                      {/* AI sparkle at the end of every AI reply, where the app would show its time/ticks */}
                      {m.from === "ai" && (
                        <svg viewBox="0 0 24 24" className="ml-1 inline-block h-3.5 w-3.5 align-[-2px] text-accent-deep" fill="currentColor" aria-hidden>
                          <path d={AI_SPARKLE} />
                        </svg>
                      )}
                    </p>
                  </div>
                ),
              )}
              {typing && (
                <div className="chat-pop flex justify-start">
                  <p className={`flex gap-1 px-3 py-3 ${p.ai}`}>
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

      {/* moving content must be pausable; not needed when the visitor asked for reduced motion */}
      <button
        type="button"
        lang="en"
        onClick={togglePause}
        className="relative mx-auto mt-5 flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold text-muted shadow-sm transition hover:text-ink motion-reduce:hidden"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
          <path d={paused ? "M8 5v14l11-7z" : "M7 5h4v14H7zM13 5h4v14h-4z"} />
        </svg>
        {paused ? "Play demo" : "Pause demo"}
      </button>
    </div>
  );
}
