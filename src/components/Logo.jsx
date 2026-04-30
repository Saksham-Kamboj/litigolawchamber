import { LOGO } from "../data/siteData";

export default function Logo() {
  return (
    <a
      href="#home"
      className="flex items-center gap-3 group hover:opacity-80 transition-opacity duration-300"
    >
      {/* Logo Text Layout */}
      <div className="flex items-center gap-4">
        {/* LLC */}
        <div
          className="font-display text-5xl font-bold tracking-wider uppercase"
          style={{ color: "var(--gold)" }}
        >
          {LOGO.llc}
        </div>

        {/* Vertical Line */}
        <div className="w-px h-8" style={{ backgroundColor: "var(--gold)" }} />

        {/* Right Side - LITIGO and LAW CHAMBERS */}
        <div className="flex flex-col">
          {/* LITIGO */}
          <div className="font-display text-xl font-bold tracking-wider leading-tight uppercase text-gold-400">
            {LOGO.litigo}
          </div>

          {/* Horizontal Line */}
          <div className="w-full h-px my-1 bg-gold-400" />

          {/* LAW CHAMBERS */}
          <div className="text-xs uppercase tracking-widest dark:text-stone-400 text-stone-500">
            {LOGO.lawChambers}
          </div>
        </div>
      </div>
    </a>
  );
}
