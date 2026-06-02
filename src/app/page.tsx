import HeroSection from "@/components/sections/HeroSection";
import FurnitureCollection from "@/components/sections/FurnitureCollection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProcessSection from "@/components/sections/ProcessSection";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import InteriorDesign from "@/components/sections/InteriorDesign";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FurnitureCollection />
      <FeaturedProjects />
      <WhyChooseUs />
      <ProcessSection />
      <Gallery />
      <Testimonials />
      <InteriorDesign />
    </>
  );
}