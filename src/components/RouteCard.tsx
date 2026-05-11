import { Clock, GraduationCap, Lightbulb, Users } from 'lucide-react'
import type { RoutePlan } from '../types/tourism'

interface RouteCardProps {
  route: RoutePlan
}

function RouteCard({ route }: RouteCardProps) {
  return (
    <article className="route-card">
      <div className="route-card__header">
        <p className="eyebrow">红色研学路线</p>
        <h3>{route.name}</h3>
      </div>

      <div className="route-meta" aria-label="路线基本信息">
        <span>
          <Clock aria-hidden="true" size={16} />
          {route.duration}
        </span>
        <span>
          <Users aria-hidden="true" size={16} />
          {route.audience}
        </span>
        <span>
          <GraduationCap aria-hidden="true" size={16} />
          {route.theme}
        </span>
      </div>

      <div className="route-block">
        <h4>站点顺序</h4>
        <ol className="route-stops">
          {route.stops.map((stop) => (
            <li key={stop}>{stop}</li>
          ))}
        </ol>
      </div>

      <div className="route-block">
        <h4>路线亮点</h4>
        <div className="route-tags">
          {route.highlights.map((highlight) => (
            <span key={highlight}>{highlight}</span>
          ))}
        </div>
      </div>

      <div className="route-block route-suggestions">
        <h4>
          <Lightbulb aria-hidden="true" size={17} />
          保护开发建议
        </h4>
        <ul>
          {route.suggestions.map((suggestion) => (
            <li key={suggestion}>{suggestion}</li>
          ))}
        </ul>
      </div>

      <small>{route.dataSource}</small>
    </article>
  )
}

export default RouteCard
