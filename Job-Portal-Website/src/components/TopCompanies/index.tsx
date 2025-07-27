import { Card } from "../ui/card";
import { topCompanies } from "./constants";

export const TopCompanies = () => {
  return (
    <section className=" py-2 md:py-20 dark:bg-white">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className=" mb-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground dark:text-background">
              Top Companies
            </span>
            <span className="text-primary"> Hiring Now</span>
          </h2>

          <p className="text-lg flex text-center text-muted-foreground max-w-2xl">
            Join thousands of professionals who have found their dream jobs with
            these leading companies
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {topCompanies.map((company, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-elegant transition-all duration-300 cursor-pointer group hover:-translate-y-1 bg-card/50 dark:bg-gray-100 backdrop-blur-sm border-border/50 dark:border-none"
            >
              <div className="flex items-center justify-center h-16">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-h-12 max-w-full object-contain filter  group-hover: transition-all duration-300"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TopCompanies;
