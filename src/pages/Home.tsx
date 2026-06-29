import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Particles from '../components/Particles';
import Navbar from '../components/Navbar';
import ControlesTema from '../components/ControlesTema';
import ControlesIdioma from '../components/ControlesIdioma';
import ScrollReveal from '../components/ScrollReveal';
import Footer from '../components/Footer';
import { useTema } from '../context/TemaContext';
import { useIdioma } from '../context/IdiomaContext';

const Home = () => {
  const { colorFondo, tamañoLetra, tipoLetra, temas, tamaños, tiposLetra } = useTema();
  const { t } = useIdioma();
  const theme = temas[colorFondo];

  const appStyle: React.CSSProperties = {
    background: theme.bg,
    color: theme.text,
    fontSize: tamaños[tamañoLetra],
    fontFamily: tiposLetra[tipoLetra],
    minHeight: '100vh',
    transition: 'all 0.4s ease'
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (!navbar) return;
      if (window.scrollY > 50) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={appStyle}>
      <Particles />
      <Navbar />
      <ScrollReveal />

      <section className="banner banner-ti">
        <div className="banner-content">
          <div className="banner-icon"><i className="fas fa-shield-virus"></i></div>
          <h1>{t('home', 'title')}</h1>
          <p className="typing-text">{t('home', 'subtitle')}</p>
          <div className="banner-stats">
            {[
              { num: '500+', label: t('home', 'clientes') },
              { num: '99.9%', label: t('home', 'uptime') },
              { num: '24/7', label: t('home', 'monitoreo') }
            ].map((stat, i) => (
              <div className="stat" key={i}>
                <span className="stat-number">{stat.num}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
          <Link to="/servicios" className="btn btn-glow">
            <i className="fas fa-rocket"></i> {t('home', 'verServicios')}
          </Link>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
          <span>Scroll</span>
        </div>
      </section>

      <section id="empresa" className="empresa" style={{ background: theme.bgLight }}>
        <div className="container empresa-content">
          <div className="section-header">
            <i className="fas fa-globe" style={{ color: theme.primary }}></i>
            <h2 style={{ color: theme.primary, textShadow: `0 0 20px ${theme.primary}44` }}>{t('home', 'accedePortal')}</h2>
          </div>
          <p>{t('home', 'accedeDesc')}</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem' }}>
            <ControlesIdioma />
            <ControlesTema />
          </div>
          <Link to="/servicios" className="btn btn-secondary" style={{ marginTop: '1.5rem' }}>
            <i className="fas fa-external-link-alt"></i> {t('home', 'irPortal')}
          </Link>
        </div>
      </section>

      <section id="ceo" className="ceo-section" style={{ background: theme.bgLight }}>
        <div className="container">
          <div className="section-header">
            <i className="fas fa-crown" style={{ color: theme.primary }}></i>
            <h2 style={{ color: theme.primary }}>{t('home', 'ceoTitle')}</h2>
          </div>
          <div className="ceo-card" style={{ background: theme.bgCard, borderColor: theme.primary }}>
            <div className="ceo-photo">
              <img src={`${process.env.PUBLIC_URL}/imagenes/CEO de BlackCat web.png`} alt="Argy Quisved" />
              <div className="ceo-badge">
                <i className="fas fa-check-circle"></i>
                <span>Verificado</span>
              </div>
            </div>
            <div className="ceo-info">
              <h3 style={{ color: theme.secondary }}>Argy Quisved Agarria</h3>
              <p className="ceo-role" style={{ color: theme.accent }}>CEO & Fundadora</p>
              <div className="ceo-social">
                <Link to="/contacto" style={{ borderColor: theme.secondary, color: theme.secondary }} aria-label="Contactar"><i className="fas fa-envelope"></i></Link>
                <Link to="/servicios" style={{ borderColor: theme.secondary, color: theme.secondary }} aria-label="Servicios"><i className="fas fa-shield-alt"></i></Link>
                <Link to="/recursos" style={{ borderColor: theme.secondary, color: theme.secondary }} aria-label="Recursos"><i className="fas fa-book"></i></Link>
              </div>
              <p className="ceo-description">Con más de 12 años de experiencia en ciberseguridad y gestión tecnológica, Argy lidera el equipo de BlackCat Ciberseguridad para entregar soluciones innovadoras y seguras.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
