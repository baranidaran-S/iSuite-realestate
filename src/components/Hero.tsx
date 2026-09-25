import Image from "next/image";

import { CtaButton } from "@/components/CtaButton";
import { ImageSlot } from "@/components/ImageSlot";
import { WorksWith } from "@/components/WorksWith";
import { images } from "@/images";

const audiences = ["Builders", "Developers", "Agencies", "Brokers"];

const benefits = ["Seconds-⁠ல் reply", "Buyer qualification", "Site visit booking", "Salesperson-⁠க்கு full context"];

const icon = {
  enquiry: "M4 5h16v10H8l-4 4V5z",
  qualified: "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21v-1a7 7 0 0 1 11-5.7M15 18l2 2 4-4",
  visit: "M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  salesperson: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1",
  followup: "M20 12a8 8 0 1 1-2.3-5.7M20 4v4h-4",
  booking: "M3 11l9-7 9 7v10H3V11zM9 21v-6h6v6",
};

const promise = [
  { title: "Property Enquiry", sub: "Meta • Portal • WhatsApp", icon: icon.enquiry },
  { title: "Qualified Buyer", sub: "Budget • Location • Type", icon: icon.qualified },
  { title: "Site Visit", sub: "Booked & confirmed", icon: icon.visit },
  { title: "Salesperson", sub: "Full context handover", icon: icon.salesperson },
  { title: "Follow-up", sub: "Context-aware", icon: icon.followup },
  { title: "Booking", sub: "Sale moves forward", icon: icon.booking },
];

function StepIcon({ d }: { d: string }) {
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

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0 fill-current" aria-hidden>
      <path d="M8.1 14.3 3.8 10l1.4-1.4 2.9 2.9 6.7-6.7 1.4 1.4z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink px-4 pb-12 pt-8 text-white sm:pb-16 sm:pt-10">
      {/* soft spotlight behind the headline */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl text-center lg:max-w-5xl">
        <Image
          src="/images/logo-trim.png"
          alt="iSuite AI — Product of MnT Future"
          width={1873}
          height={625}
          loading="eager"
          className="mx-auto h-12 w-auto sm:h-16"
        />

        {/* who it's for */}
        <p className="mt-6 inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/80 sm:text-sm">
          {audiences.map((a, i) => {
            const last = i === audiences.length - 1;
            return (
              <span key={a} className="flex items-center gap-2">
                {a}
                {/* suffix hangs on the last name so it never starts a line on its own */}
                {last ? <span className="-ml-2 normal-case text-white/60">-⁠க்கான AI Sales System</span> : <span className="text-accent">•</span>}
              </span>
            );
          })}
        </p>

        {/* pain hook */}
        <p className="mt-6 text-base font-bold text-white/85 sm:text-lg">
          Leads வருகிறது… ஆனால் follow-ups miss ஆகிறதா?
        </p>

        {/* headline */}
        <h1 className="mt-3 text-[34px] font-extrabold leading-[1.2] sm:text-6xl sm:leading-[1.12]">
          Property Enquiries-⁠ஐ{" "}
          {/* desktop: the green phrase stays on one line → 3 clean lines */}
          <span className="text-accent lg:whitespace-nowrap">
            Qualified Site <span className="whitespace-nowrap">Visits-⁠ஆக</span>
          </span>{" "}
          மாற்றுங்கள்
        </h1>
        <p className="mt-3 font-display text-xl font-bold text-white/90 sm:text-3xl">— Follow-up-⁠ஐ இழக்காமல்.</p>

        {/* sub */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          iSuite AI ஒவ்வொரு enquiry-⁠க்கும் respond செய்து, buyer-⁠ஐ qualify செய்து, approved property
          information-⁠ஐ பகிர்ந்து, site visit book செய்து, முழு context-⁠உடன் salesperson-⁠க்கு handover செய்து,
          follow-up-⁠ஐ தொடர்ந்து நகர்த்துகிறது.
        </p>

        {/* benefits */}
        <ul className="mx-auto mt-6 grid max-w-xl grid-cols-2 gap-x-4 gap-y-2 text-left text-sm font-semibold sm:flex sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-x-6">
          {benefits.map((b) => (
            <li key={b} className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-on-accent">
                <Check />
              </span>
              {b}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-8 flex flex-col items-center">
          <CtaButton size="lg" className="w-full max-w-[480px] sm:w-auto sm:max-w-none" />
          <p className="mt-4 text-center text-sm leading-relaxed text-white/65">
            {/* inline so the dot stays right before the first word even when the text wraps */}
            <span className="relative mr-2 inline-flex h-2 w-2 align-middle" aria-hidden>
              <span className="pulse-3 absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            உங்கள் buyer இப்போது பல projects-⁠ஐ compare பண்ணிக்கொண்டிருக்கலாம்.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3">
            <p className="text-sm font-semibold text-white/80 sm:text-base">உங்கள் buyer-⁠ன் மொழியிலேயே பேசும்</p>
            <ul lang="en" className="flex flex-wrap items-center justify-center gap-2">
              {["Tamil", "Tanglish", "English", "Hindi"].map((l) => (
                <li
                  key={l}
                  className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-sm font-bold text-accent sm:px-4 sm:text-base"
                >
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <WorksWith />
      </div>

      {/* product image */}
      <div className="relative mx-auto mt-12 max-w-4xl">
        <ImageSlot
          src={images.hero}
          alt="iSuite AI sales dashboard showing conversations, pipeline and bookings"
          label="Image #1 — Phone + dashboard mockup (1600×1000)"
          width={1626}
          height={967}
          className="rounded-2xl shadow-2xl shadow-accent/20 ring-1 ring-white/10"
          priority
          dark
        />
      </div>

      {/* promise strip */}
      <div className="relative mx-auto mt-14 max-w-6xl">
        <ol lang="en" className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6 xl:gap-4">
          {promise.map((step, i) => {
            const last = i === promise.length - 1;
            return (
              <li
                key={step.title}
                className={`relative rounded-2xl border p-4 text-left transition hover:-translate-y-1 ${
                  last
                    ? "border-accent bg-accent text-on-accent shadow-lg shadow-accent/30"
                    : "border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] hover:border-accent/50"
                }`}
              >
                {!last && (
                  <span
                    className="absolute -right-[13px] top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-ink text-xs text-accent xl:flex"
                    aria-hidden
                  >
                    →
                  </span>
                )}
                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                      last ? "bg-on-accent/10 text-on-accent" : "bg-accent/15 text-accent"
                    }`}
                  >
                    <StepIcon d={step.icon} />
                  </span>
                  <span className={`font-display text-sm font-extrabold ${last ? "text-on-accent/70" : "text-white/50"}`}>
                    0{i + 1}
                  </span>
                </div>
                <p className="mt-4 font-display text-[15px] font-bold leading-snug">{step.title}</p>
                <p className={`mt-1 text-xs ${last ? "text-on-accent/80" : "text-white/55"}`}>{step.sub}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
