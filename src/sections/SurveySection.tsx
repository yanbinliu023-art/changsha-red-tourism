import SectionTitle from '../components/SectionTitle'
import { satisfactionSurvey } from '../data/survey'

const satisfactionMetrics = [
  { key: 'overallSatisfaction', label: '综合满意度' },
  { key: 'explanationService', label: '讲解服务' },
  { key: 'facilityExperience', label: '设施体验' },
  { key: 'trafficConvenience', label: '交通便利' },
  { key: 'culturalAttraction', label: '文化吸引力' },
  { key: 'recommendWillingness', label: '推荐意愿' },
] as const

function SurveySection() {
  return (
    <section className="content-section" id="survey-section">
      <SectionTitle
        eyebrow="满意度调研"
        title="游客满意度与青年体验调研"
        description="围绕游客体验、青年吸引力和传播方式整理满意度指标，为保护开发建议提供参考。"
      />
      <div className="survey-overview">
        <article>
          <h3>调研目的</h3>
          <p>
            了解长沙及周边红色旅游资源在讲解服务、设施体验、交通便利、
            文化吸引力和青年传播方式方面的体验反馈，为保护开发建议提供课程实践依据。
          </p>
        </article>
        <article>
          <h3>问卷对象</h3>
          <p>
            面向高校学生、青年游客和课程实践调研对象，重点关注红色旅游资源的教育价值、
            参观体验和推荐意愿。
          </p>
        </article>
      </div>

      <div className="survey-layout">
        <article className="survey-card">
          <h3>满意度指标展示</h3>
          <div className="survey-score-list">
            {satisfactionMetrics.map((metric) => {
              const value = satisfactionSurvey[metric.key]

              return (
                <div className="survey-score-row" key={metric.key}>
                  <div className="score-row__label">
                    <span>{metric.label}</span>
                    <strong>{value} 分</strong>
                  </div>
                  <div className="score-bar" aria-hidden="true">
                    <div className="score-bar__track">
                      <div className="score-bar__fill" style={{ width: `${value}%` }} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </article>

        <div className="survey-side">
          <article className="survey-card">
            <h3>游客偏好的红色旅游形式</h3>
            <div className="survey-tag-list">
              {satisfactionSurvey.preferredFormats.map((format) => (
                <span key={format}>{format}</span>
              ))}
            </div>
          </article>
          <article className="survey-card">
            <h3>主要问题标签</h3>
            <div className="issue-tag-list">
              {satisfactionSurvey.issueTags.map((issue) => (
                <span key={issue}>{issue}</span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default SurveySection
