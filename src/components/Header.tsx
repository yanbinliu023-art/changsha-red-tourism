import { BookOpen, MapPin, Route, ShieldCheck } from 'lucide-react'

const navItems = [
  { href: '#home', label: '首页', icon: BookOpen },
  { href: '#sites-preview', label: '资源预览', icon: MapPin },
  { href: '#evaluation-plan', label: '评价框架', icon: ShieldCheck },
  { href: '#route-plan', label: '路线规划', icon: Route },
]

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="返回首页">
        <span className="brand-mark">长</span>
        <span>
          <strong>长沙红色旅游调研</strong>
          <small>课程实践研究网站</small>
        </span>
      </a>
      <nav className="site-nav" aria-label="主导航">
        {navItems.map((item) => {
          const Icon = item.icon

          return (
            <a key={item.href} href={item.href}>
              <Icon aria-hidden="true" size={17} />
              <span>{item.label}</span>
            </a>
          )
        })}
      </nav>
    </header>
  )
}

export default Header
