import Contact from "@/components/contact";
import Link from "next/link";

export default function Gap() {
  return (
    <>
      <div className="max-w-7xl min-h-screen py-24 px-4 flex-nowrap max-lg:flex-wrap mx-auto">
        <h1 className="h1 font-extrabold text-white lg:text-4xl pb-6">Gap</h1>
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
