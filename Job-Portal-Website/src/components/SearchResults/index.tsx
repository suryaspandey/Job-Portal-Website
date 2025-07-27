import { Building2, Eye, MapPin } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import React from "react";
import { companyLogos } from "../FeaturedJobs/constants";

interface SearchResult {
  id: number;
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
  title: string;
  type: string;
  yearOfExperience: number;
}

interface SearchResultsProps {
  results: SearchResult[];
}

const SearchResults = React.memo(({ results }: SearchResultsProps) => {
  const navigate = useNavigate();
  return (
    <section className="py-4 bg-white dark:bg-gray-100 min-w-full rounded-xl shadow-sm border border-border">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-foreground dark:text-black">
            Search Results
          </h2>
          <p className="text-muted-foreground text-sm">
            Found {results.length} job{results.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2">
          {results.map((job) => (
            <Card
              key={job.id}
              className="transition-shadow hover:shadow-lg dark:bg-white border border-border rounded-xl"
            >
              <CardContent className="p-2">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={companyLogos[job.logo]}
                      alt={`${job.company} logo`}
                      className="w-12 h-12 rounded-md object-contain border"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground dark:text-black">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {job.company}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                    </div>
                  </div>

                  <div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigate(`/jobs/${job.id}`)}
                      className="flex items-center gap-2 hover:bg-transparent hover:text-primary dark:bg-white dark:text-black dark:hover:bg-white dark:hover:text-primary"
                      aria-label="View Job Details"
                    >
                      <Eye className="w-4 h-4" />
                      View
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {results.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No jobs found matching your search criteria.
            </p>
            <p className="text-muted-foreground mt-2">
              Try adjusting your search terms or browse all available jobs.
            </p>
          </div>
        )}
      </div>
    </section>
  );
});

export default SearchResults;
