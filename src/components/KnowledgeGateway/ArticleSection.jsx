import { KNOWLEDGE_GATEWAY } from "../../data/siteData";
import Reveal from "../Reveal";

function FeaturedArticleCard({ article }) {
  return (
    <Reveal>
      <div className="service-card dark:bg-stone-900/80 bg-white group cursor-default col-span-full relative overflow-hidden">
        {/* Featured badge */}
        <div
          className="absolute top-0 left-0 px-5 py-1.5 text-xs uppercase tracking-widest text-stone-900 font-medium z-10"
          style={{ background: "var(--gold)" }}
        >
          Featured
        </div>

        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left */}
          <div className="p-10 lg:p-14 pt-14 lg:pt-14 border-b lg:border-b-0 lg:border-r dark:border-stone-800 border-stone-200 flex flex-col justify-between">
            <div>
              <span
                className="inline-block text-xs uppercase tracking-[0.2em] mb-5"
                style={{ color: "var(--gold)" }}
              >
                {article.category}
              </span>
              <h3 className="font-display text-4xl lg:text-5xl font-light dark:text-stone-100 text-stone-900 leading-tight mb-6 group-hover:text-gold-400 transition-colors">
                {article.title}
              </h3>
              <div
                className="w-8 h-px transition-all duration-300 group-hover:w-20"
                style={{ background: "var(--gold)" }}
              />
            </div>
          </div>

          {/* Right */}
          <div className="p-10 lg:p-14 flex flex-col justify-between">
            <p className="dark:text-stone-400 text-stone-600 font-light leading-relaxed text-justify mb-10">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-6 h-px shrink-0"
                  style={{ background: "var(--gold)" }}
                />
                <div>
                  <div className="text-sm font-medium dark:text-stone-200 text-stone-800">
                    {article.author}
                  </div>
                  <div className="text-xs dark:text-stone-500 text-stone-400 tracking-wider mt-0.5">
                    {article.date}
                  </div>
                </div>
              </div>
              <span className="text-xs uppercase tracking-widest dark:text-stone-500 text-stone-400">
                {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function ArticleCard({ article, index }) {
  return (
    <Reveal delay={index * 80}>
      <div className="service-card dark:bg-stone-900/80 bg-white p-8 group cursor-default h-full flex flex-col">
        <span
          className="inline-block text-xs uppercase tracking-[0.2em] mb-5"
          style={{ color: "var(--gold)" }}
        >
          {article.category}
        </span>
        <h3 className="font-display text-2xl lg:text-3xl font-light dark:text-stone-100 text-stone-900 leading-snug mb-4 group-hover:text-gold-400 transition-colors flex-1">
          {article.title}
        </h3>
        <p className="text-sm dark:text-stone-500 text-stone-500 leading-relaxed font-light text-justify mb-8">
          {article.excerpt}
        </p>
        <div>
          <div
            className="w-8 h-px mb-6 transition-all duration-300 group-hover:w-16"
            style={{ background: "var(--gold)" }}
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-5 h-px shrink-0"
                style={{ background: "var(--gold)", opacity: 0.5 }}
              />
              <div>
                <div className="text-xs font-medium dark:text-stone-300 text-stone-700">
                  {article.author}
                </div>
                <div className="text-xs dark:text-stone-500 text-stone-400 tracking-wider mt-0.5">
                  {article.date}
                </div>
              </div>
            </div>
            <span className="text-xs uppercase tracking-widest dark:text-stone-500 text-stone-400">
              {article.readTime}
            </span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function ArticleSection() {
  const { badge, heading, items } = KNOWLEDGE_GATEWAY.articles;

  const featured = items.find((a) => a.featured);
  const regular = items.filter((a) => !a.featured);

  return (
    <section className="py-24 lg:py-36 dark:bg-slate-950 bg-stone-50 relative overflow-hidden px-4 lg:px-12">
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
        {/* Section header */}
        <div className="mb-16">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="gold-line" />
              <span className="text-xs uppercase tracking-[0.25em] text-gold-400">
                {badge}
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-5xl lg:text-6xl font-light dark:text-stone-100 text-stone-900">
              {heading.line1}{" "}
              <span className="italic" style={{ color: "var(--gold)" }}>
                {heading.italicText}
              </span>
            </h2>
          </Reveal>
        </div>

        {/* Featured article — full width */}
        {featured && (
          <div className="mb-0.5">
            <FeaturedArticleCard article={featured} />
          </div>
        )}

        {/* Regular articles grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0.5">
          {regular.map((article, i) => (
            <ArticleCard key={article.id} article={article} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
