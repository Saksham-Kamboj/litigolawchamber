import { TEAM_FOUNDER, TEAM_MEMBERS } from '../data/siteData'
import Reveal from './Reveal'

export default function TeamSection() {
  return (
    <section id="team" className="py-24 lg:py-36 dark:bg-slate-950 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <Reveal>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="gold-line" />
              <span className="text-xs uppercase tracking-[0.25em] text-gold-400">The People</span>
              <div className="gold-line" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-5xl lg:text-6xl font-light dark:text-stone-100 text-stone-900">
              Our <span className="italic" style={{ color: 'var(--gold)' }}>Team</span>
            </h2>
          </Reveal>
        </div>

        {/* Founder spotlight */}
        <Reveal>
          <div className="dark:bg-stone-900 bg-white p-10 lg:p-14 mb-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full" style={{ background: 'var(--gold)' }} />
            <div className="absolute top-6 right-8 text-xs uppercase tracking-widest text-gold-400">
              {TEAM_FOUNDER.badge}
            </div>
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <h3 className="font-display text-3xl lg:text-4xl font-light dark:text-stone-100 text-stone-900 mb-1">
                  {TEAM_FOUNDER.name}
                </h3>
                <div className="text-xs uppercase tracking-widest text-gold-400 mb-6">{TEAM_FOUNDER.role}</div>
                <p className="dark:text-stone-400 text-stone-600 font-light leading-relaxed">{TEAM_FOUNDER.bio}</p>
              </div>
              <div className="space-y-4">
                <div className="text-xs uppercase tracking-widest dark:text-stone-500 text-stone-400 mb-3">
                  Expertise
                </div>
                <div className="flex flex-wrap gap-2">
                  {TEAM_FOUNDER.expertise.map((tag, i) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 text-xs border ${
                        i === TEAM_FOUNDER.expertise.length - 1
                          ? ''
                          : 'dark:border-stone-700 border-stone-200 dark:text-stone-400 text-stone-600'
                      }`}
                      style={
                        i === TEAM_FOUNDER.expertise.length - 1
                          ? { borderColor: 'rgba(201,168,76,0.4)', color: 'var(--gold)' }
                          : undefined
                      }
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Associates grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0.5">
          {TEAM_MEMBERS.map((member, i) => (
            <Reveal key={member.name} delay={i * 60}>
              <div className="team-card dark:bg-stone-900/80 bg-white p-7 h-full">
                <div
                  className={`text-xs uppercase tracking-widest mb-3 ${
                    member.role === 'Clerk' ? 'text-stone-500' : 'text-gold-400'
                  }`}
                >
                  {member.role}
                </div>
                <h4 className="font-display text-xl font-light dark:text-stone-100 text-stone-900 mb-2">
                  {member.name}
                </h4>
                <p className="text-xs dark:text-stone-500 text-stone-500 leading-relaxed">{member.specialty}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
