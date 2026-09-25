// "Manager Visibility" — copy from the Tamil landing-page PDF (section 12).

const i = {
  inbox:
    "M22 12h-6l-2 3h-4l-2-3H2M5.5 5.1 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.5-6.9A2 2 0 0 0 16.8 4H7.2a2 2 0 0 0-1.7 1.1z",
  userCheck: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM16 11l2 2 4-4",
  calendar: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM9 16l2 2 4-4",
  clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2",
  flame:
    "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.3 1-3.3.3 1.2 1.2 2.4 2.5 2.8z",
  talk: "M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2zM18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",
  home: "M3 11l9-7 9 7v10H3V11zM9 21v-6h6v6",
};

// NEW ENQUIRIES • QUALIFIED • SITE VISITS BOOKED • FOLLOW-UPS DUE • HOT LEADS • NEGOTIATION • BOOKED
const stages = [
  { label: "New Enquiries", icon: i.inbox },
  { label: "Qualified", icon: i.userCheck },
  { label: "Site Visits Booked", icon: i.calendar },
  { label: "Follow-ups Due", icon: i.clock },
  { label: "Hot Leads", icon: i.flame },
  { label: "Negotiation", icon: i.talk },
  { label: "Booked", icon: i.home },
];

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

export function ManagerVisibility() {
  return (
    <section className="bg-paper px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mx-auto max-w-5xl text-balance text-[28px] font-extrabold leading-[1.3] sm:text-5xl sm:leading-[1.2]">
          ஒவ்வொரு property enquiry-⁠க்கும் <span className="text-accent-deep">என்ன நடக்கிறது</span> என்பதை தெரிந்து
          கொள்ளுங்கள்.
        </h2>

        {/* pipeline board — one column per stage */}
        <ol
          lang="en"
          className="mt-10 grid grid-cols-2 gap-2.5 rounded-3xl border border-line bg-surface p-3 text-left shadow-sm sm:mt-14 sm:grid-cols-4 sm:gap-3 sm:p-4 lg:grid-cols-7"
        >
          {stages.map((s, idx) => {
            const last = idx === stages.length - 1;
            return (
              <li
                key={s.label}
                className={`flex flex-col gap-3 rounded-2xl p-3.5 ${
                  last ? "col-span-2 bg-ink text-white sm:col-span-1" : "bg-paper"
                }`}
              >
                {/* progress bar fills up as the lead moves right */}
                <span className="h-1 overflow-hidden rounded-full bg-line" aria-hidden>
                  <span
                    className="block h-full rounded-full bg-accent"
                    style={{ width: `${Math.round(((idx + 1) / stages.length) * 100)}%` }}
                  />
                </span>
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                    last ? "bg-accent text-on-accent" : "bg-accent/15 text-accent-deep"
                  }`}
                >
                  <Icon d={s.icon} />
                </span>
                <span className="font-display text-xs font-bold uppercase leading-snug tracking-wide sm:text-[13px]">
                  {s.label}
                </span>
              </li>
            );
          })}
        </ol>

        <p className="mx-auto mt-10 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
          <span className="font-bold text-ink">“Indha lead enna status?”</span> என்று ஒவ்வொரு salesperson-⁠கிட்டயும்
          கேட்க வேண்டிய அவசியம் இல்லை.
          <span className="mt-2 block font-display text-lg font-bold text-ink sm:text-xl">
            Pipeline, owner, next action மற்றும் <span className="text-accent-deep">pending-⁠ஐ பாருங்கள்.</span>
          </span>
        </p>
      </div>
    </section>
  );
}
