import AboutSection from "../components/HomePage/AboutSection";
import CourtsSection from "../components/HomePage/CourtsSection";
import HeroSection from "../components/HomePage/HeroSection";
import ServicesSection from "../components/HomePage/ServicesSection";
import TeamSection from "../components/HomePage/TeamSection";
import ValuesSection from "../components/HomePage/ValuesSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CourtsSection />
      <TeamSection />
      <ValuesSection />
    </div>
  );
}
