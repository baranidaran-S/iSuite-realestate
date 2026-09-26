// Attention bar above the hero — one hook line with a pulsing "live" dot.
// Wording chosen in chat (not in the docs). White bar, black text and a red dot — red on purpose here,
// as a caution sign (the rest of the page keeps one palette).
export function TopBar() {
  return (
    <div className="border-b border-black/10 bg-white px-4 py-2.5 text-center text-black">
      {/* phones: two halves — "● ஒவ்வொரு Missed Enquiry-⁠யும்" / "ஒரு Missed Booking!"; wider screens: one line */}
      <p className="text-[13px] font-bold leading-snug sm:text-base">
        <span className="relative mr-2 inline-flex h-2.5 w-2.5 align-middle" aria-hidden>
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-600 opacity-75 motion-reduce:hidden" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-600" />
        </span>
        ஒவ்வொரு Missed Enquiry-⁠யும் <span className="whitespace-nowrap">ஒரு Missed Booking!</span>
      </p>
    </div>
  );
}
