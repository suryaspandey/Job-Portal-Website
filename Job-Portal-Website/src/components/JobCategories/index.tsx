import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Button } from "../ui/button";

import { useNavigate } from "react-router-dom";
import { jobCategories } from "./constants";
import useMobile from "@/hooks/useMobile";

const JobCategories = () => {
  const navigate = useNavigate();
  const isMobile = useMobile();

  const filteredCategories = jobCategories.filter((job) => job.categoryId <= 4);
  const categoriesToRender = isMobile ? filteredCategories : jobCategories;
  
  return (
    <section className="py-2 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Countless Career Options{" "}
            <span className="text-foreground">Are Waiting</span>
            <div className="text-foreground">For You to Explore</div>
          </h2>
        </div>

        <div className="grid grid-cols-2  lg:grid-cols-4 gap-2 md:gap-6 bg-gray-100 p-2 md:p-4 rounded-lg">
          {categoriesToRender.map((category, index) => (
            <Card
              key={index}
              className="!p-2 border-none bg-white  hover:shadow-xl transition-all duration-300 hover:bg-primary group cursor-pointer"
            >
              <CardContent className="p-2 md:p-4 flex flex-col justify-center items-center md:items-start">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${category.color} ${category.iconColor} mb-4 group-hover:bg-white group-hover:text-primary transition-transform group-hover:scale-110`}
                >
                  <category.icon className="w-8 h-8" />
                </div>

                <h3 className="text-base md:text-lg font-semibold text-foreground dark:text-black group-hover:text-white mb-2 transition-colors">
                  {category.name}
                </h3>
                <Badge
                  variant="secondary"
                  className="px-0 text-sm bg-transparent group-hover:bg-transparent group-hover:text-white dark:text-black"
                >
                  {category.count}+ Job Openings
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Button onClick={() => navigate(`/jobs`)}>View All Categories</Button>
      </div>
    </section>
  );
};

export default JobCategories;
