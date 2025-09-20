import Link from "next/link";
import Image from "next/image";
import wristbandLogo from "@/public/images/wristband/wristband_transparent_logo.svg";

export default function Wristband() {
  return (
    <>
      <div className="max-w-7xl py-24 px-4 flex-nowrap max-lg:flex-wrap mx-auto">
        <Link href="https://wristband.dev">
          <Image
            className="h-auto pb-6"
            src={wristbandLogo}
            alt="Wristband, an Identity Access Management Platform for Developers, Small Businesses, with Enterprise Features"
            width={200}
          />
        </Link>
        <div className="max-w-7xl flex flex-col justify-center mx-auto">
          <p className="text-white lg:text-lg pb-6">
            Checkout the work I did for the Wristband project, an Identity
            Access Management (IAM) platform.
          </p>
          <p className="text-white lg:text-lg pb-6">
            <Link
              href="/code/wristband/vue-sdk"
              className="btn-sm md:btn-lg text-black border-transparent hover:text-white hover:border bg-teal-600 hover:bg-teal-600 hover:bg-transparent hover:border-teal-600 hover:btn-lift"
            >
              Vue.js Client Auth SDK
            </Link>
          </p>
          <p className="text-white lg:text-lg pb-6">
            Additional content coming. Please checkout my github{" "}
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
