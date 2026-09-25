// Section 03 — "Every Enquiry Gets a Next Step", copy from the Tamil landing-page PDF (section 3).

/* Lucide-style stroke icon paths */
const icon = {
  respond: "M7.9 20A9 9 0 1 0 4 16.1L2 22z",
  qualify: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM16 11l2 2 4-4",
  book: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM9 16l2 2 4-4",
  handover:
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  followup: "M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5",
  close: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
};

const steps = [
  {
    title: "Respond",
    text: "Seconds-⁠ல் reply செய்யுங்கள் — approved property data, pricing மற்றும் rules அடிப்படையில்.",
    icon: icon.respond,
  },
  {
    title: "Qualify",
    text: "Budget, location, configuration, timeline மற்றும் buying intent பற்றி கேளுங்கள்.",
    icon: icon.qualify,
  },
  {
    title: "Book",
    text: "Qualified buyers-⁠ஐ site visit அல்லது அடுத்த சரியான sales action நோக்கி கொண்டு செல்லுங்கள்.",
    icon: icon.book,
  },
  {
    title: "Hand Over",
    text: "Customer என்ன விரும்புகிறார், என்ன பேசப்பட்டது, அடுத்து என்ன செய்ய வேண்டும் என்பதை salesperson பார்க்க முடியும்.",
    icon: icon.handover,
  },
  {
    title: "Follow Up",
    text: "உண்மையில் pending-⁠ல் இருக்கும் point-⁠ஐ வைத்து follow-up செய்யுங்கள்.",
    icon: icon.followup,
  },
  {
    title: "Close",
    text: "Sales pipeline மற்றும் next actions மூலம் opportunity-⁠ஐ track செய்யுங்கள்.",
    icon: icon.close,
  },
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

export function NextStep() {
  return (
    <section className="bg-ink px-4 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-[28px] font-extrabold leading-[1.3] sm:text-5xl sm:leading-[1.2]">
          ஒவ்வொரு property enquiry-⁠க்கும் <br className="hidden sm:inline" />
          <span className="text-accent">ஒரு next step</span> இருக்கும்.
        </h2>

        <ol className="mx-auto mt-10 grid max-w-md gap-3 text-left sm:mt-14 sm:max-w-none sm:grid-cols-2 sm:gap-4 lg:max-w-5xl lg:grid-cols-3">
          {steps.map((s, idx) => {
            const last = idx === steps.length - 1;
            return (
              <li
                key={s.title}
                className={`flex gap-4 rounded-2xl border p-4 transition hover:-translate-y-0.5 sm:flex-col sm:gap-3 sm:p-5 ${
                  last
                    ? "border-accent bg-accent text-on-accent shadow-lg shadow-accent/30"
                    : "border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] hover:border-accent/50"
                }`}
              >
                <div className="flex shrink-0 items-center gap-3 sm:justify-between">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                      last ? "bg-on-accent/10 text-on-accent" : "bg-accent/15 text-accent"
                    }`}
                  >
                    <Icon d={s.icon} />
                  </span>
                  <span
                    className={`hidden font-display text-sm font-extrabold sm:block ${
                      last ? "text-on-accent/70" : "text-white/50"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                </div>
                <div>
                  <p lang="en" className="font-display text-base font-bold sm:text-lg">
                    <span className={`sm:hidden ${last ? "text-on-accent/70" : "text-white/50"}`}>0{idx + 1} · </span>
                    {s.title}
                  </p>
                  <p
                    className={`mt-1 text-sm leading-relaxed sm:text-[15px] ${
                      last ? "text-on-accent/80" : "text-white/70"
                    }`}
                  >
                    {s.text}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
