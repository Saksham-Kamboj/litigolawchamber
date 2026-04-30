import { useTheme } from "../context/ThemeContext";
import { useWelcomeModal } from "../context/WelcomeModalContext";

export default function WelcomeModal() {
  const { isDark } = useTheme();
  const { isOpen, closeWelcomeModal } = useWelcomeModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80">
      <div
        className={`relative max-w-4xl w-full rounded-lg border py-4 lg:py-10 ${
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
            WELCOME
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
            <p>
              Litigo Law Chambers has a dedicated passion for law and strongly
              believes in "Work is Worship". We, as a firm, have never
              compromised on certain ethical principles and believes necessary
              for the effective adjudication of a legal issue while ensuring
              justice to our client. Integrity is the cornerstone of the firm
              ensures all the dealings, be it with the clients, employees, and
              any other concerned person dealing with the firm in whatsoever
              manner.
            </p>
            <p>
              The firm's depth of experience and comprehensive industry focus
              distinguishes us from the other law firms or legal practitioner's
              which further inspire our client's loyalty and satisfaction.
            </p>
            <p>
              The firm is being operated by a group of young hard-working
              lawyers having vast exposure along with other professionals from
              diverse fields that our integral and related to law. Litigo Law
              Chambers forms a formidable team capable of handling diverse and
              complex legal cases at various legal forums including Hon'ble
              Supreme Court of India, Hon'ble High Courts, District Courts, and
              other different Tribunals.
            </p>
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
            Naman Kamboj, Adv.
          </p>
          <p
            className={`text-xs font-semibold tracking-wide mt-0.5 ${
              isDark ? "text-stone-400" : "text-stone-600"
            }`}
            style={{ fontFamily: "Georgia, serif" }}
          >
            Founder and Managing Partner
          </p>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center gap-3">
          {/* Logo Text Layout */}
          <div className="flex items-center gap-4">
            {/* LLC */}
            <div
              className="font-display lg:text-2xl text-xl font-bold tracking-wider"
              style={{ color: "var(--gold)" }}
            >
              LLC
            </div>

            {/* Vertical Line */}
            <div
              className="w-px lg:h-12 h-10"
              style={{ backgroundColor: "var(--gold)" }}
            />

            {/* Right Side - LITIGO and LAW CHAMBERS */}
            <div className="flex flex-col">
              {/* LITIGO */}
              <div
                className="font-display lg:text-2xl text-xl font-bold tracking-wider leading-tight"
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
              <div className="lg:text-sm text-xs uppercase tracking-widest dark:text-stone-400 text-stone-500">
                LAW CHAMBERS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
