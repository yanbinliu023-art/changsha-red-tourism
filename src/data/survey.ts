import type { SatisfactionSurveyData, SurveyMetric } from '../types/tourism'

export const satisfactionSurvey: SatisfactionSurveyData = {
  overallSatisfaction: 86,
  explanationService: 82,
  facilityExperience: 80,
  trafficConvenience: 78,
  culturalAttraction: 89,
  recommendWillingness: 84,
  preferredFormats: [
    '沉浸式展陈',
    '数字地图导览',
    '研学路线',
    '文创打卡',
    '短视频讲解',
    '志愿讲解服务',
  ],
  issueTags: [
    '讲解形式较传统',
    '互动体验不足',
    '路线联动不够',
    '青年传播方式不足',
    '文创产品吸引力有限',
    '公共交通衔接需优化',
  ],
}

export const surveyMetrics: SurveyMetric[] = [
  {
    id: 'overall-satisfaction',
    label: '综合满意度',
    value: satisfactionSurvey.overallSatisfaction,
    unit: '分',
    description: '游客对红色旅游体验的整体评价。',
  },
  {
    id: 'explanation-service',
    label: '讲解服务',
    value: satisfactionSurvey.explanationService,
    unit: '分',
    description: '游客对讲解服务内容和形式的评价。',
  },
  {
    id: 'cultural-attraction',
    label: '文化吸引力',
    value: satisfactionSurvey.culturalAttraction,
    unit: '分',
    description: '红色旅游内容对青年群体的吸引力。',
  },
]
