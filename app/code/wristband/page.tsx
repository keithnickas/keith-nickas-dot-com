import Link from "next/link";
import Image from "next/image";
import wristbandLogo from "@/public/images/wristband/wristband_transparent_logo.svg";

export default function Wristband() {
  return (
    <>
      <div className="max-w-7xl min-h-screen py-24 px-4 flex-nowrap max-lg:flex-wrap mx-auto">
        <div style={{ width: 150, height: 100 }}>
          <Link href="https://wristband.dev">
            <Image
              src={wristbandLogo}
              alt="Wristband, Identity Access Management"
            />
          </Link>
        </div>
        <div className="max-w-7xl flex flex-col justify-center mx-auto">
          <p className="text-white lg:text-lg pb-6">Additional content coming. Please checkout my github <Link href="https://github.com/keithnickas" className="underline">here</Link>.</p>
          <h2 className="h4">Samples</h2>
          <Link href="/code/wristband/"></Link>
        </div>
      </div>
    </>
  );
}
