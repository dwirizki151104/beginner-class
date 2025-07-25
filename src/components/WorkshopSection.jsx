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

      {/* Enhanced Pricing Section */}
      <div style={{
        textAlign: 'center',
        margin: '40px auto',
        padding: '40px 30px',
        background: 'linear-gradient(to bottom, #ffffff, #f8fbff)',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0, 102, 204, 0.15)',
        maxWidth: '650px',
        border: '1px solid rgba(0, 102, 204, 0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '80px',
          height: '80px',
          background: 'rgba(0, 102, 204, 0.05)',
          borderRadius: '0 0 0 100%'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '60px',
          height: '60px',
          background: 'rgba(255, 68, 68, 0.05)',
          borderRadius: '0 100% 0 0'
        }}></div>

        <h3 style={{
          color: '#0066cc',
          fontSize: '1.8rem',
          marginBottom: '25px',
          fontWeight: '700',
          position: 'relative',
          zIndex: 1
        }}>
          Jadi Berapa Investasi Daftar Beginner Class?
        </h3>
        
        <div style={{
          position: 'relative',
          marginBottom: '20px',
          padding: '15px 0'
        }}>
          <div style={{
            fontSize: '1.6rem',
            fontWeight: 'bold',
            color: '#999',
            marginBottom: '5px',
            textDecoration: 'line-through',
            position: 'relative',
            display: 'inline-block'
          }}>
            Rp 1.500.000
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '0',
              width: '100%',
              height: '2px',
              background: '#ff4444',
              transform: 'rotate(-5deg)'
            }}></div>
          </div>
          
          <div style={{
            fontSize: '1.1rem',
            fontWeight: 'bold',
            color: '#ff4444',
            background: 'rgba(255, 68, 68, 0.1)',
            padding: '5px 15px',
            borderRadius: '50px',
            display: 'inline-block',
            marginTop: '5px'
          }}>
            Bukan✕
          </div>
        </div>
        
        <div style={{
          background: 'rgba(0, 102, 204, 0.1)',
          padding: '15px',
          borderRadius: '12px',
          marginBottom: '25px',
          position: 'relative'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '10px'
          }}>
            <div style={{
              width: '24px',
              height: '24px',
              background: '#0066cc',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '14px'
            }}>
              ✓
            </div>
            <span style={{
              fontWeight: '600',
              color: '#0066cc',
              fontSize: '1.1rem'
            }}>PROMO EARLY BIRD (LAUNCHING)</span>
          </div>
          
          <div style={{
            fontSize: '2.2rem',
            fontWeight: '800',
            color: '#0066cc',
            margin: '15px 0',
            textShadow: '0 2px 5px rgba(0, 102, 204, 0.1)'
          }}>
            Rp 1 Juta saja
          </div>
          
          <div style={{
            fontSize: '0.9rem',
            color: '#666',
            fontStyle: 'italic'
          }}>
          </div>
        </div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          flexWrap: 'wrap',
          marginTop: '30px'
        }}>
          <div style={{
            background: 'rgba(0, 102, 204, 0.05)',
            padding: '15px 25px',
            borderRadius: '12px',
            minWidth: '150px'
          }}>
            <div style={{ 
              fontSize: '1rem',
              marginBottom: '8px',
              color: '#555'
            }}>2 Tiket:</div>
            <div style={{ 
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#0066cc'
            }}>@Rp 950 rb</div>
            <div style={{
              fontSize: '0.8rem',
              color: '#ff4444',
              marginTop: '5px',
              fontWeight: '600'
            }}>Hemat Rp50 rb/tiket</div>
          </div>
          
          <div style={{
            background: 'rgba(0, 102, 204, 0.1)',
            padding: '15px 25px',
            borderRadius: '12px',
            minWidth: '150px',
            border: '2px solid rgba(0, 102, 204, 0.2)'
          }}>
            <div style={{ 
              fontSize: '1rem',
              marginBottom: '8px',
              color: '#555'
            }}>3 Tiket:</div>
            <div style={{ 
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#0066cc'
            }}>@Rp 900 rb</div>
            <div style={{
              fontSize: '0.8rem',
              color: '#ff4444',
              marginTop: '5px',
              fontWeight: '600'
            }}>Hemat Rp 200 rb/tiket</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkshopSection;