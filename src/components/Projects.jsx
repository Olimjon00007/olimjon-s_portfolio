import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import uzcodersImg from '../assets/uzcoders.png';
import bookshopImg from '../assets/bookshop.png';

const Projects = () => {
  const originalProjects = [
    {
      title: "UzCoders Team",
      subtitle: "Jamoaviy Platforma",
      desc: "Men a'zo bo'lgan professional dasturchilar jamoasi uchun SaaS yechimi. Premium UI va murakkab funksional.",
      link: "#",
      image: uzcodersImg,
      tech: ["React", "Teamwork", "SaaS"],
      color: "var(--accent)"
    },
    {
      title: "Premium Portfolio",
      subtitle: "Shaxsiy Brend",
      desc: "Shoxona dizayndagi shaxsiy portfolio. Mesh gradients va zamonaviy glassmorphism uslubida yaratilgan.",
      link: "#",
      image: "/img/image.png",
      tech: ["Vite", "CSS3", "3D Effects"],
      color: "#f472b6"
    },
    {
      title: "Kitob Do'koni",
      subtitle: "E-Commerce Platformasi",
      desc: "To'liq funksional kitob sotish va jamoat platformasi. Supabase integratsiyasi va Node.js backend.",
      link: "https://bookshop-uz.vercel.app/",
      image: bookshopImg,
      tech: ["Supabase", "Node.js", "Express"],
      color: "var(--accent-secondary)"
    }
  ];

  // Double projects to ensure seamless loop with few items
  const projects = [...originalProjects, ...originalProjects];

  return (
    <section id="projects" className="container" style={{ paddingBottom: '4rem', overflow: 'hidden' }}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '3.5rem' }}
      >
        <h2 style={{ marginBottom: '1rem' }}>
          Mening <span style={{ color: 'var(--accent)' }}>Loyihalarim</span>
        </h2>
      </motion.div>

      <div style={{ width: '100%', padding: '1rem 0' }}>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          speed={2000} // Slower transition (2 seconds)
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 4500, // Stay on each slide longer (4.5 seconds)
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: true // Rotate from left to right
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
          className="projects-swiper"
          style={{ padding: '3rem 0' }}
        >
          {projects.map((p, i) => (
            <SwiperSlide key={i} className="project-swiper-slide" style={{ height: 'auto' }}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass project-card-3d" 
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  border: `1px solid ${p.color}20`
                }}
              >
                {/* Project Image */}
                <div style={{
                  width: '100%',
                  height: '185px',
                  backgroundImage: `url(${p.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderBottom: `1px solid var(--border-glass)`
                }} />

                {/* Content */}
                <div style={{ padding: '1.5rem' }}>
                  <div style={{
                    fontSize: '0.75rem',
                    color: p.color,
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem',
                    letterSpacing: '1px'
                  }}>
                    {p.subtitle}
                  </div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.8rem', color: 'var(--text-primary)' }}>
                    {p.title}
                  </h3>
                  <p className="text-fluid" style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.5',
                    marginBottom: '1.2rem',
                    minHeight: '4rem'
                  }}>
                    {p.desc}
                  </p>
                  
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    {p.tech.map((t, ti) => (
                      <span key={ti} style={{
                        fontSize: '0.65rem',
                        padding: '3px 8px',
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: '4px',
                        border: '1px solid rgba(255,255,255,0.1)'
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <a href={p.link} target="_blank" rel="noreferrer" className="btn-primary" style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '0.6rem',
                    fontSize: '0.85rem',
                    background: p.color,
                    borderRadius: '8px'
                  }}>
                    Loyiha tafsilotlari →
                  </a>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
