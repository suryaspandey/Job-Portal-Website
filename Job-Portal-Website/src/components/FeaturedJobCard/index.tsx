import useMobile from "@/hooks/useMobile";
import { Card } from "../ui/card";

export const FeaturedJobCard = ({ jobDetails }) => {
  const isMobile = useMobile();
  return (
    <Card
      key={jobDetails.id}
      className={`group p-3 mb-2 w-full cursor-pointer !gap-2 ${
        isMobile ? "h-64" : "h-56"
      } bg-white shadow-md hover:shadow-lg hover:bg-primary transition-shadow duration-300`}
    >
      <div className="flex items-center mb-2 gap-3">
        <img
          src={jobDetails.logo}
          alt={`${jobDetails.company} logo`}
          className="w-8 h-8 rounded-full hover: bg-white p-1"
        />
        <div>
          <h3 className="text-xl font-bold text-black group-hover:text-white">
            {jobDetails.company}
          </h3>
          <p className="text-muted-foreground group-hover:text-white">
            {jobDetails.location}
          </p>
        </div>
      </div>

      <p className="text-xl font-bold text-black group-hover:text-white">
        {jobDetails.title}
      </p>
      <p className="text-muted-foreground text-sm group-hover:text-white">
        {jobDetails.description}
      </p>
      <div
        className={`flex gap-4 group-hover:text-white text-center ${
          isMobile ? "mt-2" : "mt-0"
        }`}
      >
        <span
          className={`text-blue-700 bg-blue-100 p-1 rounded-lg text-[12px] font-bold group-hover:text-white group-hover:bg-[#5a1cc5d1]`}
        >{`${jobDetails.positions} Positions`}</span>
        <span
          className={`text-orange-700 bg-orange-100 p-1 rounded-lg text-[12px] font-bold group-hover:text-white group-hover:bg-[#5a1cc5d1]`}
        >
          {jobDetails.type}
        </span>
        <span
          className={`text-green-500 bg-green-100 p-1 rounded-lg text-[12px] font-bold group-hover:text-white group-hover:bg-[#5a1cc5d1]`}
        >
          {jobDetails.salary}
        </span>
      </div>
    </Card>
  );
};

export default FeaturedJobCard;
