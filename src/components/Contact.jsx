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
    <section id="contact" className="container" style={{ position: 'relative' }}>
      <div className="blob" style={{ bottom: '-10%', left: '50%', transform: 'translateX(-50%)', opacity: '0.1' }}></div>
      
      <div className="glass" style={{ padding: '3.5rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '1.2rem' }}>
          Loyihangizni <span style={{ color: 'var(--accent)' }}>Muhokama qilamiz</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1rem' }}>
          Sizda ajoyib g'oya bormi? Keling, uni birgalikda haqiqatga aylantiramiz. 
          Men bilan quyidagi platformalar orqali bog'lanishingiz mumkin.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {contacts.map((c, i) => (
            <a key={i} href={c.link} target="_blank" rel="noreferrer" className="glass" style={{
              padding: '1.8rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textDecoration: 'none',
              background: 'rgba(255, 255, 255, 0.02)'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: `${c.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.6rem',
                marginBottom: '1rem',
                border: `1px solid ${c.color}30`
              }}>
                {c.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>{c.name}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{c.value}</p>
              
              <div style={{ 
                marginTop: '1.5rem', 
                color: 'var(--accent)', 
                fontSize: '0.9rem', 
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                Bog'lanish <span style={{ transition: 'transform 0.3s ease' }}>→</span>
              </div>
            </a>
          ))}
        </div>

        <div style={{ marginTop: '5rem' }}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Yoki to'g'ridan-to'g'ri elektron pochta orqali yozing:</p>
          <a href="mailto:tuxtasinov.olimjon@ug.shardauniversity.uz" style={{ 
            fontSize: '1.2rem', 
            fontWeight: 'bold', 
            color: 'var(--text-primary)',
            borderBottom: '2px solid var(--accent)',
            wordBreak: 'break-all'
          }}>
            tuxtasinov.olimjon@ug.shardauniversity.uz
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
