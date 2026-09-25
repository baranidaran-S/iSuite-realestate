import { ChatDemo } from "@/components/ChatDemo";

// Section 04 — the live demo. Heading from the PDF's Demo section; the chat shows it working.
export function Solution() {
  return (
    <section className="bg-paper px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl text-center">
        {/* wide screens: a clean 2-line break instead of a lone last word */}
        <h2 className="text-[28px] font-extrabold leading-[1.3] sm:text-5xl sm:leading-[1.2]">
          ஒரு Property Enquiry iSuite AI வழியாக <br className="hidden xl:inline" />
          {" "}
          <span className="text-accent-deep">எப்படி move ஆகிறது</span> என்பதை பாருங்கள்.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl font-display text-lg font-bold leading-snug sm:text-2xl">
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
