import { CtaButton } from "@/components/CtaButton";

const stages = [
  {
    stage: "Enquiry",
    problem: "புதிய leads Meta, portals, WhatsApp மற்றும் website-⁠லிருந்து வருகிறது.",
    role: "Capture செய்து seconds-⁠ல் respond செய்கிறது — approved property data, pricing மற்றும் rules அடிப்படையில்.",
  },
  {
    stage: "Qualification",
    problem: "Salespeople ஒரே basic questions-⁠ஐ மீண்டும் மீண்டும் கேட்கிறார்கள்.",
    role: "Budget, location, property type, configuration, timeline மற்றும் buying intent-⁠ஐ qualify செய்கிறது.",
  },
  {
    stage: "Property Match",
    problem: "Buyer-⁠க்கு relevant property information தேவை.",
    role: "உங்கள் rules-⁠படி approved property information-⁠ஐ மட்டும் பகிர்கிறது.",
  },
  {
    stage: "Site Visit",
    problem: "Interested buyers-⁠ஐ site visit-⁠க்கு நகர்த்த வேண்டும்.",
    role: "Booking, confirmation, reminders மற்றும் rescheduling-⁠ஐ drive செய்கிறது.",
  },
  {
    stage: "Handover",
    problem: "Salesperson-⁠க்கு phone number மட்டும் கிடைக்கலாம்.",
    role: "Customer context மற்றும் next action-⁠ஐ salesperson-⁠க்கு pass செய்கிறது.",
  },
  {
    stage: "Follow-up",
    problem: "நீண்ட decision cycles-⁠ல் follow-ups miss ஆகிறது.",
    role: "Defined next action நடக்கும் வரை context-aware follow-up தொடர்கிறது.",
  },
  {
    stage: "Management",
    problem: "Managers-⁠க்கு எல்லா leads, owners மீதும் visibility இல்லை.",
    role: "Pipeline, owner, next action மற்றும் pending work-⁠ஐ காட்டுகிறது.",
  },
  {
    stage: "Attribution",
    problem: "Lead cost மட்டும் business outcome-⁠ஐ காட்டாது.",
    role: "Campaign → Lead → Qualified → Site Visit → Opportunity → Booking → Revenue வரை connect செய்கிறது.",
  },
];

function Mark({ ok }: { ok: boolean }) {
  return (
    <span
      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
        ok ? "bg-accent text-on-accent" : "bg-white/10 text-white/50"
      }`}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
        <path d={ok ? "M5 12l5 5L20 7" : "M18 6 6 18M6 6l12 12"} />
      </svg>
    </span>
  );
}

export function StageCompare() {
  return (
    <section className="bg-ink px-4 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mx-auto max-w-3xl text-center text-[28px] font-extrabold leading-[1.3] sm:text-5xl sm:leading-[1.2]">
          ஒவ்வொரு stage-⁠லும் <span className="whitespace-nowrap text-accent">iSuite AI</span> என்ன செய்கிறது.
        </h2>

        <div className="mt-10 space-y-4 sm:mt-14 md:space-y-0 md:overflow-hidden md:rounded-3xl md:border-2 md:border-white/20 md:bg-ink-soft/40 md:shadow-[0_0_60px_-20px] md:shadow-accent/40">
          {/* column headers (desktop). Hidden from screen readers: each cell carries its own label below. */}
          <div className="hidden grid-cols-[200px_1fr_1fr] border-b-2 border-white/20 md:grid" aria-hidden>
            <div className="flex items-center bg-white/[0.06] px-6 py-5 font-display text-sm font-bold uppercase tracking-wide text-white/50">
              Stage
            </div>
            <div className="flex items-center gap-2 border-l-2 border-white/20 bg-white/[0.06] px-6 py-5 font-display text-lg font-bold text-white/70">
              <Mark ok={false} /> Without iSuite AI
            </div>
            <div className="flex items-center gap-2 border-l-2 border-accent/60 bg-accent/20 px-6 py-5 font-display text-lg font-bold text-accent">
              <Mark ok /> With iSuite AI
            </div>
          </div>

          {stages.map((s, idx) => (
            <div
              key={s.stage}
              className={`grid rounded-2xl border-2 border-white/15 bg-ink-soft/40 md:grid-cols-[200px_1fr_1fr] md:rounded-none md:border-0 md:bg-transparent ${
                idx > 0 ? "md:border-t md:border-white/20" : ""
              }`}
            >
              <div className="flex items-center gap-3 px-5 pt-5 md:px-6 md:py-6">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/50 font-display text-xs font-bold text-accent">
                  {idx + 1}
                </span>
                <span className="font-display text-base font-bold md:text-lg">{s.stage}</span>
              </div>
              <div className="flex items-center gap-3 px-5 pt-3 text-white/65 md:border-l-2 md:border-white/20 md:px-6 md:py-6">
                <span className="md:hidden">
                  <Mark ok={false} />
                </span>
                <p className="leading-relaxed">
                  <span className="sr-only">Without iSuite AI: </span>
                  {s.problem}
                </p>
              </div>
              <div className="m-3 flex items-center gap-3 rounded-2xl border border-accent/40 bg-accent/10 p-4 md:m-0 md:rounded-none md:border-0 md:border-l-2 md:border-accent/60 md:px-6 md:py-6">
                <span className="md:hidden">
                  <Mark ok />
                </span>
                <p className="font-semibold leading-relaxed">
                  <span className="sr-only">With iSuite AI: </span>
                  {s.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CtaButton motion="wiggle" className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  );
}
