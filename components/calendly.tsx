"use client";
import dynamic from "next/dynamic";
import { InlineWidget, PopupWidget } from "react-calendly";

export default function CalendlyPopup() {
  if (typeof window === "undefined") {
    return null;
  }
  return (
    <PopupWidget
      url="https://calendly.com/keithnickas/introductions?hide_gdpr_banner=1"
      rootElement={document.getElementById("modal-root") as HTMLElement}
      text="Got 15 minutes?"
      textColor="#050505"
      color="#00a2ff"
    />
  );
}

export function CalendlyInline() {
  return (
    <section className="relative lg:mb-0 text-left lg:text-left lg:w-no-max">
      <InlineWidget
        url="https://calendly.com/keithnickas/introductions?hide_gdpr_banner=1"
        styles={{ minWidth: 320, height: 700 }}
      />
    </section>
  );
}

export const Calendly = dynamic(
  () =>
    import("./calendly").catch((error) => {
      console.error("Error loading Calendly component:", error);
      return () => <div>Error loading Calendly component</div>;
    }),
  {
    ssr: false,
    loading: () => <div>Loading Calendly...</div>,
  }
);
