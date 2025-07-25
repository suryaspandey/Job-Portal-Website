import FeaturedJobCard from "../FeaturedJobCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useMobile from "@/hooks/useMobile";
import featuredJobs from "../../data/jobList.json";
import { useNavigate } from "react-router-dom";
export const FeaturedJobs = () => {
  const isMobile = useMobile();
  const navigate = useNavigate();

  return (
    <section id="featuredJobs" className="py-20 bg-gray-100 dark:bg-white">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className=" mb-16  items-center">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-foreground dark:text-background">
                Featured
              </span>
              <span className="text-primary"> Jobs</span>
            </h2>

            <div
              className="flex justify-end text-primary cursor-pointer mb-4"
              onClick={() => navigate("/jobs")}
            >
              View All Jobs
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover your next career opportunity from our hand-picked selection
            of top jobs.
          </p>
        </div>
        {isMobile ? (
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            {featuredJobs.map((job, index) => (
              <SwiperSlide key={index}>
                <FeaturedJobCard jobDetails={job} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {featuredJobs.map((job) => {
              return <FeaturedJobCard jobDetails={job} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedJobs;
