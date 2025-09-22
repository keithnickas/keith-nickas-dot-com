"use client";

import { useEffect } from "react";
import Script from "next/script";

import AOS from "aos";
import "aos/dist/aos.css";
import { Calendly } from "@/components/calendly";
import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      once: true,
    });
    return () => AOS.refresh();
  }, []);

  return (
    <>
      <main className="grow">{children}</main>

      <Footer />
      <Calendly />
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
    </>
  );
}
