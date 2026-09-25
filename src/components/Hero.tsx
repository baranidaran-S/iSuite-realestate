import Image from "next/image";

import { CtaButton } from "@/components/CtaButton";
import { ImageSlot } from "@/components/ImageSlot";
import { WorksWith } from "@/components/WorksWith";
import { images } from "@/images";

const audiences = ["Real Estate Builders", "Property Developers", "Agencies", "Brokers"];

const benefits = ["Seconds-⁠ல் reply", "Buyer qualification", "Site visit booking"];

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

        {/* hook — the ICP core pain, as the biggest line on the page */}
        {/* fluid on phones so "Leads வருகிறது…" stays on one line even at 360px */}
        <h1 className="mt-6 text-[clamp(28px,8.6vw,34px)] font-extrabold leading-[1.2] sm:text-6xl sm:leading-[1.12]">
          Leads வருகிறது…
          <br />
          ஆனால் <span className="whitespace-nowrap text-accent">follow-ups miss</span> ஆகிறதா?
        </h1>

        {/* promise — ICP positioning. A sub-line, not a second headline: body font,
            lighter weight, soft white; only the key outcome is brighter. */}
        <p className="mx-auto mt-5 max-w-2xl text-base font-normal leading-relaxed text-white/75 sm:text-lg lg:text-xl">
          Property Enquiries-⁠ஐ <span className="font-semibold text-white sm:whitespace-nowrap">Qualified Site Visits-⁠ஆக</span> மாற்றுங்கள்{" "}
          <span className="sm:whitespace-nowrap">
            — <span className="whitespace-nowrap">Follow-up-⁠ஐ</span> இழக்காமல்.
          </span>
        </p>

        {/* benefits */}
        <ul className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-semibold sm:gap-x-6">
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
          <CtaButton size="lg" motion="jump" className="w-full max-w-[480px] sm:w-auto sm:max-w-none" />
          <p className="mt-4 text-sm text-white/75 sm:text-base">
            <span lang="en" className="font-bold text-accent">
              Tamil • Tanglish • English • Hindi
            </span>
            -⁠ல் பேசும் AI
          </p>
        </div>
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

      <div className="relative mx-auto max-w-5xl">
        <WorksWith />
      </div>
    </section>
  );
}
