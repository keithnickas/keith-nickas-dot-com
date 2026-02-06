export const metadata = {
  title: "Keith Nickas - Software Engineer - Wristband Code - Vue.js SDK",
  description:
    "A personal website showcasing professional, and, personal works developed by Keith Nickas.",
};
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import wristbandAuthStore from "@/app/data/wristband-vue-data-store";
import wristbandAppConfig from "@/app/data/wristband-vue-app-config";
import Code from "@/components/code";

import wristbandAuthFlow from "@/public/images/wristband/frontend-app-wristband-cloud.webp";
import wristbandLogo from "@/public/images/wristband/wristband_transparent_logo.svg";

export default function WristbandVueSDK() {
  return (
    <div className="py-24 px-4 max-w-7xl min-h-screen flex-nowrap max-lg:flex-wrap mx-auto vscode-dark">
      <Link href="https://wristband.dev">
        <Image
          alt="Wristband, an Identity Access Management Platform"
          className="h-auto inline pb-6"
          src={wristbandLogo}
          width={200}
        />
      </Link>
      <h1 className="h1 text-4xl font-light text-white sm:text-4xl pb-6">
        Vue.js Client Auth SDK
      </h1>
      <p className="text-white pb-6">
        This project is in progress – An open source Vue.js SDK for integrating
        Wristband authentication and authorization features into Vue.js
        applications, e.g.{" "}
        <Code snippet="useWristbandStore()" type="javascript" useInline />{" "}
        composable.
      </p>
      <div className="flex gap-4 lg:my-20 lg:w-full justify-center flex-nowrap max-lg:flex-wrap">
        <div className="flex column content-start overflow-hidden p-4 bg-black mr-4">
          <Image src={wristbandAuthFlow} alt="Wristband Auth Flow" />
        </div>
        <div className="grid justify-items-stretch">
          <p className="text-white pt-4">
            The Wristband Vue.js SDK provides authentication and authorization
            functionality for Vue.js applications, allowing developers to easily
            integrate Wristband's identity and access management features into
            their projects.
          </p>
          <p className="text-white pt-4">
            The SDK provides a set of components, composables, and services that
            can be used to handle user authentication, manage user sessions, and
            enforce access control based on user roles and permissions that are
            defined in the Wristband platform.
          </p>
          <p className="text-white pt-4">
            It simplifies the process of implementing secure authentication
            flows, such as login, logout, and token refresh, while also
            providing features like multi-factor authentication and social login
            options.
          </p>
          <p className="text-white pt-4">
            By using the Wristband Vue.js SDK, developers can ensure that their
            applications are secure and compliant with industry standards for
            identity and access management.
          </p>
          <p className="text-white pt-4">
            The SDK is designed to be easy to use and integrate, allowing
            developers to focus on building their applications while leveraging
            the robust authentication capabilities provided by Wristband.
          </p>
          <p className="text-white pt-4">
            The SDK is open source and available on GitHub, with comprehensive
            documentation and examples to help developers get started quickly.
          </p>
        </div>
      </div>
      <h2 className="h4 text-2xl font-light text-white sm:text-4xl pb-6">
        Example App Configuration
      </h2>
      <div className="flex gap-4 lg:my-20 lg:w-full justify-center flex-nowrap max-lg:flex-wrap">
        <div className="grid justify-items max-w-xl">
          <p className="text-white pb-4">
            Here is an example of the initialization code for the Wristband
            Vue.js SDK to configure authentication settings for a Vue.js
            application.
          </p>
          <p className="text-white pb-4">
            This code sets up the SDK with the necessary configuration options,
            such as the login URL, session URL, and token URL. It also
            initializes the Pinia state management library and mounts the Vue.js
            application to the DOM. The code ensures that the authentication
            state is properly managed and that the user session is fetched upon
            initialization.
          </p>
          <div className="w-24 inline-grid md:inline-block justify-self-center md:justify-self-end">
            <FontAwesomeIcon
              icon={["fas", "arrow-right-long"]}
              size="4x"
              className="rotate-90 md:rotate-0 text-teal-100"
            />
          </div>
        </div>
        <div className="flex column content-start max-w-3xl overflow-hidden">
          <Code snippet={wristbandAppConfig} type="typescript" />
        </div>
      </div>
      <div className="flex lg:my-20 max-lg:my-6 flex-wrap">
        <h3 className="h4 text-3xl font-light text-white sm:text-4xl pb-6">
          The Client Data Store
        </h3>
        <p className="text-white py-4">
          The SDK includes a client-side data store using Pinia for state
          management which manages the user session. It contains a baseline set
          of properties that are used to track the authentication state of the
          user, such as whether they are logged in or not, their access token,
          and their refresh token. The data store also includes methods for
          updating and retrieving these properties, as well as for handling
          token expiration and refresh.
        </p>
        <Code snippet={wristbandAuthStore} type="typescript" />
      </div>
      <div className="flex lg:my-20 max-lg:my-6 flex-col">
        {/* <h3 className="h2 text-3xl font-extrabold text-white lg:text-4xl pb-6">
          The Authentication Flow
        </h3>
        <p className="text-white p-4">
          The component is built using React, receiving a JSON payload from a
          CMS provider. The JSON is processed then rendered on the page. The
          wireframes show optionally displaying image, headline, subheading, and
          CTA link or button. The component can optionally display a video
          instead of an image.
        </p> */}
        <h4 className="h4 text-xl font-light text-white lg:text-2xl py-6">
          Learn More
        </h4>
        <p className="text-white p-4">
          To learn more about the Wristband Vue.js SDK, including installation
          instructions, configuration options, and usage examples, please visit
          the{" "}
          <Link
            className="text-teal-100 hover:underline"
            href="https://github.com/wristband-dev/vue-client-auth"
          >
            official GitHub repository
          </Link>{" "}
          and the wristband platform{" "}
          <Link
            className="text-teal-100 hover:underline"
            href="https://docs.wristband.dev"
          >
            documentation
          </Link>
          .
        </p>
        {/* <h3 className="h4 font-extrabold text-white lg:text-2xl py-6">Video</h3>
        <p className="text-white p-4">
          The component can optionally display a video instead of an image. The
          video will automatically play when the component is displayed on the
          page. The video can be configured to loop, or, play once then stop.
        </p>
        <h3 className="h4 font-extrabold text-white lg:text-2xl py-6">
          Sub-components
        </h3>
        <p className="text-white p-4">
          There are several sub-components that make up the entire component,
          including an image or video, Heading, Subheading, description, and CTA
          link. It can be configured to also display a "details" link, that is
          displayed in the lower right corner of the component.
        </p> */}
      </div>
    </div>
  );
}
