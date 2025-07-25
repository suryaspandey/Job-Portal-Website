import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { experienceRangeMap, filterOptions, salaryRangeMap } from "./constants";
import FilterSection from "../FilterSection";
import { Accordion } from "../ui/accordion";

export const JobFilter = ({ jobList, setCurrentJobList }) => {
  const [filters, setFilters] = useState({
    companyType: [],
    location: [],
    experience: [],
    industry: [],
    salary: [],
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

    if (filters.salary.length > 0) {
      filtered = filtered.filter((job) => {
        return filters.salary.some((sal) => {
          const [min, max] = salaryRangeMap[sal];
          return job.salary >= min && job.salary <= max;
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
  ];

  return (
    <div className="w-64 flex-shrink-0">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-lg">Filter Jobs</h3>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setFilters({
                companyType: [],
                location: [],
                experience: [],
                industry: [],
                salary: [],
              });
              setCurrentJobList(jobList);
            }}
          >
            Clear All
          </Button>
        </div>

        <Accordion
          type="multiple"
          className="w-full"
          defaultValue={filterConfig.map((section) => section.title)}
        >
          {filterConfig.map(({ title, items, filterKey, selectedFilters }) => (
            <FilterSection
              key={filterKey}
              title={title}
              items={items}
              filterKey={filterKey}
              selectedFilters={selectedFilters}
              updateFilter={updateFilter}
            />
          ))}
        </Accordion>
      </Card>
    </div>
  );
};

export default JobFilter;
