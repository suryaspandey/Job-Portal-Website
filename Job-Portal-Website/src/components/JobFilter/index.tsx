import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import {
  datePostedMap,
  experienceRangeMap,
  filterOptions,
  jobTypeMap,
  salaryRangeMap,
} from "./constants";
import FilterSection from "../FilterSection";
import { Accordion } from "../ui/accordion";
import { FunnelX } from "lucide-react";
import FilterSidebarSkeleton from "../PageSkeletons/FilterSidebarSkeleton";

interface Job {
  id: number;
  title: string;
  company: string;
  companyType: string;
  datePosted: string;
  description: string;
  industryType: string;
  location: string;
  logo: string;
  officeType: string;
  opening: string;
  positions: string;
  salary: number;
  tags: string[];
  type: string;
  yearOfExperience: number;
}

interface JobFilterProps {
  jobList: Job[];
  setCurrentJobList: React.Dispatch<React.SetStateAction<Job[]>>;
  isMobile?: boolean;
  setOpenFilterMenu?: (open: boolean) => void;
}
export const JobFilter = React.memo(
  ({
    jobList,
    setCurrentJobList,
    isMobile = false,
    setOpenFilterMenu,
  }: JobFilterProps) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1200);

      return () => clearTimeout(timer);
    }, []);

    const [filters, setFilters] = useState({
      companyType: [],
      location: [],
      experience: [],
      industry: [],
      salary: [],
      datePosted: [],
      jobType: [],
    });

    useEffect(() => {
      let filtered = jobList;

      if (filters.companyType.length > 0) {
        filtered = filtered.filter((job) =>
          filters.companyType.includes(job.companyType)
        );
      }

      if (filters.industry.length > 0) {
        filtered = filtered.filter((job) =>
          filters.industry.includes(job.industryType)
        );
      }

      if (filters.location.length > 0) {
        filtered = filtered.filter((job) =>
          filters.location.includes(job.location)
        );
      }

      if (filters.experience.length > 0) {
        filtered = filtered.filter((job) => {
          return filters.experience.some((exp) => {
            const [min, max] = experienceRangeMap[exp];
            return job.yearOfExperience >= min && job.yearOfExperience <= max;
          });
        });
      }

      if (filters.jobType.length > 0) {
        filtered = filtered.filter((job) => {
          return filters.jobType.some((jobT) => {
            const currentJobType = jobTypeMap[jobT];
            return job.officeType === currentJobType;
          });
        });
      }

      if (filters.salary.length > 0) {
        filtered = filtered.filter((job) => {
          return filters.salary.some((sal) => {
            const [min, max] = salaryRangeMap[sal];
            return job.salary >= min && job.salary <= max;
          });
        });
      }

      if (filters.datePosted.length > 0) {
        filtered = filtered.filter((job) => {
          const jobDate = new Date(job.datePosted);
          return filters.datePosted.some((key) => {
            const range = datePostedMap[key];
            if (!range) return false;
            const [min, max] = range;
            return jobDate >= min && jobDate <= max;
          });
        });
      }
      setCurrentJobList(filtered.length > 0 ? filtered : []);
    }, [filters, jobList]);

    const updateFilter = (filterKey, value) => {
      setFilters((prev) => {
        const updatedValues = prev[filterKey].includes(value)
          ? prev[filterKey].filter((item) => item !== value)
          : [...prev[filterKey], value];
        return {
          ...prev,
          [filterKey]: updatedValues,
        };
      });
    };

    const filterConfig = [
      {
        title: "Company Type",
        items: filterOptions.companyType,
        filterKey: "companyType",
        selectedFilters: filters.companyType,
      },
      {
        title: "Location",
        items: filterOptions.location,
        filterKey: "location",
        selectedFilters: filters.location,
      },
      {
        title: "Industry",
        items: filterOptions.industryType,
        filterKey: "industry",
        selectedFilters: filters.industry,
      },
      {
        title: "Salary",
        items: filterOptions.salaryType,
        filterKey: "salary",
        selectedFilters: filters.salary,
      },
      {
        title: "Experience",
        items: filterOptions.experience,
        filterKey: "experience",
        selectedFilters: filters.experience,
      },

      {
        title: "Date Posted",
        items: filterOptions.datePostedType,
        filterKey: "datePosted",
        selectedFilters: filters.datePosted,
      },
      {
        title: "Job Type",
        items: filterOptions.jobType,
        filterKey: "jobType",
        selectedFilters: filters.jobType,
      },
    ];

    return (
      <>
        {isLoading ? (
          <FilterSidebarSkeleton />
        ) : (
          <div className="w-64 flex-shrink-0 ">
            <Card className="p-6 h-[800px] md:h-[1130px]">
              <div className="flex items-center justify-between mb-0 ">
                <div>
                  <h3 className="font-semibold text-lg">Filter Jobs</h3>
                  {isMobile && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        if (isMobile && setOpenFilterMenu) {
                          setOpenFilterMenu(false);
                        }
                      }}
                    >
                      Apply Filter
                    </Button>
                  )}
                </div>
                <Button
                  variant="outline"
                  className="border rounded-xl border-primary hover:bg-transparent hover:text-foreground dark:border-primary text-primary"
                  size="sm"
                  onClick={() => {
                    setFilters({
                      companyType: [],
                      location: [],
                      experience: [],
                      industry: [],
                      salary: [],
                      jobType: [],
                      datePosted: [],
                    });
                    setCurrentJobList(jobList);
                  }}
                >
                  {isMobile ? (
                    <FunnelX
                      role="button"
                      className="h-10 w-10"
                      aria-label="Clear all filter"
                    />
                  ) : (
                    "Clear All"
                  )}
                </Button>
              </div>
              <hr />

              <Accordion
                type="multiple"
                className="w-full overflow-y-scroll"
                defaultValue={filterConfig.map((section) => section.title)}
              >
                {filterConfig.map(
                  ({ title, items, filterKey, selectedFilters }) => (
                    <FilterSection
                      key={filterKey}
                      title={title}
                      items={items}
                      filterKey={filterKey}
                      selectedFilters={selectedFilters}
                      updateFilter={updateFilter}
                    />
                  )
                )}
              </Accordion>
            </Card>
          </div>
        )}
      </>
    );
  }
);

export default JobFilter;
