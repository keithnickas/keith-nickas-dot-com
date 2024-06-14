import Contact from "@/components/contact";
import Image from "next/image";
import Link from "next/link";

import deemLogo from "@/public/images/deem/deem.svg"

export default function Deem() {
  return (
    <>
      <div className="max-w-7xl min-h-screen py-24 px-4 flex-nowrap max-lg:flex-wrap mx-auto">
        <Image src={deemLogo} alt="Deem" width={150} height={100} />
        <p className="text-white lg:text-lg py-6">
          Additional content coming.
        </p>
        <h2 className="h4">Samples</h2>
        <Link href="/code/deem/flight-results">Flight Results Prototype</Link>
      </div>
      <Contact />
    </>
  );
}
