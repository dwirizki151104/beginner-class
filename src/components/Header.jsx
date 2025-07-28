import '../App.css'

const Scrolltofeatures = () => {
  const featuresSection = document.getElementById('feature');
  if (featuresSection) {
    featuresSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const ScrolltoGalery = () => {
  const galeriSection = document.querySelector('.galeri');
  if (galeriSection) {
    galeriSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="images/logo.png" alt=""/>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a onClick={Scrolltofeatures} >Jadwal</a></li>
          <li><a onClick={ScrolltoGalery}>Galeri</a></li>
        </ul>
      </nav>
    </header>
  )
}