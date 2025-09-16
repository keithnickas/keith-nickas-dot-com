export const metadata = {
  title: "Keith Nickas - Software Engineer",
  description:
    "A personal website showcasing professional, and, personal works developed by Keith Nickas.",
};

import Image from "next/image";
import ResumeHighlights from "@/components/resume-highlights";
import ResumeComponent from "@/components/resume";
import Slider from "@/components/slider";
import spotlightImage from "@/public/images/gap/spotlight-image.webp";
import deemFlightResults from "@/public/images/deem/deem_flight-results.webp";
import Breadcrumbs from "../../../components/ui/breadcrumbs";
import { resumeData } from "@/app/data/resume-data";
import hash from "object-hash";

export default function Resume() {
  const resumeItems = resumeData.workExperience.map((itemProps, _) => (
    <ResumeComponent key={hash(itemProps)} {...itemProps} />
  ));
  const resumeHighlights = <ResumeHighlights highlights={resumeData.highlights} />;

  return (
    <>
      <Breadcrumbs
        homeElement={"Home"}
        separator={<span className="mx-2"> &gt; </span>}
        activeClasses="text-white"
        containerClasses="flex"
        listClasses="font-bold"
        capitalizeLinks
      />
      <div className=" bg-gray-100 pt-24 pb-6 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
        {/* Professional Summary */}
        <section className="mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Professional Experience
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A skilled UI developer with a track record of driving efficiency
              gains and optimizing workflows for major brands.
            </p>
          </div>
        </section>
        {/* Professional Experience */}
        {resumeItems}
        </div>
      </div>
      {/* Design Samples */}
      <Slider
        name="gap"
        config={{
          count: 2,
          useBoxShadow: false,
          duration: "0s",
          disableAnimation: true,
          title: "Design Samples"
        }}
      >
        <div className="slide px-4">
          <a href="code/deem/flight-results">
            <Image
              src={deemFlightResults}
              alt="Deem Flight Results Prototype"
            />
          </a>
        </div>
        <div className="slide px-4">
          <a href="code/gap/spotlight-image/">
            <Image
              src={spotlightImage}
              alt="Athleta, Spotlight Image CMS component"
            />
          </a>
        </div>
      </Slider>
      {resumeHighlights}
    </>
  );
}
