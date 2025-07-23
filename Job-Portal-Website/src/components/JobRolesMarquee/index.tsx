import { jobRolesList } from "./constants";

export const JobRolesMarquee = () => {
  return (
    <section className=" w-full overflow-hidden py-4">
      <div className="animate-marquee whitespace-nowrap flex gap-4 mb-4">
        {jobRolesList.concat(jobRolesList).map((role, index) => (
          <div
            key={index}
            className="px-4 py-2 whitespace-nowrap border border-border rounded-full text-sm text-muted-foreground cursor-pointer"
          >
            {role}
          </div>
        ))}
      </div>
      <div className="animate-marquee2 whitespace-nowrap flex gap-4">
        {jobRolesList.concat(jobRolesList).map((role, index) => (
          <div
            key={index}
            className="px-4 py-2 whitespace-nowrap border border-border rounded-full text-sm text-muted-foreground cursor-pointer"
          >
            {role}
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobRolesMarquee;
