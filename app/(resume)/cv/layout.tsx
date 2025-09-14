"use client";
import Footer from "@/components/ui/footer";
import dynamic from 'next/dynamic';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Calendly = dynamic(() => import('../../../components/calendly'), { ssr: false });

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <main className="grow">{children}</main>
      <Footer />
      <Calendly />
    </>
  );
}
