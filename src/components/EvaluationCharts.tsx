import { useState } from 'react'
import type { EvaluationMetric } from '../types/tourism'

interface EvaluationChartsProps {
  evaluations: EvaluationMetric[]
}

const getMetricRows = (evaluation: EvaluationMetric) => [
  { label: '保护完整度', value: evaluation.protectionIntegrity },
  { label: '展陈教育性', value: evaluation.exhibitionEducation },
  { label: '游客体验感', value: evaluation.visitorExperience },
  { label: '交通便利度', value: evaluation.transportationConvenience },
  { label: '青年吸引力', value: evaluation.youthAppeal },
]

function EvaluationCharts({ evaluations }: EvaluationChartsProps) {
  const [selectedSiteId, setSelectedSiteId] = useState(evaluations[0]?.siteId ?? '')

  const selectedEvaluation =
    evaluations.find((evaluation) => evaluation.siteId === selectedSiteId) ??
    evaluations[0]

  if (!selectedEvaluation) {
    return <p className="chart-empty">暂无评价数据</p>
  }

  const metricRows = getMetricRows(selectedEvaluation)

  return (
    <div className="evaluation-charts">
      <article className="chart-card">
        <div className="chart-card__header">
          <div>
            <h3>各资源点综合评分</h3>
            <p>展示各资源点五项保护开发指标的综合平均分。</p>
          </div>
        </div>
        <div className="score-list" aria-label="各资源点综合评分条形图">
          {evaluations.map((evaluation) => (
            <div className="score-row" key={evaluation.siteId}>
              <div className="score-row__label">
                <span>{evaluation.siteName}</span>
                <strong>{evaluation.averageScore} 分</strong>
              </div>
              <div className="score-bar" aria-hidden="true">
                <div className="score-bar__track">
                  <div
                    className="score-bar__fill"
                    style={{ width: `${evaluation.averageScore}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>

      <article className="chart-card">
        <div className="chart-card__header">
          <div>
            <h3>单个资源点五维指标卡</h3>
            <p>切换资源点查看五项评价指标的结构差异。</p>
          </div>
          <label className="chart-select">
            <span>选择资源点</span>
            <select
              value={selectedSiteId}
              onChange={(event) => setSelectedSiteId(event.target.value)}
            >
              {evaluations.map((evaluation) => (
                <option key={evaluation.siteId} value={evaluation.siteId}>
                  {evaluation.siteName}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="metric-panel">
          <strong>{selectedEvaluation.siteName}</strong>
          <span>综合评分 {selectedEvaluation.averageScore} 分</span>
        </div>
        <div className="metric-list" aria-label="单个资源点五维指标">
          {metricRows.map((metric) => (
            <div className="metric-row" key={metric.label}>
              <div className="score-row__label">
                <span>{metric.label}</span>
                <strong className="metric-value">{metric.value} 分</strong>
              </div>
              <div className="score-bar" aria-hidden="true">
                <div className="score-bar__track">
                  <div
                    className="score-bar__fill"
                    style={{ width: `${metric.value}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  )
}

export default EvaluationCharts
