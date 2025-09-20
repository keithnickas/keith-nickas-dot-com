"use client";

import { useState } from "react";
import classNames from "classnames";
import { WorkExperience } from "./types/resume-types";
import { Accordion } from "./accordion";
import { KeyAchievementsList } from "./helpers/resume/key-achievements";
import { workItemLogo } from "./helpers/resume/work-item-logo";
import { PositionTitleAndLocation } from "./helpers/resume/position-title-location";
import { Skills } from "./helpers/resume/skills";
import { SummaryItems } from "./helpers/resume/summary-items";
import React from "react";

const ResumeComponent = (props: WorkExperience) => {
  const [activeElement, setActiveElement] = useState("");
  const [getCollapsed, setCollapsed] = useState<{
    [key: string]: { "data-twe-collapse-collapsed": string } | {};
  }>({
    collapseOne: { "data-twe-collapse-collapsed": "" },
    collapseTwo: { "data-twe-collapse-collapsed": "" },
  });

  const { position, keyAchievements, skills, summary } = props;
  const { fill, width, height, logoWidth, logoHeight } = position || {};

  const handleClick = (value: string) => {
    if (value === activeElement) {
      setActiveElement("");
      setCollapsed((prevState) => ({
        ...prevState,
        [value]: { "data-twe-collapse-collapsed": "" },
      }));
    } else {
      setActiveElement(value);
      setCollapsed((prevState) => ({ ...prevState, [value]: {} }));
    }
  };

  const buttonCollapseClassNames = classNames(
    "group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10",
    {
      "text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]":
        activeElement === ("collapseOne" || "collapseTwo"),
      "": activeElement !== ("collapseOne" || "collapseTwo"),
    }
  );
  const svgCollapseClassNames = classNames(
    "-me-1 ms-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6",
    {
      "rotate-[-180deg] -mr-1":
        activeElement === ("collapseOne" || "collapseTwo"),
      "rotate-0 fill-[#212529] dark:fill-white":
        activeElement !== ("collapseOne" || "collapseTwo"),
    }
  );

  const resumeItem = <PositionTitleAndLocation {...position} />;
  const logoElement = workItemLogo[position.logo as keyof typeof workItemLogo];
  const logo = (props?: Record<string, any>) => {
    if (typeof logoElement === "function")
      return logoElement({
        fill,
        width: width || logoWidth,
        height: height || logoHeight,
        ...props,
      });
    else if (React.isValidElement(logoElement)) return logoElement;
    return null;
  };

  return (
    <section className="mb-12">
      <div className="mb-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mr-8">{logo({ className: "w-52 md:w-full"})}</div>
        <div className="md:w-2/3">
          {resumeItem}
          <SummaryItems summaryItems={summary} />
          <Accordion
            activeElement={activeElement}
            buttonClassNames={buttonCollapseClassNames}
            collapsedId="collapseOne"
            collapsedDataId={getCollapsed.collapseOne}
            handleClick={handleClick}
            title="Key Achievements"
            svgCollapseClassNames={svgCollapseClassNames}
          >
            <div className="px-5 py-4">
              <KeyAchievementsList achievements={keyAchievements} />
            </div>
          </Accordion>
          <Accordion
            activeElement={activeElement}
            buttonClassNames={buttonCollapseClassNames}
            collapsedId="collapseTwo"
            collapsedDataId={getCollapsed.collapseTwo}
            handleClick={handleClick}
            headingId="headingTwo"
            title="Skills"
            svgCollapseClassNames={svgCollapseClassNames}
          >
            <div className="px-5 py-4">
              <Skills skills={skills} />
            </div>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ResumeComponent;
