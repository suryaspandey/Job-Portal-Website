import { Skeleton } from "@/components/ui/skeleton";

const JobUpdatesSkeleton = () => {
  return (
    <div className="max-w-5xl mx-auto flex items-center justify-between gap-4 p-6">
      <div className="flex-1 space-y-4">
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-1/3" />
        <div className="pt-4">
          <Skeleton className="h-10 w-32 rounded-md" />
        </div>
      </div>

      <Skeleton className="h-40 w-32 rounded-md" />
    </div>
  );
};

export default JobUpdatesSkeleton;
