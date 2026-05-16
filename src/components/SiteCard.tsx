import type { KeyboardEvent } from 'react'
import { GraduationCap, MapPin, ShieldCheck } from 'lucide-react'
import type { RedTourismSite } from '../types/tourism'

interface SiteCardProps {
  site: RedTourismSite
  isSelected?: boolean
  onSelect?: (site: RedTourismSite) => void
}

function SiteCard({ isSelected = false, onSelect, site }: SiteCardProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (!onSelect) {
      return
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onSelect(site)
    }
  }

  return (
    <article
      className={`site-card${isSelected ? ' site-card--active' : ''}`}
      onClick={onSelect ? () => onSelect(site) : undefined}
      onKeyDown={handleKeyDown}
      role={onSelect ? 'button' : undefined}
      tabIndex={onSelect ? 0 : undefined}
      aria-pressed={onSelect ? isSelected : undefined}
    >
      <div className="site-card__topline">
        <span>{site.type}</span>
        <strong>{site.protectionStatus}</strong>
      </div>
      <h3>{site.name}</h3>
      <p className="site-card__location">
        <MapPin aria-hidden="true" size={16} />
        {site.district}
      </p>
      <p>{site.theme}</p>
      <dl className="site-card__facts">
        <div>
          <dt>
            <ShieldCheck aria-hidden="true" size={16} />
            开发现状
          </dt>
          <dd>{site.developmentStatus}</dd>
        </div>
        <div>
          <dt>
            <GraduationCap aria-hidden="true" size={16} />
            教育价值
          </dt>
          <dd>{site.educationValue} 分</dd>
        </div>
      </dl>
      <div className="tag-list" aria-label="资源标签">
        {site.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  )
}

export default SiteCard
