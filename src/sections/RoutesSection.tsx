import RouteCard from '../components/RouteCard'
import SectionTitle from '../components/SectionTitle'
import { routePlans } from '../data/routes'

function RoutesSection() {
  return (
    <section className="content-section" id="route-plan">
      <SectionTitle
        eyebrow="路线规划"
        title="红色研学路线与开发建议"
        description="围绕资源联动、研学教育、数字导览、交通接驳、青年传播、文创开发和志愿讲解组织路线方案。"
      />
      <div className="route-intro">
        <h3>路线设计说明</h3>
        <p>
          本模块以课程实践展示为目标，将长沙城区、长沙县—望城、宁乡—韶山周边资源
          按主题串联，重点呈现红色旅游资源保护开发的调研观察路径。
        </p>
      </div>
      <div className="route-grid">
        {routePlans.map((route) => (
          <RouteCard key={route.id} route={route} />
        ))}
      </div>
    </section>
  )
}

export default RoutesSection
