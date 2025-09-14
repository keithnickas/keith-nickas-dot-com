import { ResumeItemTitleProps } from "@/components/types/resume-types";

export const PositionTitleAndLocation = ({
  title,
  company,
  location,
  startDate,
  endDate
}: ResumeItemTitleProps) => (
  <>
    <h3 className="text-lg text-gray-600 font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">
      {company} ({location}) | {startDate} - {endDate}
    </p>
  </>
);
