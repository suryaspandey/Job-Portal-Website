import { Skeleton } from "../ui/skeleton";

export default function FilterSidebarSkeleton() {
  const filterSections = Array.from({ length: 5 });

  return (
    <div className="w-[250px] p-4 border rounded-lg bg-white">
      <div className="flex justify-between items-center mb-4">
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-6 w-6 rounded" />
      </div>

      {filterSections.map((_, index) => (
        <div key={index} className="mb-6">
          <Skeleton className="h-5 w-24 mb-3" />
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="flex items-center gap-3 mb-4">
              <Skeleton className="h-4 w-4 rounded" />
              <Skeleton className="h-4 w-36" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
