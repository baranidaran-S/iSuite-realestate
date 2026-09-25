"use client";

import { site } from "@/config";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackLead() {
  window.fbq?.("track", "Lead");
}

export function CtaButton({ className = "", size = "md" }: { className?: string; size?: "md" | "lg" }) {
  const sizing =
    size === "lg"
      ? "min-h-[64px] rounded-2xl px-8 text-lg sm:min-h-[72px] sm:text-xl"
      : "rounded-xl px-6 py-4 text-base";
  return (
    <a
      href={site.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackLead}
      className={`inline-flex items-center justify-center gap-2 bg-accent font-bold text-on-accent shadow-lg shadow-accent/30 transition hover:-translate-y-0.5 hover:bg-accent-dark active:translate-y-0 ${sizing} ${className}`}
    >
      FREE REAL ESTATE DEMO BOOK பண்ணுங்கள்
      <span aria-hidden>→</span>
    </a>
  );
}
