import FeaturedJobs from "@/components/FeaturedJobs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorksSteps from "@/components/HowItWorksSteps";
import JobCategories from "@/components/JobCategories";
import JobRolesMarquee from "@/components/JobRolesMarquee";
import JobUpdates from "@/components/JobUpdates";
import { FooterSkeleton } from "@/components/PageSkeletons/FooterSkeleton";
import { HeroSkeleton } from "@/components/PageSkeletons/HeroSkeleton";
import { JobCardsSkeleton } from "@/components/PageSkeletons/JobCardsSkeleton";
import JobRolesMarqueeSkeleton from "@/components/PageSkeletons/JobRolesMarqueeSkeleton";
import JobUpdatesSkeleton from "@/components/PageSkeletons/JobUpdatesSkeleton";
import { OfferSkeleton } from "@/components/PageSkeletons/OfferSkeleton";
import { StepsSkeleton } from "@/components/PageSkeletons/StepsSkeleton";
import { TestimonialSkeleton } from "@/components/PageSkeletons/TestimonialSkeleton";
import TopCompaniesSkeleton from "@/components/PageSkeletons/TopCompaniesSkeleton";
import Testimonials from "@/components/Testimonials";
import TopCompanies from "@/components/TopCompanies";
import WhatWeOffer from "@/components/WhatWeOffer";
import { useEffect, useState } from "react";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-[72px]">
      {isLoading ? <HeroSkeleton /> : <Hero />}

      {isLoading ? <JobRolesMarqueeSkeleton /> : <JobRolesMarquee />}

      {isLoading ? <StepsSkeleton /> : <HowItWorksSteps />}
      {isLoading ? <TopCompaniesSkeleton /> : <TopCompanies />}
      {isLoading ? <JobCardsSkeleton /> : <JobCategories />}
      {isLoading ? <JobCardsSkeleton /> : <FeaturedJobs />}
      {isLoading ? <OfferSkeleton /> : <WhatWeOffer />}
      {isLoading ? <TestimonialSkeleton /> : <Testimonials />}

      {isLoading ? <JobUpdatesSkeleton /> : <JobUpdates />}
      {isLoading ? <FooterSkeleton /> : <Footer />}
    </div>
  );
};

export default Home;
