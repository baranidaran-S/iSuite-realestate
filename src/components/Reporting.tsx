// "Reporting & Business Visibility" — copy from the revised buyer-persona document (section 15).
// Replaces the Meta Ads section: marketing stays secondary, tied to sales outcomes.

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

// LEADS → QUALIFIED → SITE VISITS → OPPORTUNITIES → BOOKINGS → REVENUE
const flow = ["Leads", "Qualified", "Site Visits", "Opportunities", "Bookings", "Revenue"];

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
    // border-t: follows the (also dark) pipeline section
    <section className="border-t border-white/10 bg-ink px-4 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-balance text-[28px] font-extrabold leading-[1.3] sm:text-5xl sm:leading-[1.2]">
          Owner / Sales Head பார்க்க வேண்டிய <span className="text-accent">முக்கிய information.</span>
        </h2>

        <ul lang="en" className="mt-10 grid grid-cols-2 gap-3 text-left sm:mt-14 sm:grid-cols-3 lg:grid-cols-5">
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

        {/* marketing tied to sales outcomes */}
        <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-7 sm:mt-12 sm:px-8">
          <p className="font-semibold text-white/80">Marketing source-⁠ஐ sales outcome-⁠உடன் connect செய்யலாம்:</p>
          {/* one row on desktop; each arrow leads into its step, so a wrapped line
              starts "→ STEP" instead of ending on a lone arrow */}
          <p lang="en" className="mt-5 flex flex-wrap justify-center gap-x-2 gap-y-2 font-display text-sm font-bold uppercase sm:text-base">
            {flow.map((f, idx) => {
              const last = idx === flow.length - 1;
              return (
                <span key={f} className="flex items-center gap-2 whitespace-nowrap">
                  {idx > 0 && (
                    <span className="text-accent" aria-hidden>
                      →
                    </span>
                  )}
                  <span
                    className={`rounded-full px-3.5 py-1.5 ${
                      last ? "bg-accent text-on-accent" : "border border-white/15 bg-white/[0.06]"
                    }`}
                  >
                    {f}
                  </span>
                </span>
              );
            })}
          </p>
          <p lang="en" className="mt-6 font-display text-lg font-bold sm:text-xl">
            <span className="text-white/60">Focus:</span>{" "}
            <span className="text-accent">“Which leads moved through the sales process?”</span>
          </p>
        </div>

        <div className="mt-12 text-center">
          <CtaButton motion="wiggle" className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  );
}
