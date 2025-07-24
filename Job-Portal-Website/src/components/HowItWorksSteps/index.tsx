import WorkingStepCard from "../WorkingStepCard";
import { workingStepsList } from "./constants";

export const HowItWorksSteps = () => {
  return (
    <section className=" px-4 sm:px-6 lg:px-8 py-12 ">
      <div className="max-w-7xl mx-auto">
        <div className=" mb-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Get Hired in{" "}
            <span className="text-primary">4 Quick Easy Steps</span>
          </h2>

          <p className="text-lg flex text-center text-muted-foreground max-w-2xl">
            Discover your next career opportunity from our hand-picked selection
            of top jobs. Follow these simple steps to get started:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {workingStepsList.map((step, index) => {
            return <WorkingStepCard step={step} index={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSteps;
