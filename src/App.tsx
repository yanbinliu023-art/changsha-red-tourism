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
        <p>长沙市及周边红色旅游资源保护开发现状调研 · 高校课程实践展示</p>
      </footer>
    </div>
  )
}

export default App
