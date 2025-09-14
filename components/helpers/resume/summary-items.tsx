import hash from "object-hash";
import { WorkExperience } from "@/components/types/resume-types";

export const SummaryItems = ({
  summaryItems,
}: {
  summaryItems: WorkExperience["summary"];
}) => {
  if (!summaryItems || summaryItems.length === 0) return null;

  return (
    <>
      {summaryItems.map((summaryItem, _) => (
        <p key={hash(summaryItem)} className="text-gray-600 mb-4">
          {summaryItem}
        </p>
      ))}
    </>
  );
};
