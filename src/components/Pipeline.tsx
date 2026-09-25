// "Sales Pipeline" — copy from the revised buyer-persona document (section 14).

const stages = [
  "New Enquiry",
  "Contacted",
  "Qualified",
  "Property Matched",
  "Site Visit Planned",
  "Site Visit Completed",
  "Follow-up",
  "Negotiation",
  "Booking",
  "Closed",
];

// Chevron shape: notch on the left (except the first), point on the right.
const CHEVRON = "polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%)";
const CHEVRON_FIRST = "polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%)";

export function Pipeline() {
  return (
    <section className="bg-ink px-4 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-balance text-[28px] font-extrabold leading-[1.3] sm:text-5xl sm:leading-[1.2]">
          ஒவ்வொரு lead-⁠ம் ஒரு clear sales stage-⁠ல் <span className="text-accent">இருக்க வேண்டும்.</span>
        </h2>

        {/* the stage bar fills with green as the lead moves towards Closed */}
        <ol lang="en" className="mt-10 grid grid-cols-2 gap-x-1 gap-y-2 text-left sm:mt-14 sm:grid-cols-5">
          {stages.map((s, idx) => {
            const pct = Math.round(12 + (idx * 88) / (stages.length - 1));
            const strong = pct > 55;
            return (
              <li
                key={s}
                className={`flex min-h-[68px] flex-col justify-center py-3 pl-7 pr-6 ${strong ? "text-on-accent" : "text-white"}`}
                style={{
                  clipPath: idx === 0 ? CHEVRON_FIRST : CHEVRON,
                  background: `color-mix(in oklab, var(--color-accent) ${pct}%, var(--color-ink-soft))`,
                }}
              >
                <span className={`font-display text-xs font-extrabold ${strong ? "text-on-accent/70" : "text-white/60"}`}>
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[12px] font-bold uppercase leading-tight tracking-wide sm:text-[13px]">
                  {s}
                </span>
              </li>
            );
          })}
        </ol>

        <p lang="en" className="mx-auto mt-6 max-w-2xl text-balance text-sm text-white/65 sm:text-base">
          Suggested real-estate pipeline. Your team can adapt stages based on their actual sales process.
        </p>
      </div>
    </section>
  );
}
