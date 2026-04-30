export default function Footer() {
  return (
    <footer className="py-10 border-t dark:border-stone-900 border-stone-200 dark:bg-slate-950 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo mark */}
        <div className="flex items-center gap-3">
          <div
            className="w-6 h-6 border rotate-45 flex items-center justify-center"
            style={{ borderColor: 'var(--gold)' }}
          >
            <div className="w-2 h-2 rotate-45" style={{ background: 'var(--gold)' }} />
          </div>
          <span className="font-display text-sm dark:text-stone-400 text-stone-500">Litigo Law Chambers</span>
        </div>

        <div className="text-xs dark:text-stone-600 text-stone-400 text-center">
          © 2024 Litigo Law Chambers. All rights reserved. · Dehradun, Uttarakhand, India
        </div>

        <div className="flex gap-6">
          {['#home', '#services', '#contact'].map((href) => (
            <a
              key={href}
              href={href}
              className="text-xs uppercase tracking-widest dark:text-stone-600 text-stone-400 hover:text-gold-400 transition-colors"
            >
              {href.replace('#', '')}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
