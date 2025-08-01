import ProfessionalMan from "@/assets/professionalMan.png";
import useMobile from "@/hooks/useMobile";
export const JobUpdates = () => {
  const isMobile = useMobile();
  return (
    <section>
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className=" bg-foreground rounded-xl max-w-5xl">
            <div className="relative grid grid-cols-1 md:grid-cols-2  justify-between p-6">
              <div className="flex-col items-center">
                <h2 className="text-3xl md:text-5xl text-center md:text-left font-bold text-white dark:text-background mb-4">
                  Get Latest Job Updates
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Stay updated with the latest job postings and opportunities.
                </p>

                <div className="relative w-full max-w-xl mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full p-2 bg-transparent rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm placeholder-gray-500"
                  />
                  <button className="absolute right-1 top-1 bottom-1 px-2 rounded-md bg-white dark:bg-black text-primary dark:text-foreground font-medium hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-200">
                    Subscribe
                  </button>
                </div>
              </div>
              {!isMobile && (
                <div className=" w-full h-full">
                  <img
                    src={ProfessionalMan}
                    alt="Job Updates"
                    className="h-96 absolute -top-24 -right-1"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobUpdates;
