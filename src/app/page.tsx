import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FurnitureCollection from "@/components/sections/FurnitureCollection";
import InteriorDesign from "@/components/sections/InteriorDesign";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ProcessSection from "@/components/sections/ProcessSection";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import FAQ from "@/components/sections/FAQ";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <FurnitureCollection />
      <InteriorDesign />
      <FeaturedProjects />
      <ProcessSection />
      <Testimonials />
      <Gallery />
      <FAQ />
      <ContactSection />
    </>
  );
}