import React from 'react';

const WorkshopSection = () => {
  // WhatsApp contact function
  const contactWhatsApp = () => {
    // Replace with your actual WhatsApp number in international format (no +, 0, or spaces)
    const phoneNumber = '6281353025302'; 
    // Replace with your pre-filled message
    const message = 'Halo, saya ingin mendaftar workshop Meta Ads. Bagaimana caranya?';
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div style={{ 
      fontFamily: "'Poppins', sans-serif", 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '20px',
      color: '#333'
    }}>
      {/* Workshop Header Section */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '60px',
        padding: '0 20px'
      }}>
        <h1 style={{ 
          color: '#0066cc', 
          fontSize: '2.8rem', 
          marginBottom: '25px',
          fontWeight: 700,
          lineHeight: '1.3',
          background: 'linear-gradient(135deg, #0066cc, #4da6ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Gabung 2 Hari Untuk Skill Maksimal
        </h1>
        <p style={{ 
          color: '#555', 
          fontSize: '1.3rem', 
          lineHeight: '1.6',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          Setelah ikut kelas, Anda akan paham:
        </p>
      </div>

      {/* Workshop Content Section */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '30px', 
        justifyContent: 'space-between',
        marginBottom: '80px',
        padding: '0 20px'
      }}>
        {/* Left Column */}
        <div style={{ 
          flex: '1', 
          minWidth: '300px',
          maxWidth: '100%'
        }}>
          <ul style={{ 
            listStyleType: 'none', 
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            {[
              "Strategi meta ada untuk brand jangka panjang",
              "Strategi memenangkan persaingan di meta ada",
              "Bikin KPI likan biar profit terjaga",
              "Pra-campaign (bikin akun iklan, tips landingpage high conversion, tips konten iklan eye caching, setting pixel & event, setting payment)"
            ].map((item, index) => (
              <li key={index}>
                <div style={{ 
                  padding: '25px',
                  background: '#fff',
                  borderRadius: '15px',
                  boxShadow: '0 5px 25px rgba(0, 102, 204, 0.08)',
                  borderLeft: '5px solid #4da6ff',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  ':hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 30px rgba(0, 102, 204, 0.15)'
                  },
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '15px'
                }}>
                  <div style={{
                    background: '#4da6ff',
                    color: 'white',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontWeight: 'bold',
                    fontSize: '1rem'
                  }}>
                    {index + 1}
                  </div>
                  <p style={{ 
                    margin: 0, 
                    color: '#333', 
                    fontWeight: 500,
                    fontSize: '1.1rem',
                    lineHeight: '1.6'
                  }}>
                    {item}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div style={{ 
          flex: '1', 
          minWidth: '300px',
          maxWidth: '100%'
        }}>
          <ul style={{ 
            listStyleType: 'none', 
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            {[
              "Running Campaign (care formulas! iklan, praktek ngiklan, strategi split testing, strategi targetting, tips ada copy yang menarik)",
              "Pacea-campaign (care baca data yang tepat tanpa pusing banyak matrik, strategi benerin iklan)"
            ].map((item, index) => (
              <li key={index}>
                <div style={{ 
                  padding: '25px',
                  background: '#fff',
                  borderRadius: '15px',
                  boxShadow: '0 5px 25px rgba(0, 102, 204, 0.08)',
                  borderLeft: '5px solid #0066cc',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  ':hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 30px rgba(0, 102, 204, 0.15)'
                  },
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '15px'
                }}>
                  <div style={{
                    background: '#0066cc',
                    color: 'white',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontWeight: 'bold',
                    fontSize: '1rem'
                  }}>
                    {index + 5}
                  </div>
                  <p style={{ 
                    margin: 0, 
                    color: '#333', 
                    fontWeight: 500,
                    fontSize: '1.1rem',
                    lineHeight: '1.6'
                  }}>
                    {item}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Workshop Value Proposition */}
      <div style={{ 
        background: 'linear-gradient(135deg, #f5fcff 0%, #e0f2ff 100%)',
        borderRadius: '20px',
        padding: '40px',
        marginBottom: '60px',
        boxShadow: '0 10px 40px rgba(0, 102, 204, 0.1)',
        border: '1px solid rgba(0, 118, 255, 0.1)'
      }}>
        <p style={{ 
          color: '#333', 
          fontSize: '1.2rem', 
          lineHeight: '1.8',
          marginBottom: '25px',
          fontWeight: 500
        }}>
          Framework ini kami susun melalui studycase selama <strong style={{ color: '#0066cc' }}>lebih dari 7 tahun, Spend 10 Millar</strong> dan sudah dicoba di berbagai kategori bisnis.
        </p>
        
        <p style={{ 
          color: '#0066cc', 
          fontWeight: 600,
          fontSize: '1.1rem',
          margin: 0
        }}>
          Ga khawatir lagi praktek sendiri, bingung sendiri, akhirnya mandek males nerusin.
        </p>
      </div>

      {/* CTA Section */}
      <div style={{
        textAlign: 'center',
        padding: '40px 20px 60px',
        marginTop: '0'
      }}>
        <button 
          onClick={contactWhatsApp}
          style={{
            background: 'linear-gradient(135deg, #0066cc, #4da6ff)',
            color: 'white',
            border: 'none',
            padding: '15px 35px',
            fontSize: '1.1rem',
            fontWeight: 600,
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 10px 25px rgba(0, 102, 204, 0.3)',
            transition: 'all 0.3s ease',
            ':hover': {
              transform: 'translateY(-3px)',
              boxShadow: '0 15px 30px rgba(0, 102, 204, 0.4)'
            }
          }}
        >
          Daftar Sekarang via WhatsApp
        </button>
        <p style={{
          marginTop: '20px',
          color: '#666',
          fontSize: '1rem'
        }}>
          Klik tombol di atas untuk langsung terhubung dengan tim kami di WhatsApp
        </p>
      </div>
    </div>
  );
}

export default WorkshopSection;