import { ServiceConstant } from "../../service-constant";
import { ServiceCard } from "../components/service-card";

export const ServiceSection = () => {
  return (
    <section
      id="services"
      className="py-16 md:px-2 md:py-24 lg:py-32 px-2 bg-gradient-to-br from-[#101826] to-[#101752] overflow-hidden min-h-screen flex flex-col gap-y-8 items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-blue-500 text-lg font-medium">Premium Grooming</p>
          <h1 className="text-3xl font-semibold text-white">
            Our Barber Services
          </h1>
          <p className="text-lg text-white/60 mt-6 max-w-3xl mx-auto">
            Professional barbering services to keep you looking sharp for
            everyday confidence or special occasions.
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 auto-rows-fr max-w-6xl">
        {ServiceConstant.map((service) => (
          <ServiceCard
            key={service.name}
            imageUrl={service.image}
            description={service.description}
            name={service.name}
          />
        ))}
      </div>
    </section>
  );
};
