import FeaturedJobs from "@/components/FeaturedJobs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorksSteps from "@/components/HowItWorksSteps";
import JobRolesMarquee from "@/components/JobRolesMarquee";
import JobUpdates from "@/components/JobUpdates";
import TopCompanies from "@/components/TopCompanies";

const Home = () => {
  return (
    <div className="min-h-screen bg-background pt-[72px]">
      <Hero />
      <JobRolesMarquee />
      <FeaturedJobs />
      <HowItWorksSteps />
      <TopCompanies />
      <JobUpdates />
      <Footer />
    </div>
  );
};

export default Home;
