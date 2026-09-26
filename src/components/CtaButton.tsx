"use client";

import { useEffect, useRef, type MouseEvent } from "react";

import { openBooking } from "@/components/BookingModal";
import { site } from "@/config";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackLead() {
  window.fbq?.("track", "Lead");
}

/** Attention animation, one per button so each CTA feels different (styles in globals.css). */
type Motion = "jump" | "wiggle" | "pulse" | "shine" | "nudge";

export function CtaButton({
  className = "",
  size = "md",
  motion = "jump",
}: {
  className?: string;
  size?: "md" | "lg";
  motion?: Motion;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  // Animates on its own (not on hover/touch), repeating every few seconds while at least
  // half the button is on screen. Scrolling back to it restarts the animation right away.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cls = `cta-${motion}`;
    const io = new IntersectionObserver(
      ([entry]) => el.classList.toggle(cls, entry.intersectionRatio >= 0.5),
      { threshold: [0, 0.5] },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      el.classList.remove(cls);
    };
  }, [motion]);

  // A plain click opens the booking form in a popup on this page. Ctrl/Cmd/Shift/middle-click
  // (and no-JS) still follow the link to a new tab.
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    trackLead();
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    openBooking();
  };

  const sizing =
    size === "lg"
      ? "min-h-[64px] rounded-2xl px-8 text-lg sm:min-h-[72px] sm:text-xl"
      : "rounded-xl px-6 py-4 text-base";
  return (
    <a
      ref={ref}
      href={site.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      aria-haspopup="dialog"
      className={`relative inline-flex items-center justify-center gap-2 bg-accent font-bold text-on-accent shadow-lg shadow-accent/30 transition hover:-translate-y-0.5 hover:bg-accent-dark active:translate-y-0 ${sizing} ${className}`}
    >
      {/* when the label needs two lines (phones), it breaks as "FREE DEMO-⁠வை" / "BOOK பண்ணுங்க" */}
      <span className="text-center">
        FREE DEMO-⁠வை <span className="whitespace-nowrap">BOOK பண்ணுங்க</span>
      </span>
      <span aria-hidden>→</span>
    </a>
  );
}
