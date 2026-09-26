import { ChatDemo } from "@/components/ChatDemo";
import { CtaButton } from "@/components/CtaButton";

// Demo — the live chat demo (the revised doc's section 21 heading was replaced in chat).
// (The doc's 11-step list and the "ஒவ்வொரு stage-⁠க்கும் ஒரு owner…" line were removed in chat.)
export function Solution() {
  return (
    <section className="bg-ink px-4 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl text-center">
        {/* new wording chosen in chat (not in the docs) — names the three apps the phone below switches between */}
        <h2 className="text-balance text-[28px] font-extrabold leading-[1.3] sm:text-5xl sm:leading-[1.2]">
          <span className="block">WhatsApp, Instagram, Facebook —</span>
          எங்கே message வந்தாலும்
          <span className="block text-accent">AI உடனே பதில் சொல்லும்.</span>
        </h2>

        <div className="mt-12 sm:mt-16">
          <ChatDemo />
        </div>

        <div className="mt-12 text-center sm:mt-14">
          <CtaButton motion="nudge" className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  );
}
