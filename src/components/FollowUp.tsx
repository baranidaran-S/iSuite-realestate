// "Follow-up" — copy from the Tamil landing-page PDF (section 10).

const i = {
  target: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  chat: "M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-.9L3 20l1.1-4A8.4 8.4 0 1 1 21 11.5z",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",
};

const traits = [
  { title: "Specific", text: "Random reminders இல்லை.", icon: i.target },
  { title: "Context-aware", text: "Conversation-⁠ல் என்ன நடந்தது என்பதன் அடிப்படையில்.", icon: i.chat },
  { title: "Controlled", text: "Reply, booking, opt-out அல்லது human takeover நடந்தால் follow-up நிற்கும்.", icon: i.shield },
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

export function FollowUp() {
  return (
    <section className="bg-paper px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-[28px] font-extrabold leading-[1.3] sm:text-5xl sm:leading-[1.2]">
          Site visit நடந்துவிட்டது.
          <span className="block text-accent-deep">Sale முடிந்துவிடவில்லை.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Buyer இன்னொரு project-⁠ஐ compare செய்யலாம், family-⁠யுடன் discuss செய்யலாம், pricing கேட்கலாம், இன்னொரு
          visit தேவைப்படலாம் அல்லது time கேட்கலாம்.
        </p>

        <ul className="mx-auto mt-10 grid max-w-md gap-3 text-left sm:mt-12 sm:max-w-none sm:grid-cols-3 sm:gap-4">
          {traits.map((t) => (
            <li key={t.title} className="flex gap-4 rounded-2xl border border-line bg-surface p-5 shadow-sm sm:flex-col sm:gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent-deep">
                <Icon d={t.icon} />
              </span>
              <div>
                <p lang="en" className="font-display text-lg font-bold">
                  {t.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted sm:text-[15px]">{t.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 inline-block rounded-2xl bg-ink px-6 py-4 font-display text-lg font-bold text-white sm:text-xl">
          Site visit-⁠க்குப் பிறகு <span className="text-accent">buyer-⁠ஐ இழக்காதீர்கள்.</span>
        </p>
      </div>
    </section>
  );
}
