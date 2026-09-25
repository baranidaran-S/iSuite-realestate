import { ChatDemo } from "@/components/ChatDemo";

const journey = [
  "Meta / Portal",
  "WhatsApp",
  "Qualification",
  "Property Matching",
  "Site Visit",
  "Salesperson",
  "Follow-up",
  "Booking",
];

export function Solution() {
  return (
    <section className="bg-paper px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-[28px] font-extrabold leading-[1.3] sm:text-5xl sm:leading-[1.2]">
          ஒரு Property Enquiry.
          <span className="block text-accent-deep">ஒரு Continuous Sales Journey.</span>
        </h2>
        {/* journey strip: 2 columns on phones/tablets, 2 rows of 4 on desktop (arrows only inside a row) */}
        <ol lang="en" className="mt-10 grid grid-cols-2 gap-2 rounded-3xl border border-line bg-surface p-4 text-left shadow-sm sm:gap-3 sm:p-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-3">
          {journey.map((step, i) => {
            const last = i === journey.length - 1;
            const rowEnd = (i + 1) % 4 === 0;
            return (
              <li key={step} className="relative flex items-center">
                <span
                  className={`flex h-full w-full items-center gap-2 rounded-xl py-1.5 pl-1.5 pr-3 text-[13px] font-bold sm:text-[15px] lg:rounded-full lg:pr-4 ${
                    last ? "bg-ink text-white" : "border border-line bg-paper text-ink"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs ${
                      last ? "bg-accent text-on-accent" : "bg-accent/15 text-accent-deep"
                    }`}
                  >
                    {i + 1}
                  </span>
                  {step}
                </span>
                {!rowEnd && (
                  <span className="absolute left-full top-1/2 hidden w-8 -translate-y-1/2 text-center text-accent-deep lg:block" aria-hidden>
                    →
                  </span>
                )}
              </li>
            );
          })}
        </ol>

        <p className="mx-auto mt-8 max-w-2xl font-display text-lg font-bold leading-snug sm:text-2xl">
          ஒவ்வொரு stage-⁠க்கும் <span className="text-accent-deep">ஒரு owner. ஒரு next step.</span>
        </p>

        {/* live chat demo */}
        <div className="mt-12 sm:mt-16">
          <ChatDemo />
        </div>
      </div>
    </section>
  );
}
