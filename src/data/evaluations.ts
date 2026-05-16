import { redTourismSites } from './sites'
import type { EvaluationMetric, ProtectionStatus } from '../types/tourism'

const protectionScoreMap: Record<ProtectionStatus, number> = {
  较好: 90,
  一般: 78,
  待提升: 68,
}

const clampScore = (score: number) => Math.max(60, Math.min(98, score))

export const evaluations: EvaluationMetric[] = redTourismSites.map((site, index) => {
  const protectionIntegrity = clampScore(
    protectionScoreMap[site.protectionStatus] + (index % 5) - 2,
  )
  const exhibitionEducation = clampScore(site.educationValue - 2 + (index % 4))
  const visitorExperience = clampScore(82 + (index % 6) + Math.round((site.educationValue - 88) / 2))
  const transportationConvenience = clampScore(
    site.district.startsWith('长沙市') ? 90 - (index % 4) : 78 + (index % 5),
  )
  const youthAppeal = clampScore(site.educationValue - 5 + (index % 7))
  const averageScore = Math.round(
    (protectionIntegrity +
      exhibitionEducation +
      visitorExperience +
      transportationConvenience +
      youthAppeal) /
      5,
  )

  return {
    siteId: site.id,
    siteName: site.name,
    protectionIntegrity,
    exhibitionEducation,
    visitorExperience,
    transportationConvenience,
    youthAppeal,
    averageScore,
  }
})
