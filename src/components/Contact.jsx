import React from 'react';

const Contact = () => {
  const contacts = [
    {
      name: "Telegram",
      value: "@Olimjon00007",
      link: "https://t.me/Olimjon00007",
      icon: "✈️",
      color: "#229ED9"
    },
    {
      name: "Instagram",
      value: "@_akromjonovich_777_",
      link: "https://www.instagram.com/_akromjonovich_777_/",
      icon: "📸",
      color: "#E1306C"
    },
    {
      name: "Telefon",
      value: "+998 93 307 14 71",
      link: "tel:+998933071471",
      icon: "📞",
      color: "#10b981"
    }
  ];

  return (
    <section id="contact" className="container" style={{ position: 'relative', paddingBottom: '4rem' }}>
      <div className="blob" style={{ bottom: '-10%', left: '50%', transform: 'translateX(-50%)', opacity: '0.1' }}></div>
      
      <div className="glass" style={{ padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '1.2rem' }}>
          Loyihangizni <span style={{ color: 'var(--accent)' }}>Muhokama qilamiz</span>
        </h2>
        <p className="text-fluid" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
          Sizda ajoyib g'oya bormi? Keling, uni birgalikda haqiqatga aylantiramiz. 
          Men bilan quyidagi platformalar orqali bog'lanishingiz mumkin.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.2rem',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {contacts.map((c, i) => (
            <a key={i} href={c.link} target="_blank" rel="noreferrer" className="glass" style={{
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textDecoration: 'none',
              background: 'rgba(255, 255, 255, 0.02)'
            }}>
              <div style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                background: `${c.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
                marginBottom: '0.8rem',
                border: `1px solid ${c.color}30`
              }}>
                {c.icon}
              </div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem', color: 'var(--text-primary)' }}>{c.name}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{c.value}</p>
              
              <div style={{ 
                marginTop: '1.2rem', 
                color: 'var(--accent)', 
                fontSize: '0.85rem', 
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                Bog'lanish <span>→</span>
              </div>
            </a>
          ))}
        </div>

        <div style={{ marginTop: '4rem' }}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>Yoki to'g'ridan-to'g'ri elektron pochta orqali yozing:</p>
          <a href="mailto:tuxtasinov.olimjon@ug.shardauniversity.uz" className="contact-email" style={{ 
            fontSize: 'clamp(0.9rem, 3.5vw, 1.2rem)', 
            fontWeight: 'bold', 
            color: 'var(--text-primary)',
            borderBottom: '2px solid var(--accent)',
            wordBreak: 'break-all',
            paddingBottom: '4px'
          }}>
            tuxtasinov.olimjon@ug.shardauniversity.uz
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
