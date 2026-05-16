import { GraduationCap, MapPin, ShieldCheck } from 'lucide-react'
import type { RedTourismSite } from '../types/tourism'

interface SiteCardProps {
  site: RedTourismSite
}

function SiteCard({ site }: SiteCardProps) {
  return (
    <article className="site-card">
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
