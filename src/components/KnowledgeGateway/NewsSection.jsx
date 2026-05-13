import { KNOWLEDGE_GATEWAY } from "../../data/siteData";
import Reveal from "../Reveal";

const TAG_COLORS = {
  "Supreme Court": { border: "rgba(201,168,76,0.4)", color: "var(--gold)" },
  "High Court": { border: "rgba(201,168,76,0.25)", color: "var(--gold)" },
  Legislation: null,
  Arbitration: null,
  "Consumer Law": null,
};

function NewsItem({ item, index }) {
  const tagStyle = TAG_COLORS[item.tag];

  return (
    <Reveal delay={index * 80}>
      <div className="group flex gap-6 py-8 border-b dark:border-stone-800 border-stone-200 last:border-b-0 cursor-default">
        {/* Index number */}
        <div className="shrink-0 pt-1">
          <span
            className="font-display text-3xl font-light leading-none"
            style={{ color: "var(--gold)", opacity: 0.3 }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span
              className={`px-3 py-1 text-xs border ${
                tagStyle
                  ? ""
                  : "dark:border-stone-700 border-stone-200 dark:text-stone-400 text-stone-600"
              }`}
              style={
                tagStyle
                  ? { borderColor: tagStyle.border, color: tagStyle.color }
                  : undefined
              }
            >
              {item.tag}
            </span>
            <span className="text-xs dark:text-stone-500 text-stone-400 tracking-wider">
              {item.date}
            </span>
          </div>

          <h4 className="font-display text-xl lg:text-2xl font-light dark:text-stone-100 text-stone-900 leading-snug mb-3 group-hover:text-gold-400 transition-colors">
            {item.title}
          </h4>

          <p className="text-sm dark:text-stone-500 text-stone-500 font-light leading-relaxed text-justify">
            {item.summary}
          </p>
        </div>

        {/* Arrow indicator */}
        <div className="shrink-0 pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ color: "var(--gold)" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </Reveal>
  );
}

export default function NewsSection() {
  const { badge, heading, items } = KNOWLEDGE_GATEWAY.news;

  return (
    <section className="py-24 lg:py-36 px-4 lg:px-12 gold-mesh-bg">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Left: sticky header */}
          <div className="lg:col-span-1">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="gold-line" />
                <span className="text-xs uppercase tracking-[0.25em] text-gold-400">
                  {badge}
                </span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="font-display text-5xl lg:text-6xl font-light dark:text-stone-100 text-stone-900 leading-tight mb-8">
                {heading.line1}
                <br />
                <span className="italic" style={{ color: "var(--gold)" }}>
                  {heading.italicText}
                </span>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="dark:text-stone-400 text-stone-600 font-light leading-relaxed text-sm">
                Stay informed with the latest developments in Indian law —
                landmark judgments, legislative changes, and regulatory updates
                that matter to you.
              </p>
            </Reveal>

            {/* Decorative block */}
            <Reveal delay={300}>
              <div className="mt-12 relative hidden lg:block">
                <div className="dark:bg-stone-900 bg-stone-100 p-8 relative overflow-hidden">
                  <div
                    className="absolute top-0 left-0 w-1 h-full"
                    style={{ background: "var(--gold)" }}
                  />
                  <div className="quote-mark mb-2">"</div>
                  <p className="font-display text-lg font-light italic dark:text-stone-300 text-stone-700 leading-snug">
                    Knowledge of the law is the first step toward justice.
                  </p>
                  <div
                    className="absolute bottom-0 right-0 w-16 h-16 border-b border-r"
                    style={{ borderColor: "var(--gold)", opacity: 0.2 }}
                  />
                </div>
                <div
                  className="absolute -bottom-3 -right-3 w-16 h-16 -z-10"
                  style={{
                    background: "var(--gold-dim)",
                    border: "1px solid rgba(201,168,76,0.2)",
                  }}
                />
              </div>
            </Reveal>
          </div>

          {/* Right: news list */}
          <div className="lg:col-span-2">
            <div className="dark:bg-stone-900/60 bg-white/60 p-6 lg:p-10 border dark:border-stone-800 border-stone-200">
              {items.map((item, i) => (
                <NewsItem key={item.id} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
