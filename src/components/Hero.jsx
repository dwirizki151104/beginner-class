import '../App.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Our Awesome Product</h1>
        <p>A solution that will change your workflow forever</p>
        <button className="cta-button">Get Started</button>
      </div>
      <div className="hero-image">
        <img src="https://via.placeholder.com/500x300" alt="Hero" />
      </div>
    </section>
  )
}