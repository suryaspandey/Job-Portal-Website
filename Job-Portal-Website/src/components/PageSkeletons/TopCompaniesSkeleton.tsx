import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export const TopCompaniesSkeleton = React.memo(() => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center gap-2 p-4">
      {[...Array(5)].map((_, idx) => (
        <div key={idx} className="flex flex-col items-center gap-2">
          <Skeleton className="h-20 w-20 rounded-lg" />
        </div>
      ))}
    </div>
  );
});

export default TopCompaniesSkeleton;
