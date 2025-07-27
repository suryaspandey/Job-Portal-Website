import { Skeleton } from "../ui/skeleton";

export const FindJobCardSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
    {[...Array(1)].map((_, i) => (
      <div className="border p-4 h-64 w-72 rounded-lg flex flex-col justify-between">
        <div key={i} className=" space-y-4 ">
          <div className="flex justify-between">
            <div className="flex w-40 items-center gap-2">
              <Skeleton className="h-6 w-8 rounded-full" />
              <Skeleton className="h-4 w-full" />
            </div>

            <div>
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
          </div>

          <Skeleton className="h-3 w-3/4" />
          <Skeleton className="h-12 w-full mt-2" />
        </div>
        <div className="flex gap-4 pt-2">
          <Skeleton className="h-6 w-1/4" />
          <Skeleton className="h-6 w-1/4" />
        </div>
      </div>
    ))}
  </div>
);
