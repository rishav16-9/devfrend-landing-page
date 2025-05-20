import { CommitmentConstant } from "../../commitment-constant";
import { CommitmentCard } from "../components/commitment-card";

import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export const CommitmentSection = () => {
  return (
    <section
      id="commitment"
      className="py-16 md:px-20 md:py-24 lg:py-32 px-2 bg-gradient-to-br from-[#101826] to-[#101752] overflow-hidden min-h-screen flex flex-col gap-y-8 items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-blue-500 text-lg font-medium">Our Commitment</p>
          <h1 className="text-3xl font-semibold text-white">
            Why choose hairport barbershop?
          </h1>
          <p className="text-lg text-white/60 mt-6 max-w-3xl mx-auto">
            What makes us the premier barbershop in Denton, TX.
          </p>
        </div>
      </div>
      <div className="hidden lg:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 auto-rows-fr max-w-6xl">
        {CommitmentConstant.map((commitment) => (
          <CommitmentCard
            key={commitment.name}
            name={commitment.name}
            description={commitment.description}
            tag={commitment.tag}
          />
        ))}
      </div>
      <div className="lg:hidden w-full px-4">
        <Carousel>
          <CarouselContent>
            {CommitmentConstant.map((commitment) => (
              <CarouselItem key={commitment.name} className="basis-full">
                <CommitmentCard
                  name={commitment.name}
                  description={commitment.description}
                  tag={commitment.tag}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 top-full mt-8" />
          <CarouselNext className="right-4 top-full mt-8" />
        </Carousel>
      </div>
    </section>
  );
};
