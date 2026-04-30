import { useEffect, useState } from "react";
import { AUTHOR, LOGO, STATS, TAGLINE } from "../../data/siteData";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const heroStyle = (delay) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 1s ease ${delay}ms, transform 1s ease ${delay}ms`,
  });

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden hero-bg px-4 lg:px-12"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border float-anim"
          style={{ borderColor: "rgba(212,168,67,0.1)" }}
        />
        <div
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border float-anim-delay"
          style={{ borderColor: "rgba(212,168,67,0.1)" }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Glow */}
        <div
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto pt-32 pb-24 relative z-10 w-full">
        <div className="">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8" style={heroStyle(300)}>
            <div className="gold-line" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400">
              Est. {AUTHOR.est}
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display leading-none mb-6" style={heroStyle(500)}>
            <span className="block text-4xl sm:text-5xl lg:text-7xl font-light dark:text-stone-100 text-stone-900 capitalize">
              {LOGO.litigo}
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-7xl font-light italic capitalize text-gold-400">
              {LOGO.law}
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-7xl font-light dark:text-stone-100 text-stone-900 capitalize">
              {LOGO.chambers}
            </span>
          </h1>

          {/* Tagline */}
          <p
            className="text-base lg:text-lg font-body dark:text-stone-400 text-stone-600 max-w-xl leading-relaxed mb-10 text-justify"
            style={{ ...heroStyle(700), fontWeight: 300 }}
          >
            {TAGLINE.text}
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4" style={heroStyle(900)}>
            <Link
              to="/litigolawchamber/services"
              className="inline-flex items-center gap-3 px-7 py-3.5 text-xs uppercase tracking-widest font-medium text-stone-950 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{ background: "var(--gold)" }}
            >
              Our Services
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              to="/litigolawchamber/contact"
              className="inline-flex items-center gap-3 px-7 py-3.5 text-xs uppercase tracking-widest font-medium transition-all duration-300 border hover:border-gold-400"
              style={{
                borderColor: "rgba(201,168,76,0.3)",
                color: "var(--gold)",
              }}
            >
              Free Consultation
            </Link>
          </div>
        </div>

        {/* Right side visual elements */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full pointer-events-none">
          {/* Legal symbols/icons */}
          <div className="relative h-full flex items-center justify-center">
            {/* Large scales of justice icon */}
            <div
              className="text-stone-300 dark:text-stone-700 opacity-20"
              style={heroStyle(700)}
            >
              <svg
                width="200"
                height="200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              >
                <path d="M12 2L12 22M12 2L6 8M12 2L18 8M4 12H20M6 16H18M8 20H16" />
              </svg>
            </div>

            {/* Decorative circles */}
            <div
              className="absolute top-20 right-20 w-32 h-32 rounded-full border"
              style={{
                borderColor: "rgba(201,168,76,0.1)",
                ...heroStyle(900),
              }}
            />
            <div
              className="absolute bottom-20 right-32 w-24 h-24 rounded-full border"
              style={{
                borderColor: "rgba(201,168,76,0.08)",
                ...heroStyle(1000),
              }}
            />

            {/* Floating elements */}
            <div
              className="absolute top-1/3 right-1/4 text-6xl font-serif italic opacity-10 float-anim"
              style={{
                color: "var(--gold)",
                ...heroStyle(800),
              }}
            >
              Justice
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className="mt-5 pt-5 border-t dark:border-stone-800 border-stone-200 grid grid-cols-2 lg:grid-cols-4 gap-8"
          style={heroStyle(1100)}
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="stat-num">
                {stat.num.endsWith("+") ? (
                  <>
                    {stat.num.replace("+", "")}
                    <span className="text-2xl">+</span>
                  </>
                ) : (
                  stat.num
                )}
              </div>
              <div className="text-xs uppercase tracking-widest dark:text-stone-500 text-stone-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
