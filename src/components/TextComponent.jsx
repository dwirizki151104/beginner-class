import React from 'react';
import '../App.css';

const TextComponent = () => {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number (remove all non-digit characters)
    const phoneNumber = '6281353025302'; 
    const message = 'hai kak saya ingin konsultasi mengenai jasa Private Mentoring yang ditawarkan di website ini.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="text-container">
      <p className="description-text">
        Kami juga menyediakan jasa Private Mentoring, dengan materi custom sesuai
        kebutuhan perusahaan Anda.
      </p>
      
      <button className="consult-button" onClick={handleWhatsAppClick}>
        Konsultasi 
      </button>
      
      <p className="closing-text">
        Besar harapan kami, setelah ikut kelas ini brand Anda semakin besar dan
        bermartabat.
      </p>
    </div>
  );
};

export default TextComponent;