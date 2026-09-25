// "Site Visit" — copy from the Tamil landing-page PDF (section 8).

/* Lucide-style stroke icon paths */
const i = {
  calendar: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM9 16l2 2 4-4",
  clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2",
  check: "M22 11.1V12a10 10 0 1 1-5.9-9.1M22 4 12 14l-3-3",
  bell: "M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0",
  reschedule: "M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5",
  handover:
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  arrow: "M5 12h14M13 6l6 6-6 6",
};

const features = [
  { label: "Site visit booking", icon: i.calendar },
  { label: "Date/time selection", icon: i.clock },
  { label: "Confirmation", icon: i.check },
  { label: "Reminder", icon: i.bell },
  { label: "Rescheduling", icon: i.reschedule },
  { label: "Salesperson handover", icon: i.handover },
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

export function SiteVisit() {
  return (
    // border-t: follows the (also light) demo section, so a divider marks the boundary
    <section className="border-t border-line bg-paper px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-balance text-[28px] font-extrabold leading-[1.3] sm:text-5xl sm:leading-[1.2]">
          Goal இன்னொரு chat அல்ல.
          <span className="block text-accent-deep">Goal Site Visit.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          ஒரு real-estate enquiry மிகவும் valuable ஆகும் போது buyer <span className="font-bold text-ink">INTEREST</span>{" "}
          இலிருந்து <span className="font-bold text-ink">SITE VISIT</span>-⁠க்கு நகர்கிறார்.
        </p>

        <ul lang="en" className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 text-left sm:mt-12 sm:gap-4 lg:grid-cols-3">
          {features.map((f) => (
            <li
              key={f.label}
              className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-3 py-3.5 shadow-sm sm:px-5 sm:py-4"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent-deep">
                <Icon d={f.icon} />
              </span>
              <span className="text-sm font-bold leading-snug sm:text-base">{f.label}</span>
            </li>
          ))}
        </ul>

        {/* "Interested" → "I'll visit" */}
        <div className="mx-auto mt-12 max-w-3xl rounded-3xl bg-ink px-5 py-7 text-white sm:px-10">
          <div lang="en" className="flex items-center justify-center gap-3 sm:gap-5">
            <span className="rounded-2xl rounded-bl-sm bg-white px-4 py-2.5 text-sm font-semibold text-ink sm:text-base">
              “Interested”
            </span>
            <span className="flex items-center text-accent" aria-hidden>
              <span className="h-0.5 w-6 bg-accent/60 sm:w-12" />
              <Icon d={i.arrow} className="h-5 w-5" />
            </span>
            <span className="rounded-2xl rounded-br-sm bg-accent px-4 py-2.5 text-sm font-bold text-on-accent sm:text-base">
              “I&apos;ll visit”
            </span>
          </div>
          <p className="mt-5 text-balance font-display text-lg font-bold leading-snug sm:text-xl">
            “Interested” என்பதிலிருந்து <span className="whitespace-nowrap">“I&apos;ll visit”</span> வரை{" "}
            <span className="whitespace-nowrap text-accent">கொண்டு செல்லுங்கள்.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
