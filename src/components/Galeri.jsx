import React, { useState } from 'react';

export const Galeri = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Enhanced Styles object
  const styles = {
    section: {
      padding: '8rem 5vw',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #f0f0f0 100%)',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      maxWidth: '100%',
      margin: '0 auto',
      position: 'relative',
      overflow: 'hidden'
    },
    header: {
      textAlign: 'center',
      marginBottom: '4rem',
      position: 'relative'
    },
    title: {
      color: '#2c3e50',
      fontSize: 'clamp(2rem, 5vw, 3rem)',
      marginBottom: '1.5rem',
      fontWeight: 800,
      lineHeight: 1.2,
      position: 'relative',
      display: 'inline-block',
      letterSpacing: '-0.5px'
    },
    titleUnderline: {
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '5px',
      background: 'linear-gradient(90deg, #00adff, #0088cc)',
      borderRadius: '3px'
    },
    subtitle: {
      color: '#7f8c8d',
      fontSize: '1.1rem',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: '1.6'
    },
    galleryContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '30px',
      padding: '20px',
      maxWidth: '1400px',
      margin: '0 auto'
    },
    galleryItem: {
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      aspectRatio: '1 / 1',
      position: 'relative',
      cursor: 'pointer',
      transform: 'translateY(0)',
      '&:hover': {
        transform: 'translateY(-5px) scale(1.02)',
        boxShadow: '0 15px 35px rgba(0,0,0,0.12)'
      }
    },
    galleryImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transition: 'transform 0.5s ease'
    },
    imageOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 60%)',
      opacity: 0,
      transition: 'opacity 0.3s ease, background 0.3s ease',
      display: 'flex',
      alignItems: 'flex-end',
      padding: '25px',
      color: 'white',
      '&:hover': {
        opacity: 1,
        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)'
      }
    },
    imageCaption: {
      fontSize: '1.3rem',
      fontWeight: 600,
      marginBottom: '5px',
      transform: 'translateY(20px)',
      transition: 'transform 0.3s ease',
      opacity: 0,
      transitionDelay: '0.1s',
      textShadow: '0 2px 5px rgba(0,0,0,0.3)'
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.95)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      opacity: 0,
      visibility: 'hidden',
      transition: 'all 0.3s ease-out',
      '&.active': {
        opacity: 1,
        visibility: 'visible'
      }
    },
    modalContent: {
      maxWidth: '90%',
      maxHeight: '90%',
      position: 'relative',
      animation: 'zoomIn 0.3s ease'
    },
    modalImage: {
      maxWidth: '100%',
      maxHeight: '90vh',
      borderRadius: '12px',
      boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
      border: '2px solid rgba(255,255,255,0.1)'
    },
    closeButton: {
      position: 'absolute',
      top: '-50px',
      right: '0',
      background: 'rgba(255,255,255,0.1)',
      border: 'none',
      color: 'white',
      fontSize: '2.5rem',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      '&:hover': {
        background: 'rgba(255,255,255,0.2)',
        color: '#00adff',
        transform: 'rotate(90deg)'
      }
    },
    modalCaption: {
      color: 'white', 
      textAlign: 'center', 
      marginTop: '20px',
      fontSize: '1.4rem',
      fontWeight: 500,
      padding: '0 20px'
    },
    decorativeElement: {
      position: 'absolute',
      width: '300px',
      height: '300px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(0,173,255,0.1) 0%, rgba(0,173,255,0) 70%)',
      top: '-100px',
      right: '-100px',
      zIndex: 0
    },
    decorativeElement2: {
      position: 'absolute',
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(0,173,255,0.1) 0%, rgba(0,173,255,0) 70%)',
      bottom: '-50px',
      left: '-50px',
      zIndex: 0
    }
  };

  // Example images
  const galleryImages = [
    { src: '/images/1.jpg', caption: 'Sesi Belajar Interaktif' },
    { src: '/images/2.jpg', caption: 'Workshop Praktek Langsung' },
    { src: '/images/3.jpg', caption: 'Diskusi Kelompok Intensif' },
    { src: '/images/4.jpg', caption: 'Presentasi Projek Final' },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section style={styles.section} id="galeri">
      <div style={styles.decorativeElement}></div>
      <div style={styles.decorativeElement2}></div>
      
      <div style={styles.header}>
        <h2 style={styles.title}>
          Galeri Kami
          <span style={styles.titleUnderline}></span>
        </h2>
        <p style={styles.subtitle}>
          Dokumentasi momen berharga dari berbagai kegiatan pembelajaran dan workshop yang telah kami selenggarakan.
        </p>
      </div>
      
      <div style={styles.galleryContainer}>
        {galleryImages.map((image, index) => (
          <div 
            key={index} 
            style={{
              ...styles.galleryItem,
              transform: hoveredIndex === index ? 'translateY(-5px) scale(1.02)' : 'translateY(0)'
            }}
            onClick={() => openModal(image)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img 
              src={image.src} 
              alt={`Galeri foto ${index + 1}`} 
              style={styles.galleryImage}
              loading="lazy"
            />
            <div style={{
              ...styles.imageOverlay,
              opacity: hoveredIndex === index ? 1 : 0
            }}>
              <div style={{
                ...styles.imageCaption,
                transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(20px)',
                opacity: hoveredIndex === index ? 1 : 0
              }}>
                {image.caption}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for enlarged image */}
      <div 
        style={{
          ...styles.modal,
          ...(selectedImage ? { opacity: 1, visibility: 'visible' } : {})
        }}
        onClick={closeModal}
      >
        <div 
          style={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            style={styles.closeButton}
            onClick={closeModal}
            aria-label="Tutup modal"
          >
            &times;
          </button>
          <img 
            src={selectedImage?.src} 
            alt={selectedImage?.caption} 
            style={styles.modalImage}
          />
          {selectedImage && (
            <div style={styles.modalCaption}>
              {selectedImage.caption}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}