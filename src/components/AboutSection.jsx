import Reveal from "./Reveal";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 lg:py-36 dark:bg-stone-950 bg-white px-4 lg:px-12 relative overflow-hidden"
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

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="gold-line" />
                <span className="text-xs uppercase tracking-[0.25em] text-gold-400">
                  About the Firm
                </span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="font-display text-5xl lg:text-6xl font-light dark:text-stone-100 text-stone-900 mb-8 leading-tight">
                Young Lawyers.
                <br />
                <span className="italic" style={{ color: "var(--gold)" }}>
                  Formidable Team.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <div className="space-y-5 dark:text-stone-400 text-stone-600 font-light leading-relaxed">
                <p>
                  Litigo Law Chambers is a dynamic law firm based in
                  Uttarakhand, India, constituted by a group of young and
                  passionate lawyers who epitomize the face of the new
                  generation legal practice.
                </p>
                <p>
                  In a short span, the firm has achieved great heights and
                  handles a niche clientele including various corporate houses,
                  financial institutions, co-operative societies and firms
                  across India.
                </p>
                <p>
                  With associates in all major cities of India, the firm
                  believes that having superior infrastructure is quintessential
                  in providing the highest quality service to its clients.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 text-xs uppercase tracking-widest transition-colors"
                  style={{ color: "var(--gold)" }}
                >
                  Learn More About Us
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
                </a>
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
                <blockquote className="font-display text-2xl lg:text-3xl font-light italic dark:text-stone-200 text-stone-800 leading-snug mb-6">
                  Our belief was that hard work and exploring new frontiers
                  would lead us to success.
                </blockquote>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-px"
                    style={{ background: "var(--gold)" }}
                  />
                  <div>
                    <div className="text-sm font-medium dark:text-stone-200 text-stone-800">
                      Naman Kamboj
                    </div>
                    <div className="text-xs dark:text-stone-500 text-stone-500 tracking-wider">
                      Founder, Litigo Law Chambers
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
