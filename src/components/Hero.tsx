import Image from "next/image";

import { CtaButton } from "@/components/CtaButton";
import { ImageSlot } from "@/components/ImageSlot";
import { WorksWith } from "@/components/WorksWith";
import { images } from "@/images";

const points = [
  "iSuite AI என்பது Real Estate-⁠க்கான AI Sales System.",
  "ஒவ்வொரு enquiry-⁠க்கும் பதில் அளிக்கிறது.",
  "சரியான qualification questions கேட்கிறது.",
  "தேவையான property information-⁠ஐ பகிர்கிறது.",
  "Site visit-⁠ஐ book செய்கிறது.",
  "முழு conversation context-⁠உடன் சரியான salesperson-⁠க்கு handover செய்கிறது.",
];

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


        {/* new hook chosen in chat (not in the docs). Same highlight style as before: only the key words
            ("Enquiries", "Site Visits") in the accent colour; from tablet width up it breaks after "Site Visits-⁠ஆக" */}
        <h1 className="mt-8 text-balance text-[clamp(26px,8vw,34px)] font-extrabold leading-[1.2] sm:mt-10 sm:text-5xl sm:leading-[1.12] lg:text-6xl">
          <span className="text-accent">Enquiries</span>-⁠ஐ{" "}
          <span className="whitespace-nowrap">
            <span className="text-accent">Site Visits</span>-⁠ஆக
          </span>{" "}
          <span className="md:block">
            மாற்றும் <span className="whitespace-nowrap">AI Sales System.</span>
          </span>
        </h1>

        {/* hero copy from the PDF, split into points; the first point was the pill above the headline */}
        <ul className="mx-auto mt-6 w-fit max-w-full space-y-2.5 text-left text-base leading-snug text-white/80 sm:text-lg">
          {points.map((p, idx) => (
            <li key={p} className="flex items-start gap-3">
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-on-accent sm:mt-1"
                aria-hidden
              >
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l5 5L20 7" />
                </svg>
              </span>
              <span className={idx === 0 ? "font-bold text-white" : undefined}>{p}</span>
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
            <span className="whitespace-nowrap">-⁠ல் பேசும் AI</span>
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
