// "Sales Team" — copy from the Tamil landing-page PDF (section 11).

const i = {
  bot: "M12 8V4H8M4 8h16v12H4zM2 14h2M20 14h2M9 13v2M15 13v2",
  users:
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  plus: "M12 5v14M5 12h14",
};

const ai = ["First response", "Basic qualification", "Information sharing", "Booking flow", "Follow-up", "Lead context"];
const team = ["Relationship", "Negotiation", "Complex questions", "Site visit", "Commercial discussion", "Closing"];

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

function Side({ title, items, icon, ai: isAi }: { title: string; items: string[]; icon: string; ai?: boolean }) {
  return (
    <div
      className={`rounded-3xl border p-6 text-left sm:p-7 ${
        isAi ? "border-accent/40 bg-accent/10" : "border-white/15 bg-white/[0.05]"
      }`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${
            isAi ? "bg-accent text-on-accent" : "bg-white/10 text-white"
          }`}
        >
          <Icon d={icon} />
        </span>
        <h3 lang="en" className="font-display text-lg font-bold sm:text-xl">
          {title}
        </h3>
      </div>
      <ul lang="en" className="mt-5 flex flex-wrap gap-2">
        {items.map((x) => (
          <li
            key={x}
            className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold ${
              isAi ? "border-accent/40 text-white" : "border-white/20 text-white/90"
            }`}
          >
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SalesTeam() {
  return (
    <section className="bg-ink px-4 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-balance text-[28px] font-extrabold leading-[1.3] sm:text-5xl sm:leading-[1.2]">
          உங்கள் AI உங்கள் sales team-⁠உடன் வேலை செய்கிறது.
          <span className="block text-accent">அதற்குப் பதிலாக அல்ல.</span>
        </h2>

        <div className="mt-10 grid items-stretch gap-3 sm:mt-14 md:grid-cols-[1fr_auto_1fr] md:gap-4">
          <Side title="AI handles" items={ai} icon={i.bot} ai />
          <span
            className="mx-auto flex h-11 w-11 items-center justify-center self-center rounded-full border border-white/15 bg-ink-soft text-accent"
            aria-hidden
          >
            <Icon d={i.plus} />
          </span>
          <Side title="Your sales team handles" items={team} icon={i.users} />
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-balance font-display text-lg font-bold leading-snug sm:text-2xl">
          AI repetition-⁠ஐ handle செய்யும். <span className="text-accent sm:whitespace-nowrap">உங்கள் team sale-⁠ஐ handle செய்யும்.</span>
        </p>
      </div>
    </section>
  );
}
