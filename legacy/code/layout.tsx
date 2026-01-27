"use client";

import Footer from "@/components/ui/footer";
import Breadcrumbs from "../../components/ui/breadcrumbs";
import Script from "next/script";
import { Calendly } from "@/components/calendly";
import { useFeatureFlags } from "@/hooks/use-feature-flags";
import Banner from "@/components/banner";
import Header from "@/components/ui/header";

export default function CodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const design2026 = useFeatureFlags()["design-2026"] ?? false
  return (
    <>
      {!design2026 ? (
        <>
          <Banner />
          <Header />
        </>
      ) : null}
      <Breadcrumbs
        homeElement={"Home"}
        separator={<span className="mx-2 hidden md:inline"> &gt; </span>}
        activeClasses="text-white"
        containerClasses="flex"
        listClasses="font-bold truncate md:text-ellipsis"
        capitalizeLinks
      />
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
