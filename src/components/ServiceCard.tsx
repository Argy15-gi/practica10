import React from 'react';
import { Link } from 'react-router-dom';
import { useIdioma } from '../context/IdiomaContext';
import { Servicio } from '../types';

const ServiceCard = ({ servicio }: { servicio: Servicio }) => {
  const { icon, bg, title, desc, features, link } = servicio;
  const { t } = useIdioma();

  return (
    <div className="servicio-card">
      <div className="servicio-bg" style={{ backgroundImage: `url(${bg})` }}></div>
      <div className="servicio-content">
        <div className="servicio-icon">
          <img src={icon} alt={title} />
        </div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <ul className="servicio-features">
          {features.map((f, i) => (
            <li key={i}><i className="fas fa-check"></i> {f}</li>
          ))}
        </ul>
        <Link to={link} className="btn-servicio">{t('servicios', 'masInfo')}</Link>
      </div>
    </div>
  );
};

export default ServiceCard;
