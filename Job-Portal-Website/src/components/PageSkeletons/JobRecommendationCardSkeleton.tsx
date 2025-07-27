import React from "react";
import { Skeleton } from "../ui/skeleton";

export const JobRecommendationCardSkeleton = React.memo(() => {
  return (
    <div className="p-6 border rounded-xl space-y-4 w-full">
      <div className="flex justify-between items-center">
        <Skeleton className="h-5 w-64" />
        <Skeleton className="h-6 w-20 rounded-md" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="border rounded-xl p-4 space-y-4 shadow-sm relative"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-1">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-3 w-16" />
                </div>
              </div>
              <Skeleton className="h-6 w-6 rounded-full" />
            </div>

            <Skeleton className="h-4 w-40" />

            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-5/6" />

            <div className="flex flex-wrap gap-2 pt-1">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-6 w-20 rounded-full" />
              ))}
            </div>

            <div className="flex gap-2 pt-2">
              <Skeleton className="h-8 w-24 rounded-md" />
              <Skeleton className="h-8 w-24 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
