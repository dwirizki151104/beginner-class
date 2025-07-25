import React from 'react';
import '../App.css'

export const TargetAudience = () => {
  // Data for the component
  const sectionData = {
    title: "Cocok buat Siapa Kelas ini ?",
    subtitle: "Temukan apakah program ini tepat untuk kebutuhan Anda",
    suitableFor: {
      title: "Cocok Untuk",
      items: [
        "Brand yang ingin Omset/Profit naik <strong>berkali lipat</strong>",
        "Brand yang ingin <strong>Scale Up</strong> ke market online",
        "Brand yang <strong>menambah channel</strong> marketing",
        "Jualan organik/offline merasa <strong>stuck</strong>",
        "<strong>Pemula</strong> yang mau terjun iklan di Meta Ads",
        "Anda yang <strong>frustasi belajar online</strong>",
        "Sudah <strong>trial eror</strong> tak kunjung berhasil"
      ]
    },
    notSuitableFor: {
      title: "Tidak Cocok Untuk",
      items: [
        "Yang main <strong>hit & run</strong>",
        "Belum punya produk",
        "Yang <strong>ngga bisa pakai Laptop</strong>",
        "Yang mau <strong>hasil instan</strong>",
        "Yang mau nya <strong>iklan sekali langsung berhasil</strong>",
        "Yang <strong>ngga mau fokus perbaikan</strong>",
        "Yang punya <strong>midset ngiklan = beban</strong>"
      ]
    }
  };

  // Styles object
  const styles = {
    section: {
      padding: '6rem 5vw',
      background: '#00adff',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      maxWidth: '100%',
      margin: '0 auto'
    },
    header: {
      textAlign: 'center',
      marginBottom: '3.5rem'
    },
    title: {
      color: '#ffffffff',
      fontSize: '2.25rem',
      marginBottom: '1rem',
      fontWeight: 700,
      lineHeight: 1.3,
      position: 'relative',
      display: 'inline-block'
    },
    titleUnderline: {
      position: 'absolute',
      bottom: '-12px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '4px',
      background: 'linear-gradient(90deg, #3b82f6, #ffffffff)',
      borderRadius: '2px'
    },
    subtitle: {
      color: '#ffffffff',
      fontSize: '1.125rem',
      maxWidth: '700px',
      margin: '0 auto'
    },
    cardsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2.5rem',
      marginBottom: '4rem'
    },
    card: {
      borderRadius: '16px',
      padding: '2.5rem',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.04)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      ':hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.08)'
      }
    },
    suitableCard: {
      background: '#f8fafc',
      border: '1px solid #e2e8f0'
    },
    notSuitableCard: {
      background: '#fff1f2',
      border: '1px solid #ffe4e6'
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1.5rem'
    },
    icon: {
      width: '48px',
      height: '48px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '1rem',
      color: 'white',
      fontSize: '1.5rem',
      fontWeight: 'bold'
    },
    suitableIcon: {
      background: 'linear-gradient(135deg, #3b82f6, #6366f1)'
    },
    notSuitableIcon: {
      background: 'linear-gradient(135deg, #ef4444, #f97316)'
    },
    cardTitle: {
      color: '#1e293b',
      fontSize: '1.5rem',
      fontWeight: 600,
      margin: 0
    },
    list: {
      listStyleType: 'none',
      padding: 0,
      margin: 0
    },
    listItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '1rem',
      paddingBottom: '1rem'
    },
    suitableListItem: {
      borderBottom: '1px solid #e2e8f0'
    },
    notSuitableListItem: {
      borderBottom: '1px solid #ffe4e6'
    },
    bullet: {
      flexShrink: 0,
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '1rem',
      fontSize: '0.75rem',
      fontWeight: 'bold',
      marginTop: '2px'
    },
    suitableBullet: {
      background: '#e0e7ff',
      color: '#3b82f6'
    },
    notSuitableBullet: {
      background: '#fee2e2',
      color: '#ef4444'
    },
    itemText: {
      fontSize: '1.0625rem',
      lineHeight: 1.6
    },
    suitableItemText: {
      color: '#334155'
    },
    notSuitableItemText: {
      color: '#475569'
    }
  };

  // List item component
  const ListItem = ({ item, index, type }) => {
    const isLastItem = index === (type === 'suitable' ? sectionData.suitableFor.items.length - 1 : sectionData.notSuitableFor.items.length - 1);
    
    return (
      <li 
        style={{
          ...styles.listItem,
          ...(type === 'suitable' ? styles.suitableListItem : styles.notSuitableListItem),
          borderBottom: isLastItem ? 'none' : undefined
        }}
      >
        <div 
          style={{
            ...styles.bullet,
            ...(type === 'suitable' ? styles.suitableBullet : styles.notSuitableBullet)
          }}
        >
          {index + 1}
        </div>
        <span 
          style={{
            ...styles.itemText,
            ...(type === 'suitable' ? styles.suitableItemText : styles.notSuitableItemText)
          }}
          dangerouslySetInnerHTML={{ __html: item }}
        />
      </li>
    );
  };

  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <h2 style={styles.title}>
          {sectionData.title}
          <span style={styles.titleUnderline}></span>
        </h2>
        <p style={styles.subtitle}>{sectionData.subtitle}</p>
      </div>

      <div style={styles.cardsContainer}>
        {/* Suitable For Card */}
        <div 
          style={{
            ...styles.card,
            ...styles.suitableCard
          }}
        >
          <div style={styles.cardHeader}>
            <div style={{ ...styles.icon, ...styles.suitableIcon }}>✓</div>
            <h3 style={styles.cardTitle}>{sectionData.suitableFor.title}</h3>
          </div>
          
          <ul style={styles.list}>
            {sectionData.suitableFor.items.map((item, index) => (
              <ListItem key={`suitable-${index}`} item={item} index={index} type="suitable" />
            ))}
          </ul>
        </div>

        {/* Not Suitable For Card */}
        <div 
          style={{
            ...styles.card,
            ...styles.notSuitableCard
          }}
        >
          <div style={styles.cardHeader}>
            <div style={{ ...styles.icon, ...styles.notSuitableIcon }}>✗</div>
            <h3 style={styles.cardTitle}>{sectionData.notSuitableFor.title}</h3>
          </div>
          
          <ul style={styles.list}>
            {sectionData.notSuitableFor.items.map((item, index) => (
              <ListItem key={`not-suitable-${index}`} item={item} index={index} type="notSuitable" />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};