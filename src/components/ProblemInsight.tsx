/* Lucide-style stroke icon paths */
const i = {
  chat: "M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-.9L3 20l1.1-4A8.4 8.4 0 1 1 21 11.5z",
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1",
  file: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h4",
  calendar: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
  clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2",
  sheet: "M4 3h16v18H4zM4 9h16M4 15h16M10 3v18",
  phone:
    "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z",
  missed:
    "M22 2l-6 6M16 2l6 6M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z",
  bell: "M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0",
  flag: "M4 22V4M4 4h13l-2 4 2 4H4",
  arrowDown: "M12 5v14M5 12l7 7 7-7",
  chevron: "M9 18l6-6-6-6",
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

const rows = [
  {
    stage: "Response",
    note: "யார் reply செய்வது?",
    icon: i.chat,
    tone: "from-sky-400 to-blue-600",
    leak: "WhatsApp chats",
    leakIcon: i.chat,
    leakTone: "bg-wa-green/15 text-wa-green",
  },
  {
    stage: "Qualification",
    note: "ஒரே questions மீண்டும் மீண்டும்.",
    icon: i.user,
    tone: "from-emerald-400 to-green-600",
    leak: "Spreadsheets",
    leakIcon: i.sheet,
    leakTone: "bg-emerald-400/15 text-emerald-400",
  },
  {
    stage: "Lead Ownership",
    note: "இந்த lead யாருடையது?",
    icon: i.file,
    tone: "from-amber-300 to-orange-500",
    leak: "Phone calls",
    leakIcon: i.phone,
    leakTone: "bg-sky-400/15 text-sky-400",
  },
  {
    stage: "Site Visits",
    note: "Interested buyer site visit-⁠க்கு வரவில்லை.",
    icon: i.calendar,
    tone: "from-violet-400 to-indigo-600",
    leak: "Missed call-back",
    leakIcon: i.missed,
    leakTone: "bg-rose-400/15 text-rose-400",
  },
  {
    stage: "Follow-up",
    note: "நீண்ட decision cycle-⁠ல் follow-up miss ஆகிறது.",
    icon: i.clock,
    tone: "from-rose-400 to-pink-600",
    leak: "Forgotten",
    leakIcon: i.bell,
    leakTone: "bg-amber-400/15 text-amber-400",
  },
];

function QuoteMark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex gap-1.5 ${className}`} aria-hidden>
      <span className="h-full w-2.5 -skew-x-[20deg] rounded-sm bg-accent" />
      <span className="h-full w-2.5 -skew-x-[20deg] rounded-sm bg-accent" />
    </span>
  );
}

export function ProblemInsight() {
  return (
    <section className="relative overflow-hidden bg-ink px-4 py-16 text-white sm:py-24">

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 xl:grid-cols-[1fr_1.05fr] xl:gap-16">
        {/* left: message (side by side only on wide screens; stacked below 1280px) */}
        <div className="text-center xl:text-left">
          <div className="flex items-center justify-center gap-3 xl:justify-start">
            <QuoteMark className="h-5" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">The Real Problem</span>
          </div>
          <h2 className="mt-5 text-[28px] font-extrabold leading-[1.3] sm:text-4xl sm:leading-[1.25] xl:text-[42px]">
            உங்கள் Ads enquiry-⁠ஐ கொண்டு வருகிறது.
            <span className="mt-1 block text-accent">ஆனால் வேலை அங்கே முடிவதில்லை.</span>
          </h2>
        </div>

        {/* right: leaking pipeline */}
        <div className="relative mx-auto w-full max-w-lg">
          <div className="flex items-center gap-3 rounded-2xl bg-accent px-4 py-3.5 font-bold text-on-accent shadow-[0_0_30px_-6px] shadow-accent/70">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-on-accent/15">
              <Icon d={i.arrowDown} className="h-4 w-4" />
            </span>
            ஒரு property enquiry வருகிறது.
          </div>

          <ol className="relative mt-3 space-y-3 pl-6">
            <span
              className="absolute bottom-6 left-[7px] top-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent/10"
              aria-hidden
            />
            {rows.map((r) => (
              <li key={r.stage} className="relative">
                <span
                  className="absolute -left-[21px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_10px] shadow-accent"
                  aria-hidden
                />
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-soft px-3 py-3 sm:gap-4 sm:px-4">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white shadow-lg sm:h-11 sm:w-11 ${r.tone}`}
                  >
                    <Icon d={r.icon} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-[15px] font-bold">{r.stage}</p>
                    <p className="text-xs leading-snug text-white/65 sm:text-sm">{r.note}</p>
                  </div>
                  <span className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-ink/60 py-1 pl-1 pr-1 text-[10px] font-semibold text-white/80 min-[400px]:pr-3 sm:text-xs">
                    <span className={`flex h-6 w-6 items-center justify-center rounded-full ${r.leakTone}`}>
                      <Icon d={r.leakIcon} className="h-3.5 w-3.5" />
                    </span>
                    <span className="hidden min-[400px]:inline">{r.leak}</span>
                  </span>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-3 ml-6 flex items-center gap-3 rounded-2xl border border-dashed border-white/25 px-4 py-3">
            <span className="text-sky-400">
              <Icon d={i.flag} className="h-4 w-4" />
            </span>
            <span className="whitespace-nowrap font-bold">Site Visit</span>
            <span className="ml-auto flex items-center gap-1 text-right text-xs text-white/55 sm:text-sm">
              leads காணாமல் போகலாம்…
              <Icon d={i.chevron} className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>

      {/* insight */}
      <div className="relative mx-auto mt-14 max-w-4xl rounded-3xl border border-accent/40 bg-gradient-to-br from-accent/15 via-ink-soft/40 to-ink-soft/20 px-6 py-8 text-center shadow-[0_0_50px_-12px] shadow-accent/50 sm:px-12 sm:py-10">
        <QuoteMark className="absolute left-6 top-6 hidden h-9 sm:flex" />
        <p className="font-display text-lg font-bold leading-snug sm:text-2xl">
          பிரச்சனை பெரும்பாலும் lead generation-⁠ல் இல்லை.
        </p>
        <p className="mt-2 font-display text-xl font-extrabold leading-snug text-accent sm:text-3xl">
          Lead வந்த பிறகு என்ன நடக்கிறது என்பதில் தான்.
        </p>
      </div>
    </section>
  );
}
