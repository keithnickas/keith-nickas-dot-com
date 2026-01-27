// import Image, { StaticImageData } from "next/image";
import hash from "object-hash";
import { Highlight } from "../types/resume-types";
import React from "react";

export function HighlightItem({ highlight }: { highlight: Highlight }) {
  const {
    position,
    iconPosition,
    imageContent,
    keyAchievements,
    skills,
    summary,
    useListIcon = true,
  } = highlight;
  const {
    position: imagePosition = "left",
    width = 384,
    height = 384,
    alt = "Unknown Image",
  } = imageContent || {};
  const { title, company, location, startDate, endDate } = position;

  return (
    <div className={`${imagePosition === "left" ? "flex flex-col " : "flex flex-col-reverse "}md:grid md:grid-cols-12 md:gap-6 items-center`}>
      {/* Image: Left */}
      {imagePosition === "left" ? (
        <div
          className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0"
          data-aos="fade-up"
        >
          {/* {image} */}
        </div>
      ) : null}
      {/* Content */}
      <div
        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
        data-aos="fade-right"
      >
        <div className="md:pr-4 lg:pr-12 xl:pr-16">
          <div className="font-architects-daughter text-xl text-purple-600 mb-2"></div>
          <h2 className="h3 mb-3">
            {title}
          </h2>
          <p className="text-xl text-gray-400 mb-4">{company} ({location}) | {startDate} - {endDate}</p>
          <p className="text-xl text-gray-400 mb-4">{summary}</p>
          <ul className="text-lg text-gray-400 -mb-2">
            {keyAchievements && keyAchievements.map((achievement, _) => (
              <li key={hash(achievement)} className="flex items-baseline mb-2">
                {iconPosition === "left" && useListIcon ? (
                  <svg
                    className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                ) : null}
                <span>{achievement}</span>
                {iconPosition === "right" && useListIcon ? (
                  <svg
                    className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Image: right */}
      {imagePosition === "right" ? (
        <div
          className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
          data-aos="fade-up"
        >
          {/* {image} */}
        </div>
      ) : null}
    </div>
  );
}
