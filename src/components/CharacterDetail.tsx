import React from 'react';
import { useIdioma } from '../context/IdiomaContext';

interface Character {
  id: number;
  name: string;
  occupation: string;
  portrait_path: string;
  status?: string;
  age?: number;
  birthdate?: string;
  gender?: string;
}

const CharacterDetail = ({ character, onBack }: { character: Character; onBack: () => void }) => {
  const { t } = useIdioma();

  return (
    <div className="character-detail">
      <button className="back-button" onClick={onBack}>← {t('personajes', 'volver')}</button>
      <div className="detail-card">
        <div className="detail-header">
          <img src={`https://cdn.thesimpsonsapi.com/500${character.portrait_path}`} alt={character.name} className="detail-image" />
          <div className="detail-title">
            <h2>{character.name}</h2>
            {character.status && <span className="status">{character.status}</span>}
          </div>
        </div>
        <div className="detail-info">
          <div className="info-row">
            <span className="label">{t('personajes', 'edad')}:</span>
            <span>{character.age ?? t('personajes', 'noEspecificada')}</span>
          </div>
          <div className="info-row">
            <span className="label">{t('personajes', 'cumpleaños')}:</span>
            <span>{character.birthdate ?? t('personajes', 'noDisponible')}</span>
          </div>
          <div className="info-row">
            <span className="label">{t('personajes', 'sexo')}:</span>
            <span>{character.gender ?? t('personajes', 'noEspecificada')}</span>
          </div>
          <div className="info-row">
            <span className="label">{t('personajes', 'ocupacion')}:</span>
            <span>{character.occupation}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
