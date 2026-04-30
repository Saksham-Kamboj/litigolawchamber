export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t dark:border-stone-900 border-stone-200 dark:bg-slate-950 bg-stone-50 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo mark */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            {/* LLC */}
            <div
              className="font-display text-3xl font-bold tracking-wider"
              style={{ color: "var(--gold)" }}
            >
              LLC
            </div>

            {/* Vertical Line */}
            <div
              className="w-px h-5"
              style={{ backgroundColor: "var(--gold)" }}
            />

            {/* Right Side - LITIGO and LAW CHAMBERS */}
            <div className="flex flex-col">
              {/* LITIGO */}
              <div
                className="font-display text-sm font-bold tracking-wider leading-tight"
                style={{ color: "var(--gold)" }}
              >
                LITIGO
              </div>

              {/* Horizontal Line */}
              <div
                className="w-full h-px my-0.5"
                style={{ backgroundColor: "var(--gold)" }}
              />

              {/* LAW CHAMBERS */}
              <div className="text-[8px] uppercase tracking-widest dark:text-stone-400 text-stone-500">
                LAW CHAMBERS
              </div>
            </div>
          </div>
        </div>

        <div className="text-xs dark:text-stone-600 text-stone-400 text-center">
          {currentYear} Litigo Law Chambers. All rights reserved. · Dehradun,
          Uttarakhand, India
        </div>

        <div className="flex gap-6">
          {["#home", "#services", "#contact"].map((href) => (
            <a
              key={href}
              href={href}
              className="text-xs uppercase tracking-widest dark:text-stone-600 text-stone-400 hover:text-gold-400 transition-colors"
            >
              {href.replace("#", "")}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
