"use client";

import { useEffect, useId, useRef, useState } from "react";
import { preconnect } from "react-dom";

import { site } from "@/config";

// Opens the demo-booking form (the CRM booking page) in a popup on this page.
// Any CtaButton calls openBooking(); one modal is mounted once in page.tsx.
const OPEN_EVENT = "isuite-open-booking";

export function openBooking() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function BookingModal() {
  // Warm up the connection to the CRM (DNS + TLS) while the visitor reads the page, so the
  // form starts downloading straight away on the first click. Downloads nothing itself.
  preconnect(new URL(site.bookingUrl).origin);

  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  // the iframe is only created on the first open (keeps the landing page light),
  // then kept so reopening is instant and a half-filled form isn't lost
  const [started, setStarted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const open = () => {
      setStarted(true);
      if (!dialog.open) dialog.showModal();
      document.documentElement.style.overflow = "hidden"; // stop the page scrolling behind
    };
    const onClose = () => {
      document.documentElement.style.overflow = "";
    };
    window.addEventListener(OPEN_EVENT, open);
    dialog.addEventListener("close", onClose);
    return () => {
      window.removeEventListener(OPEN_EVENT, open);
      dialog.removeEventListener("close", onClose);
    };
  }, []);

  const close = () => dialogRef.current?.close();

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      // click on the dim backdrop (outside the panel) closes it
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
      // Form-sized on desktop (the booking card is ~900px wide, ~690px tall); full screen on phones.
      // bg-paper matches the booking page's own light-grey background, so no seams show.
      className="m-auto h-dvh max-h-none w-screen max-w-none overflow-hidden bg-paper p-0 text-ink shadow-2xl backdrop:bg-ink/75 sm:h-[min(732px,calc(100dvh-32px))] sm:w-[min(940px,calc(100vw-48px))] sm:rounded-3xl"
    >
      {/* no visible title bar — the form has its own title; this names the popup for screen readers */}
      <p id={titleId} className="sr-only">
        FREE DEMO-⁠வை BOOK பண்ணுங்க
      </p>

      {/* floating close button (on phones it sits in a slim white strip above the form) */}
      <button
        type="button"
        onClick={close}
        aria-label="Close"
        className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-accent hover:text-on-accent"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" aria-hidden>
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>

      <div className="flex h-full flex-col pt-14 sm:pt-0">
        <div className="relative min-h-0 flex-1">
          {!loaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted" aria-live="polite">
              <span className="h-9 w-9 animate-spin rounded-full border-4 border-line border-t-accent-deep" aria-hidden />
              <span lang="en" className="text-sm font-semibold">
                Loading booking form…
              </span>
            </div>
          )}
          {started && (
            <iframe
              src={site.bookingUrl}
              title="Book a free real estate demo"
              onLoad={() => setLoaded(true)}
              className={`h-full w-full border-0 transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
            />
          )}
        </div>

        {/* quiet fallback in case the form doesn't load inside the popup */}
        <p className="py-2 text-center">
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            lang="en"
            className="text-xs font-semibold text-muted underline-offset-4 transition hover:text-ink hover:underline"
          >
            Open in new tab ↗
          </a>
        </p>
      </div>
    </dialog>
  );
}
