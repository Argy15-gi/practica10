import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTema } from '../context/TemaContext';
import { useIdioma } from '../context/IdiomaContext';
import { ConsultoriaItem } from '../types';

const Consultoria = () => {
  const { colorFondo, tamañoLetra, tipoLetra, temas, tamaños, tiposLetra } = useTema();
  const { t } = useIdioma();
  const theme = temas[colorFondo];

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const items: ConsultoriaItem[] = [
    { icon: 'fa-check-square', title: 'ISO 27001', desc: 'Implementación y auditoría de Sistemas de Gestión de Seguridad de la Información' },
    { icon: 'fa-balance-scale', title: 'GDPR / Protección de Datos', desc: 'Cumplimiento normativo en protección de datos personales' },
    { icon: 'fa-shield-virus', title: 'Pentesting', desc: 'Pruebas de penetración de redes, aplicaciones y sistemas' },
    { icon: 'fa-search', title: 'Auditoría de Código', desc: 'Revisión de seguridad en desarrollo de software' }
  ];

  return (
    <div style={{ background: theme.bg, color: theme.text, fontSize: tamaños[tamañoLetra], fontFamily: tiposLetra[tipoLetra], minHeight: '100vh' }}>
      <Navbar />
      <div style={{ paddingTop: '100px' }}>
        <section className="consultoria-section">
          <div className="container">
            <div className="section-header dark">
              <i className="fas fa-clipboard-list" style={{ color: theme.secondary }}></i>
              <h2 style={{ color: theme.secondary }}>{t('consultoria', 'title')}</h2>
              <p>{t('consultoria', 'desc')}</p>
            </div>
            <div className="consultoria-grid">
              {items.map((item, i) => (
                <div className="consultoria-item" key={i} style={{ borderColor: theme.primary }}>
                  <i className={`fas ${item.icon}`} style={{ color: theme.secondary }}></i>
                  <h3 style={{ color: theme.text }}>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Consultoria;
