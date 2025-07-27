import FeaturedJobs from "@/components/FeaturedJobs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorksSteps from "@/components/HowItWorksSteps";
import JobCategories from "@/components/JobCategories";
import JobRolesMarquee from "@/components/JobRolesMarquee";
import JobUpdates from "@/components/JobUpdates";
import Testimonials from "@/components/Testimonials";
import TopCompanies from "@/components/TopCompanies";
import WhatWeOffer from "@/components/WhatWeOffer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background pt-[72px]">
      <Hero />
      <JobRolesMarquee />
      <HowItWorksSteps />
      <JobCategories />
      <FeaturedJobs />
      <WhatWeOffer />
      <Testimonials />
      <TopCompanies />
      <JobUpdates />
      <Footer />
    </div>
  );
};

export default Home;
