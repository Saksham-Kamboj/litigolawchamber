import { useEffect, useState } from "react";

export default function PageHeroSection({ image, title, subtitle }) {
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
    <section className="h-[35vh] flex items-center relative overflow-hidden hero-bg px-4 lg:px-12">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Background image */}
        {image && (
          <div className="absolute inset-0 z-0">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        )}

        {/* Grid lines */}
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Glow */}
        <div
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 z-10"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto pt-32 pb-24 relative z-20 w-full">
        <div className="text-center">
          {/* Eyebrow */}
          {subtitle && (
            <div
              className="flex items-center justify-center gap-4 mb-8"
              style={heroStyle(300)}
            >
              <div className="gold-line" />
              <span className="text-xs uppercase tracking-[0.25em] text-gold-400">
                {subtitle}
              </span>
              <div className="gold-line" />
            </div>
          )}

          {/* Heading */}
          <h1 className="font-display leading-none mb-6" style={heroStyle(500)}>
            <span className="block text-4xl sm:text-5xl lg:text-6xl font-light text-stone-100">
              {title}
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
