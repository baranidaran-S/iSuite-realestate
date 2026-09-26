// Section 02 — "The Real Problem", copy from the Tamil landing-page PDF (section 2).

/* Lucide-style stroke icon paths */
const i = {
  chat: "M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-.9L3 20l1.1-4A8.4 8.4 0 1 1 21 11.5z",
  user: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM16 11l2 2 4-4",
  file: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h4",
  phone:
    "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z",
  calendar: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
  clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2",
  arrowDown: "M12 5v14M5 12l7 7 7-7",
};

// "யாரோ <action> <rest>" — the action word is bolded
const tasks = [
  { action: "reply", rest: "செய்ய வேண்டும்.", icon: i.chat, tone: "from-sky-400 to-blue-600" },
  { action: "qualify", rest: "செய்ய வேண்டும்.", icon: i.user, tone: "from-emerald-400 to-green-600" },
  { action: "brochure", rest: "அனுப்ப வேண்டும்.", icon: i.file, tone: "from-amber-300 to-orange-500" },
  { action: "call", rest: "செய்ய வேண்டும்.", icon: i.phone, tone: "from-cyan-400 to-teal-600" },
  { action: "site visit book", rest: "செய்ய வேண்டும்.", icon: i.calendar, tone: "from-violet-400 to-indigo-600" },
  { action: "follow-up", rest: "செய்ய வேண்டும்.", icon: i.clock, tone: "from-rose-400 to-pink-600" },
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

export function RealProblem() {
  return (
    <section className="bg-paper px-4 py-14 sm:py-20">
      {/* wide container so each sentence of the heading fits on one line on desktop */}
      <div className="mx-auto max-w-7xl text-center">
        {/* new heading chosen in chat (replaces the PDF's "உங்கள் Ads enquiries-⁠ஐ கொண்டு வருகிறது…") */}
        <h2 className="text-[28px] font-extrabold leading-[1.3] sm:text-5xl sm:leading-[1.2]">
          {/* 3 lines as written (on phones the middle line is too wide and splits in two) */}
          Enquiries வருகிறது.
          <span className="block">ஆனால் அவை Deals-⁠ஆக</span>
          <span className="block text-accent-deep">ஏன் மாறவில்லை?</span>
        </h2>

        {/* one enquiry → everything someone has to do by hand */}
        <div className="mx-auto mt-10 max-w-xl text-left sm:mt-12">
          <div className="flex items-center gap-3 rounded-2xl bg-accent px-4 py-3.5 font-bold text-on-accent shadow-lg shadow-accent/30">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-on-accent/15">
              <Icon d={i.arrowDown} className="h-4 w-4" />
            </span>
            ஒரு property enquiry வருகிறது.
          </div>

          <ol className="relative mt-3 space-y-3 pl-6">
            <span
              className="absolute bottom-6 left-[7px] top-0 w-0.5 bg-gradient-to-b from-accent-deep via-accent-deep/40 to-accent-deep/10"
              aria-hidden
            />
            {tasks.map((t) => (
              <li key={t.action} className="relative">
                <span
                  className="absolute -left-[21px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-accent-deep"
                  aria-hidden
                />
                <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-3 py-3 shadow-sm sm:gap-4 sm:px-4">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white shadow sm:h-11 sm:w-11 ${t.tone}`}
                  >
                    <Icon d={t.icon} />
                  </span>
                  <p className="text-[15px] leading-snug sm:text-base">
                    யாரோ <span className="font-bold">{t.action}</span> {t.rest}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* where it breaks */}
        <p className="mx-auto mt-8 max-w-2xl rounded-2xl bg-ink px-6 py-5 text-base leading-relaxed text-white/85 sm:mt-10 sm:text-lg">
          இவை எல்லாம் தனித்தனி <span className="font-semibold text-white">WhatsApp chats, spreadsheets</span> மற்றும்{" "}
          <span className="font-semibold text-white">phone calls</span>-⁠ல் நடக்கும்போது, முதல் enquiry-⁠க்கும் site
          visit-⁠க்கும் நடுவில் <span className="font-bold text-accent">leads காணாமல் போகலாம்.</span>
        </p>

      </div>
    </section>
  );
}
