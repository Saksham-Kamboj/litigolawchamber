import { ThemeProvider } from "./context/ThemeContext";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import CourtsSection from "./components/CourtsSection";
import TeamSection from "./components/TeamSection";
import ValuesSection from "./components/ValuesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <div className="dark:bg-slate-950 dark:text-stone-100 bg-stone-50 text-stone-900 font-body">
        <ScrollProgress />
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <CourtsSection />
          <TeamSection />
          <ValuesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
