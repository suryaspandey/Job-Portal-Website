import jobList from "../data/jobList.json";
import JobListCard from "@/components/JobListCard";
import { useState } from "react";
import JobFilter from "@/components/JobFilter";

export const JobList = () => {
  const [currentJobList, setCurrentJobList] = useState(jobList);

  return (
    <div className="min-h-screen bg-purple-50 dark:bg-black">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <JobFilter jobList={jobList} setCurrentJobList={setCurrentJobList} />

          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Available Jobs</h2>
              <p className="text-muted-foreground">
                Find your perfect job match
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {currentJobList.length === 0 ? (
                <p>No data found</p>
              ) : (
                currentJobList.map((job) => (
                  <JobListCard key={job.id} job={job} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobList;
