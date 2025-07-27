import { useNavigate, useParams } from "react-router-dom";
import jobDetails from "../data/jobDetails.json";
import jobList from "../data/jobList.json";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { companyLogos } from "@/components/FeaturedJobs/constants";
import JobListCard from "@/components/JobListCard";

import CompanyOverViewAndBenefits from "@/components/CompanyOverViewAndBenefits";

import JobDetailsTab from "@/components/JobDetailsTab";
import useMobile from "@/hooks/useMobile";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { JobDescriptionCardSkeleton } from "@/components/PageSkeletons/JobDescriptionCardSkeleton";
import { CompanyOverviewCardSkeleton } from "@/components/PageSkeletons/CompanyOverviewCardSkeleton";
import { JobRecommendationCardSkeleton } from "@/components/PageSkeletons/JobRecommendationCardSkeleton";
import Footer from "@/components/Footer";
import { toast } from "sonner";
const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isMobile = useMobile();
  const [isLoading, setIsLoading] = useState(true);

  const [details, setDetails] = useState({});

  useEffect(() => {
    setDetails(jobDetails[id]);
  }, [id]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!id) {
    return <div>Job not found</div>;
  }

  return (
    <section className="bg-gray-100 dark:bg-white">
      <div className="max-w-7xl mx-auto pt-[72px] px-4 sm:px-6 lg:px-8 py-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 h-[620px] ">
            {isLoading ? (
              <JobDescriptionCardSkeleton />
            ) : (
              <Card className="h-full">
                <CardContent className="p-6 overflow-y-auto">
                  <div className="flex flex-col md:flex-row items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white border-0 md:border border-gray-300 rounded-none md:rounded-lg flex items-center justify-center text-2xl">
                        <img
                          src={companyLogos[details?.logo]}
                          alt={details?.company}
                          className="w-10 h-10 rounded-full"
                        />
                      </div>
                      <div>
                        <h1 className="text-2xl font-bold text-foreground">
                          {details.title}
                        </h1>

                        <div className="flex gap-4 my-2 flex-wrap">
                          <Badge className="bg-blue-100 text-blue-700 border-blue-100 font-bold">
                            {details.positions} Positions
                          </Badge>
                          <Badge className="bg-orange-100 text-orange-700 border-orange-100 font-bold">
                            {details.type}
                          </Badge>
                          <Badge className="bg-[#CCFBF1] text-[#22D3EE] border-[#CCFBF1] font-bold">
                            {details.salary}
                          </Badge>
                          <Badge className="bg-red-100 text-red-700 border-red-100 font-bold">
                            {details.officeType}
                          </Badge>
                          <Badge className="bg-green-100 text-green-700 border-green-100 font-bold">
                            {details.experience}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <Button
                      className="mt-2 md:mt-0 w-full md:w-auto"
                      size="lg"
                      onClick={() =>
                        toast("Job Applied Successfully!", {
                          className:
                            "!bg-white dark:bg-white text-black dark:!text-black border border-gray-300 shadow-md",
                        })
                      }
                    >
                      Apply Now
                    </Button>
                  </div>

                  <JobDetailsTab details={details} />
                </CardContent>
              </Card>
            )}
          </div>

          {isLoading ? (
            <CompanyOverviewCardSkeleton />
          ) : (
            <CompanyOverViewAndBenefits details={details} />
          )}
        </div>

        {isLoading ? (
          <JobRecommendationCardSkeleton />
        ) : (
          <Card className="mt-10">
            <CardHeader className="text-2xl font-bold text-foreground">
              <div className="flex justify-between">
                <h1>Job Recommendation For You</h1>
                <Button
                  variant="outline"
                  className="dark:bg-black hover:bg-primary hover:text-white dark:hover:bg-primary text-primary cursor-pointer"
                  onClick={() => navigate("/jobs")}
                >
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {isMobile ? (
                <Swiper
                  spaceBetween={16}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  modules={[Pagination]}
                >
                  {jobList
                    .filter((jb) => jb.id <= 3)
                    .map((job, index) => (
                      <SwiperSlide key={index}>
                        <JobListCard key={job.id} job={job} />
                      </SwiperSlide>
                    ))}
                </Swiper>
              ) : (
                <div className="mt-8 flex gap-2 ">
                  {jobList
                    ?.filter((job) => job.id <= 3)
                    .map((job) => (
                      <JobListCard key={job.id} job={job} />
                    ))}
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default JobDetails;
