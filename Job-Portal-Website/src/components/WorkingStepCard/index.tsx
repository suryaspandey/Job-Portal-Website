import type { IconType } from "react-icons/lib";
import { Card } from "../ui/card";
import React from "react";

interface StepProp {
  title: string;
  description: string;
  icon: IconType;
  iconColor: string;
}

interface WorkingStepCardProp {
  step: StepProp;
  index: number;
}
export const WorkingStepCard = React.memo(
  ({ step, index }: WorkingStepCardProp) => {
    const Icon = step.icon;
    return (
      <div key={index}>
        <Card
          className={`bg-white px-6 !gap-1 ${
            index % 2 === 0 ? "md:mt-0" : "md:mt-4"
          }`}
        >
          <div className="flex md:flex-col mb-1">
            <Icon
              className={"w-8 h-8 mr-4 mb-2"}
              style={{ color: step.iconColor }}
            />
            <h3 className="text-base md:text-xl font-semibold text-black">
              {step.title}
            </h3>
          </div>
          <p className="text-muted-foreground text-sm">{step.description}</p>
        </Card>
      </div>
    );
  }
);

export default WorkingStepCard;
