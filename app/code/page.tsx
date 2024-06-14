export const metadata = {
  title: "Keith Nickas - Software Engineer - Code Examples",
  description:
    "A personal website showcasing professional, and, personal works developed by Keith Nickas.",
};
// import Image from "next/image";

import Contact from "@/components/contact";
import Link from "next/link";


export default function Code() {
  return (
    <>
    <div className="max-w-7xl min-h-screen py-24 px-4 flex-nowrap max-lg:flex-wrap mx-auto">
      <h1 className="h1 py-6">Code Samples and Designs</h1>
      <h2 className="h4 py-6">By Organization</h2>
      <ul className="pb-12">
        <li><Link href="/code/gap/">Gap</Link></li>
        <li><Link href="/code/deem/">Deem</Link></li>
      </ul>
      <p className="text-white lg:text-lg pb-24">
          Additional content coming.
        </p>
      <Contact />
      </div>
    </>
  );
}
