import Image from "next/image";
import deemLogo from "@/public/images/deem/deem.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <div className="flex flex-wrap gap-10 text-white mb-10">
          <div className="flex md:flex-[0_0_380px] flex-wrap content-start animation-hover">
            <h2 data-animate-hover className="h3 font-light text-white py-6 text-gradient-hover from-[#ff7e5f] to-[#feb47b]">
              Requirements
            </h2>
            <p className="text-white pb-4">
              Encompass all existing features of the flight application,
              specifically surrounding fare tiers, policy, dynamic filtering,
              and fare comparison. The design should be modular to allow for
              easy updates and maintenance. The design should also be
              responsive, ensuring a seamless experience across various devices
              and screen sizes.
            </p>
          </div>
          <div className="flex md:flex-[0_0_380px] flex-wrap content-start animation-hover">
            <h2 data-animate-hover className="h3 font-light text-white py-6 text-gradient-hover from-[#5f9cff] to-[#2b42d7]">
              Research
            </h2>
            <p className="text-white pb-4">
              Reviewed Google Flights, American, Alaska, Southwest, Delta, and
              United airlines' customer-facing websites. Additionally, reviewed
              third-party consumer sites such as Expedia, Kayak, Kiwi, and
              others to gain further insight into the user experience.
            </p>
          </div>
          <div className="flex md:flex-[0_0_380px] flex-wrap content-start animation-hover">
            <h2 data-animate-hover className="h3 font-light text-white py-6 text-gradient-hover from-[#cc5fff] to-[#952bd7]">
              The Challenge
            </h2>
            <p className="text-white pb-4">
              Provide an experience that surfaces pertinent information in a
              simplistic, cohesive manner which minimizes any potential
              confusion. The intent of each flight object is to direct the user
              to make the appropriate choices based on corporate and personal
              needs.
            </p>
          </div>
          <div className="flex md:flex-[0_0_100%] flex-wrap content-start animation-hover">
            <h2 data-animate-hover className="h3 font-light text-white py-6 text-gradient-hover from-[#ff5ff2] to-[#d72bbd]">
              Complex Flights
            </h2>
            <p className="text-white pb-4">
              Displaying complex flights where more than one connection is
              possible, it has multiple carriers, or flight tiers that deviate
              from the selected or contracted fare needed to be displayed within
              a single flight object. This required a robust approach to meet
              the various scenarios that could arise for a given flight. The
              solution was to present the user with a clear hierarchy of
              information that is easy to digest, while providing an intuitive
              way to display additional information as needed.
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
        <h2 className="h2 font-light text-white py-6">Research & Results</h2>
        <p className="text-white pb-6">
          Research cues came from Google, Delta and Alaska Airlines that
          inspired the final design.
        </p>
        <div className="flex flex-wrap gap-10 text-white">
          <div className="flex flex-wrap md:flex-[0_0_380px] content-start animation-hover">
            <h3 data-animate-hover className="h4 font-light text-white py-6 text-gradient-hover from-[#cc5fff] to-[#952bd7]">Filters UX</h3>
            <p className="text-white pb-4">
              <span className="font-bold">Acceptance Criteria:</span> Add option for displaying fare tier, stops, flight times, and,
              other filter options that could be configured to be displayed
              above the flight objects. The chevron icons (
              <span className="font-bold">{`< / >`}</span>) are used for
              stepping of predefined values. The user also has the option to
              select the filter when hovering the filter title to expand the
              available options.</p>
            <p className="text-white pb-4">
              <span className="font-bold">User Experience:</span> When a user
              hovers over the filter title, the filter options will expand to
              display the available options. The user can then select the
              desired option and the flight objects will update to match the
              selected filter. The user can also use the chevron icons to step
              through the predefined available options. The filters should float
              as the user scrolls down the page, allowing for easy access to the
              filter options at all times.
            </p>
          </div>
          <div className="flex flex-wrap md:flex-[0_0_380px] content-start animation-hover">
            <h3 data-animate-hover className="h4 font-light text-white py-6 text-gradient-hover from-[#cc5fff] to-[#952bd7]">Flight Times UX</h3>
            <p className="text-white pb-4">
              <span className="font-bold">Acceptance Criteria:</span> When a user has selected a specific time
              stepping (e.g. 06:00 - 08:00), the flight results will update to
              display the available flight options.
            </p>
            <p className="text-white pb-4">
              <span className="font-bold">User experience:</span> Let's assume the user is going to update the
              flight time for departure. The user makes their changes and the
              flight objects update to match the selected range while others not
              matching would be hidden from view. The user can always reset the
              filter to view all available flight options. They can also use the
              chevron icons to step through the predefined available time ranges
              that are from the original search results data.
            </p>
          </div>
          <div className="flex flex-wrap md:flex-[0_0_380px] content-start animation-hover">
            <h3 data-animate-hover className="h4 font-light text-white text-gradient-hover from-[#ff5ff2] to-[#d72bbd] py-6">
              Complex Flights
            </h3>
            <p className="text-white pb-4">
              To enhance the user experience, informational icons, textual color treatments are used to convey important details
              such as a <span className="text-yellow-500">burnt yellow</span>{" "}
              text style indicating an alternate arrival or departure airport
              than originally selected, a red "out of policy" ban icon (
              <FontAwesomeIcon
                icon={["fas", "ban"]}
                className="text-red-500"
                size="sm"
              />
              ), and a red extended layover warning icon (
              <FontAwesomeIcon
                icon={["fas", "exclamation-triangle"]}
                className="text-red-500"
                size="sm"
              />
              ) to alert the user of potential issues with their flight selection.
              These visual cues help users quickly identify important information
              and make informed decisions when selecting their flights.
            </p>
          </div>
          <div className="flex flex-wrap md:flex-[0_0_100%] content-start animation-hover">
            <h3 data-animate-hover className="h4 font-light text-white py-6 text-gradient-hover from-[#5f9cff] to-[#2b42d7]">Enhancements</h3>
            <div className="text-white pb-4">
              Add an option for displaying fare tier “tab” upfront. Two styles
              were developed based on input from stakeholders. The changes
              presented:
              <ol className="list-decimal pl-8 py-4">
                <li>
                  While displaying the pertinent flight info, organize the
                  available flight tiers below the main flight info.
                </li>
                <li>
                  To maintain a version of the existing experience by displaying
                  flight tiers at the top, but enhance the UX by the use of font
                  color and font weight to be a visual indicator, thereby
                  showing which fare tier best matches their search criteria, as
                  well as the fare contract if applicable.
                </li>
                <li>
                  Increase separation of the flight item results using
                  whitespace, the flight item should be expandable to display
                  additional information such as amenities, flight times,
                  layover(s), while maintaining the ability to show more flight
                  options to the user, reducing the need for scrolling through
                  multiple page results.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
