// "Meta Ads" — copy from the Tamil landing-page PDF (section 5). Closes the owner view with a CTA.

import { CtaButton } from "@/components/CtaButton";

/* Lucide-style stroke icon paths (Meta mark matches the one in WorksWith) */
const i = {
  meta: "M2.5 13c0-3.6 2-7 4.6-7 2.2 0 3.6 2.3 4.9 4.8s2.7 5.2 5 5.2c1.9 0 3-1.5 3-3.6 0-3-1.6-6.4-4.2-6.4-2 0-3.4 2.1-4.7 4.7S8.6 18 6.3 18C4 18 2.5 16 2.5 13z",
  chat: "M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-.9L3 20l1.1-4A8.4 8.4 0 1 1 21 11.5z",
  userCheck: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM16 11l2 2 4-4",
  pin: "M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  briefcase:
    "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
  trend: "M22 7l-8.5 8.5-5-5L2 17M16 7h6v6",
  megaphone: "M3 11l18-5v12L3 14v-3zM11.6 16.8a3 3 0 1 1-5.8-1.6",
  calendar: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM9 16l2 2 4-4",
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1",
  clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2",
};

// META AD → WHATSAPP → QUALIFIED LEAD → SITE VISIT → SALES OPPORTUNITY → REVENUE
const flow = [
  { label: "Meta Ad", icon: i.meta, tone: "text-[#0A7CFF] bg-[#0A7CFF]/15" },
  { label: "WhatsApp", icon: i.chat, tone: "text-wa-green bg-wa-green/15" },
  { label: "Qualified Lead", icon: i.userCheck, tone: "text-accent bg-accent/15" },
  { label: "Site Visit", icon: i.pin, tone: "text-accent bg-accent/15" },
  { label: "Sales Opportunity", icon: i.briefcase, tone: "text-accent bg-accent/15" },
  { label: "Revenue", icon: i.trend, tone: "" },
];

const questions = [
  { q: "எந்த campaign enquiry-⁠ஐ கொண்டு வந்தது?", icon: i.megaphone },
  { q: "எந்த leads qualified ஆனது?", icon: i.userCheck },
  { q: "எந்த leads site visit book செய்தது?", icon: i.calendar },
  { q: "எந்த salesperson handle செய்தார்?", icon: i.user },
  { q: "எந்த follow-ups pending-⁠ல் இருக்கிறது?", icon: i.clock },
  { q: "எந்த opportunities முன்னேறியது?", icon: i.trend },
];

function Icon({ d, className = "h-5 w-5" }: { d: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
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

export function MetaAds() {
  return (
    <section className="bg-ink px-4 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl text-center">
        {/* bleeds a little wider than the cards so each sentence fits on one line on desktop */}
        <h2 className="text-[28px] font-extrabold leading-[1.3] sm:text-5xl sm:leading-[1.2] xl:-mx-16">
          உங்கள் Meta Ad enquiry-⁠ஐ கொண்டு வந்தது.
          <span className="block">
            iSuite AI <span className="text-accent">sale-⁠ஐ தொடர்ந்து நகர்த்துகிறது.</span>
          </span>
        </h2>

        {/* ad → revenue flow; arrows between steps only where the row is unbroken (desktop) */}
        <ol lang="en" className="mt-10 grid grid-cols-2 gap-3 text-left sm:mt-14 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {flow.map((f, idx) => {
            const last = idx === flow.length - 1;
            return (
              <li
                key={f.label}
                className={`relative flex flex-col gap-3 rounded-2xl border p-4 ${
                  last
                    ? "border-accent bg-accent text-on-accent shadow-lg shadow-accent/30"
                    : "border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02]"
                }`}
              >
                {!last && (
                  <span
                    className="absolute -right-[13px] top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-ink text-xs text-accent lg:flex"
                    aria-hidden
                  >
                    →
                  </span>
                )}
                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                      last ? "bg-on-accent/10 text-on-accent" : f.tone
                    }`}
                  >
                    <Icon d={f.icon} />
                  </span>
                  <span className={`font-display text-sm font-extrabold ${last ? "text-on-accent/70" : "text-white/50"}`}>
                    0{idx + 1}
                  </span>
                </div>
                <p className="font-display text-[15px] font-bold uppercase leading-snug tracking-wide">{f.label}</p>
              </li>
            );
          })}
        </ol>

        {/* the questions an owner / manager needs answered */}
        <ul className="mx-auto mt-10 grid max-w-5xl gap-3 text-left sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {questions.map((x) => (
            <li
              key={x.q}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 sm:px-5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Icon d={x.icon} className="h-4 w-4" />
              </span>
              <p className="font-semibold leading-snug text-white/90">{x.q}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <CtaButton motion="wiggle" className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  );
}
