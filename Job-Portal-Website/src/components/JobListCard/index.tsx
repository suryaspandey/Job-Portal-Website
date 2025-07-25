import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { companyLogos } from "../FeaturedJobs/constants";
import { Badge } from "../ui/badge";

export const JobListCard = ({ job }) => {
  return (
    <Card
      key={job.id}
      className="group hover:shadow-elegant transition-all duration-300  hover:-translate-y-1 bg-white border-border/50"
    >
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white p-2 border">
              <img
                src={companyLogos[job.logo]}
                alt={`${job.company} logo`}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg leading-tight dark:text-black">
                {job.company}
              </h3>
              <p className="text-sm text-muted-foreground">{job.location}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-gray-100"
          >
            <Heart
              className={`w-4 h-4 text-muted-foreground
                 group-hover:text-primary transition-colors duration-300`}
            />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 font-semibold text-lg text-black leading-tight">
          {job.title}
        </div>

        <p className="text-sm text-muted-foreground line-clamp-3">
          {job.description}
        </p>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <span className="text-blue-500 font-bold">
                {job.positions} Position
              </span>
            </div>
            <div className="flex gap-1">
              <Badge
                variant="secondary"
                className="bg-orange-100 text-orange-700 hover:bg-orange-200"
              >
                {job.type}
              </Badge>
            </div>

            <div className="flex gap-1">
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-700 hover:bg-green-200"
              >
                {`${job.yearOfExperience} Years`}
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <div className="flex gap-1">
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-700 hover:bg-green-200"
              >
                {`$${job.salary}/Year`}
              </Badge>
            </div>

            <div className="flex gap-1">
              <Badge
                variant="secondary"
                className="bg-red-100 text-red-700 hover:bg-red-200"
              >
                {job.officeType}
              </Badge>
            </div>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button className=" bg-primary rounded-xl text-[12px] hover:!bg-transparent">
            Apply Now
          </Button>
          <Button
            variant="outline"
            className="border-black rounded-xl text-[12px] dark:bg-transparent dark:text-black"
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobListCard;
