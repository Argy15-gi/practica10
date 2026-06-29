import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ServiceCard from '../components/ServiceCard';
import ScrollReveal from '../components/ScrollReveal';
import Footer from '../components/Footer';
import { useTema } from '../context/TemaContext';
import { useIdioma } from '../context/IdiomaContext';
import { Servicio } from '../types';

const Servicios = () => {
  const { colorFondo, tamañoLetra, tipoLetra, temas, tamaños, tiposLetra } = useTema();
  const { t } = useIdioma();
  const theme = temas[colorFondo];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const servicios: Servicio[] = [
    { icon: `${process.env.PUBLIC_URL}/imagenes/Red Team.png`, bg: `${process.env.PUBLIC_URL}/imagenes/red team fondo.png`, title: 'Red Team', desc: t('servicios', 'redDesc'), features: ['Pentesting Avanzado', 'Ingeniería Social', 'Explotación de Vulnerabilidades'], link: '/red-team' },
    { icon: `${process.env.PUBLIC_URL}/imagenes/Blue Team.png`, bg: `${process.env.PUBLIC_URL}/imagenes/blue team fondo.png`, title: 'Blue Team', desc: t('servicios', 'blueDesc'), features: ['Monitoreo SOC', 'Respuesta a Incidentes', 'Forense Digital'], link: '/blue-team' },
    { icon: `${process.env.PUBLIC_URL}/imagenes/Purple team.png`, bg: `${process.env.PUBLIC_URL}/imagenes/purple team fondo.png`, title: 'Purple Team', desc: t('servicios', 'purpleDesc'), features: ['Evaluación Continua', 'Mejora de Defensas', 'Simulacros de Ataque'], link: '/purple-team' },
    { icon: `${process.env.PUBLIC_URL}/imagenes/TI.png`, bg: `${process.env.PUBLIC_URL}/imagenes/TI fondo.png`, title: t('servicios', 'consultoria'), desc: t('servicios', 'consultoriaDesc'), features: ['Auditoría de Seguridad', 'Cumplimiento ISO 27001', 'Gestión de Riesgos'], link: '/consultoria' }
  ];

  return (
    <div style={{ background: theme.bg, color: theme.text, fontSize: tamaños[tamañoLetra], fontFamily: tiposLetra[tipoLetra], minHeight: '100vh' }}>
      <Navbar />
      <ScrollReveal />
      <div style={{ paddingTop: '100px' }}>
        <section className="servicios">
          <div className="container">
            <div className="section-header">
              <i className="fas fa-tools" style={{ color: theme.primary }}></i>
              <h2 style={{ color: theme.primary }}>{t('servicios', 'title')}</h2>
              <p>{t('servicios', 'desc')}</p>
            </div>
            <div className="servicios-grid">
              {servicios.map((svc, i) => (<ServiceCard key={i} servicio={svc} />))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Servicios;
