export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#101826] to-[#101752] overflow-hidden min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="flex flex-col gap-2 items-center"> */}
        <div className="text-center">
          <p className="text-blue-500 text-lg font-medium">Our Story</p>
          <h1 className="text-3xl font-semibold text-white">
            About Hairport barbershop
          </h1>
          {/* </div> */}
          {/* <div className=" flex items-center flex-col"> */}
          <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
            Established in 2018, PMC Barbershop has been providing premium
            grooming services to the men of Denton, TX. Our mission is to
            deliver exceptional haircuts and grooming services in a welcoming,
            classic barbershop environment.
          </p>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};
