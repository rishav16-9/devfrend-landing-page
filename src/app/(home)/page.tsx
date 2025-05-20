import { AboutSection } from "@/modules/about/ui/sections/about-section";
import { CommitmentSection } from "@/modules/commiitment/ui/sections/commitment-section";
import { GallerySection } from "@/modules/gallery/ui/sections/gallery-section";
import { HomeSection } from "@/modules/home/ui/sections/home-section";
import { ServiceSection } from "@/modules/service/ui/sections/service-section";

const Page = () => {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ServiceSection />
      <CommitmentSection />
      <GallerySection />
    </>
  );
};

export default Page;
