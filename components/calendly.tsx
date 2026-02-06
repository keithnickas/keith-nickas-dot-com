"use client"
import dynamic from "next/dynamic"
import { ComponentType } from "react"
import { InlineWidget, PopupWidget } from "react-calendly"

export default function CalendlyPopup({
  useWrapper,
}: {
  useWrapper?: boolean
}) {
  if (typeof window === "undefined") {
    return null
  }
  const widget = (
    <PopupWidget
      url="https://calendly.com/keithnickas/introductions?hide_gdpr_banner=1"
      rootElement={document.getElementById("modal-root") as HTMLElement}
      text="Got 15 minutes?"
      textColor="#050505"
      color="#00a2ff"
    />
  )
  return useWrapper ? (
    <div id="calendly-popup">
      {widget}
    </div>
  ) : (
    widget
  )
}

export function CalendlyInline() {
  return (
    <section className="relative lg:mb-0 text-left lg:text-left lg:w-no-max">
      <InlineWidget
        url="https://calendly.com/keithnickas/introductions?hide_gdpr_banner=1"
        styles={{ minWidth: 320, height: 700 }}
      />
    </section>
  )
}

export const Calendly: ComponentType<{useWrapper?: boolean}> = dynamic(
  () =>
    // @ts-ignore
    import("./calendly").catch((error) => {
      console.error("Error loading Calendly component:", error)
      return () => <div>Error loading Calendly component</div>;
    }),
  {
    ssr: false,
    loading: () => <div>Loading Calendly...</div>,
  }
)
