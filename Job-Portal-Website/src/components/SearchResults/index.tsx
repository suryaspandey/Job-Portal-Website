import { Building2, Eye, MapPin } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const SearchResults = ({ results }: any) => {
  return (
    <section className="py-1 bg-gray-50  min-w-full rounded-lg ">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="mb-1">
          <h2 className="text-2xl font-bold text-foreground dark:text-black mb-2">
            Search Results
          </h2>
          <p className="text-muted-foreground">Found {results.length} jobs </p>
        </div>

        <div className="space-y-4 h-[200px] overflow-y-auto pr-2">
          {results.map((job) => (
            <Card key={job.id} className="!py-2 hover:shadow-md transition-shadow dark:bg-gray-100">
              <CardContent className="p-1">
                <div className="flex items-center justify-between">
                  <div className=" space-y-1">
                    <h3 className="text-lg font-semibold text-foreground dark:text-background">
                      {job.title}
                    </h3>

                    <div className="flex flex-col md:flex-row items-left md:items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        <span>{job.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    View
                  </Button>
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
};

export default SearchResults;
