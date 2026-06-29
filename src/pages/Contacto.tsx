import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { useTema } from '../context/TemaContext';
import { useIdioma } from '../context/IdiomaContext';

const Contacto = () => {
  const { colorFondo, tamañoLetra, tipoLetra, temas, tamaños, tiposLetra } = useTema();
  const { t } = useIdioma();
  const theme = temas[colorFondo];

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ background: theme.bg, color: theme.text, fontSize: tamaños[tamañoLetra], fontFamily: tiposLetra[tipoLetra], minHeight: '100vh' }}>
      <Navbar />
      <div style={{ paddingTop: '100px' }}>
        <section className="contacto-section">
          <div className="container">
            <div className="section-header">
              <i className="fas fa-envelope" style={{ color: theme.primary }}></i>
              <h2 style={{ color: theme.primary }}>{t('contacto', 'title')}</h2>
              <p>{t('contacto', 'desc')}</p>
            </div>

            <div className="contacto-layout">
              <div className="contacto-info">
                <div className="contacto-info-card">
                  <div className="contacto-detail">
                    <i className="fas fa-map-marker-alt" style={{ color: theme.secondary }}></i>
                    <div>
                      <h3>{t('contacto', 'direccion')}</h3>
                      <p>Universidad Autonoma Tomas Frias, Potosi, Bolivia</p>
                    </div>
                  </div>

                  <div className="contacto-detail">
                    <i className="fas fa-phone-alt" style={{ color: theme.secondary }}></i>
                    <div>
                      <h3>{t('contacto', 'telefono')}</h3>
                      <p>+591 7240-0000</p>
                    </div>
                  </div>

                  <div className="contacto-detail">
                    <i className="fas fa-envelope-open-text" style={{ color: theme.secondary }}></i>
                    <div>
                      <h3>{t('contacto', 'email')}</h3>
                      <p>contacto@blackcatciberseguridad.com</p>
                    </div>
                  </div>

                  <div className="contacto-detail">
                    <i className="fas fa-clock" style={{ color: theme.secondary }}></i>
                    <div>
                      <h3>{t('contacto', 'horario')}</h3>
                      <p>{t('contacto', 'horarioValor')}</p>
                    </div>
                  </div>
                </div>

                <div className="contacto-mapa">
                  <iframe
                    title="Ubicacion BlackCat en Tomas Frias"
                    src="https://www.google.com/maps?q=Universidad%20Autonoma%20Tomas%20Frias%20Potosi%20Bolivia&output=embed"
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contacto;
