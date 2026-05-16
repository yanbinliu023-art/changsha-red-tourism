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
        <small>长沙红色旅游调研 · 课程实践研究网站</small>
      </footer>
    </div>
  )
}

export default App
