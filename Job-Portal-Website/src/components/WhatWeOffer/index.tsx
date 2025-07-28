import { motion } from "framer-motion";
import { offerDetails } from "./constants";

export const WhatWeOffer = () => {
  return (
    <section className="py-2 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex-col text-center md:text-start">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            JobHunt is the right platform for you to get various job
            recommendations, get career counseling, and find your ideal job
            profile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offerDetails.map((offer, index) => (
            <motion.div
              whileHover={{
                y: -4,
                scale: 1.015,
                boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              key={index}
              className="bg-white rounded-lg"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-48 object-cover rounded-lg "
              />

              <div className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="!text-xl m-1 font-bold text-primary group-hover:text-primary">
                    <img
                      src={offer.numberImg}
                      alt=""
                      className="w-full h-8 object-cover rounded-lg "
                    />
                  </span>
                  <span className="text-primary group-hover:text-primary text-4xl">
                    |
                  </span>
                  <div>
                    <h3 className="text-lg  font-semibold text-foreground dark:text-black group-hover:text-black">
                      {offer.title}
                    </h3>
                    <p className=" pt-0 mt-0 text-muted-foreground text-sm group-hover:text-white">
                      {offer.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
