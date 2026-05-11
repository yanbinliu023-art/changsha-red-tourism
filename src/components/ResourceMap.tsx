import { divIcon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import type { RedTourismSite } from '../types/tourism'

const redTourismIcon = divIcon({
  className: 'red-tourism-marker',
  html: '<span aria-hidden="true"></span>',
  iconSize: [28, 28],
  iconAnchor: [14, 14],
  popupAnchor: [0, -14],
})

interface ResourceMapProps {
  sites: RedTourismSite[]
}

const changshaCenter: [number, number] = [28.2282, 112.9388]

function ResourceMap({ sites }: ResourceMapProps) {
  return (
    <div className="resource-map" aria-label="长沙市及周边红色旅游资源地图">
      <MapContainer center={changshaCenter} zoom={9} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {sites.map((site) => (
          <Marker
            key={site.id}
            icon={redTourismIcon}
            position={[site.lat, site.lng]}
          >
            <Popup>
              <div className="map-popup">
                <strong>{site.name}</strong>
                <span>{site.district}</span>
                <dl>
                  <div>
                    <dt>类型</dt>
                    <dd>{site.type}</dd>
                  </div>
                  <div>
                    <dt>保护状态</dt>
                    <dd>{site.protectionStatus}</dd>
                  </div>
                  <div>
                    <dt>开发现状</dt>
                    <dd>{site.developmentStatus}</dd>
                  </div>
                </dl>
                <small>{site.dataSource}</small>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      {sites.length === 0 ? (
        <div className="map-empty">当前筛选条件下暂无资源点位</div>
      ) : null}
    </div>
  )
}

export default ResourceMap
