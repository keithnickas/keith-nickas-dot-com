export interface ResumeItemTitleProps {
  title: string;
  company: string;
  location: string;
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;
  fill?: string;
  width?: number;
  height?: number;
  startDate: string;
  endDate: string;
}

export interface WorkExperience {
  position: ResumeItemTitleProps;
  skills?: string[];
  summary: string[];
  keyAchievements?: string[];
}

export interface ImageContent {
  position?: "left" | "right";
  alt?: string;
  width?: number;
  height?: number;
  inverse?: boolean;
}

export interface Highlight extends WorkExperience {
  iconPosition: "left" | "right";
  useListIcon?: boolean;
  imageContent?: ImageContent;
}

export type ResumeWorkExperience = {
  workExperience: WorkExperience[];
  highlights: Highlight[];
};
