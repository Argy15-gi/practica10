import React from 'react';
import { Link } from 'react-router-dom';
import { useIdioma } from '../context/IdiomaContext';

const Footer = () => {
  const { t } = useIdioma();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <i className="fas fa-shield-alt"></i>
            <span>BlackCat Cibersecurity</span>
          </div>
          <div className="footer-links">
            <Link to="/">{t('nav', 'inicio')}</Link>
            <Link to="/servicios">{t('nav', 'servicios')}</Link>
            <Link to="/contacto">{t('nav', 'contacto')}</Link>
            <Link to="/tienda">{t('nav', 'tienda')}</Link>
          </div>
        </div>
        <p className="footer-copy">&copy; 2026 BlackCat Ciberseguridad. {t('footer', 'copyright')}</p>
        <p className="footer-security">
          <i className="fas fa-lock"></i> {t('footer', 'conexionSegura')} |
          <i className="fas fa-shield-alt"></i> {t('footer', 'protegido')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
