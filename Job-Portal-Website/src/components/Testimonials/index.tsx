import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../ui/carousel";
import { testimonialData } from "./constants";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    handleSelect();
  }, [api]);

  const activeTestimonial = testimonialData[activeIndex];

  return (
    <section className=" px-4 sm:px-6 lg:px-8 py-12 ">
      <div className="max-w-7xl mx-auto">
        <div className=" mb-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Testimonials
          </h2>

          <p className="text-lg flex text-center text-muted-foreground max-w-2xl">
            Let’s know what our career aspirants have to say about our community
            and services.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            setApi={setApi}
            className="w-[240px] max-w-lg"
          >
            <CarouselContent className="flex gap-2">
              {testimonialData.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/3 flex justify-center"
                >
                  <div className="p-1 h-16 w-16">
                    <img
                      src={testimonial.image}
                      alt="testimonial"
                      className={`rounded-full  transition-all duration-300 ${
                        index === activeIndex
                          ? "w-12 h-12 border-primary scale-110"
                          : "w-10 h-10"
                      }`}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className="border-transparent dark:border-transparent hover: !bg-transparent hover:text-black dark:hover:!text-white"
              onClick={() => api?.scrollPrev()}
            />
            <CarouselNext
              className="border-transparent dark:border-transparent hover: !bg-transparent hover:text-black dark:hover:!text-white"
              onClick={() => api?.scrollNext()}
            />
          </Carousel>

          {activeTestimonial && (
            <div className="relative h-48 w-96 mt-1 bg-primary text-white px-6 py-8 rounded-xl shadow-lg text-center max-w-2xl">
              <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-[16px] border-l-transparent border-r-transparent border-b-violet-600" />
              <p className="text-sm leading-relaxed mb-4">
                {activeTestimonial.testimonial.testimonialText}
              </p>
              <div className="flex justify-center mb-2">
                {Array.from({ length: activeTestimonial.testimonial.userStar })
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
              </div>
              <h4 className="font-bold text-white text-lg">
                {activeTestimonial.testimonial.userName}
              </h4>
              <p className="text-sm text-white/80">
                {activeTestimonial.testimonial.userDesignation}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
