import FeaturedJobs from "@/components/FeaturedJobs";
import Hero from "@/components/Hero";
import HowItWorksSteps from "@/components/HowItWorksSteps";
import JobRolesMarquee from "@/components/JobRolesMarquee";
import Navbar from "@/components/Navbar";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background pt-[72px]">
      <Navbar />
      <Hero />
      <JobRolesMarquee />
      <FeaturedJobs />
      <HowItWorksSteps />
    </div>
  );
};
