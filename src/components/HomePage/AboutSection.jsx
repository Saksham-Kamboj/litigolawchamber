import { Link } from "react-router-dom";
import { ABOUT_US, AUTHOR } from "../../data/siteData";
import Reveal from "../Reveal";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-36 px-4 lg:px-12 gold-mesh-bg">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="gold-line" />
                <span className="text-xs uppercase tracking-[0.25em] text-gold-400">
                  {ABOUT_US.badge}
                </span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="font-display text-5xl lg:text-6xl font-light dark:text-stone-100 text-stone-900 mb-8 leading-tight">
                {ABOUT_US.heading.line1}
                <br />
                <span className="italic" style={{ color: "var(--gold)" }}>
                  {ABOUT_US.heading.italicText}
                </span>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <div className="space-y-5 dark:text-stone-400 text-stone-600 font-light leading-relaxed text-justify">
                {ABOUT_US.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph.text}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10">
                <Link
                  to="/litigolawchamber/about-us"
                  className="inline-flex items-center gap-3 text-xs uppercase tracking-widest transition-colors"
                  style={{ color: "var(--gold)" }}
                >
                  {ABOUT_US.cta.text}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right: Quote block */}
          <Reveal delay={150}>
            <div className="relative">
              <div className="dark:bg-stone-900 bg-stone-100 p-10 lg:p-14 relative overflow-hidden">
                {/* Decorative corners */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 border-t border-r"
                  style={{ borderColor: "var(--gold)", opacity: 0.3 }}
                />
                <div
                  className="absolute bottom-0 left-0 w-24 h-24 border-b border-l"
                  style={{ borderColor: "var(--gold)", opacity: 0.3 }}
                />

                <div className="quote-mark mb-4">"</div>
                <blockquote className="font-display text-2xl lg:text-3xl font-light italic dark:text-stone-200 text-stone-800 leading-snug mb-6 text-justify">
                  {ABOUT_US.quote.text}
                </blockquote>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-px"
                    style={{ background: "var(--gold)" }}
                  />
                  <div>
                    <div className="text-sm font-medium dark:text-stone-200 text-stone-800">
                      {AUTHOR.name}
                    </div>
                    <div className="text-xs dark:text-stone-500 text-stone-500 tracking-wider">
                      {AUTHOR.founder}
                    </div>
                  </div>
                </div>
              </div>
              {/* Offset element */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 -z-10"
                style={{
                  background: "var(--gold-dim)",
                  border: "1px solid rgba(201,168,76,0.2)",
                }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
