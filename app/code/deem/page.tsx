import Contact from "@/components/contact";
import Image from "next/image";
import Link from "next/link";

import deemLogo from "@/public/images/deem/deem.svg"

export default function Deem() {
  return (
    <>
      <div className="max-w-7xl py-24 px-4 flex-nowrap max-lg:flex-wrap mx-auto">
        <Image src={deemLogo} alt="Deem" width={200} height={100} className="pb-6" />
        <Link href="/code/deem/flight-results" className="btn-sm md:btn-lg text-black border-transparent hover:text-white hover:border bg-teal-600 hover:bg-teal-600 hover:bg-transparent hover:border-teal-600 hover:btn-lift">
          Flight Results Prototype
        </Link>
        <p className="text-white lg:text-lg py-6">
          Additional content coming.
        </p>
      </div>
    </>
  );
}
