// Temporary palette preview — delete this folder once a palette is chosen.

type Palette = {
  id: string;
  name: string;
  mood: string;
  navy: string;
  navySoft: string;
  accent: string;
  accentText: string;
  highlight: string;
  light: string;
  muted: string;
};

const palettes: Palette[] = [
  {
    id: "1",
    name: "Navy + Gold",
    mood: "Premium, trustworthy — classic real estate feel",
    navy: "#0B1B33",
    navySoft: "#13294B",
    accent: "#F2B544",
    accentText: "#0B1B33",
    highlight: "#F2B544",
    light: "#F8F6F1",
    muted: "#5B6B82",
  },
  {
    id: "2",
    name: "Navy + Emerald (current, refined)",
    mood: "Growth, WhatsApp-friendly, calm",
    navy: "#0B1B33",
    navySoft: "#13294B",
    accent: "#10B981",
    accentText: "#FFFFFF",
    highlight: "#34D399",
    light: "#F1F7F5",
    muted: "#5B6B82",
  },
  {
    id: "3",
    name: "Navy + Coral",
    mood: "Energetic, high-attention buttons — strong for ads",
    navy: "#0B1B33",
    navySoft: "#15294A",
    accent: "#FF6B4A",
    accentText: "#FFFFFF",
    highlight: "#FF8A6E",
    light: "#FFF6F2",
    muted: "#5B6B82",
  },
  {
    id: "4",
    name: "Navy + Champagne + Sky",
    mood: "Luxury property brand, soft and elegant",
    navy: "#0A1730",
    navySoft: "#132647",
    accent: "#E6BE7E",
    accentText: "#0A1730",
    highlight: "#7DD3FC",
    light: "#F6F4EF",
    muted: "#56647A",
  },
  {
    id: "5",
    name: "Navy + Electric Cyan",
    mood: "Modern AI / tech product feel",
    navy: "#081A33",
    navySoft: "#10284D",
    accent: "#22C3EE",
    accentText: "#081A33",
    highlight: "#67E8F9",
    light: "#F0F7FB",
    muted: "#55667F",
  },

  // ---- Non-navy dark backgrounds ----
  {
    id: "6",
    name: "Charcoal + Gold",
    mood: "Luxury, bold, very premium — neutral dark base",
    navy: "#16181D",
    navySoft: "#23262E",
    accent: "#E9B949",
    accentText: "#16181D",
    highlight: "#E9B949",
    light: "#F7F5F0",
    muted: "#5E6470",
  },
  {
    id: "7",
    name: "Deep Forest Green + Brass",
    mood: "Land, property, nature — trusted and grounded",
    navy: "#0F2A22",
    navySoft: "#173B30",
    accent: "#D9A441",
    accentText: "#0F2A22",
    highlight: "#E7C074",
    light: "#F4F6F1",
    muted: "#55675F",
  },
  {
    id: "8",
    name: "Deep Teal + Coral",
    mood: "Fresh and modern, friendly but professional",
    navy: "#0B2E33",
    navySoft: "#12424A",
    accent: "#FF7A59",
    accentText: "#FFFFFF",
    highlight: "#5EEAD4",
    light: "#F0F7F7",
    muted: "#52696C",
  },
  {
    id: "9",
    name: "Aubergine + Peach",
    mood: "Distinctive and stylish — stands out from other SaaS pages",
    navy: "#241634",
    navySoft: "#34214A",
    accent: "#FFB38A",
    accentText: "#241634",
    highlight: "#FFB38A",
    light: "#F8F4F7",
    muted: "#665A72",
  },
  {
    id: "10",
    name: "Burgundy + Champagne",
    mood: "Rich, heritage, high-end property brand",
    navy: "#2B0F17",
    navySoft: "#3F1822",
    accent: "#E6C38A",
    accentText: "#2B0F17",
    highlight: "#E6C38A",
    light: "#FAF5F2",
    muted: "#6E5A5F",
  },
  {
    id: "11",
    name: "Slate Graphite + Lime",
    mood: "Tech-forward, energetic AI product",
    navy: "#1B2230",
    navySoft: "#273041",
    accent: "#B8F34A",
    accentText: "#1B2230",
    highlight: "#B8F34A",
    light: "#F3F5F8",
    muted: "#5D6677",
  },
  {
    id: "12",
    name: "Espresso Brown + Terracotta",
    mood: "Warm, earthy, homely — bricks and buildings",
    navy: "#2A1D17",
    navySoft: "#3B2A21",
    accent: "#E07A4F",
    accentText: "#FFFFFF",
    highlight: "#F2A97F",
    light: "#FAF4EE",
    muted: "#6B5A50",
  },
  {
    id: "13",
    name: "Midnight Indigo + Amber",
    mood: "Rich and confident — a warmer take on dark blue",
    navy: "#1E1B4B",
    navySoft: "#2E2A6B",
    accent: "#FBBF24",
    accentText: "#1E1B4B",
    highlight: "#FCD34D",
    light: "#F5F5FB",
    muted: "#5D5B7A",
  },
  {
    id: "14",
    name: "Jet Black + Orange",
    mood: "Maximum contrast — loud, bold, ad-grabbing",
    navy: "#0D0D0D",
    navySoft: "#1C1C1C",
    accent: "#FF7A1A",
    accentText: "#0D0D0D",
    highlight: "#FF9A4D",
    light: "#F6F5F3",
    muted: "#5F5F5F",
  },
  {
    id: "15",
    name: "Olive + Cream",
    mood: "Calm, natural, upscale villa / plot projects",
    navy: "#2B3222",
    navySoft: "#3A4330",
    accent: "#E8D5A3",
    accentText: "#2B3222",
    highlight: "#C9B37A",
    light: "#F7F5EC",
    muted: "#636955",
  },
  {
    id: "16",
    name: "Deep Ocean + Gold",
    mood: "Blue-green depth, premium coastal / township feel",
    navy: "#0A2A3A",
    navySoft: "#0F3B50",
    accent: "#F0B429",
    accentText: "#0A2A3A",
    highlight: "#F0B429",
    light: "#F1F6F8",
    muted: "#52666F",
  },
  {
    id: "17",
    name: "Maroon + Rose Gold",
    mood: "Bold and warm, very Indian premium feel",
    navy: "#3A0D1A",
    navySoft: "#521427",
    accent: "#E8A87C",
    accentText: "#3A0D1A",
    highlight: "#F4C2A1",
    light: "#FBF4F1",
    muted: "#735A62",
  },
];

