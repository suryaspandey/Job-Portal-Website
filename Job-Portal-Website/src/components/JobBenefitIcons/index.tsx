import * as LucideIcons from "lucide-react";
import { perkIconMap } from "./constants";

const JobBenefitIcons = ({ label }: { label: string }) => {
  const config = perkIconMap[label];
  if (!config) return null;
  const Icon = LucideIcons[config.icon];

  return (
    <div className="text-center">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center mx-auto"
        style={{ backgroundColor: config.bgColor }}
      >
        <Icon size={18} style={{ color: config.color }} />
      </div>
      <div className="text-xs text-muted-foreground break-words mt-1">{label}</div>
    </div>
  );
};

export default JobBenefitIcons;
