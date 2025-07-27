import React from "react";
import { Skeleton } from "../ui/skeleton";

export const TestimonialSkeleton = React.memo(() => (
  <div className="flex flex-col items-center space-y-4 py-10">
    <div className="flex gap-10">
      <Skeleton key={0} className="h-10 w-10 rounded-full" />
      <Skeleton key={1} className="h-12 w-12 rounded-full" />
      <Skeleton key={2} className="h-10 w-10 rounded-full" />
    </div>
    <Skeleton className="h-32 w-full max-w-xl rounded-xl mt-6" />
  </div>
));
