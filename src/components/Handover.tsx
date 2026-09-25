// "Salesperson Handover" — copy from the Tamil landing-page PDF (section 9).
// The PDF's card is a 2BHK apartment example (our chat demo is a plot), so the page shows both.
// BUDGET: the PDF has a "₹XX–₹XX" placeholder; ₹45–55 லட்சம் is a sample value.

const i = {
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1",
  arrow: "M5 12h14M13 6l6 6-6 6",
};

const details = [
  { label: "Buyer wants", value: "2BHK apartment" },
  { label: "Budget", value: "₹45–55 லட்சம்" },
  { label: "Location", value: "Madurai" },
  { label: "Timeline", value: "Next 3 months" },
  { label: "What AI did", value: "Project details shared + buyer qualified" },
  { label: "Site visit", value: "Saturday, 11 AM" },
  { label: "Next step", value: "Salesperson follow-up" },
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

export function Handover() {
  return (
    <section className="bg-ink px-4 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-balance text-[28px] font-extrabold leading-[1.3] sm:text-5xl sm:leading-[1.2]">
          Salesperson takeover செய்யும்போது{" "}
          <span className="text-accent sm:block">zero-⁠வில் இருந்து start செய்ய வேண்டாம்.</span>
        </h2>

        {/* the handover card the salesperson receives */}
        <div className="mx-auto mt-10 max-w-xl overflow-hidden rounded-3xl border border-white/15 bg-ink-soft/60 text-left shadow-[0_0_60px_-20px] shadow-accent/50 sm:mt-14">
          {/* AI → salesperson */}
          <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.04] px-5 py-4" aria-hidden>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-display text-xs font-extrabold text-on-accent">
              AI
            </span>
            <span className="flex items-center text-accent">
              <span className="h-0.5 w-8 bg-accent/50" />
              <Icon d={i.arrow} className="h-4 w-4" />
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
              <Icon d={i.user} />
            </span>
          </div>

          <dl className="divide-y divide-white/10 px-5">
            {details.map((d, idx) => {
              const last = idx === details.length - 1;
              return (
                <div key={d.label} className="grid grid-cols-[112px_1fr] items-baseline gap-3 py-3 sm:grid-cols-[140px_1fr]">
                  <dt lang="en" className="text-xs font-bold uppercase tracking-wide text-white/60">
                    {d.label}
                  </dt>
                  <dd className={`font-semibold leading-snug ${last ? "text-accent" : "text-white"}`}>{d.value}</dd>
                </div>
              );
            })}
          </dl>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-balance font-display text-lg font-bold leading-snug sm:text-2xl">
          Salesperson-⁠க்கு phone number மட்டும் இல்லை —{" "}
          <span className="whitespace-nowrap text-accent">முழு context கிடைக்கும்.</span>
        </p>
      </div>
    </section>
  );
}
