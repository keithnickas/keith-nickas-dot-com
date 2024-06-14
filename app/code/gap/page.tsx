import Contact from "@/components/contact";
import Link from "next/link";
import { GapInc, ListIcon } from "@/components/icons";

export default function Gap() {
  return (
    <>
      <div className="max-w-7xl min-h-screen py-24 px-4 flex-nowrap max-lg:flex-wrap mx-auto">
        <div style={{width: 150, height: 100}}><GapInc fill="#fff" /></div>
        <p className="text-white lg:text-lg pb-6">
          Additional content coming.
        </p>
        <h2 className="h4">Samples</h2>
        <Link href="/code/gap/spotlight-image">Spotlight Image/Video</Link>
      </div>
      <Contact />
    </>
  );
}
