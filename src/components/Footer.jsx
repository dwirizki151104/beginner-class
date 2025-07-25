import React from 'react';

export const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        background: 'linear-gradient(90deg, #1E90FF 0%, #0076FF 100%)',
        color: '#fff',
        padding: '2.5rem 0 1.2rem 0',
        textAlign: 'center',
        marginTop: '40px',
        boxShadow: '0 -2px 16px rgba(30,144,255,0.08)',
      }}
    >
      <div style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: 2, marginBottom: 4 }}>
        PT SOLUSI KREATIF BERKAH
      </div>
      <div style={{ fontSize: '1.05rem', opacity: 0.88, marginBottom: 18 }}>
        YOGYAKARTA, INDONESIA
      </div>
      <div
        className="footer-social"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 22,
          marginBottom: 18,
          flexWrap: 'wrap',
        }}
      >
        <a href="https://instagram.com/creativy.official" title="Instagram" target="_blank" rel="noopener noreferrer" 
          style={{ 
            color: '#fff', 
            background: 'rgba(255,255,255,0.2)', 
            borderRadius: '50%', 
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.77.131 4.665.385 3.678 1.372c-.987.987-1.241 2.092-1.3 3.374C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.613.059 1.282.313 2.387 1.3 3.374.987.987 2.092 1.241 3.374 1.3C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.282-.059 2.387-.313 3.374-1.3.987-.987 1.241-2.092 1.3-3.374.059-1.281.072-1.69.072-7.613 0-5.923-.013-6.332-.072-7.613-.059-1.282-.313-2.387-1.3-3.374-.987-.987-2.092-1.241-3.374-1.3C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"></path>
          </svg>
        </a>
        <a href="https://wa.me/6281353025302" title="WhatsApp" target="_blank" rel="noopener noreferrer" 
          style={{ 
            color: '#fff', 
            background: 'rgba(255,255,255,0.2)', 
            borderRadius: '50%', 
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163A11.867 11.867 0 0 1 0 11.945C0 5.355 5.373 0 12 0c3.181 0 6.167 1.24 8.413 3.488A11.822 11.822 0 0 1 24 12c0 6.627-5.373 12-12 12a11.9 11.9 0 0 1-5.688-1.444L.057 24zm6.597-3.807c1.735.995 3.276 1.591 5.346 1.591 5.448 0 9.877-4.429 9.877-9.884 0-2.64-1.033-5.122-2.909-6.988A9.825 9.825 0 0 0 12 2.118c-5.447 0-9.877 4.429-9.877 9.882 0 2.225.729 4.293 2.105 6.032l-.998 3.637 3.424-.978zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.03-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.366.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413z"></path>
          </svg>
        </a>
        <a href="https://github.com" title="GitHub" target="_blank" rel="noopener noreferrer" 
          style={{ 
            color: '#fff', 
            background: 'rgba(255,255,255,0.2)', 
            borderRadius: '50%', 
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
          </svg>
        </a>
        <a href="https://tiktok.com/@creativy.id" title="TikTok" target="_blank" rel="noopener noreferrer" 
          style={{ 
            color: '#fff', 
            background: 'rgba(255,255,255,0.2)', 
            borderRadius: '50%', 
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
            <path d="M232 80a8 8 0 0 1-8-8V64a8 8 0 0 0-8-8h-24a8 8 0 0 0-8 8v104a40 40 0 1 1-16-32V64a24 24 0 0 1 24-24h24a24 24 0 0 1 24 24v8a8 8 0 0 1-8 8Zm-56 88a24 24 0 1 0-24 24 24 24 0 0 0 24-24Zm56-88h-24V64h24Z"/>
          </svg>
        </a>
        <a href="https://youtube.com/@CreativyId" title="YouTube" target="_blank" rel="noopener noreferrer" 
          style={{ 
            color: '#fff', 
            background: 'rgba(255,255,255,0.2)', 
            borderRadius: '50%', 
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a2.993 2.993 0 0 0-2.107-2.117C19.163 3.5 12 3.5 12 3.5s-7.163 0-9.391.569A2.993 2.993 0 0 0 .502 6.186C0 8.413 0 12 0 12s0 3.587.502 5.814a2.993 2.993 0 0 0 2.107 2.117C4.837 20.5 12 20.5 12 20.5s7.163 0 9.391-.569a2.993 2.993 0 0 0 2.107-2.117C24 15.587 24 12 24 12s0-3.587-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
          </svg>
        </a>
        <a href="https://facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer" 
          style={{ 
            color: '#fff', 
            background: 'rgba(255,255,255,0.2)', 
            borderRadius: '50%', 
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692V11.01h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"></path>
          </svg>
        </a>
      </div>
      <div style={{ fontSize: '0.95rem', opacity: 0.8, marginTop: 8 }}>
        &copy; {new Date().getFullYear()} Beginner Class. All rights reserved.
      </div>
    </footer>
  );
};