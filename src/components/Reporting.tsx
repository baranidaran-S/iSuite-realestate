// "Reporting & Business Visibility" — copy from the revised buyer-persona document (section 15).
// Replaces the Meta Ads section. (The doc's "Marketing source → sales outcome" box was removed in chat.)

import { CtaButton } from "@/components/CtaButton";

/* Lucide-style stroke icon paths */
const i = {
  inbox:
    "M22 12h-6l-2 3h-4l-2-3H2M5.5 5.1 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.5-6.9A2 2 0 0 0 16.8 4H7.2a2 2 0 0 0-1.7 1.1z",
  userCheck: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM16 11l2 2 4-4",
  megaphone: "M3 11l18-5v12L3 14v-3zM11.6 16.8a3 3 0 1 1-5.8-1.6",
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1",
  clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2",
  pin: "M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  columns: "M3 3h18v18H3zM9 3v18M15 3v18",
  target: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  home: "M3 11l9-7 9 7v10H3V11zM9 21v-6h6v6",
  trend: "M22 7l-8.5 8.5-5-5L2 17M16 7h6v6",
};

const metrics = [
  { label: "Total leads", icon: i.inbox },
  { label: "Qualified leads", icon: i.userCheck },
  { label: "Lead source", icon: i.megaphone },
  { label: "Lead owner", icon: i.user },
  { label: "Pending follow-ups", icon: i.clock },
  { label: "Site visits", icon: i.pin },
  { label: "Pipeline stages", icon: i.columns },
  { label: "Sales outcomes", icon: i.target },
  { label: "Bookings", icon: i.home },
  { label: "Revenue visibility", icon: i.trend },
];

// The four questions an owner / sales head asks about any lead — from the revised doc's
// Manager / Owner Visibility section (section 7), added here in chat.
const questions = ["Who owns the lead?", "What is the current stage?", "What is the next action?", "What is pending?"];

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

export function Reporting() {
  return (
    <section className="bg-ink px-4 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-balance text-[28px] font-extrabold leading-[1.3] sm:text-5xl sm:leading-[1.2]">
          Owner / Sales Head பார்க்க வேண்டிய <span className="text-accent">முக்கிய information.</span>
        </h2>
        {/* revised doc section 7 (Manager / Owner Visibility) */}
        <p className="mx-auto mt-5 max-w-3xl text-balance text-base leading-relaxed text-white/75 sm:text-lg">
          ஒவ்வொரு salesperson-⁠ஐயும் call செய்து “இந்த lead status என்ன?” என்று கேட்க வேண்டிய நிலை வேண்டாம்.
        </p>

        {/* the four questions, answered at a glance */}
        <ul lang="en" className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 sm:mt-12 lg:grid-cols-4">
          {questions.map((q) => (
            <li
              key={q}
              className="flex items-center gap-3 rounded-2xl border border-accent/40 bg-accent/10 px-4 py-4 text-left font-display text-sm font-bold leading-snug sm:text-base"
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent font-display text-base font-extrabold text-on-accent"
                aria-hidden
              >
                ?
              </span>
              {q}
            </li>
          ))}
        </ul>

        <p className="mt-10 font-semibold text-white/80 sm:mt-12">ஒரே view-⁠ல் பார்க்கலாம்:</p>
        <ul lang="en" className="mt-5 grid grid-cols-2 gap-3 text-left sm:grid-cols-3 lg:grid-cols-5">
          {metrics.map((m) => (
            <li
              key={m.label}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-3 py-3.5 sm:px-4"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Icon d={m.icon} />
              </span>
              <span className="text-sm font-semibold leading-snug">{m.label}</span>
            </li>
          ))}
        </ul>


        <p className="mx-auto mt-10 max-w-3xl text-balance font-display text-lg font-bold leading-snug sm:text-2xl">
          இந்த visibility, management team-⁠க்கு{" "}
          <span className="text-accent">sales process-⁠ஐ control செய்ய உதவும்.</span>
        </p>

        <div className="mt-10 text-center">
          <CtaButton motion="wiggle" className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  );
}
