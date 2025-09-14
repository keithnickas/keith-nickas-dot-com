import { WorkExperience } from "@/components/types/resume-types";
import hash from "object-hash";

export const Skills = ({ skills }: { skills: WorkExperience["skills"] }) => (
  <ul className="text-gray-900">
    {skills.map((item, _) => (
      <li key={hash(item)} className="flex items-baseline mb-2">
        {item.split(":")[0] && (
          <span className="font-semibold mr-2">{item.split(":")[0]}:</span>
        )}
        <span>{item.split(":")[1] ? item.split(":")[1].trim() : item}</span>
      </li>
    ))}
  </ul>
);
