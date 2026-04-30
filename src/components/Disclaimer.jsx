import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DisclaimerContext } from "../context/DisclaimerContext";
import { useTheme } from "../context/ThemeContext";
import { useWelcomeModal } from "../context/WelcomeModalContext";
import { DISCLAIMER_CONTENT } from "../data/siteData";

export default function Disclaimer() {
  const { acceptDisclaimer } = useContext(DisclaimerContext);
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const { showWelcomeModal } = useWelcomeModal();

  const handleAgree = () => {
    acceptDisclaimer();
    showWelcomeModal();
    navigate("/litigolawchamber/home");
  };

  const handleDisagree = () => {
    // Redirect to a neutral site or close window
    window.location.href = "https://www.google.com";
  };

  return (
    <div
      className={`min-h-screen flex flex-col lg:flex-row gap-5 items-center justify-center px-4 ${isDark ? "bg-slate-950" : "bg-stone-50"}`}
    >
      <div className="w-full flex items-center justify-center">
        <div className="flex items-center gap-3 group hover:opacity-80 transition-opacity duration-300">
          {/* Logo Text Layout */}
          <div className="flex items-center gap-4">
            {/* Firm Name */}
            <div
              className="font-display lg:text-7xl text-5xl font-bold tracking-wider"
              style={{ color: "var(--gold)" }}
            >
              {DISCLAIMER_CONTENT.firmName}
            </div>

            {/* Vertical Line */}
            <div
              className="w-px lg:h-24 h-16"
              style={{ backgroundColor: "var(--gold)" }}
            />

            {/* Right Side - Firm Name */}
            <div className="flex flex-col">
              {/* LITIGO */}
              <div
                className="font-display lg:text-5xl text-3xl font-bold tracking-wider leading-tight"
                style={{ color: "var(--gold)" }}
              >
                LITIGO
              </div>

              {/* Horizontal Line */}
              <div
                className="w-full h-px my-1"
                style={{ backgroundColor: "var(--gold)" }}
              />

              {/* LAW CHAMBERS */}
              <div className="lg:text-2xl text-xl uppercase tracking-widest dark:text-stone-400 text-stone-500">
                LAW CHAMBERS
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <div
          className={`dark:bg-stone-900 bg-white p-8 lg:p-10 border border-stone-200 dark:border-stone-800 ${isDark ? "bg-stone-900" : "bg-white"}`}
        >
          {/* Header with Logo */}
          <div className="text-center mb-8">
            {/* Logo */}
            <div className="flex items-center justify-center gap-6 mb-6">
              {/* Horizontal Line Separators for Legal Disclaimer */}
              <div className="gold-line" />
              <span className="text-xs uppercase tracking-[0.25em] text-gold-400">
                {DISCLAIMER_CONTENT.title}
              </span>
              <div className="gold-line" />
            </div>
            <h1 className="font-display text-3xl lg:text-4xl font-light dark:text-stone-100 text-stone-900 leading-tight">
              Important{" "}
              <span className="italic" style={{ color: "var(--gold)" }}>
                Notice
              </span>
            </h1>
          </div>

          {/* Disclaimer Content */}
          <div
            className="space-y-4 dark:text-stone-300 text-stone-700 text-sm leading-relaxed font-light"
            style={{ textAlign: "justify" }}
          >
            {DISCLAIMER_CONTENT.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button
              onClick={handleDisagree}
              className="px-8 py-3 text-xs uppercase tracking-widest font-medium dark:text-stone-400 text-stone-600 border border-stone-300 dark:border-stone-700 hover:border-stone-400 transition-colors"
            >
              I DISAGREE
            </button>
            <button
              onClick={handleAgree}
              className="px-8 py-3 text-xs uppercase tracking-widest font-medium text-stone-950 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{ background: "var(--gold)" }}
            >
              I AGREE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
