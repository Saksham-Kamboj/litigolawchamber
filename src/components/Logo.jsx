export default function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3 group">
      <div
        className="w-8 h-8 border rotate-45 flex items-center justify-center group-hover:rotate-0 transition-transform duration-500"
        style={{ borderColor: 'var(--gold)' }}
      >
        <div className="w-3 h-3 rotate-45" style={{ background: 'var(--gold)' }} />
      </div>
      <div>
        <div className="font-display text-lg font-semibold tracking-wide leading-tight" style={{ color: 'var(--gold)' }}>
          Litigo
        </div>
        <div className="text-[9px] uppercase tracking-[0.2em] dark:text-stone-400 text-stone-500 -mt-0.5">
          Law Chambers
        </div>
      </div>
    </a>
  )
}
