import { useMemo, useState } from 'react'
import type { RedTourismSite } from '../types/tourism'

interface ResourceMapProps {
  sites: RedTourismSite[]
}

interface PositionedSite {
  site: RedTourismSite
  x: number
  y: number
}

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value))

function getPositionedSites(sites: RedTourismSite[]): PositionedSite[] {
  if (sites.length === 0) {
    return []
  }

  const latitudes = sites.map((site) => site.lat)
  const longitudes = sites.map((site) => site.lng)
  const minLat = Math.min(...latitudes)
  const maxLat = Math.max(...latitudes)
  const minLng = Math.min(...longitudes)
  const maxLng = Math.max(...longitudes)
  const latRange = maxLat - minLat || 1
  const lngRange = maxLng - minLng || 1

  return sites.map((site, index) => {
    const lngRatio = (site.lng - minLng) / lngRange
    const latRatio = (site.lat - minLat) / latRange
    const offsetX = ((index % 4) - 1.5) * 1.8
    const offsetY = ((Math.floor(index / 4) % 4) - 1.5) * 1.8

    return {
      site,
      x: clamp(8 + lngRatio * 84 + offsetX, 6, 94),
      y: clamp(8 + (1 - latRatio) * 84 + offsetY, 6, 94),
    }
  })
}

function ResourceMap({ sites }: ResourceMapProps) {
  const [selectedSiteId, setSelectedSiteId] = useState(sites[0]?.id ?? '')
  const positionedSites = useMemo(() => getPositionedSites(sites), [sites])
  const selectedSite =
    sites.find((site) => site.id === selectedSiteId) ?? sites[0] ?? null

  return (
    <div className="resource-map" aria-label="长沙市及周边红色资源分布示意图">
      <div className="local-map-panel">
        <div className="local-map-canvas">
          <div className="local-map-title">
            <strong>长沙市及周边红色资源分布示意图</strong>
            <span>共 {sites.length} 处点位</span>
          </div>
          <svg
            className="local-map-shape"
            viewBox="0 0 100 100"
            role="img"
            aria-label="长沙及周边区域示意底图"
          >
            <path
              d="M20 20 C35 8 58 10 73 24 C89 39 84 64 69 79 C52 96 27 88 15 70 C5 54 6 32 20 20 Z"
              className="local-map-shape__area"
            />
            <path d="M23 32 C40 39 58 37 76 45" className="local-map-shape__line" />
            <path d="M36 18 C43 38 44 62 36 84" className="local-map-shape__line" />
            <path d="M57 17 C54 36 61 57 75 74" className="local-map-shape__line" />
          </svg>
          {positionedSites.map(({ site, x, y }, index) => {
            const isSelected = selectedSite?.id === site.id

            return (
              <button
                className={`map-point${isSelected ? ' map-point--active' : ''}`}
                key={site.id}
                style={{ left: `${x}%`, top: `${y}%` }}
                type="button"
                onClick={() => setSelectedSiteId(site.id)}
                aria-label={`查看${site.name}详情`}
                aria-pressed={isSelected}
                title={site.name}
              >
                <span>{index + 1}</span>
              </button>
            )
          })}
          {sites.length === 0 ? (
            <div className="map-empty">当前筛选条件下暂无资源点位</div>
          ) : null}
        </div>
      </div>

      <div className="map-side-panel">
        <div className="map-site-list" aria-label="筛选后的资源列表">
          <h3>资源列表</h3>
          <div className="map-site-list__items">
            {sites.map((site, index) => (
              <button
                className={selectedSite?.id === site.id ? 'active' : ''}
                key={site.id}
                type="button"
                onClick={() => setSelectedSiteId(site.id)}
              >
                <span>{index + 1}</span>
                <strong>{site.name}</strong>
                <small>{site.district}</small>
              </button>
            ))}
          </div>
        </div>

        {selectedSite ? (
          <article className="map-detail-panel" aria-label="资源详情">
            <div className="map-detail-panel__header">
              <p className="eyebrow">{selectedSite.type}</p>
              <h3>{selectedSite.name}</h3>
              <span>{selectedSite.district}</span>
            </div>
            <dl className="map-detail-list">
              <div>
                <dt>主题</dt>
                <dd>{selectedSite.theme}</dd>
              </div>
              <div>
                <dt>保护状态</dt>
                <dd>{selectedSite.protectionStatus}</dd>
              </div>
              <div>
                <dt>开发现状</dt>
                <dd>{selectedSite.developmentStatus}</dd>
              </div>
              <div>
                <dt>参观提示</dt>
                <dd>{selectedSite.visitTips}</dd>
              </div>
            </dl>
            <div className="tag-list" aria-label="资源标签">
              {selectedSite.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ) : (
          <article className="map-detail-panel">
            <h3>暂无资源详情</h3>
            <p>请调整筛选条件查看资源点位。</p>
          </article>
        )}
      </div>
    </div>
  )
}

export default ResourceMap
