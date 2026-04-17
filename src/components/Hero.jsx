import React, { useState, useRef } from 'react';

const Hero = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -15; // Max 15 deg tilt
    const rotateY = ((x - centerX) / centerX) * 15;
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="home" className="container" style={{
      minHeight: '85vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
      paddingTop: '120px',
      paddingBottom: '40px'
    }}>
      <div className="blob" style={{ top: '-10%', left: '-10%', background: 'var(--accent)' }}></div>
      <div className="blob" style={{ bottom: '10%', right: '-10%', background: 'var(--accent-secondary)' }}></div>
      
      <div className="fade-in" style={{
        position: 'relative',
        marginBottom: '2rem',
        perspective: '1000px'
      }}>
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="float" 
          style={{
            width: '240px',
            height: '240px',
            borderRadius: '50%',
            overflow: 'hidden',
            padding: '6px',
            background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
            boxShadow: `0 20px 50px rgba(0,0,0,0.3), 0 0 20px ${tilt.x !== 0 ? 'var(--accent-glow)' : 'transparent'}`,
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.x !== 0 ? 1.05 : 1})`,
            transition: 'transform 0.1s ease-out, box-shadow 0.3s ease',
            cursor: 'pointer'
          }}
        >
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
            {/* Olimjon's New Photo */}
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: 'url("/img/Screenshot%202026-04-17%20103457.png") center/cover no-repeat',
              // Smooth idle rotation or zoom could happen here if needed
            }}>
            </div>
          </div>
        </div>
        
        <div className="glow" style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          background: '#10b981',
          padding: '4px 12px',
          borderRadius: '20px',
          fontSize: '0.75rem',
          color: 'white',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          border: '2px solid var(--bg-dark)',
          zIndex: 10
        }}>
          <span style={{ width: '6px', height: '6px', background: '#fff', borderRadius: '50%' }}></span>
          Online
        </div>
      </div>
      
      <div className="fade-in" style={{ animationDelay: '0.2s' }}>
        <h1 style={{ 
          fontSize: 'clamp(2.2rem, 6vw, 3.2rem)', 
          marginBottom: '1rem', 
          lineHeight: '1.3',
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
          fontSize: '1.1rem', 
          color: 'var(--text-secondary)', 
          maxWidth: '600px', 
          margin: '0 auto 2.5rem auto',
          lineHeight: '1.7'
        }}>
          Professional <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Web Developer</span>. 
          Zamonaviy texnologiyalar bilan premium raqamli mahsulotlar yarataman.
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
