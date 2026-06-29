import React from 'react';
import { useTema } from '../context/TemaContext';
import { useIdioma } from '../context/IdiomaContext';

const ControlesTema = () => {
  const { colorFondo, tamañoLetra, tipoLetra, temas, tamaños, tiposLetra, cambiarColorFondo, cambiarTamañoLetra, cambiarTipoLetra } = useTema();
  const { t } = useIdioma();

  return (
    <div className="controles-tema">
      <div className="control-group">
        <h3>🎨 {t('theme', 'colores')}</h3>
        <div className="botones-colores">
          {(Object.keys(temas) as Array<keyof typeof temas>).map((key) => {
            const theme = temas[key];
            return (
              <button
                key={key}
                className={`color-btn ${colorFondo === key ? 'active' : ''}`}
                onClick={() => cambiarColorFondo(key)}
                style={{ background: theme.bg, color: theme.text, border: `2px solid ${theme.primary}` }}
              >
                {t('theme', key)}
              </button>
            );
          })}
        </div>
      </div>
      <div className="control-group">
        <h3>📏 {t('theme', 'tamañoLetra')}</h3>
        <div className="botones-tamaño">
          {(Object.keys(tamaños) as Array<keyof typeof tamaños>).map((key) => (
            <button
              key={key}
              className={`tamaño-btn ${tamañoLetra === key ? 'active' : ''}`}
              onClick={() => cambiarTamañoLetra(key)}
            >
              {t('theme', key)} ({tamaños[key]})
            </button>
          ))}
        </div>
      </div>
      <div className="control-group">
        <h3>🔤 {t('theme', 'tipoLetra')}</h3>
        <div className="botones-tamaño">
          {(Object.keys(tiposLetra) as Array<keyof typeof tiposLetra>).map((key) => (
            <button
              key={key}
              className={`tamaño-btn ${tipoLetra === key ? 'active' : ''}`}
              onClick={() => cambiarTipoLetra(key)}
              style={{ fontFamily: tiposLetra[key] }}
            >
              {t('theme', key)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ControlesTema;
