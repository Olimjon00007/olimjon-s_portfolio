import React from 'react';

const About = () => {
  const skills = [
    { name: "Frontend", level: "95%", items: ["React", "Next.js", "Tailwind CSS"] },
    { name: "Backend", level: "85%", items: ["Node.js", "Express", "Supabase"] },
    { name: "Database", level: "80%", items: ["PostgreSQL", "MongoDB", "SQLite"] },
  ];

  return (
    <section id="about" className="container">
      <div className="glass" style={{ padding: '3rem 2rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          background: 'var(--accent)',
          filter: 'blur(100px)',
          opacity: '0.1'
        }}></div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '3rem',
          alignItems: 'center'
        }}>
          <div>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1.2rem', lineHeight: '1.2' }}>
              Men <span style={{ color: 'var(--accent)' }}>haqimda</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              Men Olimjon To'xtasinov, 18 yoshli g'ayratli va maqsadli Web Developer. 
              UzCoders jamoasining faol a'zosi sifatida men premium SaaS platformalar yaratishda ishtirok etaman.
              9 oylik professional tajribam davomida men turli xil murakkablikdagi loyihalarni amalga oshirdim. 
              Mening maqsadim - nafaqat chiroyli ko'rinishga ega, balki foydalanuvchilar uchun qulay va 
              ishonchli raqamli yechimlar yaratishdir.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1.5rem' }}>
              <div className="glass" style={{ padding: '1.5rem', textAlign: 'center', background: 'rgba(255,255,255,0.03)' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)' }}>9+</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Oylik Tajriba</div>
              </div>
              <div className="glass" style={{ padding: '1.5rem', textAlign: 'center', background: 'rgba(255,255,255,0.03)' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-secondary)' }}>10+</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Loyihalar</div>
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Texnologiyalarim</h3>
            {skills.map((skill, index) => (
              <div key={index}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontWeight: '600' }}>{skill.name}</span>
                  <span style={{ color: 'var(--accent)' }}>{skill.level}</span>
                </div>
                <div style={{ 
                  height: '8px', 
                  width: '100%', 
                  background: 'rgba(255,255,255,0.05)', 
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <div style={{ 
                    height: '100%', 
                    width: skill.level, 
                    background: `linear-gradient(to right, var(--accent), var(--accent-secondary))`,
                    borderRadius: '4px'
                  }}></div>
                </div>
                <div style={{ display: 'flex', gap: '10px', marginTop: '10px', flexWrap: 'wrap' }}>
                  {skill.items.map((item, i) => (
                    <span key={i} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>• {item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
