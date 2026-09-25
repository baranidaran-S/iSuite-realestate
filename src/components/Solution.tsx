import { ChatDemo } from "@/components/ChatDemo";
import { CtaButton } from "@/components/CtaButton";

// Demo — heading + 11-step flow from the revised buyer-persona document (section 21),
// shown next to the live chat demo.
const flow = [
  { title: "Lead Source", text: "Buyer enquiry" },
  { title: "WhatsApp / Website / Lead Form", text: "Conversation starts" },
  { title: "AI / Team", text: "First response" },
  { title: "Qualification", text: "Budget + location + configuration + timeline" },
  { title: "Assignment", text: "Correct salesperson receives the lead" },
  { title: "Property Match", text: "Relevant property information" },
  { title: "Site Visit", text: "Buyer books a visit" },
  { title: "Handover", text: "Salesperson receives complete context" },
  { title: "Follow-up", text: "Next action continues" },
  { title: "Pipeline", text: "Lead moves towards negotiation / booking" },
  { title: "Manager View", text: "Owner / Sales Head sees status" },
];

export function Solution() {
  return (
    <section className="bg-ink px-4 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl text-center">
        {/* wide screens: a clean 2-line break instead of a lone last word */}
        <h2 className="text-[28px] font-extrabold leading-[1.3] sm:text-5xl sm:leading-[1.2]">
          ஒரு Property Enquiry iSuite AI வழியாக <br className="hidden xl:inline" />
          {" "}
          <span className="text-accent">எப்படி move ஆகிறது</span> என்பதை பாருங்கள்.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl font-display text-lg font-bold leading-snug sm:text-2xl">
          ஒவ்வொரு stage-⁠க்கும் <span className="text-accent">ஒரு owner. ஒரு next step.</span>
        </p>

        {/* phones: chat first, then the steps; desktop: steps left, chat right */}
        <div className="mx-auto mt-12 grid max-w-5xl items-center gap-10 text-left sm:mt-16 lg:grid-cols-[1fr_320px] lg:gap-16">
          <ol lang="en" className="order-2 space-y-2.5 lg:order-1">
            {flow.map((f, idx) => {
              const last = idx === flow.length - 1;
              return (
                <li key={f.title} className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-display text-xs font-bold ${
                      last ? "bg-accent text-on-accent" : "bg-accent/15 text-accent"
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <p className="leading-snug">
                    <span className="font-bold">{f.title}</span>
                    <span className="mx-1.5 text-accent" aria-hidden>
                      →
                    </span>
                    <span className="text-white/70">{f.text}</span>
                  </p>
                </li>
              );
            })}
          </ol>

          <div className="order-1 lg:order-2">
            <ChatDemo />
          </div>
        </div>

        <div className="mt-12 text-center sm:mt-14">
          <CtaButton motion="nudge" className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  );
}
