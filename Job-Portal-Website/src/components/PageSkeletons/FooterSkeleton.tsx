import { Skeleton } from "../ui/skeleton";

export const FooterSkeleton = () => {
  return (
    <footer className="bg-gray-100 px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[...Array(4)].map((_, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-3">
            <Skeleton className="h-5 w-32" />
            {[...Array(4)].map((_, itemIdx) => (
              <Skeleton key={itemIdx} className="h-4 w-24" />
            ))}
          </div>
        ))}
      </div>

      <div className="mt-10 border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <Skeleton className="h-6 w-40" />
        <div className="flex gap-4">
          {[...Array(4)].map((_, idx) => (
            <Skeleton key={idx} className="h-6 w-6 rounded-full" />
          ))}
        </div>
      </div>
    </footer>
  );
};
