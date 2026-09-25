import { ImageSlot } from "@/components/ImageSlot";
import { images } from "@/images";

/* Lucide-style stroke icon paths */
const i = {
  building: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18zM6 12H4a2 2 0 0 0-2 2v8h4M18 9h2a2 2 0 0 1 2 2v11h-4M10 6h4M10 10h4M10 14h4M10 18h4",
  layers: "M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  briefcase: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
  star: "M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z",
  home: "M3 11l9-7 9 7v10H3V11zM9 21v-6h6v6",
  map: "M9 3 3 6v15l6-3 6 3 6-3V3l-6 3-6-3zM9 3v15M15 6v15",
  network: "M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM5 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM12 8v4M12 12l-5 4M12 12l5 4",
  store: "M3 9l1-5h16l1 5M3 9h18v11H3zM3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0M9 20v-6h6v6",
};

function Icon({ d }: { d: string }) {
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

const audiences = [
  { title: "Builders", icon: i.building },
  { title: "Property Developers", icon: i.layers },
  { title: "Real Estate Agencies", icon: i.briefcase },
  { title: "Premium Brokers", icon: i.star },
  { title: "Villa Developers", icon: i.home },
  { title: "Plot Developers", icon: i.map },
  { title: "Channel Partner Teams", icon: i.network },
  { title: "Commercial Property Sales Teams", icon: i.store },
];

export function Audiences() {
  return (
    <section className="bg-ink px-4 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mx-auto max-w-3xl text-center text-[28px] font-extrabold leading-[1.3] sm:text-5xl sm:leading-[1.2]">
          Conversations மூலம் sell செய்யும்{" "}
          <span className="text-accent sm:whitespace-nowrap">Real Estate teams-⁠க்காக</span> உருவாக்கப்பட்டது.
        </h2>

        <div className="mt-10 grid items-center gap-8 sm:mt-14 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <ImageSlot
              src={images.siteVisit}
              alt="Real estate salesperson meeting buyers for a site visit"
              label="Image #6 — Salesperson greeting buyers for site visit (1600×900)"
              width={1672}
              height={941}
              className="rounded-3xl"
              dark
            />
          </div>

          <ul className="grid grid-cols-2 gap-3">
            {audiences.map((a) => (
              <li
                key={a.title}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 transition hover:border-accent/50 hover:bg-accent/10 sm:p-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent transition group-hover:bg-accent group-hover:text-on-accent">
                  <Icon d={a.icon} />
                </span>
                <span className="font-display text-sm font-bold leading-snug sm:text-[15px]">{a.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
