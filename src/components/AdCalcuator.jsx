import React from 'react';

// Bagian utama komponen
const MarketingToolsSection = () => {
  return (
    <div style={styles.mainContainer}>
      {/* Ad Calculator Section */}
      <div style={styles.adCalculator}>
        <div style={styles.calculatorHeader}>
          <h1 style={styles.calculatorMainTitle}>HANYA ADA DISINI</h1>
          <h2 style={styles.calculatorSubTitle}>kalkulator iklan</h2>
        </div>

        <div style={styles.calculatorContent}>
          <div style={styles.questionBlock}>
            <h3 style={styles.question}>Menang apa sih "Kalkulator iklan"?</h3>
            <p style={styles.answer}>
              Jadi ini tools yang gampang banget dipakai, buat tau kapan nge-gas dan ngerem
              iklan, jadi mengurangi potensi BONCOS!
            </p>
          </div>

          <div style={styles.featureBlock}>
            <p style={styles.featureText}>
              Bisa dipakai juga buat menentukan ROAS yang mau dicapai dengan biaya iklan yang
              sesuai, biar EFISIEN!
            </p>
          </div>
        </div>
      </div>

      {/* Bonus Section */}
      <section style={styles.bonusSection}>
        <div style={styles.bonusContainer}>
          <div style={styles.bonusCard}>
            <h2 style={styles.bonusTitle}>Bonus yang akan Kamu Dapatkan:</h2>
            <ul style={styles.bonusList}>
              <li style={styles.bonusItem}>
                <div style={styles.bonusNumberContainer}>
                  <span style={styles.bonusNumber}>1</span>
                </div>
                <div style={styles.bonusContent}>
                  <h3 style={styles.bonusItemTitle}>Kalkulator Iklan senilai Rp500.000</h3>
                  <p style={styles.bonusDescription}>
                    Hitungan Lengkap Perumusan Model, Target Omzet, HPP, Laba, target penjualan.
                    Yang goalnya adalah membuat rambu-rambu Target Cost Per Result pada campaign-campaign yang dijalankan.
                  </p>
                </div>
              </li>
              <li style={styles.bonusItem}>
                <div style={styles.bonusNumberContainer}>
                  <span style={styles.bonusNumber}>2</span>
                </div>
                <div style={styles.bonusContent}>
                  <h3 style={styles.bonusItemTitle}>Konsultasi Pribadi dengan Mentor senilai Rp700.000</h3>
                  <p style={styles.bonusDescription}>
                    Sesi konsultasi eksklusif 1-on-1 dengan mentor berpengalaman untuk membahas strategi khusus bisnis Anda.
                  </p>
                </div>
              </li>
              <li style={styles.bonusItem}>
                <div style={styles.bonusNumberContainer}>
                  <span style={styles.bonusNumber}>3</span>
                </div>
                <div style={styles.bonusContent}>
                  <h3 style={styles.bonusItemTitle}>Formula Landingpage with AI senilai Rp300.000</h3>
                  <p style={styles.bonusDescription}>
                    Template canggih yang menggunakan AI untuk mengoptimalkan konversi landing page Anda secara otomatis.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Additional Information */}
          <div style={styles.infoGrid}>
            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>Harga ini tidak termasuk:</h3>
              <ul style={styles.infoList}>
                <li style={styles.infoListItem}>
                  <span style={styles.infoListIcon}>✖</span>
                  Budget iklan (bisa topup sendiri mulai dari 50rb)
                </li>
                <li style={styles.infoListItem}>
                  <span style={styles.infoListIcon}>✖</span>
                  Biaya domain + hosting
                </li>
                <li style={styles.infoListItem}>
                  <span style={styles.infoListIcon}>✖</span>
                  Penginapan saat workshop
                </li>
              </ul>
            </div>
            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>Alasan mesti banget ikut kelas ini?</h3>
              <ul style={styles.infoList}>
                <li style={styles.infoListItem}>
                  <span style={styles.infoListIcon}>✓</span>
                  Punyai roadmap yang jelas untuk buat brand semakin besar
                </li>
                <li style={styles.infoListItem}>
                  <span style={styles.infoListIcon}>✓</span>
                  Kelas offline, bisa praktek langsung dan didampingi mentor
                </li>
                <li style={styles.infoListItem}>
                  <span style={styles.infoListIcon}>✓</span>
                  Grup support aktif untuk tanya jawab setelah kelas
                </li>
                <li style={styles.infoListItem}>
                  <span style={styles.infoListIcon}>✓</span>
                  Kesempatan konsultasi langsung dengan mentor
                </li>
                <li style={styles.infoListItem}>
                  <span style={styles.infoListIcon}>✓</span>
                  Sudah 80+ angkatan di 3 kota besar (Jogja, Jakarta, Surabaya)
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div style={styles.ctaBox}>
            <p style={styles.ctaText}>
              Semakin menunda, semakin jauh pula potensi bisa segera dapat Winning Campaign.<br />
              <strong style={styles.ctaHighlight}>Jadi mumpung ada kesempatan, gas daftar aja.</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Styles
const styles = {
  mainContainer: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  adCalculator: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '40px',
    marginBottom: '40px',
    boxShadow: '0 10px 30px rgba(255, 255, 255, 1)',
    border: '1px solid rgba(255, 255, 255, 1)',
    background: 'linear-gradient(135deg, #fff9f0 0%, #ffffffff 100%)',
  },
  calculatorHeader: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  calculatorMainTitle: {
    color: '#1a237e',
    fontSize: '2.5rem',
    fontWeight: '800',
    marginBottom: '10px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  calculatorSubTitle: {
    color: '#1a237e',
    fontSize: '1.8rem',
    fontWeight: '600',
    margin: '0',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  calculatorContent: {
    padding: '0 20px',
  },
  questionBlock: {
    backgroundColor: 'rgba(255, 107, 53, 0.1)',
    padding: '25px',
    borderRadius: '12px',
    marginBottom: '25px',
    borderLeft: '4px solid #1a237e',
  },
  question: {
    color: '#1a237e',
    fontSize: '1.3rem',
    fontWeight: '600',
    marginTop: '0',
    marginBottom: '15px',
  },
  answer: {
    color: '#2a1e0f',
    fontSize: '1.1rem',
    lineHeight: '1.7',
    margin: '0',
  },
  featureBlock: {
    backgroundColor: 'rgba(74, 108, 247, 0.1)',
    padding: '25px',
    borderRadius: '12px',
    borderLeft: '4px solid #4a6cf7',
  },
  featureText: {
    color: '#1a237e',
    fontSize: '1.1rem',
    lineHeight: '1.7',
    margin: '0',
    fontWeight: '500',
  },
  bonusSection: {
    padding: '60px 20px',
    background: 'linear-gradient(135deg, #f5f9ff 0%, #e0ecff 100%)',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
  },
  bonusContainer: {
    maxWidth: '1100px',
    margin: '0 auto',
  },
  bonusCard: {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '50px',
    boxShadow: '0 15px 40px rgba(42, 63, 95, 0.08)',
    marginBottom: '50px',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid rgba(74, 108, 247, 0.15)',
  },
  bonusTitle: {
    color: '#1a237e',
    fontSize: '2rem',
    marginBottom: '40px',
    textAlign: 'center',
    fontWeight: '700',
    position: 'relative',
    paddingBottom: '20px',
  },
  bonusList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  bonusItem: {
    display: 'flex',
    gap: '20px',
    marginBottom: '30px',
    paddingBottom: '30px',
    borderBottom: '1px solid rgba(74, 108, 247, 0.1)',
    alignItems: 'flex-start',
    transition: 'all 0.3s ease',
  },
  bonusNumberContainer: {
    backgroundColor: 'rgba(74, 108, 247, 0.1)',
    borderRadius: '12px',
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  bonusNumber: {
    color: '#4a6cf7',
    fontSize: '1.3rem',
    fontWeight: '700',
  },
  bonusContent: {
    flex: 1,
  },
  bonusItemTitle: {
    color: '#1a237e',
    fontSize: '1.3rem',
    margin: '0 0 10px 0',
    fontWeight: '600',
  },
  bonusDescription: {
    color: '#4a5568',
    margin: 0,
    fontSize: '1rem',
    lineHeight: '1.7',
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '30px',
    marginBottom: '50px',
  },
  infoCard: {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '35px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
    border: '1px solid rgba(0, 0, 0, 0.03)',
    transition: 'all 0.3s ease',
  },
  infoTitle: {
    color: '#1a237e',
    fontSize: '1.4rem',
    marginBottom: '25px',
    paddingBottom: '15px',
    borderBottom: '2px solid rgba(74, 108, 247, 0.1)',
    fontWeight: '600',
  },
  infoList: {
    padding: 0,
    margin: 0,
  },
  infoListItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    marginBottom: '15px',
    color: '#4a5568',
    lineHeight: '1.6',
    fontSize: '1.05rem',
  },
  infoListIcon: {
    color: '#4a6cf7',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    marginTop: '3px',
  },
  ctaBox: {
    backgroundColor: 'rgba(74, 108, 247, 0.1)',
    borderRadius: '16px',
    padding: '40px',
    textAlign: 'center',
    border: '2px dashed rgba(74, 108, 247, 0.3)',
  },
  ctaText: {
    color: '#1a237e',
    fontSize: '1.2rem',
    lineHeight: '1.7',
    margin: 0,
    fontWeight: '500',
  },
  ctaHighlight: {
    color: '#4a6cf7',
    fontWeight: '600',
    background: 'linear-gradient(90deg, #4a6cf7 0%, #8e54e9 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
    marginTop: '10px',
  },
};

export default MarketingToolsSection;