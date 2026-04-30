import { useTheme } from "../context/ThemeContext";
import { useWelcomeModal } from "../context/WelcomeModalContext";
import { AUTHOR, LOGO, WELCOME_MODAL_CONTENT } from "../data/siteData";

export default function WelcomeModal() {
  const { isDark } = useTheme();
  const { isOpen, closeWelcomeModal } = useWelcomeModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 animate-fade-in">
      <div
        className={`relative max-w-4xl w-full rounded-lg border py-4 lg:py-10 animate-scale-up ${
          isDark ? "bg-stone-900 border-stone-700" : "bg-white border-stone-200"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={closeWelcomeModal}
          className={`absolute top-4 right-5 text-xl font-light transition-opacity hover:opacity-60 ${
            isDark ? "text-stone-300" : "text-stone-700"
          }`}
          aria-label="Close"
        >
          ✕
        </button>

        {/* Header */}
        <div className="text-center lg:mb-8 mb-4 px-4 lg:px-12">
          <h2
            className={`font-display text-3xl font-bold tracking-widest uppercase ${
              isDark ? "text-stone-100" : "text-stone-900"
            }`}
          >
            {WELCOME_MODAL_CONTENT.title}
          </h2>
        </div>

        {/* Body Content */}
        <div className="max-h-[60vh] overflow-y-auto px-4 lg:px-12">
          <div
            className={`space-y-5 text-sm leading-relaxed text-justify font-light mb-8 ${
              isDark ? "text-stone-300" : "text-stone-800"
            }`}
            style={{ fontFamily: "Georgia, serif" }}
          >
            <p>{WELCOME_MODAL_CONTENT.content[0]}</p>
            <p>{WELCOME_MODAL_CONTENT.content[1]}</p>
            <p>{WELCOME_MODAL_CONTENT.content[2]}</p>
          </div>
        </div>

        {/* Founder Attribution */}
        <div className="text-center lg:my-6 my-4">
          <p
            className={`text-sm font-bold ${
              isDark ? "text-stone-100" : "text-stone-900"
            }`}
            style={{ fontFamily: "Georgia, serif" }}
          >
            {AUTHOR.name}, {AUTHOR.designation}
          </p>
          <p
            className={`text-xs font-semibold tracking-wide mt-0.5 ${
              isDark ? "text-stone-400" : "text-stone-600"
            }`}
            style={{ fontFamily: "Georgia, serif" }}
          >
            {AUTHOR.founder}
          </p>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center gap-3">
          {/* Logo Text Layout */}
          <div className="flex items-center gap-4">
            {/* LLC */}
            <div className="font-display lg:text-4xl text-xl font-bold tracking-wider text-gold-400 uppercase">
              {LOGO.llc}
            </div>

            {/* Vertical Line */}
            <div className="w-px lg:h-12 h-10 bg-gold-400" />

            {/* Right Side - LITIGO and LAW CHAMBERS */}
            <div className="flex flex-col">
              {/* LITIGO */}
              <div className="font-display lg:text-2xl text-xl font-bold tracking-wider leading-tight text-gold-400 uppercase">
                {LOGO.litigo}
              </div>

              {/* Horizontal Line */}
              <div className="w-full h-px my-1 bg-gold-400" />

              {/* LAW CHAMBERS */}
              <div className="lg:text-sm text-xs uppercase tracking-widest dark:text-stone-400 text-stone-500">
                {LOGO.lawChambers}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
