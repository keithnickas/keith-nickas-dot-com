"use client"
import Footer from "@/components/ui/footer"
import AOS from "aos"
import { useEffect } from "react"
import Calendly from "@/components/calendly"
import "aos/dist/aos.css"
import Banner from "@/components/banner"
import Header from "@/components/ui/header"
import { useFeatureFlags } from "@/hooks/use-feature-flags"

export default function ResumeLayout({
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
      <main className="grow">
        {children}
        <Footer />
      </main>
      <Calendly />
    </>
  )
}
