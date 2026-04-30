import { COURTS } from "../data/siteData";
import Reveal from "./Reveal";

export default function CourtsSection() {
  return (
    <section
      id="courts"
      className="py-24 lg:py-36 dark:bg-stone-950 bg-white relative overflow-hidden px-4 lg:px-12"
    >
      <div className="absolute right-0 top-0 w-72 h-72 opacity-5 pointer-events-none">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="#c9a84c"
          strokeWidth="1"
        >
          <circle cx="100" cy="100" r="90" />
          <circle cx="100" cy="100" r="70" />
          <circle cx="100" cy="100" r="50" />
          <circle cx="100" cy="100" r="30" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="gold-line" />
              <span className="text-xs uppercase tracking-[0.25em] text-gold-400">
                Our Reach
              </span>
            </div>
            <h2 className="font-display text-5xl lg:text-6xl font-light dark:text-stone-100 text-stone-900 leading-tight">
              Courts &<br />
              <span className="italic" style={{ color: "var(--gold)" }}>
                Tribunals
              </span>
            </h2>
            <p className="mt-6 dark:text-stone-400 text-stone-600 font-light leading-relaxed">
              From the Supreme Court of India to specialized tribunals, our
              experienced team practices across the full spectrum of India's
              judicial hierarchy.
            </p>
            <div className="mt-10">
              <div className="text-xs uppercase tracking-widest dark:text-stone-500 text-stone-400 mb-4">
                Primary Office
              </div>
              <address className="not-italic dark:text-stone-300 text-stone-700 font-light leading-loose">
                Opposite SDM Court,
                <br />
                District Court Compound,
                <br />
                Dehradun, Uttarakhand
              </address>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="space-y-px">
              {COURTS.map((court) => (
                <div
                  key={court.name}
                  className={[
                    "flex items-center gap-5 px-6 py-4 border-l-2 group transition-all",
                    "dark:bg-stone-900/50 bg-stone-50 hover:dark:bg-stone-900 hover:bg-stone-100",
                    court.highlighted
                      ? "border-gold-400"
                      : "border-transparent hover:border-gold-400",
                  ].join(" ")}
                >
                  {court.highlighted ? (
                    <div
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: "var(--gold)" }}
                    />
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-stone-500 shrink-0" />
                  )}
                  <span
                    className={`font-light text-sm ${court.highlighted ? "dark:text-stone-300 text-stone-700" : "dark:text-stone-400 text-stone-600"}`}
                  >
                    {court.name}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
