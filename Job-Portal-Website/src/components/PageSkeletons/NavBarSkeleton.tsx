import { Skeleton } from "../ui/skeleton";

const NavbarSkeleton = () => {
  return (
    <div className=" mx-auto flex justify-between items-center pl-8 md:pl-80 py-3 pr-6 border-b bg-white dark:bg-background">
      <Skeleton className="h-6 w-[100px] rounded-md" />

      <div className="hidden md:flex gap-6">
        <Skeleton className="h-5 w-[80px] rounded" />
        <Skeleton className="h-5 w-[80px] rounded" />
        <Skeleton className="h-5 w-[80px] rounded" />
        <Skeleton className="h-5 w-[80px] rounded" />
        <Skeleton className="h-5 w-[80px] rounded" />
        <Skeleton className="h-5 w-[80px] rounded" />
      </div>

      <div className="flex items-center gap-3">
        <Skeleton className="hidden md: h-8 w-[60px] rounded-md" />
        <Skeleton className="hidden md:h-8 w-[70px] rounded-md" />
        <Skeleton className="hidden md:h-8 w-[90px] rounded-md" />
        <Skeleton className="h-9 w-9 rounded-full" />
        <Skeleton className="h-9 w-9 rounded-lg md:hidden" />{" "}
      </div>
    </div>
  );
};

export default NavbarSkeleton;
