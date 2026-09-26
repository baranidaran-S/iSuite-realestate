// "Works with" strip — simplified channel marks in brand colours, drawn inline.
export const channels = [
  {
    name: "WhatsApp",
    color: "#25D366",
    fill: true,
    d: "M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43a9.4 9.4 0 0 1 9.43 9.44c0 5.2-4.24 9.43-9.44 9.43m8.03-17.46A11.3 11.3 0 0 0 12.05.72C5.8.72.7 5.8.7 12.07c0 2 .52 3.95 1.52 5.67L.6 23.3l5.7-1.5a11.3 11.3 0 0 0 5.74 1.47h.01c6.26 0 11.35-5.1 11.36-11.36 0-3.03-1.18-5.89-3.33-8.03",
  },
  {
    name: "Meta Ads",
    color: "#0A7CFF",
    fill: false,
    d: "M2.5 13c0-3.6 2-7 4.6-7 2.2 0 3.6 2.3 4.9 4.8s2.7 5.2 5 5.2c1.9 0 3-1.5 3-3.6 0-3-1.6-6.4-4.2-6.4-2 0-3.4 2.1-4.7 4.7S8.6 18 6.3 18C4 18 2.5 16 2.5 13z",
  },
  {
    name: "Instagram",
    color: "#E1306C",
    fill: false,
    d: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM17.5 6.5h.01",
  },
  {
    name: "Facebook",
    color: "#1877F2",
    fill: false,
    d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  },
  {
    name: "Website",
    color: "#cbd5e1",
    fill: false,
    d: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM2 9h20M6 6.5h.01M9 6.5h.01",
  },
  {
    name: "Property Portals",
    color: "var(--color-accent)",
    fill: false,
    d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z",
  },
];

export function WorksWith() {
  return (
    <div lang="en" className="mt-8 flex flex-col items-center gap-3">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">Works with</p>
      {/* tablet: capped width so the 6 chips wrap 3 + 3 instead of leaving one alone */}
      <ul className="flex flex-wrap items-center justify-center gap-2.5 sm:max-w-[430px] sm:gap-3 lg:max-w-none">
        {channels.map((c) => (
          <li
            key={c.name}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] py-1.5 pl-2 pr-3.5 text-sm font-semibold text-white/85"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              style={{ color: c.color }}
              fill={c.fill ? "currentColor" : "none"}
              stroke={c.fill ? "none" : "currentColor"}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d={c.d} />
            </svg>
            {c.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
