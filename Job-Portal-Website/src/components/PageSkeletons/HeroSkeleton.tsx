import React from "react";
import { Skeleton } from "../ui/skeleton";

export const HeroSkeleton = React.memo(() => (
  <div className="space-y-4 py-12">
    <Skeleton className="h-8 w-1/2 mx-auto" />
    <Skeleton className="h-6 w-1/3 mx-auto" />
    <Skeleton className="h-36 w-1/3 mx-auto" />

    <div className="flex justify-center gap-4 pt-6">
      <Skeleton className="h-8 w-32" />
      <Skeleton className="h-8 w-32" />
    </div>
    <div className="flex justify-center gap-4 pt-2">
      <Skeleton className="h-8 w-32" />
      <Skeleton className="h-8 w-32" />
      <Skeleton className="h-8 w-32" />
    </div>
    <div className="flex justify-center gap-4 pt-2">
      <Skeleton className="h-8 w-32" />
      <Skeleton className="h-8 w-32" />
    </div>
  </div>
));
