import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "UzCoders Team",
      desc: "Men a'zo bo'lgan professional dasturchilar jamoasi. Premium SaaS yechimlar yaratuvchi nufuzli jamoa.",
      link: "#",
      tech: ["Teamwork", "Collaboration", "Premium UI"],
      color: "var(--accent)"
    },
    {
      title: "Kitob Do'koni",
      desc: "To'liq funksional kitob sotish va community platformasi. Supabase integratsiyasi bilan.",
      link: "https://bookshop-uz.vercel.app/",
      tech: ["React", "Supabase", "Express", "PostgreSQL"],
      color: "var(--accent-secondary)"
    },
    {
      title: "Premium Portfolio",
      desc: "Shoxona dizayndagi shaxsiy portfolio. Mesh gradients va glassmorphism asosida.",
      link: "#",
      tech: ["React", "CSS3", "Vite"],
      color: "#f472b6"
    }
  ];

  return (
    <section id="projects" className="container" style={{ paddingBottom: '3rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '0.8rem' }}>
          Mening <span style={{ color: 'var(--accent)' }}>Loyihalarim</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1rem' }}>
          Har bir loyiha yuqori sifat va mukammal dizayn bilan yaratilgan.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.5rem'
      }}>
        {projects.map((p, i) => (
          <div key={i} className="glass" style={{ 
            padding: '2rem', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '80px',
              height: '80px',
              background: p.color,
              filter: 'blur(40px)',
              opacity: '0.2'
            }}></div>

            <div>
              <div style={{
                width: '45px',
                height: '45px',
                borderRadius: '10px',
                background: `rgba(${p.color === 'var(--accent)' ? '14, 165, 233' : '245, 158, 11'}, 0.1)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.2rem',
                border: `1px solid ${p.color}`
              }}>
                <span style={{ color: p.color, fontSize: '1.2rem', fontWeight: 'bold' }}>{i + 1}</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', lineHeight: '1.4' }}>{p.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.2rem', minHeight: '60px', lineHeight: '1.6', fontSize: '0.95rem' }}>{p.desc}</p>
              
              <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
                {p.tech.map((t, ti) => (
                  <span key={ti} style={{
                    fontSize: '0.75rem',
                    padding: '6px 14px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '20px',
                    border: '1px solid var(--border-glass)',
                    color: 'var(--text-primary)'
                  }}>{t}</span>
                ))}
              </div>
            </div>

            <a href={p.link} target="_blank" rel="noreferrer" className="btn-glass" style={{
              textAlign: 'center',
              display: 'block',
              padding: '0.8rem',
              fontSize: '0.95rem'
            }}>
              Loyiha tafsilotlari →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
