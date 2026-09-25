/* Lucide-style stroke icon paths */
const i = {
  bot: "M12 8V4H8M4 8h16v12H4zM2 14h2M20 14h2M9 13v2M15 13v2",
  database: "M12 8c4.4 0 8-1.3 8-3s-3.6-3-8-3-8 1.3-8 3 3.6 3 8 3zM4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
  users: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8",
  check: "M5 12l5 5L20 7",
};

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

// Copy from the revised buyer-persona document (section 18).
const others = [
  { name: "A CRM", does: "Records.", icon: i.database },
  { name: "A chatbot", does: "Replies.", icon: i.bot },
  { name: "A sales team", does: "Sells.", icon: i.users },
];

// CAPTURE + QUALIFY + ASSIGN + FOLLOW UP + BOOK SITE VISIT + HAND OVER + MANAGE PIPELINE + TRACK TEAM + MOVE TOWARDS BOOKING
const isuite = [
  "Capture",
  "Qualify",
  "Assign",
  "Follow up",
  "Book site visit",
  "Hand over",
  "Manage pipeline",
  "Track team",
  "Move towards booking",
];

export function Differentiation() {
  return (
    <section className="bg-paper px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl text-center">
        {/* Tamil heading from the landing-page PDF (same meaning as the revised doc's English one) */}
        <h2 className="text-[28px] font-extrabold leading-[1.3] sm:text-5xl sm:leading-[1.2]">
          WhatsApp chatbot-⁠ஐ விட அதிகம்.
          <span className="block text-accent-deep">CRM-⁠ஐ விட அதிகம்.</span>
        </h2>

        {/* one job each */}
        <div lang="en" className="mt-10 grid grid-cols-3 gap-2 sm:mt-14 sm:gap-4">
          {others.map((o) => (
            <div key={o.name} className="rounded-2xl border border-line bg-surface px-2 py-5 shadow-sm sm:px-6 sm:py-7">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-paper text-muted sm:h-12 sm:w-12">
                <Icon d={o.icon} />
              </span>
              <p className="mt-3 text-xs text-muted sm:text-sm">{o.name}</p>
              <p className="mt-1 font-display text-lg font-extrabold sm:text-3xl">{o.does}</p>
            </div>
          ))}
        </div>

        {/* connector */}
        <div className="flex justify-center py-3" aria-hidden>
          <span className="h-10 w-0.5 bg-gradient-to-b from-line to-accent" />
        </div>

        {/* iSuite does it all */}
        <div className="relative overflow-hidden rounded-3xl bg-ink px-5 py-8 text-white shadow-[0_20px_60px_-20px] shadow-accent/50 sm:px-10 sm:py-10">
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-40 w-[70%] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
            aria-hidden
          />
          <p lang="en" className="relative font-display text-2xl font-extrabold sm:text-4xl">
            iSuite AI <span className="text-accent">connects the sales journey</span>
          </p>
          {/* 9 steps: 3×3 on tablet/desktop; on phones the goal (last) spans the full row */}
          <ul lang="en" className="relative mt-6 grid grid-cols-2 gap-2 text-left sm:grid-cols-3 sm:gap-3">
            {isuite.map((a, idx) => {
              const last = idx === isuite.length - 1;
              return (
                <li
                  key={a}
                  className={`flex items-center gap-2.5 rounded-xl border px-3 py-3 text-sm font-bold sm:px-4 sm:text-base ${
                    last
                      ? "col-span-2 border-accent bg-accent text-on-accent sm:col-span-1"
                      : "border-accent/30 bg-accent/10"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                      last ? "bg-on-accent/15 text-on-accent" : "bg-accent text-on-accent"
                    }`}
                  >
                    <Icon d={i.check} className="h-3.5 w-3.5" />
                  </span>
                  {a}
                </li>
              );
            })}
          </ul>
        </div>

        <p className="mt-8 font-display text-xl font-bold sm:text-2xl">
          Real Estate-⁠க்கான <span className="text-accent-deep">complete Sales System.</span>
        </p>
      </div>
    </section>
  );
}
