export const metadata = {
  title: "Keith Nickas - Software Engineer",
  description:
    "A personal website showcasing professional, and, personal works developed by Keith Nickas.",
};

import Image from "next/image";
import ResumeHighlights from "@/components/resume-highlights";
import ResumeComponent from "@/components/resume";
import Slider, { SliderConfigProps } from "@/components/slider";
import spotlightImage from "@/public/images/gap/spotlight-image.webp";
import deemFlightResults from "@/public/images/deem/deem_flight-results.webp";
import frontendAppWristbandAuth from "@/public/images/wristband/frontend-app-wristband-cloud.webp";
import Breadcrumbs from "../../../components/ui/breadcrumbs";
import { resumeData } from "@/app/data/resume-data";
import hash from "object-hash";

export default function Resume() {
  const resumeItems = resumeData.workExperience.map((itemProps, _) => (
    <ResumeComponent key={hash(itemProps)} {...itemProps} />
  ));
  const resumeHighlights = (
    <ResumeHighlights highlights={resumeData.highlights} />
  );
  const sliderConfig: SliderConfigProps = {
    count: 3,
    useBoxShadow: false,
    useTrackFadeOverlay: false,
    width: "75vw",
    animation: false,
  };
  const sliderId = hash(sliderConfig).slice(0, 8);

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
              <h1 className="h1 font-light text-gray-900 sm:text-4xl">
                Professional Experience
              </h1>
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
        name={sliderId}
        config={{ ...sliderConfig, title: "Dev Samples" }}
      >
        <div className="slide mx-4 zoom-out">
          <a href="code/deem/flight-results">
            <Image
              src={deemFlightResults}
              alt="Deem Flight Results Prototype"
            />
            <div className="overlay-text overflow-clip">
              Deem Flight Results Prototype
            </div>
          </a>
        </div>
        <div className="slide mx-4 zoom-out">
          <a href="code/gap/spotlight-image/">
            <Image
              className="object-cover"
              src={spotlightImage}
              alt="Athleta, Spotlight Image CMS component"
            />
            <div className="overlay-text overflow-clip">
              Athleta Spotlight Image/Video Component
            </div>
          </a>
        </div>
        <div className="slide mx-4 zoom-out">
          <a href="code/wristband/vue-sdk/">
            <Image
              className="object-cover"
              src={frontendAppWristbandAuth}
              alt="Vue.js Wristband Auth SDK"
            />
            <div className="overlay-text overflow-clip">
              Vue.js Wristband Auth SDK
            </div>
          </a>
        </div>
      </Slider>
      {resumeHighlights}
    </>
  );
}
