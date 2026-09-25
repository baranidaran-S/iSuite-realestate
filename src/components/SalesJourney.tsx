// "Your Real Estate Sales Journey" — copy from the revised buyer-persona document (section 5).

/* Lucide-style stroke icon paths */
const i = {
  inbox:
    "M22 12h-6l-2 3h-4l-2-3H2M5.5 5.1 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.5-6.9A2 2 0 0 0 16.8 4H7.2a2 2 0 0 0-1.7 1.1z",
  channels: "M2 12h4M18 12h4M12 2v4M12 18v4M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  chat: "M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-.9L3 20l1.1-4A8.4 8.4 0 1 1 21 11.5z",
  userCheck: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM16 11l2 2 4-4",
  assign: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM19 8v6M22 11h-6",
  home: "M3 11l9-7 9 7v10H3V11zM9 21v-6h6v6",
  refresh: "M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5",
  pin: "M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  talk: "M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2zM18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",
  key: "M21 2l-2 2m-7.6 7.6a5.5 5.5 0 1 1-7.8 7.8 5.5 5.5 0 0 1 7.8-7.8zM15.5 7.5l3 3L22 7l-3-3",
};

// ENQUIRY ↓ WHATSAPP / PHONE / WEBSITE / META / PROPERTY PORTAL ↓ … ↓ BOOKING
const journey = [
  { label: "Enquiry", icon: i.inbox },
  { label: "WhatsApp / Phone / Website / Meta / Property Portal", icon: i.channels },
  { label: "AI / Team First Response", icon: i.chat },
  { label: "Qualification", icon: i.userCheck },
  { label: "Salesperson Assignment", icon: i.assign },
  { label: "Property Match", icon: i.home },
  { label: "Follow-up", icon: i.refresh },
  { label: "Site Visit", icon: i.pin },
  { label: "Negotiation", icon: i.talk },
  { label: "Booking", icon: i.key },
];

const clarity = ["Lead owner", "Conversation context", "Sales stage", "Next action", "Follow-up status"];

function Icon({ d }: { d: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={d} />
    </svg>
  );
}

export function SalesJourney() {
  return (
    <section className="bg-ink px-4 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-[28px] font-extrabold leading-[1.3] sm:text-5xl sm:leading-[1.2]">
          ஒரே <span className="text-accent">structured sales journey.</span>
        </h2>

        {/* 10 stages: 1 column on phones, 2 on tablets, 2 rows of 5 on desktop (arrows only inside a row) */}
        <ol lang="en" className="mx-auto mt-10 grid max-w-md gap-3 text-left sm:mt-14 sm:max-w-none sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {journey.map((s, idx) => {
            const last = idx === journey.length - 1;
            const rowEnd = (idx + 1) % 5 === 0;
            return (
              <li
                key={s.label}
                className={`relative flex items-center gap-3 rounded-2xl border p-4 lg:flex-col lg:items-start ${
                  last
                    ? "border-accent bg-accent text-on-accent shadow-lg shadow-accent/30"
                    : "border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02]"
                }`}
              >
                {!rowEnd && (
                  <span
                    className="absolute -right-[13px] top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-ink text-xs text-accent lg:flex"
                    aria-hidden
                  >
                    →
                  </span>
                )}
                <div className="flex shrink-0 items-center gap-3 lg:w-full lg:justify-between">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                      last ? "bg-on-accent/10 text-on-accent" : "bg-accent/15 text-accent"
                    }`}
                  >
                    <Icon d={s.icon} />
                  </span>
                  <span
                    className={`hidden font-display text-sm font-extrabold lg:block ${
                      last ? "text-on-accent/70" : "text-white/50"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="font-display text-[13px] font-bold uppercase leading-snug tracking-wide sm:text-sm">
                  <span className={`lg:hidden ${last ? "text-on-accent/70" : "text-white/50"}`}>
                    {String(idx + 1).padStart(2, "0")} ·{" "}
                  </span>
                  {s.label}
                </p>
              </li>
            );
          })}
        </ol>

        {/* what must be clear at every stage */}
        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-6 sm:mt-12 sm:px-8">
          <p className="font-semibold text-white/80">ஒவ்வொரு stage-⁠க்கும்:</p>
          <ul lang="en" className="mt-4 flex flex-wrap justify-center gap-2">
            {clarity.map((c) => (
              <li
                key={c}
                className="rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-sm font-bold text-accent"
              >
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-4 font-display text-lg font-bold sm:text-xl">தெளிவாக இருக்க வேண்டும்.</p>
        </div>
      </div>
    </section>
  );
}
