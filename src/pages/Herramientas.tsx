import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import MatrixBackground from '../components/MatrixBackground';
import Footer from '../components/Footer';
import { useTema } from '../context/TemaContext';
import { useIdioma } from '../context/IdiomaContext';
import { Herramienta } from '../types';

const Herramientas = () => {
  const { colorFondo, tamañoLetra, tipoLetra, temas, tamaños, tiposLetra } = useTema();
  const { t } = useIdioma();
  const theme = temas[colorFondo];

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const herramientas: Herramienta[] = [
    { icon: 'fa-code', img: '/imagenes/metasploit.png', name: 'Metasploit', desc: 'Framework para pruebas de penetración y explotación de vulnerabilidades.', color: '#3178C6' },
    { icon: 'fa-terminal', img: '/imagenes/nmap.png', name: 'Nmap', desc: 'Escáner de puertos y descubrimiento de redes.', color: '#00FF00' },
    { icon: 'fa-eye', img: '/imagenes/wireshark.png', name: 'Wireshark', desc: 'Analizador de protocolos de red para tráfico en tiempo real.', color: '#009639' },
    { icon: 'fa-shield-alt', img: '/imagenes/burp suit.png', name: 'Burp Suite', desc: 'Escáner de seguridad para aplicaciones web.', color: '#FF6600' },
    { icon: 'fa-skull', img: '/imagenes/john the ripper.png', name: 'John the Ripper', desc: 'Herramienta de cracking de contraseñas.', color: '#CC0000' },
    { icon: 'fa-bolt', img: '/imagenes/hydra.png', name: 'Hydra', desc: 'Herramienta de autenticación de fuerza bruta.', color: '#FFD700' },
    { icon: 'fa-cloud', img: '/imagenes/wazuh.png', name: 'Wazuh', desc: 'Plataforma de monitoreo de seguridad (SIEM/XDR).', color: '#00BFFF' },
    { icon: 'fa-laptop-code', img: '/imagenes/owasp zap.png', name: 'OWASP ZAP', desc: 'Escáner de seguridad de aplicaciones web.', color: '#000000' }
  ];

  return (
    <div style={{ background: theme.bg, color: theme.text, fontSize: tamaños[tamañoLetra], fontFamily: tiposLetra[tipoLetra], minHeight: '100vh', position: 'relative' }}>
      <MatrixBackground />
      <Navbar />
      <div style={{ paddingTop: '100px', position: 'relative', zIndex: 1 }}>
        <section className="herramientas-section">
          <div className="container">
            <div className="section-header">
              <i className="fas fa-wrench" style={{ color: theme.primary }}></i>
              <h2 style={{ color: theme.primary }}>{t('herramientas', 'title')}</h2>
              <p>{t('herramientas', 'desc')}</p>
            </div>
            <div className="herramientas-grid">
              {herramientas.map((herramienta, i) => (
                <div className="herramienta-card" key={i} style={{ borderColor: herramienta.color }}>
                  <div className="herramienta-icon" style={{ background: `${herramienta.color}22`, color: herramienta.color }}>
                    {herramienta.img ? (
                      <img src={herramienta.img} alt={herramienta.name} />
                    ) : (
                      <i className={`fas ${herramienta.icon}`}></i>
                    )}
                  </div>
                  <h3>{herramienta.name}</h3>
                  <p>{herramienta.desc}</p>
                  <div className="herramienta-stats">
                    <span className="downloads">★ Herramienta Profesional</span>
                  </div>
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

export default Herramientas;
