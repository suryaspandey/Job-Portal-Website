import { Skeleton } from "../ui/skeleton";

export const JobCardsSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
    {[...Array(3)].map((_, i) => (
      <div key={i} className="p-4 border rounded-lg space-y-4">
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-3/4" />
        <Skeleton className="h-8 w-full mt-2" />
      </div>
    ))}
  </div>
);
