import "./css/root.css"
import Script from "next/script"
import { Inter, Architects_Daughter, Josefin_Slab } from "next/font/google"
import { library } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { SpeedInsights } from "@vercel/speed-insights/next";

/* import all the icons in Free Solid */
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fas)

import React from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const josefinSlab = Josefin_Slab({
  subsets: ["latin"],
  variable: "--font-josefin",
  weight: "300",
  display: "swap",
})

const architects_daughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects-daughter",
  weight: "400",
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head />
      <body
        className={`${inter.variable} ${architects_daughter.variable} ${josefinSlab.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
        <div id="modal-root" />
        <Script
          type="text/javascript"
          src="https://www.google.com/recaptcha/api.js"
          async
        />
        <SpeedInsights />
      </body>
    </html>
  )
}
