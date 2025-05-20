import Image from "next/image";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 lg:py-32 px-2 bg-gradient-to-br from-[#101826] to-[#101752] overflow-hidden min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-blue-500 text-lg font-medium">Our Story</p>
          <h1 className="text-3xl font-semibold text-white">
            About Hairport barbershop
          </h1>
          <p className="text-lg text-white/60 mt-6 max-w-3xl mx-auto">
            Established in 2018, PMC Barbershop has been providing premium
            grooming services to the men of Denton, TX. Our mission is to
            deliver exceptional haircuts and grooming services in a welcoming,
            classic barbershop environment.
          </p>
        </div>
        <div className="grid mt-5 grid-cols-1 md:grid-cols-7 gap-12 items-center">
          <div className="col-span-4 md:col-span-4">
            <Image
              src="/hero.webp"
              alt="about"
              className="w-full h-auto max-h-[600px] object-contain rounded-md transition-transform delay-300 hover:scale-105"
              width={600}
              height={400}
              priority
            />
          </div>
          <div className="md:col-span-3 col-span-4">
            <div className="flex flex-col gap-6 text-cente md:text-left items-center">
              <p className="text-white/70 text-lg md:pl-4 md:border-l-[3px] border-white leading-relaxed w-full">
                Established in 2018, PMC Barbershop has been providing premium
                grooming services to the men of Denton, TX. Our mission is to
                deliver exceptional haircuts and grooming services in a
                welcoming, classic barbershop environment.
              </p>
              <div className="bg-blue-400/35 rounded-md">
                <p className="text-white/70 p-3 mx-auto">
                  We take pride in our attention to detail and personalized
                  service, ensuring each client leaves looking and feeling their
                  best. Our skilled barbers combine traditional techniques with
                  modern trends to create custom styles that suit each
                  individual&apos;s personality and lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
