import Image from "next/image";

import { CtaButton } from "@/components/CtaButton";
import { Audiences } from "@/components/Audiences";
import { CorePain } from "@/components/CorePain";
import { Differentiation } from "@/components/Differentiation";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { PaletteSwitcher } from "@/components/PaletteSwitcher";
import { ProblemInsight } from "@/components/ProblemInsight";
import { Solution } from "@/components/Solution";
import { StageCompare } from "@/components/StageCompare";
import { images } from "@/images";

/* ---------- Content ---------- */
// Across the page, a "-" before a Tamil suffix (Enquiries-⁠ஐ) is followed by an invisible
// word joiner (U+2060) so the suffix never wraps onto a line by itself. Retyping that
// hyphen drops the joiner, so copy the "-⁠" from an existing word when editing text.

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

const fit = [
  ["High enquiry volume + WhatsApp-heavy sales", "மிகக் குறைவான enquiries"],
  ["பல salespeople / channel teams", "Handover தேவையில்லாத single-person operation"],
  ["பல projects / properties", "ஒரே ஒரு simple product sale"],
  ["Site visit தான் முக்கிய conversion step", "Site visit / appointment step இல்லை"],
  ["நீண்ட follow-up cycle", "உடனே close ஆகும் transactions"],
  ["Manual lead distribution மற்றும் follow-up", "ஏற்கனவே consistent automated process இருக்கிறது"],
];

const safety = [
  "Price-⁠ஐ invent செய்யாது",
  "Available இல்லாத unit-⁠ஐ promise செய்யாது",
  "Unauthorised discount கொடுக்காது",
  "Salesperson takeover செய்த பிறகு தொடர்ந்து பேசாது",
];

/* ---------- Page ---------- */

