import React, { useEffect } from 'react';
import TeamSection from '../components/TeamSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTema } from '../context/TemaContext';
import { useIdioma } from '../context/IdiomaContext';
import { Team } from '../types';

export const TeamPage = ({ team }: { team: Team }) => {
  const { colorFondo, tamañoLetra, tipoLetra, temas, tamaños, tiposLetra } = useTema();
  const theme = temas[colorFondo];

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ background: theme.bg, fontSize: tamaños[tamañoLetra], fontFamily: tiposLetra[tipoLetra], minHeight: '100vh' }}>
      <Navbar />
      <div style={{ paddingTop: '70px' }}>
        <TeamSection team={team} />
      </div>
      <Footer />
    </div>
  );
};

const RedTeam = () => {
  const { t } = useIdioma();
  const team: Team = {
    id: 'red-team', badgeIcon: 'fa-fire', badgeLabel: t('redTeam', 'badge'), sectionClass: 'red-section',
    title: t('redTeam', 'title'), desc: t('redTeam', 'desc'),
    services: [
      { icon: 'fa-search', name: 'Reconocimiento', desc: 'Recopilación de información sobre el objetivo' },
      { icon: 'fa-crosshairs', name: 'Explotación', desc: 'Aprovechamiento de vulnerabilidades encontradas' },
      { icon: 'fa-user-ninja', name: 'Post-Explotación', desc: 'Movimiento lateral y persistencia' },
      { icon: 'fa-file-alt', name: 'Reporting', desc: 'Documentación detallada de hallazgos' }
    ],
    tools: ['Metasploit', 'Cobalt Strike', 'Burp Suite', 'Nmap', 'BloodHound']
  };
  return <TeamPage team={team} />;
};

export default RedTeam;
