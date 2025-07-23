import Google from "@/assets/logos/google.svg";
import Amazon from "@/assets/logos/amazon.svg";
import Figma from "@/assets/logos/figma.svg";
import Twitter from "@/assets/logos/twitter.svg";
import LinkedIn from "@/assets/logos/linkedIn.svg";
import Windows from "@/assets/logos/windows.svg";
import JobBag from "@/assets/logos/job-seeker.png";
import { Button } from "./ui/button";
import { FaPlayCircle } from "react-icons/fa";

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
            <span className="text-black">How it Works?</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
