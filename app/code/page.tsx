import wristbandLogo from "@/public/images/wristband/wristband_transparent_logo.svg";
import { Deem, GapInc, GitHub } from "@/components/icons";
import { ImageButtonLink } from "@/components/button-link";

export default function Code() {
  return (
    <>
      <div className="w-full py-24 px-4 flex-nowrap max-lg:flex-wrap justify-center mx-auto">
        <div className="max-w-7xl flex flex-col mb-12 mx-auto">
          <h1 className="h1 text-4xl font-light text-white sm:text-4xl pb-6">Code Samples</h1>
          <p className="text-white lg:text-lg pb-6">
            Here is just a small sampling of various projects that showcasing
            different technologies and approaches.
          </p>
        </div>
        <div className="max-w-7xl flex flex-wrap flex-[0_1_300px] gap-8 mb-12 mx-auto items-center">
          <ImageButtonLink
            link={{ href: "/code/wristband/", className: "border hover:border-teal-600" }}
            image={{
              src: wristbandLogo,
              alt: "Wristband, Identity Access Management",
              width: 300,
              height: 98,
            }}
          />
          <ImageButtonLink
            link={{ href: "/code/gap/", className: "border hover:border-teal-600" }}
            image={{
              src: <GapInc className="size-32" fill="white" width={300} height={98} />,
              alt: "Gap Inc, Retail Technology",
            }}
          />
          <ImageButtonLink
            link={{ href: "/code/deem/", className: "border hover:border-teal-600" }}
            image={{
              src: <Deem className="size-36" width={300} height={98} />,
              alt: "Deem, Travel Technology",
            }}
          />
          <ImageButtonLink
            link={{
              className: "border hover:border-teal-600",
              href: "https://github.com/keithnickas",
              target: "_blank",
              rel: "noopener noreferrer",
            }}
            image={{
              src: <GitHub className="size-36" width={300} height={98} />,
              alt: "GitHub",
            }}
          />
          <div className="text-white"> Additional content coming soon! </div>
        </div>
      </div>
    </>
  );
}
