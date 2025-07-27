import { Skeleton } from "../ui/skeleton";

export const JobDescriptionCardSkeleton = () => (
  <div className="p-6 rounded-xl border space-y-4 w-full">
    <div className="flex justify-between items-start">
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-20" />
        </div>
      </div>
      <Skeleton className="h-8 w-24 rounded-md" />
    </div>

    <div className="flex gap-2 flex-wrap">
      {[...Array(5)].map((_, i) => (
        <Skeleton key={i} className="h-6 w-20 rounded-md" />
      ))}
    </div>

    <div className="flex gap-8 border-b pb-2">
      <Skeleton className="h-5 w-24" />
      <Skeleton className="h-5 w-24" />
      <Skeleton className="h-5 w-24" />
    </div>

    <div className="space-y-2 pt-4">
      <Skeleton className="h-4 w-40" />
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-2/3" />
    </div>

    <div className="space-y-2 pt-2">
      {[...Array(6)].map((_, i) => (
        <Skeleton key={i} className="h-3 w-full" />
      ))}
    </div>
  </div>
);
