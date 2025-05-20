import { AboutSection } from "@/modules/about/ui/sections/about-section";
import { HomeSection } from "@/modules/home/ui/sections/home-section";
import { ServiceSection } from "@/modules/service/ui/sections/service-section";

const Page = () => {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ServiceSection />
    </>
  );
};

export default Page;
