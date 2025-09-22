"use client";

import Footer from "@/components/ui/footer";
import Breadcrumbs from "../../components/ui/breadcrumbs";
import Script from "next/script";
import { Calendly } from "@/components/calendly";

export default function CodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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
