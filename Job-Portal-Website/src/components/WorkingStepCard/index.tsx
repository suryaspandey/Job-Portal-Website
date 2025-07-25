import { Card } from "../ui/card";

export const WorkingStepCard = ({ step, index }: any) => {
  const Icon = step.icon;
  return (
    <div key={index}>
      <Card
        className={`bg-white px-6 !gap-1 ${index % 2 === 0 ? "mt-0" : "mt-4"}`}
      >
        <div className="flex flex-col mb-1">
          <Icon
            className={"w-8 h-8 mr-4 mb-2"}
            style={{ color: step.iconColor }}
          />
          <h3 className="text-xl font-semibold text-black">{step.title}</h3>
        </div>
        <p className="text-muted-foreground text-sm">{step.description}</p>
      </Card>
    </div>
  );
};

export default WorkingStepCard;
