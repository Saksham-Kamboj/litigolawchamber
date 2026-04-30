import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { DisclaimerProvider, useDisclaimer } from "./context/DisclaimerContext";
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
import Disclaimer from "./components/Disclaimer";

function AppContent() {
  const { disclaimerAccepted } = useDisclaimer();

  if (!disclaimerAccepted) {
    return <Navigate to="/litigolawchamber/disclaimer" replace />;
  }

  return (
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
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <DisclaimerProvider>
        <Router>
          <Routes>
            <Route path="/litigolawchamber" element={<AppContent />} />
            <Route
              path="/litigolawchamber/disclaimer"
              element={<Disclaimer />}
            />
            <Route
              path="*"
              element={<Navigate to="/litigolawchamber" replace />}
            />
          </Routes>
        </Router>
      </DisclaimerProvider>
    </ThemeProvider>
  );
}
