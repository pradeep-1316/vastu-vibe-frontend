import HeroSection from "@/components/sections/HeroSection";
import FurnitureCollection from "@/components/sections/FurnitureCollection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import VideoShowcase from "@/components/sections/VideoShowcase";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProcessSection from "@/components/sections/ProcessSection";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import InteriorDesign from "@/components/sections/InteriorDesign";
import SectionScrollEffect from "@/components/ui/SectionScrollEffect";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionScrollEffect>
        <FurnitureCollection />
      </SectionScrollEffect>
      <SectionScrollEffect>
        <FeaturedProjects />
      </SectionScrollEffect>
      <VideoShowcase />
      <SectionScrollEffect>
        <WhyChooseUs />
      </SectionScrollEffect>
      <SectionScrollEffect>
        <ProcessSection />
      </SectionScrollEffect>
      <SectionScrollEffect>
        <Gallery />
      </SectionScrollEffect>
      <SectionScrollEffect>
        <Testimonials />
      </SectionScrollEffect>
      <SectionScrollEffect>
        <InteriorDesign />
      </SectionScrollEffect>
    </>
  );
}
