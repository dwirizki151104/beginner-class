import React from 'react';

const features = [
    {
        title: 'Beginner Class',
        description: (
            <div className="feature-description">
                <div className="info-item">
                    <span className="info-label">Date:</span> 8 AGUSTUS 2025
                </div>
                <div className="info-item">
                    <span className="info-label">Time:</span> 09.00 - 17.00 WIB
                </div>
                <div className="info-item">
                    <span className="info-label">Location:</span> YOGYAKARTA
                </div>
            </div>
        ),
        icon: '📅',
        size: 'small'
    },
    {
        title: 'Meta Ads For Beginner',
        description: (
            <ol className="feature-list">
                <li>Pembuatan akun iklan, akun bisnis, metode pembayaran</li>
                <li>Belajar iklan IG Ads, CTWA dan LP</li>
                <li>Pembuatan Landing Page</li>
                <li>Pemasangan pixel dan event conversion di LP</li>
                <li>Setting iklan yang baik dan benar sesuai update algoritma terbaru</li>  
                <li>Cara evaluasi hasil data iklan</li>
                <li>Cara memperbaiki dan optimasi iklan</li>  
            </ol>
        ),
        icon: '📊',
        size: 'small'
    },
    {
        title: 'Yang akan Kamu Dapatkan:',
        description: (
            <ol className="feature-list benefits">
                <li>Hardcopy Modul biar lebih mudah paham</li>
                <li>Formula Iklan Profit dengan Tools Kalkulator Iklan</li>
                <li>Grup Support (buat tanya jawab kalau masih bingung setelah kelas berakhir)</li>
                <li>Sertifikat Penyelesaian Kelas</li>
                <li>Exclusive Japri dengan Mentor</li>  
            </ol>
        ),
        icon: '🎁',
        size: 'wide'  // Changed from 'small' to 'wide'
    },
];

const Features = () => {
    // Styles
    const styles = {
        section: {
            padding: '80px 5vw', 
            background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)',
            fontFamily: "'Poppins', sans-serif" 
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto'
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '32px',
            alignItems: 'stretch'
        },
        featureCard: {
            background: '#fff',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
            padding: '30px 25px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            boxSizing: 'border-box',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            ':hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.12)'
            }
        },
        wideCard: {
            background: '#fff',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
            padding: '30px 25px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            boxSizing: 'border-box',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gridColumn: '1 / -1',  // This will make the card span all columns
            maxWidth: '100%',
            ':hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.12)'
            }
        },
        iconContainer: {
            fontSize: '2.5rem',
            marginBottom: '1.5rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #6e8efb 0%, #4a6cf7 100%)',
            color: 'white',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto'
        },
        title: {
            color: '#2a3f5f', 
            marginBottom: '1.5rem', 
            textAlign: 'center',
            fontSize: '1.4rem',
            fontWeight: '700',
            position: 'relative',
            paddingBottom: '10px'
        },
        description: {
            color: '#4a5568',
            fontSize: '1rem',
            lineHeight: '1.6'
        },
    };

    return (
        <section className="features" id="features" style={styles.section}>
            <div style={styles.container}>
                <div style={styles.grid}>
                    {features.map((feature, idx) => (
                        <div 
                            key={idx} 
                            style={
                                feature.size === 'wide' 
                                    ? styles.wideCard 
                                    : {
                                        ...styles.featureCard,
                                        padding: feature.size === 'small' ? '30px 25px' : '40px 30px'
                                    }
                            }
                        >
                            <div style={styles.iconContainer}>
                                {feature.icon}
                            </div>
                            <h3 style={styles.title}>
                                {feature.title}
                                <span className="title-underline"></span>
                            </h3>
                            <div style={styles.description}>
                                {feature.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Enhanced CSS */}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
                
                .feature-description {
                    text-align: center;
                    line-height: 1.8;
                    padding: 0 10px;
                }
                
                .info-item {
                    margin-bottom: 12px;
                    font-size: 1rem;
                    color: #4a5568;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 8px 0;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
                }
                
                .info-label {
                    font-weight: 600;
                    color: #2a3f5f;
                    margin-right: 10px;
                }
                
                .price {
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: #4a6cf7;
                    margin-top: 20px;
                    border-bottom: none !important;
                }
                
                .register-button {
                    background: linear-gradient(135deg, #6e8efb 0%, #4a6cf7 100%);
                    color: white;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 30px;
                    font-weight: 600;
                    font-size: 1rem;
                    margin-top: 20px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    width: 100%;
                    box-shadow: 0 4px 15px rgba(74, 108, 247, 0.3);
                }
                
                .register-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(74, 108, 247, 0.4);
                }
                
                .feature-list {
                    padding-left: 20px;
                    margin: 0;
                    list-style-type: none;
                    color: #4a5568;
                    line-height: 1.8;
                }
                
                .feature-list li {
                    margin-bottom: 12px;
                    padding: 8px 0 8px 30px;
                    position: relative;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
                }
                
                .feature-list li:before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 14px;
                    width: 8px;
                    height: 8px;
                    background: #4a6cf7;
                    border-radius: 50%;
                }
                
                .benefits li {
                    padding-left: 35px;
                }
                
                .benefits li:before {
                    content: '✓';
                    position: absolute;
                    left: 0;
                    top: 8px;
                    width: 20px;
                    height: 20px;
                    background: #e6edff;
                    border-radius: 50%;
                    color: #4a6cf7;
                    font-size: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .title-underline {
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 50px;
                    height: 3px;
                    background: linear-gradient(135deg, #6e8efb 0%, #4a6cf7 100%);
                    border-radius: 3px;
                }

                /* Responsive adjustments */
                @media (min-width: 768px) {
                    .features .grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    
                    .features .wide-card {
                        grid-column: span 2;
                    }
                }
            `}</style>
        </section>
    );
};

export default Features;