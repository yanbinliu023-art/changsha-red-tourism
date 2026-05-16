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
  questionnaire: [
    '你是否去过长沙及周边红色旅游景点？',
    '你去过哪些长沙及周边红色旅游景点？',
    '你参观红色旅游景点的主要目的是什么？',
    '你对景点讲解服务的满意程度如何？',
    '你对景点设施体验和参观环境的满意程度如何？',
    '你对景点交通便利度和路线衔接的满意程度如何？',
    '你认为红色旅游资源对大学生是否具有吸引力？',
    '你更喜欢哪种红色旅游形式？',
    '你认为当前长沙及周边红色旅游存在的主要问题是什么？',
    '你是否愿意向同学推荐长沙及周边红色旅游景点？',
    '你希望景区增加哪些数字化服务？',
    '你对红色旅游资源保护开发有什么建议？',
  ],
}

export const surveyMetrics: SurveyMetric[] = [
  {
    id: 'overall-satisfaction',
    label: '综合满意度',
    value: satisfactionSurvey.overallSatisfaction,
    unit: '分',
    description: '用于演示游客对红色旅游体验的整体评价。',
  },
  {
    id: 'explanation-service',
    label: '讲解服务',
    value: satisfactionSurvey.explanationService,
    unit: '分',
    description: '用于演示游客对讲解服务内容和形式的评价。',
  },
  {
    id: 'cultural-attraction',
    label: '文化吸引力',
    value: satisfactionSurvey.culturalAttraction,
    unit: '分',
    description: '用于演示红色旅游内容对青年群体的吸引力。',
  },
]
