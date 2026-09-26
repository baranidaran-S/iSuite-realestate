import Image from "next/image";

import { CtaButton } from "@/components/CtaButton";
import { Audiences } from "@/components/Audiences";
import { BookingModal } from "@/components/BookingModal";
// HIDDEN for now (see page below) — remove for good after the final audit
// import { Differentiation } from "@/components/Differentiation";
import { Faq } from "@/components/Faq";
// HIDDEN for now (see page below) — remove for good after the final audit
// import { FollowUp } from "@/components/FollowUp";
// HIDDEN for now (see page below) — remove for good after the final audit
// import { Handover } from "@/components/Handover";
import { Hero } from "@/components/Hero";
// HIDDEN for now (see page below) — remove for good after the final audit
// import { ManagerVisibility } from "@/components/ManagerVisibility";
import { NextStep } from "@/components/NextStep";
// HIDDEN for now (see page below) — remove for good after the final audit
// import { Pipeline } from "@/components/Pipeline";
import { RealProblem } from "@/components/RealProblem";
import { TopBar } from "@/components/TopBar";
import { Reporting } from "@/components/Reporting";
import { SalesTeam } from "@/components/SalesTeam";
// HIDDEN for now (see page below) — remove for good after the final audit
// import { SiteVisit } from "@/components/SiteVisit";
import { Solution } from "@/components/Solution";
import { images } from "@/images";

/* ---------- Content ---------- */
// Across the page, a "-" before a Tamil suffix (Enquiries-⁠ஐ) is followed by an invisible
// word joiner (U+2060) so the suffix never wraps onto a line by itself. Retyping that
// hyphen drops the joiner, so copy the hyphen from an existing word when editing text.

// "AI" added to each rule in chat, so it's clear who won't do it
const safety = [
  "AI price-⁠ஐ invent செய்யாது",
  "AI available இல்லாத unit-⁠ஐ promise செய்யாது",
  "AI unauthorised discount கொடுக்காது",
  "Salesperson takeover செய்த பிறகு AI தொடர்ந்து பேசாது",
];

/* ---------- Page ---------- */

export default function Home() {
  return (
    <>
      <main className="reveal-sections overflow-x-clip">
        {/* attention bar at the very top */}
        <TopBar />

        {/* 1. Hook — PDF hero */}
        <Hero />

        {/* 2. Pain — PDF section 2 */}
        <RealProblem />

        {/* 3. What the AI does for every lead — revised doc section 6. Light like the section above
            (the dark Sales Journey section between them was removed), so it opens with a divider line. */}
        <NextStep />

        {/* 4. Proof — revised doc section 21 (demo flow) + chat demo */}
        <Solution />

        {/* 5–7. The buyer's journey, in order — PDF sections 8, 9, 10 */}
        {/* HIDDEN for now — remove for good after the final audit: <SiteVisit /> */}

        {/* HIDDEN for now — remove for good after the final audit: <Handover /> */}

        {/* HIDDEN for now — remove for good after the final audit: <FollowUp /> */}

        {/* 8. Objection: "will it replace my team?" — PDF section 11 */}
        <SalesTeam />

        {/* 9–11. Owner / manager view — PDF 12, revised doc 14, 15 */}
        {/* HIDDEN for now — remove for good after the final audit: <ManagerVisibility /> */}

        {/* HIDDEN for now — remove for good after the final audit: <Pipeline /> */}

        <Reporting />

        {/* 12–13. Objections: "just a CRM/chatbot?" and "will the AI say something wrong?" — revised doc 18, PDF 14 */}
        {/* HIDDEN for now — remove for good after the final audit: <Differentiation /> */}

        {/* light section — the page alternates dark / light */}
        <section className="bg-paper px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl text-center">
            {/* fluid size on phones so the longest unbroken phrase still fits a 320px screen */}
            <h2 className="text-[clamp(22px,7.2vw,28px)] font-extrabold leading-[1.3] sm:text-5xl sm:leading-[1.2]">
              {/* each phrase kept whole so a line never ends on a lone "உங்கள்" */}
              <span className="whitespace-nowrap">உங்கள் Property Data.</span>{" "}
              <span className="whitespace-nowrap">உங்கள் Prices.</span>{" "}
              <span className="whitespace-nowrap text-accent-deep">உங்கள் Rules.</span>
            </h2>
            <ul className="mt-10 grid gap-3 text-left sm:mt-12 sm:grid-cols-2 sm:gap-4">
              {safety.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-4 font-semibold leading-snug shadow-sm sm:px-5"
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-deep"
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
              Rules-⁠உடன் AI. <span className="text-accent-deep">Control உங்கள் team-⁠கிட்டே.</span>
            </p>
          </div>
        </section>

        {/* 14–15. Qualification + self-recognition — PDF 16, 17 (merged into one section in chat) */}
        <Audiences />


        {/* 16. Last doubts — PDF 21 */}
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
        {/* 17. Final CTA — ICP hook */}
        <section aria-labelledby="final-cta">
          {/* wide enough for "Enquiry-⁠யிலிருந்து Booking வரை —" (≈950px) on one line on desktop */}
          <div className="mx-auto max-w-5xl">
            <h2 id="final-cta" className="text-balance text-[28px] font-extrabold leading-[1.3] sm:text-5xl sm:leading-[1.2]">
              {/* heading chosen in chat (uses the revised doc's "Enquiry-⁠யிலிருந்து Booking வரை") */}
              <span className="block">Enquiry-⁠யிலிருந்து Booking வரை —</span>
              <span className="text-accent">ஒரு lead கூட miss ஆகாது.</span>
            </h2>
            {/* <p className="mt-5 text-base text-white/80 sm:text-lg">அடுத்த enquiry உங்கள் team-⁠க்காக wait பண்ண விடாதீர்கள்.</p> */}
            <CtaButton size="lg" motion="shine" className="mt-8 w-full max-w-[480px] sm:w-auto sm:max-w-none" />
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

      {/* one booking-form popup, opened by every demo button */}
      <BookingModal />
    </>
  );
}
