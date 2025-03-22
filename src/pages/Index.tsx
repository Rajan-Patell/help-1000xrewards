import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/help/HeroSection";
import { ContentSection } from "@/components/help/ContentSection";

const Index = () => {
  return (
    <div className="bg-white relative overflow-hidden rounded-[18px]">
      <Navbar />
      <HeroSection />
      <ContentSection />
      <Footer />
    </div>
  );
};

export default Index;
