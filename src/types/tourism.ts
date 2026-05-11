export const DATA_SOURCE_NOTE = '课程项目演示数据，非真实问卷统计结果'

export type SiteType =
  | '纪念馆'
  | '革命旧址'
  | '烈士陵园'
  | '故居'
  | '研学基地'

export type ProtectionStatus = '较好' | '一般' | '待提升'

export interface RedTourismSite {
  id: string
  name: string
  district: string
  address: string
  type: SiteType
  lat: number
  lng: number
  theme: string
  protectionStatus: ProtectionStatus
  developmentStatus: string
  educationValue: number
  visitTips: string
  tags: string[]
  dataSource: typeof DATA_SOURCE_NOTE
}

export interface SurveyMetric {
  id: string
  label: string
  value: number
  unit: string
  description: string
  dataSource: typeof DATA_SOURCE_NOTE
}

export interface SatisfactionSurveyData {
  overallSatisfaction: number
  explanationService: number
  facilityExperience: number
  trafficConvenience: number
  culturalAttraction: number
  recommendWillingness: number
  preferredFormats: string[]
  issueTags: string[]
  questionnaire: string[]
  dataSource: typeof DATA_SOURCE_NOTE
}

export interface EvaluationMetric {
  siteId: string
  siteName: string
  protectionIntegrity: number
  exhibitionEducation: number
  visitorExperience: number
  transportationConvenience: number
  youthAppeal: number
  averageScore: number
  dataSource: typeof DATA_SOURCE_NOTE
}

export interface RoutePlan {
  id: string
  name: string
  duration: string
  audience: string
  theme: string
  stops: string[]
  highlights: string[]
  dataSource: typeof DATA_SOURCE_NOTE
}
