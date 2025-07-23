import { jobRolesList } from "./constants";

export const JobRolesMarquee = () => {
  return (
    <section className="mx-auto max-w-full px-4 md:px-6">
      <div className="flex items-center justify-between py-4 gap-2 overflow-x-scroll">
        {jobRolesList.map((role, index) => {
          return (
            <div
              key={index}
              className="px-4 py-2 text-nowrap border border-border rounded-full text-sm text-muted-foreground cursor-pointer"
            >
              {role}
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-between py-4 gap-2 overflow-x-scroll">
        {jobRolesList.map((role, index) => {
          return (
            <div
              key={index}
              className="px-4 py-2 text-nowrap border border-border rounded-full text-sm text-muted-foreground cursor-pointer"
            >
              {role}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default JobRolesMarquee;
