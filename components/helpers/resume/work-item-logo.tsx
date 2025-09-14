import FeatImage03 from "@/public/images/deem/digistrive_logo.png";
import { Deem, GapInc } from "@/components/icons";

export const workItemLogo = {
  gap: ({ fill = "#0a0b09", width, height }: { fill?: string; width?: number; height?: number }) => <GapInc fill={fill} width={width} height={height} />,
  deem: ({ width, height }: { width?: number; height?: number }) => <Deem width={width} height={height} />,
  digistrive: FeatImage03,
};
