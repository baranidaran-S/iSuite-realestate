import { CtaButton } from "@/components/CtaButton";

// "Who is this for?" — merged in chat from two sections: the business types (PDF 16) and the
// "if any of these sound familiar" statements (PDF 17). The photo was dropped.

/* Lucide-style stroke icon paths */
const i = {
  building: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18zM6 12H4a2 2 0 0 0-2 2v8h4M18 9h2a2 2 0 0 1 2 2v11h-4M10 6h4M10 10h4M10 14h4M10 18h4",
  layers: "M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  briefcase: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
  star: "M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z",
  home: "M3 11l9-7 9 7v10H3V11zM9 21v-6h6v6",
  map: "M9 3 3 6v15l6-3 6 3 6-3V3l-6 3-6-3zM9 3v15M15 6v15",
  network: "M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM5 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM12 8v4M12 12l-5 4M12 12l5 4",
  store: "M3 9l1-5h16l1 5M3 9h18v11H3zM3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0M9 20v-6h6v6",
};

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

const audiences = [
  { title: "Builders", icon: i.building },
  { title: "Property Developers", icon: i.layers },
  { title: "Real Estate Agencies", icon: i.briefcase },
  { title: "Premium Brokers", icon: i.star },
  { title: "Villa Developers", icon: i.home },
  { title: "Plot Developers", icon: i.map },
  { title: "Channel Partner Teams", icon: i.network },
  { title: "Commercial Property Sales Teams", icon: i.store },
];

// what a buyer-persona owner / sales head says out loud (PDF 17)
const signals = [
  "Meta Ads run செய்கிறோம் / Portal-⁠லிருந்து enquiries வருகிறது.",
  "எங்கள் leads WhatsApp-⁠க்கு வருகிறது.",
  "பல projects, பல salespeople manage செய்கிறோம்.",
  "Leads manually distribute செய்கிறோம்.",
  "எங்கள் salespeople consistent-⁠ஆ follow-up செய்யவில்லை.",
  "எந்த leads pending-⁠ல் இருக்கிறது என்று எனக்குத் தெரியவில்லை.",
  "Transfer செய்யும்போது customer மீண்டும் எல்லாவற்றையும் சொல்ல வேண்டியுள்ளது.",
  "Site visits miss ஆகிறது.",
  "Buyers முடிவெடுக்க மாதக்கணக்கில் ஆகிறது.",
  "எந்த ads உண்மையில் bookings கொண்டு வந்தது என்று தெரியவில்லை.",
];

export function Audiences() {
  return (
    // dark section — the page alternates dark / light
    <section className="bg-ink px-4 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl">
        {/* heading chosen in chat (the PDF says "Conversations மூலம் sell செய்யும் Real Estate teams-⁠க்காக
            உருவாக்கப்பட்டது.") — asks the question the cards and statements below answer */}
        <h2 className="mx-auto max-w-4xl text-balance text-center text-[28px] font-extrabold leading-[1.3] sm:text-5xl sm:leading-[1.2]">
          <span className="text-accent">யாருக்காக</span> இந்த <span className="whitespace-nowrap">iSuite AI</span> உருவாக்கப்பட்டது?
        </h2>

        {/* the business types */}
        <ul lang="en" className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 lg:grid-cols-4">
          {audiences.map((a) => (
            <li
              key={a.title}
              className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-3 transition hover:border-accent/50 hover:bg-accent/10 sm:p-4"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent transition group-hover:bg-accent group-hover:text-on-accent">
                <Icon d={a.icon} />
              </span>
              <span className="font-display text-sm font-bold leading-snug sm:text-[15px]">{a.title}</span>
            </li>
          ))}
        </ul>

        {/* self-recognition: "does this sound like us?" */}
        <div className="mx-auto mt-14 max-w-5xl sm:mt-16">
          <h3 className="mx-auto max-w-3xl text-balance text-center font-display text-xl font-extrabold leading-snug sm:text-3xl">
            இவற்றில் ஏதாவது உங்களுக்கு familiar-⁠ஆ இருந்தால்,{" "}
            <span className="whitespace-nowrap text-accent">iSuite AI உங்களுக்காக.</span>
          </h3>
          <ul className="mt-8 grid gap-3 md:grid-cols-2 md:gap-4">
            {signals.map((s) => (
              <li
                key={s}
                className="flex items-center gap-3 rounded-2xl rounded-tl-sm border border-white/15 bg-white/[0.05] px-4 py-4 leading-relaxed sm:px-5"
              >
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-on-accent"
                  aria-hidden
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                <span className="text-white/90">“{s}”</span>
              </li>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <CtaButton motion="pulse" className="w-full sm:w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
