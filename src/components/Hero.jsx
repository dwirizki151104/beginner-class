import '../App.css'

export default function Hero() {
  const phoneNumber = '6281353025302'; 
  
  // Pesan yang akan otomatis terisi
  const message = 'Halo, saya ingin mendaftar Winning Campaign Meta Ads';
  
  // Membuat link WhatsApp
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="hero">
      <div className="hero-content">
        <div style={{ lineHeight: 1.1, marginBottom: '1rem' }}>
          <h1 style={{ 
            color: '#ffffff', 
            marginBottom: 0,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
          }}>
            BELAJAR FACEBOOK ADS NGGAK HARUS RIBET DAN MAHAL
          </h1>
        </div>
        <p style={{ color: '#ffffffff' }}>
          <b>Bahkan kamu yang gaptek sekalipun bisa mulai dari nol dan langsung praktek</b>
        </p>
        <p style={{ color: '#000000ff' }}>
        Kamu baru mulai jualan online tapi bingung gimana caranya biar produkmu dilirik banyak orang? Jangan khawatir—pelatihan ini dirancang khusus untuk pemula yang belum pernah ngiklan sekalipun.
        </p>
        <p style={{ color: '#000000ff' }}> 
        Di sini kamu akan belajar dasar-dasar Facebook & Instagram Ads dengan bahasa yang mudah dipahami, langsung praktek, dan bisa dipakai untuk jualanmu sendiri.  
        Nggak perlu jago teknis, yang penting mau belajar dan eksekusi. Yuk, mulai perjalanan iklan pertamamu hari ini!
        </p>
      </div>
      <div className="hero-image">
        <img
          src="images/hero-image.png"
          alt="Hero"
        />
      </div>
    </section>
  )
}