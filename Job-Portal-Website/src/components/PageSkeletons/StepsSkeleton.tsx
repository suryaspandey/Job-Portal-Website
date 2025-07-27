import { Skeleton } from "../ui/skeleton";

export const StepsSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="flex flex-col items-center space-y-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-2/3" />
      </div>
    ))}
  </div>
);
