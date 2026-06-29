import React from 'react';
import { useIdioma } from '../context/IdiomaContext';
import { useTema } from '../context/TemaContext';
import { Idioma } from '../types';

const ControlesIdioma = () => {
  const { idioma, cambiarIdioma, t } = useIdioma();
  const { temas, colorFondo, tamaños, tamañoLetra } = useTema();
  const theme = temas[colorFondo];

  return (
    <div style={{
      display: 'flex', gap: '10px', justifyContent: 'center', padding: '15px 0',
      background: theme.bgCard, borderRadius: '10px', marginBottom: '20px',
      border: `1px solid ${theme.primary}`
    }}>
      <button
        className={`tamaño-btn ${idioma === 'es' ? 'active' : ''}`}
        onClick={() => cambiarIdioma('es')}
        style={{ fontSize: tamaños[tamañoLetra] }}
      >
        🇪🇸 Español
      </button>
      <button
        className={`tamaño-btn ${idioma === 'en' ? 'active' : ''}`}
        onClick={() => cambiarIdioma('en')}
        style={{ fontSize: tamaños[tamañoLetra] }}
      >
        🇺🇸 English
      </button>
    </div>
  );
};

export default ControlesIdioma;
