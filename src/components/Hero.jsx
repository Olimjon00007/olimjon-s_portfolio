import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="container" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
      paddingTop: '100px'
    }}>
      <div className="blob" style={{ top: '-10%', left: '-10%', background: 'var(--accent)' }}></div>
      <div className="blob" style={{ bottom: '10%', right: '-10%', background: 'var(--accent-secondary)' }}></div>
      
      <div className="fade-in" style={{
        position: 'relative',
        marginBottom: '3rem'
      }}>
        <div className="float" style={{
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          overflow: 'hidden',
          padding: '6px',
          background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
          boxShadow: '0 0 40px rgba(220, 39, 67, 0.3)'
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: '#0a0a0a',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            {/* Olimjon's Photo */}
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: 'url("/assets/Me.png") center/cover no-repeat',
            }}>
            </div>
          </div>
        </div>
        
        <div className="glow" style={{
          position: 'absolute',
          bottom: '15px',
          right: '15px',
          background: '#10b981',
          padding: '6px 16px',
          borderRadius: '20px',
          fontSize: '0.85rem',
          color: 'white',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          border: '2px solid var(--bg-dark)'
        }}>
          <span style={{ width: '8px', height: '8px', background: '#fff', borderRadius: '50%' }}></span>
          Online
        </div>
      </div>
      
      <div className="fade-in" style={{ animationDelay: '0.2s' }}>
        <h1 style={{ 
          fontSize: 'clamp(3rem, 8vw, 4.5rem)', 
          marginBottom: '1.5rem', 
          lineHeight: '1.1',
          fontWeight: '700'
        }}>
          Salom, men <span style={{ 
            background: 'linear-gradient(to right, var(--accent), var(--accent-secondary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Olimjon</span><br />
          To'xtasinov
        </h1>
        
        <p style={{ 
          fontSize: '1.25rem', 
          color: 'var(--text-secondary)', 
          maxWidth: '700px', 
          margin: '0 auto 3rem auto',
          lineHeight: '1.8'
        }}>
          Professional <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Web Developer</span>. 
          Zamonaviy texnologiyalar yordamida yuqori sifatli va premium raqamli mahsulotlar yarataman.
        </p>
        
        <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn-primary">
            <span>Loyihalarim</span>
            <span style={{ fontSize: '1.2rem' }}>→</span>
          </a>
          <a href="#contact" className="btn-glass">
            Bog'lanish
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
