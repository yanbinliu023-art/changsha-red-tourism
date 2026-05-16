import { useMemo, useState } from 'react'
import ResourceMap from '../components/ResourceMap'
import SectionTitle from '../components/SectionTitle'
import { redTourismSites } from '../data/sites'

const allTypesLabel = '全部类型'
const allDistrictsLabel = '全部地区'

function MapSection() {
  const [selectedType, setSelectedType] = useState(allTypesLabel)
  const [selectedDistrict, setSelectedDistrict] = useState(allDistrictsLabel)

  const siteTypes = useMemo(
    () => Array.from(new Set(redTourismSites.map((site) => site.type))),
    [],
  )
  const districts = useMemo(
    () => Array.from(new Set(redTourismSites.map((site) => site.district))),
    [],
  )
  const filteredSites = useMemo(
    () =>
      redTourismSites.filter((site) => {
        const matchesType =
          selectedType === allTypesLabel || site.type === selectedType
        const matchesDistrict =
          selectedDistrict === allDistrictsLabel ||
          site.district === selectedDistrict

        return matchesType && matchesDistrict
      }),
    [selectedDistrict, selectedType],
  )

  return (
    <section className="content-section" id="resource-map">
      <SectionTitle
        eyebrow="资源地图"
        title="长沙市及周边红色旅游资源点位"
        description="通过地图查看演示资源样本的空间分布，并按资源类型和所在地区进行筛选。"
      />
      <div className="map-toolbar" aria-label="地图筛选">
        <label>
          <span>资源类型</span>
          <select
            value={selectedType}
            onChange={(event) => setSelectedType(event.target.value)}
          >
            <option value={allTypesLabel}>{allTypesLabel}</option>
            {siteTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>所在地区</span>
          <select
            value={selectedDistrict}
            onChange={(event) => setSelectedDistrict(event.target.value)}
          >
            <option value={allDistrictsLabel}>{allDistrictsLabel}</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </label>
        <p>
          当前显示 <strong>{filteredSites.length}</strong> 处资源点位
        </p>
      </div>
      <ResourceMap sites={filteredSites} />
    </section>
  )
}

export default MapSection
