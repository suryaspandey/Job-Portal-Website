import React from "react";
import { Skeleton } from "../ui/skeleton";

export const CompanyOverviewCardSkeleton = React.memo(() => (
  <div className="p-6 rounded-xl border w-full space-y-6">
    <Skeleton className="h-5 w-40" />

    <Skeleton className="h-3 w-full" />
    <Skeleton className="h-3 w-5/6" />

    <div className="flex items-center gap-4 pt-2">
      <Skeleton className="h-6 w-6 rounded-full" />
      <Skeleton className="h-4 w-32" />
    </div>

    <div className="space-y-3">
      <Skeleton className="h-5 w-24" />
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <Skeleton className="h-5 w-5 rounded-full" />
          <Skeleton className="h-3 w-40" />
        </div>
      ))}
    </div>

    <div className="space-y-2">
      <Skeleton className="h-5 w-36" />
      <div className="flex gap-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-3 w-20" />
          </div>
        ))}
      </div>
    </div>
  </div>
));
