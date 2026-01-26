import Contact from "@/components/contact";
import Image from "next/image";
import Link from "next/link";

import deemLogo from "@/public/images/deem/deem.svg"

export default function Deem() {
  return (
    <>
      <div className="max-w-7xl py-24 px-4 flex-nowrap max-lg:flex-wrap mx-auto">
        <Image src={deemLogo} alt="Deem" width={200} height={100} className="pb-12" />
        <Link href="/code/deem/flight-results" className="btn-sm md:btn-lg text-black border-transparent hover:text-white hover:border bg-teal-600 hover:bg-teal-600 hover:bg-transparent hover:border-teal-600 hover:btn-lift">
          Flight Results Prototype
        </Link>
        <div className="flex flex-wrap gap-10 text-white pt-20">
        <p className="text-white lg:text-lg pb-6">
            View more on my github page{" "}
            <Link href="https://github.com/keithnickas" className="hover:underline text-teal-100">
              here
            </Link>
            .
          </p>
      </div>
      </div>
    </>
  );
}
