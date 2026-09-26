// "Every Lead Needs a Next Step" — copy from the revised buyer-persona document (section 6).

/* Lucide-style stroke icon paths */
const i = {
  respond: "M7.9 20A9 9 0 1 0 4 16.1L2 22z",
  qualify: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM16 11l2 2 4-4",
  followup: "M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5",
  book: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM9 16l2 2 4-4",
  handover:
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
};

// Only the stages the AI itself does, in the Tamil PDF's order (RESPOND → QUALIFY → BOOK → HAND OVER →
// FOLLOW UP). The revised doc also had ASSIGN and CLOSE: assigning is the system routing the lead and
// closing is the sales team's job (see the "AI handles / Your sales team handles" section).
// Each `text` finishes the sentence "iSuite AI உங்களுக்கு வரும் ஒவ்வொரு lead-⁠க்கும்: …" — shortened from
// the PDF's step lines (01 RESPOND: "Seconds-⁠ல் reply செய்யுங்கள்…", 02 QUALIFY: "Budget, location…", etc.).
const steps = [
  { label: "Respond", text: "Seconds-⁠ல் respond செய்யும்.", icon: i.respond },
  { label: "Qualify", text: "Budget, location, timeline கேட்டு qualify செய்யும்.", icon: i.qualify },
  { label: "Book", text: "Qualified buyer-⁠க்கு site visit book செய்யும்.", icon: i.book },
  { label: "Hand Over", text: "முழு context-⁠உடன் salesperson-⁠க்கு hand over செய்யும்.", icon: i.handover },
  { label: "Follow Up", text: "Pending-⁠ல் இருக்கும் point-⁠ஐ வைத்து follow-⁠up செய்யும்.", icon: i.followup },
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
    <section className="border-t border-line bg-paper px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-balance text-[28px] font-extrabold leading-[1.3] sm:text-5xl sm:leading-[1.2]">
          {/* heading chosen in chat (the revised doc says "ஒரு lead-⁠ஐ capture செய்வது மட்டும் போதாது.") */}
          ஒரு Ad enquiry lead-⁠ஐ capture செய்வது <span className="whitespace-nowrap text-accent-deep">மட்டும் போதுமா?</span>
        </h2>
        <p className="mt-5 text-base font-semibold text-muted sm:text-lg">iSuite AI உங்களுக்கு வரும் ஒவ்வொரு lead-⁠க்கும்:</p>

        {/* 5 step cards — one list on phones/tablets, one row of 5 (with arrows between) on desktop */}
        <ol className="mx-auto mt-8 grid max-w-xl gap-3 text-left lg:max-w-none lg:grid-cols-5 lg:gap-4">
          {steps.map((s, idx) => (
            <li
              key={s.label}
              className="relative flex items-start gap-4 rounded-2xl border border-line bg-surface p-4 shadow-sm lg:flex-col lg:gap-3 lg:p-5"
            >
              {idx < steps.length - 1 && (
                <span
                  className="absolute -right-[13px] top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-paper text-xs text-accent-deep lg:flex"
                  aria-hidden
                >
                  →
                </span>
              )}
              <div className="flex shrink-0 items-center justify-between lg:w-full">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-deep">
                  <Icon d={s.icon} />
                </span>
                <span lang="en" className="hidden font-display text-sm font-extrabold text-muted lg:block">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <p lang="en" className="font-display text-[15px] font-extrabold uppercase tracking-wide sm:text-base">
                  <span className="text-muted lg:hidden">{String(idx + 1).padStart(2, "0")} · </span>
                  {s.label}
                </p>
                <p className="mt-1 text-[15px] leading-snug text-ink/80">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-10 max-w-3xl text-balance rounded-2xl bg-ink px-6 py-5 font-display text-lg font-bold leading-snug text-white sm:text-xl">
          ஒரு lead “contact saved” ஆக மட்டும் இல்லாமல்,{" "}
          <span className="text-accent">sales process-⁠ல் எங்கே இருக்கிறது என்பதும் தெரியும்.</span>
        </p>
      </div>
    </section>
  );
}
