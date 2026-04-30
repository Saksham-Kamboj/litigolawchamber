import ScrollProgress from "../ScrollProgress";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WelcomeModal from "../WelcomeModal";

export default function AppContent({ children }) {
  return (
    <div className="dark:bg-slate-950 dark:text-stone-100 bg-white text-stone-900 font-body">
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WelcomeModal />
    </div>
  );
}
