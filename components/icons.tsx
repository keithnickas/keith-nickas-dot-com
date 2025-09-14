import { SVGAttributes } from "react";
import Image from "next/image";
import deemLogo from "@/public/images/deem/deem.svg";

export interface FeatureIcons {
  backgroundColor?: SVGAttributes<SVGAElement>["fill"];
  fill?: SVGAttributes<SVGAElement>["fill"];
  fillRule?: SVGAttributes<SVGAElement>["fillRule"];
  invert?: boolean;
  stroke?: SVGAttributes<SVGAElement>["stroke"];
  strokeWidth?: SVGAttributes<SVGAElement>["strokeWidth"];
  viewBox?: SVGAttributes<SVGAElement>["viewBox"];
}

export const ListIcon = ({ position }: { position?: "left" | "right" }) => (
  <div
    className={`${
      position === "left"
        ? "justify-start"
        : position === "right"
        ? "justify-end"
        : ""
    }`}
  >
    <svg
      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
    </svg>
  </div>
);

export const Star2Lines = ({
  backgroundColor,
  fill,
  fillRule,
  invert = false,
  stroke,
  strokeWidth,
  viewBox,
}: FeatureIcons) => (
  <svg
    className="w-16 h-16 mb-4"
    viewBox={viewBox || "0 0 64 64"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      className={`fill-current${!backgroundColor && " text-purple-600"}`}
      fill={backgroundColor}
      width="64"
      height="64"
      rx="32"
    />
    <path
      className=" text-purple-100"
      d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924"
      strokeLinecap="square"
      strokeWidth={strokeWidth || "2"}
      stroke={stroke || (invert ? "white" : "black")}
      fill={fill || "none"}
      fillRule={fillRule || "evenodd"}
    />
    <path
      className="text-purple-300"
      d="M43 42h-9M43 37h-9"
      strokeLinecap="square"
      strokeWidth="2"
      stroke={stroke || (invert ? "white" : "black")}
    />
  </svg>
);

export const Notes = ({
  backgroundColor,
  fill,
  fillRule,
  strokeWidth,
  viewBox,
}: FeatureIcons) => (
  <svg
    className="w-16 h-16 mb-4"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      className={`fill-current${!backgroundColor && " text-purple-600"}`}
      fill={backgroundColor}
      cx="32"
      cy="32"
      r="32"
    />
    <path
      className="stroke-current text-purple-100"
      strokeWidth="2"
      strokeLinecap="square"
      d="M21 23h22v18H21z"
      fill="none"
      fillRule="evenodd"
    />
    <path
      className="stroke-current text-purple-300"
      d="M26 28h12M26 32h12M26 36h5"
      strokeWidth="2"
      strokeLinecap="square"
    />
  </svg>
);

export const GlobeWithLines = ({
  backgroundColor,
  fill,
  fillRule,
  strokeWidth,
  viewBox,
}: FeatureIcons) => (
  <svg
    className="w-16 h-16 mb-4"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      className={`fill-current${!backgroundColor && " text-purple-600"}`}
      fill={backgroundColor}
      width="64"
      height="64"
      rx="32"
    />
    <g
      transform="translate(21 21)"
      strokeLinecap="square"
      strokeWidth="2"
      fill="none"
      fillRule="evenodd"
    >
      <ellipse
        className="stroke-current text-purple-300"
        cx="11"
        cy="11"
        rx="5.5"
        ry="11"
      />
      <path className="stroke-current text-purple-100" d="M11 0v22M0 11h22" />
      <circle
        className="stroke-current text-purple-100"
        cx="11"
        cy="11"
        r="11"
      />
    </g>
  </svg>
);

export const HeadIcon = ({
  backgroundColor,
  fill,
  fillRule,
  strokeWidth,
  viewBox,
}: FeatureIcons) => (
  <svg
    className="w-16 h-16 mb-4"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      className={`fill-current${!backgroundColor && " text-purple-600"}`}
      fill={backgroundColor}
      width="64"
      height="64"
      rx="32"
    />
    <g
      transform="translate(22 21)"
      strokeLinecap="square"
      strokeWidth="2"
      fill="none"
      fillRule="evenodd"
    >
      <path
        className="stroke-current text-purple-100"
        d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5"
      />
      <circle className="stroke-current text-purple-300" cx="13" cy="9" r="3" />
    </g>
  </svg>
);

export const ThumbsUp = ({
  backgroundColor,
  fill,
  fillRule,
  strokeWidth,
  viewBox,
}: FeatureIcons) => (
  <svg
    className="w-16 h-16 mb-4"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      className={`fill-current${!backgroundColor && " text-purple-600"}`}
      fill={backgroundColor}
      width="64"
      height="64"
      rx="32"
    />
    <g strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
      <path
        className="stroke-current text-purple-100"
        d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6"
      />
      <path className="stroke-current text-purple-300" d="M22 30h4v12h-4z" />
    </g>
  </svg>
);

export const SpeechBubbleWithCog = ({
  backgroundColor,
  fill,
  fillRule,
  strokeWidth,
  viewBox,
}: FeatureIcons) => (
  <svg
    className="w-16 h-16 mb-4"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      className={`fill-current${!backgroundColor && " text-purple-600"}`}
      fill={backgroundColor}
      width="64"
      height="64"
      rx="32"
    />
    <g
      transform="translate(21 22)"
      strokeLinecap="square"
      strokeWidth="2"
      fill="none"
      fillRule="evenodd"
    >
      <path
        className="stroke-current text-purple-300"
        d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415"
      />
      <circle className="stroke-current text-purple-300" cx="17" cy="5" r="3" />
      <path
        className="stroke-current text-purple-100"
        d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948"
      />
    </g>
  </svg>
);

export const ContinuousIntegration = ({
  backgroundColor,
  fill,
  fillRule,
  stroke,
  strokeWidth,
  viewBox,
}: FeatureIcons) => (
  <svg
    className="w-16 h-16 mb-4"
    width="64"
    height="64"
    viewBox="0 0 64 64"
    version="1.1"
    id="svg486"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs id="defs483" />
    <rect
      className={`fill-current${!backgroundColor && " text-purple-600"}`}
      fill={backgroundColor}
      width="64"
      height="64"
      rx="32"
    />
    <g id="layer1" transform="translate(-73, -116)">
      <g
        id="g67"
        transform="matrix(0.26458333,0,0,0.26458333,-2.4140661,112.50187)"
      >
        <g id="g65">
          <g id="g49">
            <g id="g47">
              <path
                fill="none"
                stroke={stroke ?? "#222"}
                strokeWidth={3}
                strokeMiterlimit={10}
                d="m 367.999,161.219 c -3.962,0 -7.939,-0.941 -11.606,-2.846 -8.361,-4.344 -13.556,-12.896 -13.556,-22.319 0,-9.422 5.194,-17.974 13.555,-22.318 8.362,-4.343 18.345,-3.677 26.055,1.739 l 21.462,15.079 21.462,-15.079 c 7.709,-5.417 17.692,-6.083 26.054,-1.739 8.361,4.344 13.555,12.896 13.555,22.318 0,9.423 -5.194,17.975 -13.556,22.319 -8.361,4.344 -18.345,3.677 -26.054,-1.74 l -21.462,-15.08 -21.462,15.08 c -4.328,3.041 -9.374,4.586 -14.447,4.586 z m 0.027,-41.36 c -2.535,0 -5.087,0.617 -7.485,1.862 -5.451,2.832 -8.705,8.189 -8.705,14.332 0,6.143 3.254,11.5 8.705,14.332 5.451,2.833 11.706,2.414 16.731,-1.117 l 18.809,-13.215 -18.809,-13.215 c -2.814,-1.977 -6.016,-2.979 -9.246,-2.979 z m 43.711,16.195 18.809,13.215 c 5.026,3.532 11.28,3.949 16.73,1.118 5.451,-2.832 8.705,-8.19 8.705,-14.333 0,-6.143 -3.254,-11.5 -8.705,-14.332 -5.451,-2.832 -11.704,-2.415 -16.731,1.117 z"
                id="path45"
              />
            </g>
          </g>
          <line
            fill="none"
            stroke={stroke ?? "#222"}
            strokeWidth={3}
            strokeMiterlimit={10}
            x1="396.082"
            y1="136.054"
            x2="403.909"
            y2="141.55299"
            id="line51"
          />
          <line
            fill="none"
            stroke={stroke ?? "#222"}
            strokeWidth={3}
            strokeMiterlimit={10}
            x1="403.909"
            y1="130.554"
            x2="411.737"
            y2="136.054"
            id="line53"
          />
          <polygon
            fill={fill ?? "#222"}
            points="412.462,135.544 404.366,130.234 411.099,125.502 419.564,130.554 "
            id="polygon55"
          />
          <polygon
            fill={fill ?? "#222"}
            points="396.275,146.574 388.178,141.264 394.912,136.532 403.377,141.584 "
            id="polygon57"
          />
        </g>
      </g>
    </g>
  </svg>
);

export const GapInc = ({
  fill,
  className,
}: {
  fill?: string;
  className?: string;
}) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 109 31"
    aria-label="Gap, Inc."
    className={className}
  >
    <g fill={fill || "#0a0b09"} fillRule="evenodd">
      <path d="m106.346121 18.7053041c-.975645 0-1.798056.7785758-1.798056 1.7446026 0 .9686424.822411 1.7886317 1.798056 1.7886317.986273 0 1.775469-.8199893 1.775469-1.7886317 0-.9660268-.789196-1.7446026-1.775469-1.7446026" />
      <path d="m68.4231391.52002408h-7.7838971v.63820543c1.8543 0 2.4486326.71492958 2.4486326 3.37760632v13.27240607c0 2.712809-.6780352 3.3819656-2.4486326 3.3819656v.6299227h7.7838971v-.6299227c-1.8259563 0-2.4583758-.7742164-2.4583758-3.3819656v-13.27240607c0-2.55543731.6324195-3.37760632 2.4583758-3.37760632z" />
      <path d="m80.9056738 8.29850148c-1.6939808 0-3.2364997.84440158-4.8299489 2.62910992v-2.62910992h-.6377339l-4.1581139.40323772v.62599931c1.8250706 0 2.2356118.34525867 2.2356118 1.93728479v7.4025726c0 2.3732175-.4512854 2.5223065-2.2356118 2.5223065v.6303586h7.0655607v-.6303586c-2.0044333 0-2.2697129-.5196318-2.2697129-2.5223065v-6.4374177c1.337027-1.7459103 2.4942484-2.55718102 3.8193178-2.55718102 1.4380014 0 2.9774203.89191822 2.9774203 3.00226832v6.8807612c0 1.2323817-.4880436 1.6338757-2.2984994 1.6338757v.6303586h7.1342056v-.6303586c-1.8844152 0-2.2719272-.5196318-2.2719272-2.2215129v-5.9522247c0-3.16312742-2.3015995-4.71766332-4.5305682-4.71766332" />
      <path d="m101.568829 8.29850148h-.639062c-.236493.47996187-.569975.73454654-.907.73454654-.677592 0-1.7670541-.73454654-3.7772446-.73454654-3.8175463 0-6.9163132 3.22459392-6.9163132 7.27876782 0 3.936036 2.7683853 6.6614871 6.7241072 6.6614871 2.4309178 0 4.4543946-.9699502 5.8888526-2.9050553v-.9682065c-1.398143 1.8997946-3.3494314 2.7585819-4.989382 2.7585819-2.7099264 0-5.0057686-3.0214493-5.0057686-6.623125 0-3.2359282 1.8414568-5.46790348 4.4942529-5.46790348 2.2147968 0 3.9185207 1.53186738 4.4884957 3.90944418h.639062z" />
      <path d="m46.164763 21.378792c-1.2856539 0-2.7316271-.628179-3.6979712-1.6399787v-8.2578726c1.2426955-1.4067547 2.265727-1.96997969 3.6186973-1.96997969 2.4933626 0 4.2719317 2.57156679 4.2719317 6.10959639 0 3.2686231-1.8024842 5.7582346-4.1926578 5.7582346m.9411004-13.08015974c-1.6908807 0-2.9530624.5885091-4.6390716 2.22064104v-2.22064104h-.6434912l-4.2768033.40280178v.62556338c2.0070905 0 2.3436723.26897046 2.3436723 2.05978188v16.7716376c0 1.4468605-.5234733 1.8208907-2.3436723 1.8208907v.6338461h7.146606v-.6338461c-1.895487 0-2.2263115-.5985355-2.2263115-2.1862023v-7.122268c1.4977891 1.1495545 2.6124949 1.5676139 4.0314529 1.5676139 3.8237464 0 6.6576766-3.0136025 6.6576766-7.063853 0-3.9464984-2.5770651-6.87596594-6.0500579-6.87596594" />
      <path d="m28.6205693 20.8232394c-1.0925622 0-2.0310054-1.0841645-2.0310054-2.4111436 0-2.6901405 2.2537694-2.6404442 4.7776901-3.7280962v4.4661302c-.5093014 1.1151158-1.9473029 1.6731096-2.7466847 1.6731096m.4831721-12.52478152c-2.4136459 0-4.3715776 1.59289798-4.9375665 4.04632702l.6824639.1848355c.5584601-1.8867166 2.0270196-2.8204844 3.533666-2.8204844 1.888844 0 2.9849492 1.3330821 2.9849492 3.1953865v.964719c-2.1727241 1.2637688-7.3853134 1.1151157-7.3853134 4.8719835 0 1.929438 1.731182 3.4970518 3.8086889 3.4970518 1.4039004 0 2.2750272-.4385482 3.5766245-1.857945.4827292 1.2973356 1.1479211 1.857945 2.2772416 1.857945 1.5101894 0 2.4911482-1.0479821 2.6054089-2.6822937h-.6381768c-.2989378.9315881-.5048727 1.2672563-.9052279 1.2672563-.6129332 0-.7581948-.5213755-.7581948-2.045832v-5.6536108c0-3.56244177-2.5992087-4.82533872-4.8445636-4.82533872" />
      <path d="m11.1360304 0c-5.31887824 0-11.13598611 4.2433686-11.13598611 11.7880553 0 4.9046785 3.17006914 10.560033 12.69577701 10.560033.9774159 0 4.8233058-.1848355 6.0332289-.5279145v-5.7190007c0-1.8623043.5744034-2.868001 2.6846827-2.868001v-.6225118h-8.7555556v.6225118h.8339257c1.7639544 0 2.3764447.9355115 2.3764447 3.5345421v2.3126228c0 1.8976149-2.0783926 2.2620546-3.6164829 2.2620546-5.1435014 0-8.9344754-4.603013-8.9344754-10.8582109 0-5.83539472 3.38043277-9.66767881 7.818441-9.66767881 2.9530625 0 6.6249042 1.71321539 7.18425 5.77087667h.6111617v-6.28440535h-.6873355c-.222764.51352868-.5186017.70533905-1.2037228.70533905-1.6736087 0-2.8396875-1.00831226-5.9043534-1.00831226" />
    </g>
  </svg>
);

