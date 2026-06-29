import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import TerminalWindow from '../components/TerminalWindow';
import AmenazaCard from '../components/AmenazaCard';
import Footer from '../components/Footer';
import { useTema } from '../context/TemaContext';
import { useIdioma } from '../context/IdiomaContext';
import { Amenaza } from '../types';

const Recursos = () => {
  const { colorFondo, tamañoLetra, tipoLetra, temas, tamaños, tiposLetra } = useTema();
  const { t } = useIdioma();
  const theme = temas[colorFondo];

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const amenazas: Amenaza[] = [
    { icon: 'fa-skull-crossbones', iconClass: 'icon-danger', title: 'Malware', desc: 'Software malicioso diseñado para infiltrarse o dañar sistemas sin consentimiento.', items: ['Ransomware que cifra datos críticos', 'Spyware que roba información sensible', 'Troyanos que crean puertas traseras'], nivelClass: 'critico', img: `${process.env.PUBLIC_URL}/imagenes/Malware.png` },
    { icon: 'fa-fish', iconClass: 'icon-warning', title: 'Phishing', desc: 'Técnica de ingeniería social para engañar usuarios y obtener información confidencial.', items: ['Correos falsos de entidades bancarias', 'Sitios clonados de servicios populares', 'Mensajes SMS fraudulentos (Smishing)'], nivelClass: 'alto', img: `${process.env.PUBLIC_URL}/imagenes/phishing.webp` },
    { icon: 'fa-user-secret', iconClass: 'icon-info', title: 'Ingeniería Social', desc: 'Manipulación psicológica para que las personas revelen información.', items: ['Ataques de pretexting y suplantación', 'Baiting con dispositivos infectados', 'Tailgating en acceso físico'], nivelClass: 'alto', img: `${process.env.PUBLIC_URL}/imagenes/Ingenieria social.png` },
    { icon: 'fa-exclamation-triangle', iconClass: 'icon-danger', title: 'Zero-Day', desc: 'Vulnerabilidades desconocidas que los atacantes explotan antes de que exista un parche.', items: ['Exploits no documentados', 'Ataques dirigidos a infraestructura crítica', 'Vulnerabilidades en IoT'], nivelClass: 'critico', img: `${process.env.PUBLIC_URL}/imagenes/Zero day.png` },
    { icon: 'fa-cloud-upload-alt', iconClass: 'icon-warning', title: 'DDoS', desc: 'Ataques de denegación de servicio distribuido que saturan los recursos del servidor.', items: ['Ataques volumétricos de amplificación', 'Ataques a capa de aplicación', 'Botnets masivos'], nivelClass: 'alto', img: `${process.env.PUBLIC_URL}/imagenes/DDoS.png` },
    { icon: 'fa-database', iconClass: 'icon-info', title: 'Fuga de Datos', desc: 'Exposición no autorizada de información sensible de la organización.', items: ['Configuración incorrecta en la nube', 'Empleados con permisos excesivos', 'APIs mal aseguradas'], nivelClass: 'medio', img: `${process.env.PUBLIC_URL}/imagenes/Fuga de datos.png` }
  ];

  return (
    <div style={{ background: theme.bg, color: theme.text, fontSize: tamaños[tamañoLetra], fontFamily: tiposLetra[tipoLetra], minHeight: '100vh' }}>
      <Navbar />
      <div style={{ paddingTop: '100px' }}>
        <section className="recursos">
          <div className="container">
            <div className="section-header">
              <i className="fas fa-graduation-cap" style={{ color: theme.primary }}></i>
              <h2 style={{ color: theme.primary }}>{t('recursos', 'title')}</h2>
              <p>{t('recursos', 'desc')}</p>
            </div>
            <TerminalWindow />
            <div className="amenazas-grid">
              {amenazas.map((amenaza, i) => (<AmenazaCard key={i} amenaza={amenaza} />))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Recursos;
