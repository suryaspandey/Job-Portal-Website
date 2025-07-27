import { Skeleton } from "../ui/skeleton";

export const OfferSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
    {[...Array(3)].map((_, i) => (
      <div key={i} className="space-y-3">
        <Skeleton className="h-32 w-full rounded-lg" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    ))}
  </div>
);
