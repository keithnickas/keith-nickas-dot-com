"use client";
import Footer from "@/components/ui/footer";
import AOS from 'aos';
import { useEffect } from 'react';
import Calendly from "@/components/calendly";
import 'aos/dist/aos.css';

export default function ResumeLayout({
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
      <main className="grow">{children}
        <Footer />
      </main>
      <Calendly />
    </>
  );
}
