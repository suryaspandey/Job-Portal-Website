import { Skeleton } from "../ui/skeleton";

export const JobRolesMarqueeSkeleton = () => {
  return (
    <div className="flex items-center gap-6 overflow-x-auto py-6 px-4">
      {[...Array(6)].map((_, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center gap-2 w-full min-w-[100px] max-w-full"
        >
          <Skeleton className="h-8 w-28 rounded-xl" />
          <Skeleton className=" ml-72 h-8 w-28 rounded-xl" />
        </div>
      ))}
    </div>
  );
};

export default JobRolesMarqueeSkeleton;
