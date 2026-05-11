import type { LucideIcon } from 'lucide-react'

interface StatCardProps {
  icon: LucideIcon
  label: string
  value: string
  note: string
}

function StatCard({ icon: Icon, label, value, note }: StatCardProps) {
  return (
    <article className="stat-card">
      <div className="stat-card__icon">
        <Icon aria-hidden="true" size={22} />
      </div>
      <div>
        <p>{label}</p>
        <strong>{value}</strong>
        <span>{note}</span>
      </div>
    </article>
  )
}

export default StatCard