export default function Home() {
  return (
    <>
      <main className="reveal-sections overflow-x-clip">
        {/* TEMPORARY palette review tool — remove after final palette is chosen */}
        <PaletteSwitcher />
        {/* 1. Hero — ICP positioning + promise */}
        <Hero />

        {/* 2. Core pain — ICP 4 */}
        <CorePain />

        {/* 3. Problem + Insight — ICP 7 */}
        <ProblemInsight />

        {/* 4. Solution + Buyer journey — ICP 7, 2 */}
        <Solution />

        {/* 5. Stage table — ICP 6 */}
        <StageCompare />

        {/* 6. Differentiation — ICP 10 */}
        <Differentiation />

        {/* 7. Who it's for — ICP 1 */}
        <Audiences />

        {/* 8. Is this for you — ICP 3, 8 */}
        <section className="border-t border-white/10 bg-ink px-4 py-16 text-white sm:py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mx-auto max-w-3xl text-center text-[28px] font-extrabold leading-[1.3] sm:text-5xl sm:leading-[1.2]">
              இவற்றில் ஏதாவது உங்களுக்கு familiar-⁠ஆ இருந்தால்,{" "}
              <span className="text-accent">iSuite AI உங்களுக்காக.</span>
            </h2>
            <ul className="mt-10 grid gap-3 sm:mt-14 md:grid-cols-2 md:gap-4">
              {signals.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 rounded-2xl rounded-tl-sm border border-white/15 bg-white/[0.05] px-4 py-4 leading-relaxed transition hover:border-accent/50 hover:bg-accent/10 sm:px-5"
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
              <CtaButton className="w-full sm:w-auto" />
            </div>
          </div>
        </section>

        {/* 9. Right fit / not the right fit — ICP 9 */}
        <section className="bg-paper px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-[28px] font-extrabold leading-[1.3] sm:text-5xl sm:leading-[1.2]">
              iSuite AI உங்களுக்கு <span className="text-accent-deep">சரியானதா?</span>
            </h2>

            <div className="mt-10 grid items-start gap-5 sm:mt-14 md:grid-cols-[1.1fr_1fr] md:gap-6">
              {/* strong fit */}
              <div className="overflow-hidden rounded-3xl border-2 border-accent bg-surface shadow-xl shadow-accent/15">
                <div className="flex items-center gap-3 bg-accent px-6 py-4 text-on-accent">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-on-accent/15" aria-hidden>
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                  <h3 className="font-display text-base font-extrabold sm:text-xl">சரியான fit</h3>
                </div>
                <ul className="divide-y divide-line px-6 py-2">
                  {fit.map(([strong]) => (
                    <li key={strong} className="flex items-center gap-3 py-3.5 font-semibold leading-snug">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-deep" aria-hidden>
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      {strong}
                    </li>
                  ))}
                </ul>
              </div>

              {/* weak fit */}
              <div className="overflow-hidden rounded-3xl border border-line bg-surface/70 md:mt-6">
                <div className="flex items-center gap-3 border-b border-line px-6 py-4 text-muted">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-paper" aria-hidden>
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                  </span>
                  <h3 className="font-display text-base font-bold sm:text-xl">இப்போது தேவையில்லை</h3>
                </div>
                <ul className="divide-y divide-line px-6 py-2 text-muted">
                  {fit.map(([, weak]) => (
                    <li key={weak} className="flex items-center gap-3 py-3.5 leading-snug">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted/50" aria-hidden />
                      {weak}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Trust — AI safety (PDF 1) */}
        <section className="bg-ink px-4 py-16 text-white sm:py-24">
          <div className="mx-auto max-w-4xl text-center">
            {/* fluid size on phones so the longest unbroken phrase still fits a 320px screen */}
            <h2 className="text-[clamp(22px,7.2vw,28px)] font-extrabold leading-[1.3] sm:text-5xl sm:leading-[1.2]">
              {/* each phrase kept whole so a line never ends on a lone "உங்கள்" */}
              <span className="whitespace-nowrap">உங்கள் Property Data.</span>{" "}
              <span className="whitespace-nowrap">உங்கள் Prices.</span>{" "}
              <span className="whitespace-nowrap text-accent">உங்கள் Rules.</span>
            </h2>
            <ul className="mt-10 grid gap-3 text-left sm:mt-12 sm:grid-cols-2 sm:gap-4">
              {safety.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.05] px-4 py-4 font-semibold leading-snug sm:px-5"
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent"
                    aria-hidden
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </span>
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-10 font-display text-lg font-bold sm:text-2xl">
              Rules-⁠உடன் AI. <span className="text-accent">Control உங்கள் team-⁠கிட்டே.</span>
            </p>
          </div>
        </section>

        {/* 11. FAQ */}
        <Faq />
      </main>

      {/* Final CTA + footer share one background image. They sit outside <main> so the
          footer is announced as the page footer; the named section stays a landmark. */}
      <div
        className={`reveal-final bg-ink px-4 pt-20 text-center text-white sm:pt-28 ${images.ctaBackground ? "cta-bg" : ""}`}
        style={
          images.ctaBackground ? ({ "--cta-image": `url(${images.ctaBackground})` } as React.CSSProperties) : undefined
        }
      >
        {/* 12. Final CTA — ICP hook */}
        <section aria-labelledby="final-cta">
          <div className="mx-auto max-w-3xl">
            <h2 id="final-cta" className="text-[28px] font-extrabold leading-[1.3] sm:text-5xl sm:leading-[1.2]">
              ஒவ்வொரு property enquiry-⁠க்கும் <span className="whitespace-nowrap text-accent">ஒரு next step</span> இருக்க வேண்டும்.
            </h2>
            <p className="mt-5 text-base text-white/80 sm:text-lg">அடுத்த enquiry உங்கள் team-⁠க்காக wait பண்ண விடாதீர்கள்.</p>
            <CtaButton size="lg" className="mt-8 w-full max-w-[480px] sm:w-auto sm:max-w-none" />
          </div>
        </section>

        <footer className="mx-auto mt-20 flex max-w-2xl flex-col items-center gap-4 border-t border-white/10 py-10 text-center sm:mt-28">
          <Image
            src="/images/logo-trim.png"
            alt="iSuite AI — Product of MnT Future"
            width={1873}
            height={625}
            className="h-10 w-auto sm:h-12"
          />
          <p className="max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
            Real Estate-⁠க்கான AI Sales System —{" "}
            <span className="sm:whitespace-nowrap">Property Enquiry-⁠யிலிருந்து Site Visit வரை.</span>
          </p>
          <p lang="en" className="text-xs text-white/50 sm:text-sm">
            © 2026{" "}
            <a
              href="https://mntfuture.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/70 underline-offset-4 transition hover:text-accent hover:underline"
            >
              MnT Future
            </a>
            . All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
