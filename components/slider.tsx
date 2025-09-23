"use client";
type AlignContent =
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "stretch"
  | "baseline";

export interface SliderConfigProps {
  animation?: boolean;
  background?: string;
  count: number;
  duration?: string;
  height?: string;
  width?: string;
  useBoxShadow?: boolean;
  useTrackFadeOverlay?: boolean;
  alignContent?: AlignContent;
  disableAnimation?: boolean;
  title?: string;
}

export type SliderProps = {
  children: React.ReactNode;
  config?: SliderConfigProps;
  name: string;
};

/**
 * @description A slider component that is configurable with a set of options
 * @features animation pause on hover, multi-instance using prefix, and custom styles
 * @param children React.ReactNode - required
 * @param config SliderConfigProps - optional
 * @param name string, should be a single word or camelCase - required
 * @type React.FunctionComponent<SliderProps>
 * @returns JSX.Element
 */
export default function Slider({
  children: slides,
  config,
  name: id,
}: SliderProps) {
  const {
    animation,
    background,
    count = 10,
    disableAnimation,
    duration,
    height,
    title,
    width,
    useBoxShadow,
    useTrackFadeOverlay, 
  } = config || {};

  const styles = `
    .slider-${id} {
      --slider-bg: ${
        !!background
          ? background
          : "linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%)"
      };
      --slider-slide-count: ${count};
      --slider-scroll-x: calc(-${
        !!width ? width : "250px"
      } * var(--slider-slide-count) / 2);
      --slider-box-shadow: ${
        !!useBoxShadow ? "0 10px 20px -5px rgba(0, 0, 0, 0.125)" : "none"
      };

      --slider-duration: ${!!duration ? duration : (`${count * 5}s`)};
      --slider-slide-animation: ${
        !!animation
          ? `scroll var(--slider-duration) linear infinite`
          : "none"
      };

      --slider-slide-height: ${!!height ? height : "100%"};
      --slider-height: ${!!height ? height : "100%"};
      --slider-width: ${!!width ? width : "100%"};
      --slider-slide-width: calc(var(--slider-width) / var(--slider-slide-count));
      --slider-track-width: calc(var(--slider-slide-width) * var(--slider-slide-count));

      --slider-before-after-width: 100px;
      --slider-before-after-height: 100%;
      
      --slider-disable-animation: ${!!disableAnimation ? "paused" : "running"};
      --slider-track-fade-overlay: ${!!useTrackFadeOverlay ? "1" : "0"};
    }

      @-webkit-keyframes scroll {
        0% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(var(--slider-scroll-x));
        }
      }
    
      @keyframes scroll {
        0% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(var(--slider-scroll-x));
        }
      }
    
      .slider-${id} {
        background: white;
        box-shadow: var(--slider-box-shadow);
        height: var(--slider-height);
        width: var(--slider-width);
        margin: auto;
        overflow: hidden;
        position: relative;
      }
      
      .slider-${id}::before, .slider-${id}::after {
        background: var(--slider-bg);
        content: "";
        height: var(--slider-before-after-height);
        position: absolute;
        width: var(--slider-before-after-width);
        z-index: 2;
        display: inline-block;
      }
    
      .slider-${id}::after {
        right: 0;
        top: 0;
        transform: rotateZ(180deg);
        opacity: var(--slider-track-fade-overlay);
      }
      .slider-${id}::before {
        left: 0;
        top: 0;
        opacity: var(--slider-track-fade-overlay);
      }
      
      .slider-${id} .slide-track-${id} {
        -webkit-animation: var(--slider-slide-animation);
        animation: var(--slider-slide-animation);
        display: flex;
        width: var(--slider-track-width);
        animation-play-state: ${disableAnimation ? "paused" : "running"};
      }

      .slider-${id} .slide-track-${id}:hover {
        animation-play-state: paused;
      }
      
      .slider-${id} .slide {
        position: relative;
        height: var(--slider-slide-height);
        width: var(--slider-slide-width);
        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
        img {
          object-fit: cover;
          height: inherit;
          width: inherit;
        }
        a {
          height: 100%;
          display: block;
          width: 100%;
        }
        .overlay-text {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          position: absolute;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: white;
          opacity: 0;
        }
      }

      .slider-${id} .slide:hover.zoom-in {
        transform: scale(1.05);
      }
      .slider-${id} .slide:hover.zoom-out {
        transform: scale(0.95);
        .overlay-text {
          opacity: 1;
          background-image: linear-gradient(rgba(0,0,0,0) 0%,rgba(0, 0, 0, 0.85) 50%, rgba(0,0,0,0) 100%);
        }
      }
    }
  `;

  return (
    <div className={`${title ? `bg-white py-24` : ""}`}>
      <style id={`${id}-slider-styles`}>{styles}</style>
      {title ? (
        <div className="text-black pb-12 text-center">
          <h2 className="h2 font-light">{title}</h2>
        </div>
      ) : null}
      <div className={`flex slider-${id} justify-center`}>
        <div className={`slide-track-${id}`}>{slides}</div>
      </div>
    </div>
  );
}
