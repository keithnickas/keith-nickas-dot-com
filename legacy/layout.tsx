"use client"

import { useEffect } from "react"
import Script from "next/script"

import AOS from "aos"
import "aos/dist/aos.css"
import { Calendly } from "@/components/calendly"
import Footer from "@/components/ui/footer"
import { useFeatureFlags } from "@/hooks/use-feature-flags"
import Banner from "@/components/banner"
import Header from "@/components/ui/header"

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      once: true,
    })
    return () => AOS.refresh()
  }, [])
  const design2026 = useFeatureFlags()["design-2026"] ?? false
  return (
    <>
      {!design2026 ? (
        <>
          <Banner />
          <Header />
        </>
      ) : null}
      <main className="grow">{children}</main>

      <Footer />
      <Calendly />
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
    </>
  )
}
