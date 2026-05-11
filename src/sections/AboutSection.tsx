import DataNotice from '../components/DataNotice'
import SectionTitle from '../components/SectionTitle'

const methods = [
  '文献资料整理',
  '实地走访观察',
  '问卷调查',
  '游客体验分析',
  '网站可视化展示',
  '路线方案设计',
]

const indicators = [
  {
    name: '保护完整度',
    description: '观察红色资源本体、历史环境和展示空间的保存与维护情况。',
  },
  {
    name: '展陈教育性',
    description: '关注展陈内容是否清晰呈现历史脉络、人物精神和教育价值。',
  },
  {
    name: '游客体验感',
    description: '分析参观动线、服务设施、讲解方式和互动体验是否友好。',
  },
  {
    name: '交通便利度',
    description: '评估公共交通、团队接驳和跨点位路线组织的便利程度。',
  },
  {
    name: '青年吸引力',
    description: '考察数字导览、研学任务、文创传播等方式对青年群体的吸引力。',
  },
]

const outcomes = [
  '红色资源数字地图',
  '红色资源信息卡片',
  '保护开发评价模块',
  '满意度调研问卷模块',
  '红色研学路线推荐模块',
  '可用于课程汇报的网站原型',
]

const reportOutline = [
  '调研背景与意义',
  '调研对象与方法',
  '长沙市及周边红色旅游资源概况',
  '保护开发现状分析',
  '游客满意度与青年体验分析',
  '存在问题',
  '优化建议',
  '实践成果与反思',
]

function AboutSection() {
  return (
    <section className="content-section" id="about-research">
      <SectionTitle
        eyebrow="关于调研"
        title="关于调研与实践报告"
        description="面向“毛泽东思想与中国特色社会主义理论体系概论”课程实践调研，整理研究主题、方法、指标与报告写作框架。"
      />

      <div className="about-grid">
        <article className="about-card about-card--wide">
          <h3>调研主题</h3>
          <strong>长沙市及周边红色旅游资源保护开发现状调研</strong>
          <p>
            本项目围绕红色资源保护、开发利用、游客满意度、青年教育价值和路线优化展开，
            通过网站方式呈现课程实践调研的资料结构与展示成果。
          </p>
        </article>

        <article className="about-card about-card--wide">
          <h3>调研背景与意义</h3>
          <p>
            长沙及周边红色资源承载着重要历史记忆和精神谱系，是开展理想信念教育、
            爱国主义教育和社会实践教学的重要载体。围绕红色资源保护利用开展调研，
            有助于理解红色文化传承与新时代文旅融合发展的关系，也有助于从青年视角
            思考如何提升红色旅游的教育感染力、传播吸引力和公共服务水平。
          </p>
        </article>
      </div>

      <div className="about-block">
        <h3>调研方法</h3>
        <div className="method-card-grid">
          {methods.map((method) => (
            <span key={method}>{method}</span>
          ))}
        </div>
      </div>

      <div className="about-block">
        <h3>指标体系</h3>
        <div className="indicator-grid">
          {indicators.map((indicator) => (
            <article key={indicator.name}>
              <strong>{indicator.name}</strong>
              <p>{indicator.description}</p>
            </article>
          ))}
        </div>
      </div>

      <article className="about-card about-card--notice">
        <h3>数据说明</h3>
        <p>
          当前网站数据为课程项目演示数据，非真实问卷统计结果。后续可用实地走访记录、
          问卷星或腾讯问卷统计结果替换。
        </p>
      </article>

      <div className="about-two-column">
        <article className="about-card">
          <h3>实践成果</h3>
          <ul className="about-list">
            {outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </article>

        <article className="about-card">
          <h3>报告写作提纲</h3>
          <ol className="report-outline">
            {reportOutline.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </article>
      </div>

      <DataNotice detail="关于调研模块用于课程实践展示，报告正文可在后续根据真实材料继续完善。" />
    </section>
  )
}

export default AboutSection
