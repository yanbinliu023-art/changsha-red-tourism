import {
  BookOpenCheck,
  GraduationCap,
  Landmark,
  MapPinned,
  Route,
} from 'lucide-react'
import DataNotice from '../components/DataNotice'
import SectionTitle from '../components/SectionTitle'
import SiteCard from '../components/SiteCard'
import StatCard from '../components/StatCard'
import { routePlans } from '../data/routes'
import { redTourismSites } from '../data/sites'
import { surveyMetrics } from '../data/survey'
import EvaluationSection from './EvaluationSection'
import MapSection from './MapSection'
import SurveySection from './SurveySection'

function HomeSection() {
  const previewSites = redTourismSites.slice(0, 3)
  const averageEducationValue = Math.round(
    redTourismSites.reduce((sum, site) => sum + site.educationValue, 0) /
      redTourismSites.length,
  )
  const overallSatisfaction = surveyMetrics.find(
    (metric) => metric.id === 'overall-satisfaction',
  )

  return (
    <>
      <section className="hero-section" id="home">
        <div className="hero-section__content">
          <p className="eyebrow">高校课程实践 · 静态研究展示</p>
          <h1>长沙市及周边红色旅游资源保护开发现状调研网站</h1>
          <p className="hero-section__lead">
            围绕红色旅游资源的保护现状、开发利用、游客满意度和教育价值，
            建立一个面向课程汇报的可视化研究网站。
          </p>
          <div className="hero-actions">
            <a href="#resource-map">查看资源地图</a>
            <a href="#research-goals">了解调研目标</a>
          </div>
        </div>
        <div className="hero-panel" aria-label="研究重点">
          <strong>研究主题</strong>
          <ul>
            <li>保护优先与合理开发</li>
            <li>红色文化教育价值呈现</li>
            <li>游客体验与满意度分析</li>
            <li>长沙及周边路线组织建议</li>
          </ul>
        </div>
      </section>

      <section className="content-section" id="research-goals">
        <SectionTitle
          eyebrow="研究背景"
          title="以课程实践视角梳理红色旅游资源保护与开发"
          description="长沙及周边拥有多类型红色旅游资源，适合从资源保护、公共服务、研学教育和文旅融合等角度进行综合观察。"
        />
        <div className="text-grid">
          <article>
            <h3>调研背景</h3>
            <p>
              红色旅游资源既承载历史记忆，也承担思想政治教育和地方文化传播功能。
              本项目以静态网站形式整理课程实践中的研究框架，便于展示资源分布、
              保护开发现状与后续优化方向。
            </p>
          </article>
          <article>
            <h3>调研目标</h3>
            <p>
              从资源可达性、保护状态、开发服务、研学价值和公众体验五个方面建立
              分析线索，为后续地图、评价图表、满意度看板和路线推荐模块提供基础。
            </p>
          </article>
        </div>
      </section>

      <section className="content-section">
        <SectionTitle
          eyebrow="核心数据"
          title="首页概览指标"
          description="以下指标均用于课程项目演示，帮助说明网站的信息组织方式。"
        />
        <div className="stat-grid">
          <StatCard
            icon={Landmark}
            label="资源样本"
            value={`${redTourismSites.length} 处`}
            note="覆盖市区与周边代表性点位"
          />
          <StatCard
            icon={MapPinned}
            label="资源类型"
            value="5 类"
            note="纪念馆、旧址、陵园、故居、研学基地"
          />
          <StatCard
            icon={GraduationCap}
            label="平均教育价值"
            value={`${averageEducationValue} 分`}
            note="基于演示评价字段计算"
          />
          <StatCard
            icon={BookOpenCheck}
            label="综合满意度"
            value={`${overallSatisfaction?.value ?? 0} 分`}
            note="来自演示问卷指标"
          />
        </div>
        <DataNotice detail="首页、资源卡片、路线与满意度指标目前全部为静态演示内容，后续可替换为真实问卷和实地调研结果。" />
      </section>

      <MapSection />

      <section className="content-section" id="sites-preview">
        <SectionTitle
          eyebrow="资源卡片预览"
          title="代表性红色旅游资源"
          description="先展示资源卡片信息结构，后续阶段可接入地图筛选和详情页面。"
        />
        <div className="site-grid">
          {previewSites.map((site) => (
            <SiteCard key={site.id} site={site} />
          ))}
        </div>
      </section>

      <EvaluationSection />

      <SurveySection />

      <section className="content-section" id="route-plan">
        <SectionTitle
          eyebrow="路线规划"
          title="红色研学路线数据已建立"
          description="本阶段先完成路线数据结构，后续可扩展为路线推荐卡片与地图联动。"
        />
        <div className="route-preview">
          <Route aria-hidden="true" size={22} />
          <strong>{routePlans.length} 条演示路线</strong>
          <span>覆盖市区半日线与周边一日线</span>
        </div>
      </section>
    </>
  )
}

export default HomeSection
