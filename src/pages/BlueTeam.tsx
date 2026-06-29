import React from 'react';
import { TeamPage } from './RedTeam';
import { useIdioma } from '../context/IdiomaContext';
import { Team } from '../types';

const BlueTeam = () => {
  const { t } = useIdioma();
  const team: Team = {
    id: 'blue-team', badgeIcon: 'fa-shield-alt', badgeLabel: t('blueTeam', 'badge'), sectionClass: 'blue-section',
    title: t('blueTeam', 'title'), desc: t('blueTeam', 'desc'),
    services: [
      { icon: 'fa-eye', name: 'Monitoreo 24/7', desc: 'Vigilancia continua de sistemas' },
      { icon: 'fa-search-dollar', name: 'Threat Hunting', desc: 'Búsqueda proactiva de amenazas' },
      { icon: 'fa-first-aid', name: 'Incident Response', desc: 'Respuesta y remediación de incidentes' },
      { icon: 'fa-clipboard-check', name: 'Hardening', desc: 'Fortalecimiento de sistemas' }
    ],
    tools: ['Splunk', 'Wazuh', 'Suricata', 'YARA', 'Velociraptor']
  };
  return <TeamPage team={team} />;
};

export default BlueTeam;