export const Deem = ({ className }: { className?: string }) => (
  <Image
    src={deemLogo}
    alt="Deem"
    width={100}
    height={30}
    className={className}
  />
);

export const GitHub = ({ fill, className }: { className?: string; fill?: string }) => (
  <svg
    className={`${className} fill-current`}
    viewBox="0 0 367.4 90"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill={fill || "#fff"}>
      <path d="m46.1 0c-25.5 0-46.1 20.6-46.1 46.1 0 20.4 13.2 37.7 31.5 43.8 2.3.4 3.2-1 3.2-2.2 0-1.1-.1-4.7-.1-8.6-11.6 2.1-14.6-2.8-15.5-5.4-.5-1.3-2.8-5.4-4.7-6.5-1.6-.9-3.9-3-.1-3.1 3.6-.1 6.2 3.3 7.1 4.7 4.2 7 10.8 5 13.4 3.8.4-3 1.6-5 2.9-6.2-10.3-1.2-21-5.1-21-22.8 0-5 1.8-9.2 4.7-12.4-.5-1.2-2.1-5.9.5-12.2 0 0 3.9-1.2 12.7 4.7 3.7-1 7.6-1.6 11.5-1.6s7.8.5 11.5 1.6c8.8-6 12.7-4.7 12.7-4.7 2.5 6.3.9 11.1.5 12.2 2.9 3.2 4.7 7.3 4.7 12.4 0 17.7-10.8 21.6-21.1 22.8 1.7 1.4 3.1 4.2 3.1 8.5 0 6.2-.1 11.1-.1 12.7 0 1.2.9 2.7 3.2 2.2 18.2-6.1 31.4-23.4 31.4-43.8.3-25.4-20.4-46-45.9-46z"></path>
      <path d="m221.6 67.1h-.1zm0 0c-.5 0-1.8.3-3.2.3-4.4 0-5.9-2-5.9-4.6v-17.5h8.9c.5 0 .9-.4.9-1.1v-9.5c0-.5-.4-.9-.9-.9h-8.9v-11.7c0-.4-.3-.7-.8-.7h-12c-.5 0-.8.3-.8.7v12.1s-6.1 1.5-6.5 1.6-.7.5-.7.9v7.6c0 .6.4 1.1.9 1.1h6.2v18.3c0 13.6 9.5 15 16 15 3 0 6.5-.9 7.1-1.2.3-.1.5-.5.5-.9v-8.4c.1-.6-.3-1-.8-1.1zm132.2-12.2c0-10.1-4.1-11.4-8.4-11-3.3.2-6 1.9-6 1.9v19.6s2.7 1.9 6.8 2c5.8.2 7.6-1.9 7.6-12.5zm13.6-.9c0 19.1-6.2 24.6-17 24.6-9.1 0-14.1-4.6-14.1-4.6s-.2 2.6-.5 2.9c-.2.3-.4.4-.8.4h-8.3c-.6 0-1.1-.4-1.1-.9l.1-62c0-.5.4-.9.9-.9h11.9c.5 0 .9.4.9.9l-.1 20.9s4.6-3 11.3-3h.1c6.8-0 16.7 2.5 16.7 21.7zm-48.7-20.2h-11.7c-.6 0-.9.4-.9 1.1v30.3s-3.1 2.2-7.3 2.2-5.4-1.9-5.4-6.1v-26.5c0-.5-.4-.9-.9-.9h-11.9c-.5 0-.9.4-.9.9v28.5c0 12.3 6.9 15.3 16.3 15.3 7.8 0 14.1-4.3 14.1-4.3s.3 2.2.4 2.5.5.5.9.5h7.5c.6 0 .9-.4.9-.9l.1-41.7c-.1-.4-.6-.9-1.2-.9zm-132.2 0h-11.9c-.5 0-.9.5-.9 1.1v40.9c0 1.1.7 1.5 1.7 1.5h10.7c1.1 0 1.4-.5 1.4-1.5v-41.1c0-.5-.5-.9-1-.9zm-5.8-18.9c-4.3 0-7.7 3.4-7.7 7.7s3.4 7.7 7.7 7.7c4.2 0 7.6-3.4 7.6-7.7s-3.4-7.7-7.6-7.7zm92-1.4h-11.8c-.5 0-.9.4-.9.9v22.8h-18.5v-22.7c0-.5-.4-.9-.9-.9h-11.9c-.5 0-.9.4-.9.9v62c0 .5.5.9.9.9h11.9c.5 0 .9-.4.9-.9v-26.6h18.5l-.1 26.5c0 .5.4.9.9.9h11.9c.5 0 .9-.4.9-.9v-62c0-.4-.4-.9-.9-.9zm-105.3 27.5v32c0 .2-.1.6-.3.7 0 0-7 5-18.5 5-13.9 0-30.3-4.4-30.3-33 0-28.7 14.4-34.6 28.4-34.5 12.2 0 17.1 2.7 17.8 3.2.2.3.3.5.3.8l-2.3 9.9c0 .5-.5 1.1-1.1.9-2-.6-5-1.8-12.1-1.8-8.2 0-17 2.3-17 20.8s8.4 20.6 14.4 20.6c5.1 0 7-.6 7-.6v-12.8h-8.2c-.6 0-1.1-.4-1.1-.9v-10.3c0-.5.4-.9 1.1-.9h20.9c.6-.1 1 .4 1 .9z"></path>
    </g>
  </svg>
);
