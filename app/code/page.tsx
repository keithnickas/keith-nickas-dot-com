import Link from "next/link";
import Image from "next/image";
import wristbandLogo from "@/public/images/wristband/wristband_transparent_logo.svg";
import { Deem, GapInc, GitHub } from "@/components/icons";

export default function Code() {
  return (
    <>
      <div className="w-full py-24 px-4 flex-nowrap max-lg:flex-wrap mx-auto">
        <div className="max-w-7xl flex flex-col justify-center mx-auto mb-12">
          <h1 className="h4">Code Samples</h1>
          <p className="text-white lg:text-lg pb-6">
            Here is just a small sampling of various projects that showcasing
            different technologies and approaches.
          </p>
        </div>
        <div className="max-w-7xl flex flex-col gap-6 justify-center items-center mx-auto">
          <Link
            className="size-36 btn-lg text-white border border-teal-600 hover:bg-teal-600 hover:bg-transparent ml-3 hover:btn-lift"
            href="/code/wristband/"
          >
            <Image
              className="size-36"
              src={wristbandLogo}
              alt="Wristband, Identity Access Management"
              width={150}
              style={{ height: "auto" }}
            />
          </Link>
          <Link
            className="size-36 btn-lg text-white border border-teal-600 hover:bg-teal-600 hover:bg-transparent ml-3 hover:btn-lift"
            href="/code/gap/"
          >
            <GapInc className="size-36" fill="white" width={150} />
          </Link>

          <Link
            className="size-36 btn-lg text-white border border-teal-600 hover:bg-teal-600 hover:bg-transparent ml-3 hover:btn-lift"
            href="/code/deem/"
          >
            <Deem className="size-36" width={150} />
          </Link>

          <Link
            className="size-36 items-center btn-lg text-white border border-teal-600 hover:bg-teal-600 hover:bg-transparent ml-3 hover:btn-lift"
            href="https://github.com/keithnickas"
          >
            <GitHub className="size-36" width={150} />
          </Link>
        </div>
      </div>
    </>
  );
}
