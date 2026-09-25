// "Every Lead Needs a Next Step" — copy from the revised buyer-persona document (section 6).

/* Lucide-style stroke icon paths */
const i = {
  respond: "M7.9 20A9 9 0 1 0 4 16.1L2 22z",
  qualify: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM16 11l2 2 4-4",
  assign: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM19 8v6M22 11h-6",
  followup: "M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5",
  book: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM9 16l2 2 4-4",
  handover:
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  close: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  filter: "M22 3H2l8 9.5V19l4 2v-8.5z",
  team: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
};

// RESPOND → QUALIFY → ASSIGN → FOLLOW UP → BOOK → HAND OVER → CLOSE
const steps = [
  { label: "Respond", icon: i.respond },
  { label: "Qualify", icon: i.qualify },
  { label: "Assign", icon: i.assign },
  { label: "Follow Up", icon: i.followup },
  { label: "Book", icon: i.book },
  { label: "Hand Over", icon: i.handover },
  { label: "Close", icon: i.close },
];

const lists = [
  {
    title: "Qualification",
    icon: i.filter,
    items: ["Budget", "Location", "Property type", "Configuration", "Timeline", "Purpose", "Buying intent"],
  },
  {
    title: "Sales team",
    icon: i.team,
    items: ["Lead owner", "Sales stage", "Next action", "Tasks", "Follow-up status"],
  },
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

export function NextStep() {
  return (
    <section className="bg-paper px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-balance text-[28px] font-extrabold leading-[1.3] sm:text-5xl sm:leading-[1.2]">
          ஒரு lead-⁠ஐ capture செய்வது <span className="whitespace-nowrap text-accent-deep">மட்டும் போதாது.</span>
        </h2>
        <p className="mt-5 text-base font-semibold text-muted sm:text-lg">iSuite AI உங்கள் team-⁠க்கு ஒவ்வொரு lead-⁠க்கும்:</p>

        {/* 7 steps — one row on desktop. Each arrow leads into its step, so when the row
            wraps (phones) a line starts "→ STEP" instead of ending on a lone arrow. */}
        <ol lang="en" className="mx-auto mt-6 flex flex-wrap justify-center gap-x-2 gap-y-3">
          {steps.map((s, idx) => {
            const last = idx === steps.length - 1;
            return (
              <li key={s.label} className="flex items-center gap-2">
                {idx > 0 && (
                  <span className="text-accent-deep" aria-hidden>
                    →
                  </span>
                )}
                <span
                  className={`flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-4 font-display text-sm font-bold uppercase tracking-wide sm:text-[15px] ${
                    last ? "bg-ink text-white" : "border border-line bg-surface text-ink shadow-sm"
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      last ? "bg-accent text-on-accent" : "bg-accent/15 text-accent-deep"
                    }`}
                  >
                    <Icon d={s.icon} className="h-4 w-4" />
                  </span>
                  {s.label}
                </span>
              </li>
            );
          })}
        </ol>

        {/* what gets captured for every lead */}
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 text-left sm:mt-12 md:grid-cols-2">
          {lists.map((l) => (
            <div key={l.title} className="rounded-3xl border border-line bg-surface p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent-deep">
                  <Icon d={l.icon} />
                </span>
                <h3 lang="en" className="font-display text-lg font-bold">
                  {l.title}
                </h3>
              </div>
              <ul lang="en" className="mt-4 flex flex-wrap gap-2">
                {l.items.map((x) => (
                  <li key={x} className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-sm font-semibold">
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-balance rounded-2xl bg-ink px-6 py-5 font-display text-lg font-bold leading-snug text-white sm:text-xl">
          ஒரு lead “contact saved” ஆக மட்டும் இல்லாமல்,{" "}
          <span className="text-accent">sales process-⁠ல் எங்கே இருக்கிறது என்பதும் தெரியும்.</span>
        </p>
      </div>
    </section>
  );
}
