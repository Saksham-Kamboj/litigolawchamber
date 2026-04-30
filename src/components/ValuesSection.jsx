import { VALUES, STRENGTHS } from '../data/siteData'
import Reveal from './Reveal'

export default function ValuesSection() {
  return (
    <section id="values" className="py-24 lg:py-36 dark:bg-stone-950 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <Reveal>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="gold-line" />
              <span className="text-xs uppercase tracking-[0.25em] text-gold-400">Why Choose Us</span>
              <div className="gold-line" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-5xl lg:text-6xl font-light dark:text-stone-100 text-stone-900">
              Values &amp; <span className="italic" style={{ color: 'var(--gold)' }}>Strengths</span>
            </h2>
          </Reveal>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {VALUES.map((value, i) => (
            <Reveal key={value.title} delay={i * 100}>
              <div className="group">
                <div className="value-ring mb-5 group-hover:scale-110 transition-transform duration-300">
                  {value.letter}
                </div>
                <h3 className="font-display text-2xl font-light dark:text-stone-100 text-stone-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-sm dark:text-stone-500 text-stone-500 font-light leading-relaxed">{value.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Strengths */}
        <div className="gold-line-full my-12" />
        <Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STRENGTHS.map((strength) => (
              <div key={strength} className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: 'var(--gold)' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm dark:text-stone-400 text-stone-600 font-light">{strength}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
