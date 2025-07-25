import Google from "@/assets/logos/google.svg";
import Amazon from "@/assets/logos/amazon.svg";
import Figma from "@/assets/logos/figma.svg";
import Twitter from "@/assets/logos/twitter.svg";
import LinkedIn from "@/assets/logos/linkedIn.svg";
import Windows from "@/assets/logos/windows.svg";
import JobBag from "@/assets/logos/job-seeker.png";
import { FaPlayCircle } from "react-icons/fa";
import { Building, MapPin, Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { jobSearchKeywords } from "./constants";

export const Hero = () => {
  return (
    <section className=" min-h-[55vh] md:min-h-[80vh] flex flex-col items-center justify-center overflow-hidden px-4 md:px-6">
      <div className="relative w-full h-full">
        <img
          className="absolute top-10 md:top-10  left-4 md:left-1/4  h-5 w-5 md:h-7 md:w-7"
          src={Google}
          alt="Google"
        />
        <img
          className="hidden md:block md:absolute top-20 right-56 h-7 w-7"
          src={LinkedIn}
          alt="LinkedIn"
        />
        <img
          className="hidden md:block md:absolute top-40 md:top-56 left-1/4 h-7 w-7"
          src={Amazon}
          alt="Amazon"
        />
        <img
          className="hidden md:block md:absolute top-40 md:top-28 left-20 md:left-56 h-7 w-7"
          src={Twitter}
          alt="Twitter"
        />
        <img
          className="hidden md:block md:absolute top-56 right-1/4 h-7 w-7"
          src={Windows}
          alt="Windows"
        />
        <img
          className="absolute top-10 md:top-0 right-4 md:right-1/3 h-5 w-5 md:h-7 md:w-7"
          src={Figma}
          alt="Figma"
        />
      </div>
      <div className="flex flex-col items-center ">
        <div className="flex bg-orange-100 rounded-full p-2 mb-8 mt-10 ">
          <span>
            <img src={JobBag} alt="Search Job" className="h-7 w-7" />
          </span>
          <h1 className="text-orange-500">No.1 Job Hunt Website</h1>
        </div>
        <div className="pb-8 text-center">
          <h1 className="text-4xl  md:text-6xl font-bold text-foreground mb-6 space-x-4">
            Search, Apply & <div className="pb-10"></div>
            Get Your <span className="text-primary">Dream Job</span>
          </h1>
        </div>
        <p className="text-lg text-center md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Start your hunt for the best, life-changing career opportunities from
          here in your selected areas conveniently and get hired quickly.
        </p>
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-2xl shadow-2xl shadow-gray-900 p-6 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">
                  What
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Job title or keyword"
                    className="pl-10 h-12 border-border dark:bg-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">
                  Where
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Location"
                    className="pl-10 h-12 border-border dark:bg-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">
                  Company
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Company"
                    className="pl-10 h-12 border-border dark:bg-white"
                  />
                </div>
              </div>
              <div className="flex items-end">
                <Button
                  size="lg"
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                >
                  Search Job
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto pt-8">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {jobSearchKeywords.map((job, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white border border-border rounded-full text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer"
              >
                {job}
              </span>
            ))}
          </div>
        </div>
        <div className="flex sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="bg-primary rounded-xl hover:bg-primary/90 text-primary-foreground px-8 py-5 text-lg font-medium shadow-elegant"
          >
            Browse Jobs
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className=" cursor-pointer text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-medium flex items-center gap-2 "
          >
            <FaPlayCircle
              className="cursor-pointer"
              style={{ width: "30px", height: "30px" }}
            />
            <span className="text-foreground !bg-transparent">How it Works?</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
