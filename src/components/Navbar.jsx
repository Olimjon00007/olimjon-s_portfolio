import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Asosiy", href: "#home" },
    { name: "Men haqimda", href: "#about" },
    { name: "Loyihalar", href: "#projects" },
    { name: "Aloqa", href: "#contact" },
  ];

  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: scrolled ? '0' : '1.5rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: scrolled ? '100%' : '90%',
      maxWidth: scrolled ? '100%' : '1100px',
      padding: scrolled ? '1rem 3rem' : '1.2rem 2.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000,
      borderRadius: scrolled ? '0' : '24px',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      borderTop: scrolled ? 'none' : '1px solid var(--border-glass)',
      borderLeft: scrolled ? 'none' : '1px solid var(--border-glass)',
      borderRight: scrolled ? 'none' : '1px solid var(--border-glass)',
    }}>
      <div style={{ 
        fontSize: '1.6rem', 
        fontWeight: '800', 
        color: 'var(--accent)',
        letterSpacing: '-0.5px',
        cursor: 'pointer'
      }}>
        OLIMJON<span style={{ color: 'var(--text-primary)' }}>.DEV</span>
      </div>

      <ul style={{ display: 'flex', gap: '2.5rem' }}>
        {navLinks.map((link, i) => (
          <li key={i}>
            <a href={link.href} style={{ 
              fontSize: '0.95rem', 
              fontWeight: '500', 
              color: 'var(--text-secondary)',
              position: 'relative',
              padding: '5px 0'
            }}
            onMouseOver={(e) => e.target.style.color = 'var(--text-primary)'}
            onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <a href="#contact" className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
          Hamkorlik
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
