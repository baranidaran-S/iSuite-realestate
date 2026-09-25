// TEMPORARY — section name tags for reviewing the page structure. Remove this file and
// every <SectionLabel /> in page.tsx once the section order is final.
// Zero-height wrapper, so the tag floats over the top-left of the next section
// without changing the layout.
export function SectionLabel({ n, name }: { n: number; name: string }) {
  return (
    <div className="relative z-40 h-0" aria-hidden>
      <span className="absolute left-2 top-2 rounded-md border border-white/40 bg-black px-2 py-1 font-mono text-[11px] font-bold uppercase tracking-wide text-white shadow-lg sm:left-4 sm:top-4 sm:text-xs">
        Section {String(n).padStart(2, "0")} · {name}
      </span>
    </div>
  );
}
