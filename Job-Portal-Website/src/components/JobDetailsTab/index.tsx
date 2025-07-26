import { Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export const JobDetailsTab = ({ details }) => {
  return (
    <>
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid w-full grid-cols-3 h-12 bg-transparent p-0 border-b border-gray-200">
          <TabsTrigger
            value="description"
            className="h-full bg-transparent border-none border-b-2 border-b-transparent data-[state=active]:border-b-primary data-[state=active]:text-primary rounded-none text-muted-foreground hover:text-foreground"
          >
            Job Description
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="h-full bg-transparent border-none border-b-2 border-b-transparent data-[state=active]:border-b-primary data-[state=active]:text-primary rounded-none text-muted-foreground hover:text-foreground"
          >
            Education
          </TabsTrigger>
          <TabsTrigger
            value="applicants"
            className="h-full bg-transparent border-none border-b-2 border-b-transparent data-[state=active]:border-b-primary data-[state=active]:text-primary rounded-none text-muted-foreground hover:text-foreground"
          >
            Total Applicants
          </TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="mt-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm md:text-lg font-semibold mb-3">
                Job Description
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {details.jobTabs?.description}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Essential Knowledge, Skills, And Experience
              </h3>
              <ul className="space-y-2">
                {details?.skillsAndExperience?.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 bg-primary  rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="education" className="mt-6">
          <div>
            <h3 className="text-sm md:text-lg  font-semibold mb-3">
              Education Requirements
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              {details.jobTabs?.education}
            </p>
          </div>
        </TabsContent>

        <TabsContent value="applicants" className="mt-6">
          <div className="text-center py-8 text-sm md:text-base">
            <Users className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">
              {details.jobTabs?.totalApplicants} Applicants
            </h3>
            <p className="text-muted-foreground">
              Total number of applications received for this position
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default JobDetailsTab;
