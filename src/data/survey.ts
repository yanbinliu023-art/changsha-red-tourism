import { DATA_SOURCE_NOTE, type SurveyMetric } from '../types/tourism'

export const surveyMetrics: SurveyMetric[] = [
  {
    id: 'overall-satisfaction',
    label: '综合满意度',
    value: 86,
    unit: '分',
    description: '用于演示游客对红色旅游体验的整体评价。',
    dataSource: DATA_SOURCE_NOTE,
  },
  {
    id: 'protection-awareness',
    label: '保护认知提升',
    value: 82,
    unit: '分',
    description: '用于演示参观后对资源保护重要性的认知变化。',
    dataSource: DATA_SOURCE_NOTE,
  },
  {
    id: 'education-value',
    label: '教育价值认可',
    value: 91,
    unit: '分',
    description: '用于演示红色旅游资源的课程实践和研学价值。',
    dataSource: DATA_SOURCE_NOTE,
  },
]
