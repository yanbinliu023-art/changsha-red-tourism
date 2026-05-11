import './App.css'
import Header from './components/Header'
import HomeSection from './sections/HomeSection'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <HomeSection />
      </main>
      <footer className="site-footer">
        <strong>长沙市及周边红色旅游资源保护开发现状调研</strong>
        <p>高校课程实践网站原型 · 面向红色资源保护、开发利用、青年教育和可视化展示</p>
        <small>课程项目演示数据，非真实问卷统计结果</small>
      </footer>
    </div>
  )
}

export default App
