import { COURTS } from "../data/siteData";
import Reveal from "./Reveal";

export default function CourtsSection() {
  return (
    <section
      id="courts"
      className="py-24 lg:py-36 dark:bg-stone-950 bg-white relative overflow-hidden px-4 lg:px-12"
    >
      {/* Gold mesh bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--gold), transparent)",
          opacity: 0.4,
        }}
      />

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
