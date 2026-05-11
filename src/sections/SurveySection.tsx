import { useMemo, useState } from 'react'
import { ClipboardCopy } from 'lucide-react'
import DataNotice from '../components/DataNotice'
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
  const [copyMessage, setCopyMessage] = useState('')

  const questionnaireText = useMemo(
    () =>
      satisfactionSurvey.questionnaire
        .map((question, index) => `${index + 1}. ${question}`)
        .join('\n'),
    [],
  )

  const handleCopy = async () => {
    await navigator.clipboard.writeText(questionnaireText)
    setCopyMessage('已复制，可粘贴到问卷星或腾讯问卷')
  }

  return (
    <section className="content-section" id="survey-section">
      <SectionTitle
        eyebrow="满意度调研"
        title="游客满意度与青年体验调研"
        description="围绕游客体验、青年吸引力和传播方式设计演示问卷，为后续真实调研替换数据预留结构。"
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

      <article className="survey-card questionnaire-card">
        <div className="questionnaire-header">
          <div>
            <h3>问卷题目展示区</h3>
            <p>以下题目适合大学生课程实践调研，后续可直接导入问卷平台。</p>
          </div>
          <button type="button" onClick={handleCopy}>
            <ClipboardCopy aria-hidden="true" size={18} />
            复制问卷题目
          </button>
        </div>
        <ol className="question-list">
          {satisfactionSurvey.questionnaire.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ol>
        {copyMessage ? <p className="copy-message">{copyMessage}</p> : null}
      </article>

      <DataNotice detail={satisfactionSurvey.dataSource} />
    </section>
  )
}

export default SurveySection
