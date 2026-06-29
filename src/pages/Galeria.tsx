import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import GalleryItem from '../components/GalleryItem';
import Footer from '../components/Footer';
import { useTema } from '../context/TemaContext';
import { useIdioma } from '../context/IdiomaContext';
import { GaleriaItem } from '../types';

const Galeria = () => {
  const { colorFondo, tamañoLetra, tipoLetra, temas, tamaños, tiposLetra } = useTema();
  const { t } = useIdioma();
  const theme = temas[colorFondo];

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const items: GaleriaItem[] = [
    { img: `${process.env.PUBLIC_URL}/imagenes/blue team fondo.png`, title: 'Centro de Operaciones', category: t('galeria', 'categoria1') },
    { img: `${process.env.PUBLIC_URL}/imagenes/wazuh.png`, title: 'Monitoreo de Red', category: t('galeria', 'categoria1') },
    { img: `${process.env.PUBLIC_URL}/imagenes/CEO de BlackCat web.png`, title: 'Nuestro Equipo', category: t('galeria', 'categoria2') },
    { img: `${process.env.PUBLIC_URL}/imagenes/reporting red team.png`, title: 'Evento de Ciberseguridad', category: t('galeria', 'categoria3') },
    { img: `${process.env.PUBLIC_URL}/imagenes/TI fondo.png`, title: 'Conferencia Tecnica', category: t('galeria', 'categoria3') },
    { img: `${process.env.PUBLIC_URL}/imagenes/reconocimiento red team.png`, title: 'Taller Practico', category: t('galeria', 'categoria3') },
    { img: `${process.env.PUBLIC_URL}/imagenes/Purple team.png`, title: 'Networking', category: t('galeria', 'categoria3') },
    { img: `${process.env.PUBLIC_URL}/imagenes/empresas nacionales.png`, title: 'Infraestructura', category: t('galeria', 'categoria2') }
  ];

  return (
    <div style={{ background: theme.bg, color: theme.text, fontSize: tamaños[tamañoLetra], fontFamily: tiposLetra[tipoLetra], minHeight: '100vh' }}>
      <Navbar />
      <div style={{ paddingTop: '100px' }}>
        <section className="galeria-section">
          <div className="container">
            <div className="section-header">
              <i className="fas fa-images" style={{ color: theme.primary }}></i>
              <h2 style={{ color: theme.primary }}>{t('galeria', 'title')}</h2>
              <p>{t('galeria', 'desc')}</p>
            </div>
            <div className="galeria-filters">
              <button className="filter-btn active" data-filter="all">{t('galeria', 'todos')}</button>
              <button className="filter-btn" data-filter="categoria1">{t('galeria', 'categoria1')}</button>
              <button className="filter-btn" data-filter="categoria2">{t('galeria', 'categoria2')}</button>
              <button className="filter-btn" data-filter="categoria3">{t('galeria', 'categoria3')}</button>
            </div>
            <div className="galeria-grid">
              {items.map((item, i) => (<GalleryItem key={i} item={item} />))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Galeria;
