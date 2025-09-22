import Image from "next/image";
import Link from "next/link";
import { GapInc } from "@/components/icons";

import spotlightImage from "@/public/images/gap/spotlight-image.webp";

export default function Gap() {
  return (
    <>
      <div className="max-w-7xl flex flex-col gap-x-1.5 py-24 px-4 max-lg:flex-wrap mx-auto">
        <div className="w-full flex flex-col mb-12">
          <div className="w-52">
            <GapInc fill="white" />
          </div>
        </div>
        <div className="w-full flex flex-col mb-6">
          <Link className="size-36" href="/code/gap/spotlight-image">
            <Image
              className="size-36 object-cover"
              src={spotlightImage}
              alt="Athleta, Spotlight Image CMS component"
            />
            Athleta Spotlight Image/Video Component
          </Link>
        </div>
      </div>
    </>
  );
}
