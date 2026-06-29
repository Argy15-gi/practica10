import React from 'react';
import { TeamPage } from './RedTeam';
import { useIdioma } from '../context/IdiomaContext';
import { Team } from '../types';

const PurpleTeam = () => {
  const { t } = useIdioma();
  const team: Team = {
    id: 'purple-team', badgeIcon: 'fa-handshake', badgeLabel: t('purpleTeam', 'badge'), sectionClass: 'purple-section',
    title: t('purpleTeam', 'title'), desc: t('purpleTeam', 'desc'),
    services: [
      { icon: 'fa-exchange-alt', name: 'Simulacros', desc: 'Ejercicios controlados de ataque/defensa' },
      { icon: 'fa-chart-line', name: 'Métricas', desc: 'Medición de efectividad defensiva' },
      { icon: 'fa-sync', name: 'Feedback Loop', desc: 'Mejora continua bidireccional' },
      { icon: 'fa-graduation-cap', name: 'Training', desc: 'Capacitación conjunta de equipos' }
    ],
    tools: ['Atomic Red Team', 'MITRE ATT&CK', 'Caldera', 'Prelude', 'Vectra']
  };
  return <TeamPage team={team} />;
};

export default PurpleTeam;
