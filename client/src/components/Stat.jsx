export default function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--fo-ink)]">{value}</div>
      <div className="mt-1 text-[13.5px] text-[var(--fo-slate)]">{label}</div>
    </div>
  )
}
