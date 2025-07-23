import '../App.css'

export default function Header() {
  return (
    <header className="header">
      <div className="logo">MyLanding</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}