function Swatch({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="h-6 w-6 rounded-md border border-black/10" style={{ background: color }} />
      <span>
        <span className="font-semibold">{label}</span> <span className="text-gray-500">{color}</span>
      </span>
    </div>
  );
}

export default function Palettes() {
  return (
    <main className="mx-auto max-w-5xl space-y-12 px-4 py-10">
      <h1 className="text-3xl font-extrabold">Colour palette options</h1>
      {palettes.map((p) => (
        <section key={p.id} className="overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-5">
            <div>
              <h2 className="text-xl font-extrabold">
                {p.id}. {p.name}
              </h2>
              <p className="text-sm text-gray-500">{p.mood}</p>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
              <Swatch color={p.navy} label="Base" />
              <Swatch color={p.navySoft} label="Base soft" />
              <Swatch color={p.accent} label="Accent" />
              <Swatch color={p.highlight} label="Highlight" />
              <Swatch color={p.light} label="Light bg" />
              <Swatch color={p.muted} label="Muted text" />
            </div>
          </div>

          {/* Dark hero sample */}
          <div
            className="px-6 py-10 text-center text-white"
            style={{ background: `linear-gradient(${p.navy}, ${p.navySoft})` }}
          >
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide">
              Real Estate-க்கான AI Sales System
            </span>
            <h3 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Property Enquiry-யிலிருந்து <span style={{ color: p.highlight }}>Site Visit வரை.</span>
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-white/75">
              iSuite AI ஒவ்வொரு enquiry-க்கும் பதில் அளிக்கிறது, site visit-ஐ book செய்கிறது.
            </p>
            <span
              className="mt-6 inline-flex rounded-xl px-6 py-4 font-bold shadow-lg"
              style={{ background: p.accent, color: p.accentText }}
            >
              FREE DEMO BOOK பண்ணுங்கள் →
            </span>
          </div>

          {/* Light section sample */}
          <div className="grid gap-4 px-6 py-8 sm:grid-cols-3" style={{ background: p.light }}>
            {["Respond", "Qualify", "Book"].map((t, i) => (
              <div key={t} className="rounded-2xl border border-black/5 bg-white p-5">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-extrabold"
                  style={{ background: p.accent, color: p.accentText }}
                >
                  0{i + 1}
                </span>
                <h4 className="mt-3 font-bold" style={{ color: p.navy }}>
                  {t}
                </h4>
                <p className="mt-1 text-sm" style={{ color: p.muted }}>
                  Seconds-ல் reply — approved property data அடிப்படையில்.
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
