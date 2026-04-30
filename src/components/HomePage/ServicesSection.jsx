import { SERVICES } from "../../data/siteData";
import Reveal from "../Reveal";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 lg:py-36 dark:bg-slate-950 bg-stone-50 relative overflow-hidden px-4 lg:px-12"
    >
      {/* BG texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Reveal>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="gold-line" />
              <span className="text-xs uppercase tracking-[0.25em] text-gold-400">
                What We Do
              </span>
              <div className="gold-line" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-5xl lg:text-6xl font-light dark:text-stone-100 text-stone-900">
              Areas of{" "}
              <span className="italic" style={{ color: "var(--gold)" }}>
                Practice
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0.5">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <div className="service-card dark:bg-stone-900/80 bg-white p-8 group cursor-default h-full">
                <div className="mb-5 text-gold-400">{service.icon}</div>
                <h3 className="font-display text-2xl font-light dark:text-stone-100 text-stone-900 mb-3 group-hover:text-gold-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm dark:text-stone-500 text-stone-500 leading-relaxed font-light text-justify">
                  {service.desc}
                </p>
                <div
                  className="mt-6 w-8 h-px transition-all duration-300 group-hover:w-16"
                  style={{ background: "var(--gold)" }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
