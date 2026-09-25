"use client";

// TEMPORARY — palette review tool for the senior. Remove this component (and its
// usage in page.tsx) once the final palette is chosen and copied into globals.css.

import { useEffect, useState, useSyncExternalStore } from "react";

type Palette = {
  id: string;
  name: string;
  ink: string;
  inkSoft: string;
  paper: string;
  accent: string;
  accentDark: string;
  accentDeep: string;
  onAccent: string;
};

const palettes: Palette[] = [
  { id: "1", name: "Navy + Gold", ink: "#0b1b33", inkSoft: "#13294b", paper: "#f8f6f1", accent: "#f2b544", accentDark: "#d99a20", accentDeep: "#a86f06", onAccent: "#0b1b33" },
  { id: "2", name: "Navy + Green (current)", ink: "#0b1b33", inkSoft: "#13294b", paper: "#f6f8fb", accent: "#2bd97c", accentDark: "#1fbf69", accentDeep: "#0f9d58", onAccent: "#0b1b33" },
  { id: "3", name: "Navy + Coral", ink: "#0b1b33", inkSoft: "#15294a", paper: "#fff6f2", accent: "#ff6b4a", accentDark: "#f0502c", accentDeep: "#d9431f", onAccent: "#ffffff" },
  { id: "4", name: "Navy + Electric Cyan", ink: "#081a33", inkSoft: "#10284d", paper: "#f0f7fb", accent: "#22c3ee", accentDark: "#0ea5cf", accentDeep: "#0284a8", onAccent: "#081a33" },
  { id: "5", name: "Charcoal + Gold", ink: "#16181d", inkSoft: "#23262e", paper: "#f7f5f0", accent: "#e9b949", accentDark: "#d19e2a", accentDeep: "#9a6f0b", onAccent: "#16181d" },
  { id: "11", name: "Slate Graphite + Lime", ink: "#1b2230", inkSoft: "#273041", paper: "#f3f5f8", accent: "#b8f34a", accentDark: "#a3de2f", accentDeep: "#4d7c0f", onAccent: "#1b2230" },
  { id: "13", name: "Midnight Indigo + Amber", ink: "#1e1b4b", inkSoft: "#2e2a6b", paper: "#f5f5fb", accent: "#fbbf24", accentDark: "#e5a50a", accentDeep: "#b45309", onAccent: "#1e1b4b" },
  { id: "14", name: "Jet Black + Orange", ink: "#0d0d0d", inkSoft: "#1c1c1c", paper: "#f6f5f3", accent: "#ff7a1a", accentDark: "#eb6300", accentDeep: "#c2410c", onAccent: "#0d0d0d" },
  { id: "16", name: "Deep Ocean + Gold", ink: "#0a2a3a", inkSoft: "#0f3b50", paper: "#f1f6f8", accent: "#f0b429", accentDark: "#d99a0b", accentDeep: "#a16207", onAccent: "#0a2a3a" },
];

const STORAGE_KEY = "isuite-palette";

function apply(p: Palette) {
  const s = document.documentElement.style;
  s.setProperty("--color-ink", p.ink);
  s.setProperty("--color-ink-soft", p.inkSoft);
  s.setProperty("--color-paper", p.paper);
  s.setProperty("--color-accent", p.accent);
  s.setProperty("--color-accent-dark", p.accentDark);
  s.setProperty("--color-accent-deep", p.accentDeep);
  s.setProperty("--color-on-accent", p.onAccent);
}

function Swatch({ p, active, onClick }: { p: Palette; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={`${p.id}. ${p.name}`}
      aria-label={`${p.id}. ${p.name}`}
      aria-pressed={active}
      className={`relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 transition hover:scale-110 ${
        active ? "border-white ring-2 ring-white/40" : "border-white/20"
      }`}
    >
      <span className="h-full w-1/2" style={{ background: p.ink }} />
      <span className="h-full w-1/2" style={{ background: p.accent }} />
    </button>
  );
}

const DEFAULT_ID = "2";
const CHANGE_EVENT = "isuite-palette-change";

function readSaved(): string {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && palettes.some((p) => p.id === saved)) return saved;
  } catch {}
  return DEFAULT_ID;
}

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

export function PaletteSwitcher() {
  const activeId = useSyncExternalStore(subscribe, readSaved, () => DEFAULT_ID);
  const [open, setOpen] = useState(false); // mobile bar
  const [panelOpen, setPanelOpen] = useState(true); // desktop panel

  const active = palettes.find((p) => p.id === activeId)!;

  useEffect(() => {
    apply(active);
  }, [active]);

  const choose = (p: Palette) => {
    try {
      localStorage.setItem(STORAGE_KEY, p.id);
    } catch {
      apply(p); // storage blocked: still recolour this view
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  };

  return (
    <>
      {/* mobile: top bar */}
      <div className="sticky top-0 z-[60] border-b border-white/10 bg-black/95 text-white md:hidden">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-semibold"
          aria-expanded={open}
        >
          <span className="flex items-center gap-2">
            <span className="flex h-5 w-5 overflow-hidden rounded-full border border-white/30">
              <span className="w-1/2" style={{ background: active.ink }} />
              <span className="w-1/2" style={{ background: active.accent }} />
            </span>
            Palette: {active.id}. {active.name}
          </span>
          <span className={`transition ${open ? "rotate-180" : ""}`} aria-hidden>
            ▾
          </span>
        </button>
        {open && (
          <div className="flex gap-3 overflow-x-auto px-4 pb-3">
            {palettes.map((p) => (
              <div key={p.id} className="flex flex-col items-center gap-1">
                <Swatch p={p} active={p.id === activeId} onClick={() => choose(p)} />
                <span className="text-[10px] text-white/70">{p.id}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* desktop: floating panel top-right */}
      <div className="fixed right-4 top-4 z-[60] hidden md:block">
        <div className="rounded-2xl border border-white/15 bg-black/90 p-3 text-white shadow-2xl">
          <button
            type="button"
            onClick={() => setPanelOpen((o) => !o)}
            className="flex w-full items-center justify-between gap-3 text-xs font-bold"
            aria-expanded={panelOpen}
          >
            <span>🎨 {active.id}. {active.name}</span>
            <span className={`transition ${panelOpen ? "rotate-180" : ""}`} aria-hidden>
              ▾
            </span>
          </button>
          {panelOpen && (
            <div className="mt-3 grid grid-cols-3 gap-3">
              {palettes.map((p) => (
                <div key={p.id} className="flex flex-col items-center gap-1">
                  <Swatch p={p} active={p.id === activeId} onClick={() => choose(p)} />
                  <span className="text-[10px] text-white/70">{p.id}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
