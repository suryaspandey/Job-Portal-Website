import jobList from "../data/jobList.json";
import JobListCard from "@/components/JobListCard";
import { useEffect, useState } from "react";
import JobFilter from "@/components/JobFilter";
import Footer from "@/components/Footer";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";

import { ChevronLeft, ChevronRight, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FindJobCardSkeleton } from "@/components/PageSkeletons/FindJobCardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

const JobList = () => {
  const [currentJobList, setCurrentJobList] = useState(jobList);
  const [openFilterMenu, setOpenFilterMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const pageSize = 12;

  const totalPages = Math.ceil(currentJobList.length / pageSize);

  return (
    <div className="min-h-screen bg-purple-50 dark:bg-black pt-[72px]">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <div className="hidden md:block">
            <JobFilter
              jobList={jobList}
              setCurrentJobList={setCurrentJobList}
            />
          </div>

          <div className="flex-1">
            <div className="mb-6 flex justify-between">
              {isLoading ? (
                <div className="flex-col items-center mb-4">
                  <Skeleton className="h-6 w-24 mb-4" />
                  <Skeleton className="h-4 w-48 rounded" />
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-bold mb-2">Available Jobs</h2>
                  <p className="text-muted-foreground">
                    Find your perfect job match
                  </p>
                </div>
              )}

              <div className="block md:hidden">
                <Filter
                  onClick={() => setOpenFilterMenu(true)}
                  className="cursor-pointer"
                />
              </div>
            </div>

            {openFilterMenu && (
              <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-end">
                <div className="bg-white w-full h-full p-4 relative">
                  <Button
                    onClick={() => setOpenFilterMenu(false)}
                    className="absolute top-4 right-4"
                  >
                    <X />
                  </Button>
                  <JobFilter
                    jobList={jobList}
                    setCurrentJobList={setCurrentJobList}
                    isMobile={true}
                    setOpenFilterMenu={setOpenFilterMenu}
                  />
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {isLoading ? (
                Array.from({ length: pageSize }).map((_, index) => (
                  <FindJobCardSkeleton key={index} />
                ))
              ) : currentJobList.length === 0 ? (
                <p>No data found</p>
              ) : (
                currentJobList
                  .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
                  .map((job) => <JobListCard key={job.id} job={job} />)
              )}
            </div>
            {currentJobList.length > pageSize && (
              <div className="mt-8 flex justify-center bg-white">
                <Pagination>
                  <PaginationContent className="gap-2">
                    <PaginationItem>
                      <button
                        onClick={() =>
                          setCurrentPage((prev) => Math.max(prev - 1, 0))
                        }
                        disabled={currentPage === 0}
                        className="px-3 py-1  disabled:opacity-50"
                      >
                        <ChevronLeft />
                      </button>
                    </PaginationItem>

                    {Array.from({ length: totalPages }, (_, idx) => (
                      <PaginationItem key={idx}>
                        <button
                          onClick={() => setCurrentPage(idx)}
                          className={`px-3 py-1  ${
                            currentPage === idx ? "font-bold" : ""
                          }`}
                        >
                          {idx + 1}
                        </button>
                      </PaginationItem>
                    ))}

                    <PaginationItem>
                      <button
                        onClick={() =>
                          setCurrentPage((prev) =>
                            Math.min(
                              prev + 1,
                              Math.ceil(currentJobList.length / pageSize) - 1
                            )
                          )
                        }
                        disabled={
                          currentPage ===
                          Math.ceil(currentJobList.length / pageSize) - 1
                        }
                        className="px-3 py-1 disabled:opacity-50"
                      >
                        <ChevronRight />
                      </button>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default JobList;
