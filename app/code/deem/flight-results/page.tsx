import Image from "next/image";
import deemLogo from "@/public/images/deem/deem.svg";

export default function FlightResults() {
  return (
    <>
      <div className="max-w-7xl min-h-screen py-24 px-4 flex-nowrap max-lg:flex-wrap mx-auto">
        <Image
          src={deemLogo}
          alt="Deem"
          width={200}
          height={100}
          className="pb-6"
        />
        <h1 className="h1 font-light text-white pb-6">
          Flight Results Prototype
        </h1>
        <div className="flex flex-wrap sm:flex-nowrap gap-10 text-white mb-10">
          <div className="flex md:basis-1/2 flex-wrap content-start animation-hover">
            <h2 className="h3 font-light text-white py-6 text-gradient-hover from-[#ff7e5f] to-[#feb47b]">Requirements</h2>
            <p className="text-white pb-4">
              Encompass all existing features of the flight application,
              specifically surrounding fare tiers, policy, dynamic filtering,
              and fare comparison. The design should be modular to allow for
              easy updates and maintenance. The design should also be
              responsive, ensuring a seamless experience across various devices
              and screen sizes.
            </p>
          </div>
          <div className="flex md:basis-1/2 flex-wrap content-start animation-hover">
            <h2 className="h3 font-light text-white py-6 text-gradient-hover from-[#5f9cff] to-[#2b42d7]">Research</h2>
            <p className="text-white pb-4">
              Reviewed Google Flights, American, Alaska, Southwest, Delta, and
              United airlines' customer-facing websites. Additionally, reviewed
              third-party consumer sites such as Expedia, Kayak, Kiwi, and
              others to gain further insight into the user experience.
            </p>
          </div>
          <div className="flex md:basis-1/2 flex-wrap content-start animation-hover">
            <h2 className="h3 font-light text-white py-6 text-gradient-hover from-[#cc5fff] to-[#952bd7]">Challenge</h2>
            <p className="text-white pb-4">
              Provide an experience that surfaces pertinent information in a
              simplistic, cohesive manner which minimizes any potential
              confusion and the intent of the information is to direct the user
              to make the appropriate choices based on corporate and personal
              needs.
            </p>
          </div>
          <div className="flex md:basis-1/2 flex-wrap content-start animation-hover">
            <h2 className="h3 font-light text-white py-6 text-gradient-hover from-[#ff5ff2] to-[#d72bbd]">Other challenges</h2>
            <p className="text-white pb-4">
              Display Complex flights where more than one connection, multiple
              carriers, or flight tiers could be displayed within a single
              flight object.
            </p>
          </div>
        </div>
        <h2 className="h2 font-light text-white pb-6">Wireframes</h2>
        <iframe
          className="h-96 mb-10"
          // style={{
          //   border: "1px solid rgba(0, 0, 0, 0.1)",
          //   height: "80vh",
          // }}
          title="Figma Prototype for Deem Flight Results"
          width="100%"
          height="100%"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FpI3hmMyRy36GTRTHXu9g9P%2FFlight-Redesign%3Fnode-id%3D0-1%26t%3DAqQ8WyFhGlA4Ae4g-1"
          allowFullScreen
        ></iframe>
        <h2 className="h2 font-light text-white py-6">Component</h2>
        <p className="text-white pb-6">
          Research cues came from Google, Delta and Alaska Airlines that
          inspired the final design.
        </p>
        <div className="flex flex-col gap-10 text-white">
          <div className="flex flex-wrap content-start">
            <h3 className="h4 font-light text-white py-6">Filters UX</h3>
            <p className="text-white pb-4">
              Add option for displaying fare tier, stops, flight times, and,
              other filter options that could be configured to be displayed
              above the flight objects. The chevron icons ({`< / >`}) are used
              for stepping of predefined values. The user also has the option to
              select the filter when hovering the filter title to expand the
              available options.
            </p>
          </div>
          <div className="flex flex-wrap content-start">
            <h3 className="h4 font-light text-white py-6">Use Case</h3>
            <p className="text-white pb-4">
              When a user has selected a stepping, all the flight objects would
              update to display the appropriate options. Let’s say the user has
              used Flight Times, which is stepped (up or down), the flight
              objects that match that stepping would be displayed and others not
              matching would be hidden from view.
            </p>
          </div>
          <div className="flex flex-wrap content-start">
            <h3 className="h4 font-light text-white py-6">Flight Object UX</h3>
            <p className="text-white pb-4">
              In this view you see informational icons, textual color treatments
              such as a different arrival airport (orange) than originally
              searched for, out of policy (red ban icon), extended layover
              (warning icon) and related details would be indicated below.
            </p>
          </div>
          <div className="flex flex-wrap content-start">
            <h3 className="h4 font-light text-white py-6">Enhancements</h3>
            <div className="text-white pb-4">
              Add an option for displaying fare tier “tab” upfront. Two styles
              were developed based on input from stakeholders.
              <ol className="list-decimal pl-8 py-4">
                <li>
                  To display the pertinent flight object info, and then
                  displaying available flight tiers below.
                </li>
                <li>
                  Display flight tiers at the top by maintaining the existing
                  experience.
                </li>
                <li>
                  Increase separation of the flight objects, while maintaining
                  the ability to show more options to the user to reduce
                  scrolling through multiple pages of results.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
