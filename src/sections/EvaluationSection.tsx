import EvaluationCharts from '../components/EvaluationCharts'
import SectionTitle from '../components/SectionTitle'
import { evaluations } from '../data/evaluations'

function EvaluationSection() {
  return (
    <section className="content-section" id="evaluation-section">
      <SectionTitle
        eyebrow="保护开发评价"
        title="红色旅游资源保护开发评价图表"
        description="围绕保护完整度、展陈教育性、游客体验感、交通便利度和青年吸引力建立演示评价维度。"
      />
      <EvaluationCharts evaluations={evaluations} />
    </section>
  )
}

export default EvaluationSection
