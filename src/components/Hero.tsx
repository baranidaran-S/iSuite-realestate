import Image from "next/image";

import { CtaButton } from "@/components/CtaButton";
import { ImageSlot } from "@/components/ImageSlot";
import { WorksWith } from "@/components/WorksWith";
import { images } from "@/images";

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

        {/* Hero copy from the Tamil landing-page PDF (hero section) */}
        <p className="mt-6 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/80 sm:text-sm">
          Real Estate-⁠க்கான AI Sales System
        </p>

        {/* fluid on phones so "Enquiry-⁠யிலிருந்து" (kept whole) fits even a 320px screen */}
        <h1 className="mt-6 text-[clamp(26px,8vw,34px)] font-extrabold leading-[1.2] sm:text-6xl sm:leading-[1.12]">
          Property Enquiry-⁠யிலிருந்து <span className="whitespace-nowrap text-accent">Site Visit வரை.</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          iSuite AI ஒவ்வொரு enquiry-⁠க்கும் பதில் அளிக்கிறது, சரியான qualification questions கேட்கிறது, தேவையான
          property information-⁠ஐ பகிர்கிறது, site visit-⁠ஐ book செய்கிறது, மேலும் முழு conversation context-⁠உடன்
          சரியான salesperson-⁠க்கு handover செய்கிறது.
        </p>

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
