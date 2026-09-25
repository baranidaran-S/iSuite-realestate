"use client";

import { useId, useState } from "react";

const faqs = [
  {
    q: "iSuite AI ஒரு Real Estate CRM-⁠ஆ?",
    a: "iSuite AI ஒரு AI Sales System. Real-estate teams-⁠க்கு enquiries, qualification, booking, salesperson handover மற்றும் follow-up-⁠ஐ manage செய்ய உதவுகிறது.",
  },
  { q: "இது என் salespeople-⁠ஐ replace செய்யுமா?", a: "இல்லை. இது உங்கள் sales team-⁠உடன் சேர்ந்து வேலை செய்கிறது." },
  { q: "WhatsApp enquiries-⁠ஐ handle செய்யுமா?", a: "ஆம். WhatsApp iSuite AI sales journey-⁠ன் முக்கிய channel." },
  {
    q: "Property buyers-⁠ஐ qualify செய்ய முடியுமா?",
    a: "ஆம். Budget, location, property type, configuration மற்றும் timeline போன்ற information-⁠ஐ define செய்யலாம்.",
  },
  { q: "Site visits book செய்ய முடியுமா?", a: "ஆம், booking workflow மற்றும் availability configure செய்யப்பட்டிருந்தால்." },
  { q: "Salesperson conversation-⁠ஐ takeover செய்ய முடியுமா?", a: "ஆம், customer context-⁠உடன் handover செய்யலாம்." },
  { q: "Meta advertising cost iSuite AI-⁠க்குள் included-⁠ஆ?", a: "இல்லை. Meta தனது applicable rates-⁠ல் தனியாக charge செய்யும்." },
  { q: "Tamil-⁠ல் communicate செய்யுமா?", a: "ஆம். Tamil, Tanglish, English, Hindi மற்றும் more." },
  {
    q: "WhatsApp approval எவ்வளவு நேரம் ஆகும்?",
    a: "Approximately 1–2 weeks plan பண்ணுங்கள்; actual approval Meta review-⁠ஐ பொறுத்தது.",
  },
  {
    q: "WhatsApp-⁠ல் யாருக்கும் message அனுப்ப முடியுமா?",
    a: "Appropriate opt-in / permission கொடுத்த customers-⁠ஐ மட்டுமே contact செய்ய வேண்டும்.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="bg-paper px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 lang="en" className="text-center text-[28px] font-extrabold leading-[1.3] sm:text-5xl sm:leading-[1.2]">
          Frequently Asked <span className="text-accent-deep">Questions</span>
        </h2>

        <div className="mt-10 space-y-3 sm:mt-14 sm:space-y-4">
          {faqs.map((f, idx) => {
            const isOpen = open === idx;
            const panelId = `${baseId}-panel-${idx}`;
            const buttonId = `${baseId}-button-${idx}`;
            return (
              <div
                key={f.q}
                className={`rounded-2xl border bg-surface transition-[border-color,box-shadow] duration-300 ${
                  isOpen ? "border-accent-deep/40 shadow-lg shadow-ink/5" : "border-line hover:border-muted/40"
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-display text-base font-bold sm:px-7 sm:py-6 sm:text-xl"
                  >
                    {f.q}
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-10 sm:w-10 ${
                        isOpen ? "rotate-45 bg-accent text-on-accent" : "bg-paper text-accent-deep"
                      }`}
                      aria-hidden
                    >
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                </h3>

                {/* smooth height animation via grid rows 0fr -> 1fr */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  inert={!isOpen} /* closed answers are skipped by screen readers */
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 text-base leading-relaxed text-muted sm:px-7 sm:pb-7 sm:text-lg">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
