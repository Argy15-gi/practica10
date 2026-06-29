import React from 'react';
import { Amenaza } from '../types';

const AmenazaCard = ({ amenaza }: { amenaza: Amenaza }) => {
  const { icon, iconClass, title, desc, items, nivelClass, img } = amenaza;

  return (
    <div className="amenaza-card">
      {img ? (
        <div className="amenaza-image-wrapper">
          <img className="amenaza-image" src={img} alt={title} />
        </div>
      ) : (
        <div className={`amenaza-icon ${iconClass}`}>
          <i className={`fas ${icon}`}></i>
        </div>
      )}
      <h3>{title}</h3>
      <p>{desc}</p>
      <ul>
        {items.map((item, i) => (<li key={i}>{item}</li>))}
      </ul>
      <div className="nivel-riesgo">
        <span>Nivel de Riesgo:</span>
        <div className="riesgo-bar">
          <div className={`riesgo-fill ${nivelClass}`}></div>
        </div>
      </div>
    </div>
  );
};

export default AmenazaCard;
