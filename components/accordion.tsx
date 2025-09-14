import { TECollapse } from "tw-elements-react";

export type AccordionProps = {
  activeElement: string;
  buttonClassNames: string;
  children: React.ReactNode;
  collapsedId: string;
  collapsedDataId: { "data-twe-collapse-collapsed": string } | {};
  handleClick: any;
  headingId?: string
  title: React.ReactNode;
  svgCollapseClassNames: string;
};

export function Accordion({
  activeElement,
  buttonClassNames,
  children,
  collapsedId,
  collapsedDataId,
  handleClick,
  headingId,
  title,
  svgCollapseClassNames,
}: AccordionProps) {
  return (
    <div id="accordion">
      <div className="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
        <h2 className="mb-0" id={headingId ?? "headingOne"}>
          <button
            className={buttonClassNames}
            type="button"
            {...collapsedDataId}
            aria-expanded="false"
            aria-controls={collapsedId}
            onClick={() => handleClick(collapsedId)}
          >
            {title}
            <span className={svgCollapseClassNames}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
        </h2>
        <TECollapse
          id={collapsedId}
          show={activeElement === collapsedId}
          className="!mt-0 !rounded-b-none !shadow-none"
          aria-labelledby={headingId}
        >
          {children}
        </TECollapse>
      </div>
    </div>
  );
}
