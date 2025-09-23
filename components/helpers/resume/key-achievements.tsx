import hash from "object-hash";
import { WorkExperience } from "@/components/types/resume-types";
import { ListIcon } from "@/components/icons";

export function KeyAchievementsList({
  achievements = [],
}: {
  achievements: WorkExperience["keyAchievements"];
}) {
  return (
    <ul className="text-gray-900">
      {achievements.map((achievement, _) => (
        <li key={hash(achievement)} className="flex items-baseline mb-2">
          <ListIcon />
          {achievement}
        </li>
      ))}
    </ul>
  );
}
