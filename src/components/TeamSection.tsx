import React from 'react';
import { Team } from '../types';

const TeamSection = ({ team }: { team: Team }) => {
  const { id, badgeIcon, badgeLabel, sectionClass, title, desc, services, tools } = team;
  const backgroundName = `${id.replace(/-/g, ' ')} fondo.png`;
  const backgroundUrl = `${process.env.PUBLIC_URL}/imagenes/${encodeURI(backgroundName)}`;

  return (
    <section id={id} className={`team-section ${sectionClass}`} style={{ scrollMarginTop: '70px' }}>
      <div className="team-bg" style={{ backgroundImage: `url(${backgroundUrl})` }}></div>
      <div className="container">
        <div className="team-content">
          <div className="team-badge">
            <i className={`fas ${badgeIcon}`}></i>
            <span>{badgeLabel}</span>
          </div>
          <h2>{title}</h2>
          <p className="team-description">{desc}</p>
          <div className="services-detail">
            {services.map((svc, i) => (
              <div className="service-item" key={i}>
                <i className={`fas ${svc.icon}`}></i>
                <h4>{svc.name}</h4>
                <p>{svc.desc}</p>
              </div>
            ))}
          </div>
          <div className="tools-used">
            <h4>Herramientas Utilizadas:</h4>
            <div className="tool-tags">
              {tools.map((tool, i) => (<span className="tool-tag" key={i}>{tool}</span>))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
