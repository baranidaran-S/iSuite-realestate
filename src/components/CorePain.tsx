const slips = [
  { stage: "Response", note: "யார் reply செய்வது?" },
  { stage: "Qualification", note: "ஒரே questions மீண்டும் மீண்டும்." },
  { stage: "Lead Ownership", note: "இந்த lead யாருடையது?" },
  { stage: "Site Visits", note: "Interested buyer site visit-⁠க்கு வரவில்லை." },
  { stage: "Follow-up", note: "நீண்ட decision cycle-⁠ல் follow-up miss ஆகிறது." },
];

export function CorePain() {
  return (
    <section className="bg-paper px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl text-center">
        {/* the core pain itself is now the hero hook, so this section just shows where it slips */}
        <h2 className="text-[28px] font-extrabold leading-[1.3] sm:text-5xl sm:leading-[1.2]">
          எங்கே <span className="text-accent-deep">miss</span> ஆகிறது?
        </h2>

        <ul className="mx-auto mt-10 grid max-w-md gap-3 text-left sm:max-w-lg lg:max-w-4xl lg:grid-cols-5">
          {slips.map((s, i) => (
            <li
              key={s.stage}
              className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 lg:flex-col lg:items-start lg:gap-3"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-white">
                {i + 1}
              </span>
              <div>
                <p className="font-display font-bold">{s.stage}</p>
                <p className="mt-0.5 text-sm leading-snug text-muted">{s.note}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-2xl rounded-2xl bg-ink px-6 py-5 font-display text-lg font-bold leading-snug text-white sm:text-xl">
          ஒவ்வொரு miss ஆன follow-up ={" "}
          <span className="text-accent">இன்னொரு project-⁠க்கு போன buyer.</span>
        </p>
      </div>
    </section>
  );
}
