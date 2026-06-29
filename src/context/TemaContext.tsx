import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Tema, TemaColor, TamanoLetra, TipoLetra } from '../types';

interface TemaContextType {
  colorFondo: TemaColor;
  tamañoLetra: TamanoLetra;
  tipoLetra: TipoLetra;
  temas: Record<TemaColor, Tema>;
  tamaños: Record<TamanoLetra, string>;
  tiposLetra: Record<TipoLetra, string>;
  cambiarColorFondo: (color: TemaColor) => void;
  cambiarTamañoLetra: (tamaño: TamanoLetra) => void;
  cambiarTipoLetra: (tipo: TipoLetra) => void;
}

const TemaContext = createContext<TemaContextType | undefined>(undefined);

export const useTema = (): TemaContextType => {
  const context = useContext(TemaContext);
  if (!context) throw new Error('useTema debe usarse dentro de TemaProvider');
  return context;
};

export const TemaProvider = ({ children }: { children: ReactNode }) => {
  const [colorFondo, setColorFondo] = useState<TemaColor>('oscuro');
  const [tamañoLetra, setTamañoLetra] = useState<TamanoLetra>('normal');
  const [tipoLetra, setTipoLetra] = useState<TipoLetra>('rajdhani');

  const temas: Record<TemaColor, Tema> = {
    oscuro: {
      bg: '#0a0a0a', bgLight: '#1a1a1a', bgCard: '#2a2a2a',
      primary: '#8a2be2', secondary: '#00ffff', accent: '#ff00ff',
      warning: '#ff4500', text: '#e0e0e0', textMuted: '#999'
    },
    claro: {
      bg: '#f0f4f8', bgLight: '#ffffff', bgCard: '#e2e8f0',
      primary: '#2563eb', secondary: '#0891b2', accent: '#7c3aed',
      warning: '#dc2626', text: '#1e293b', textMuted: '#64748b'
    },
    naturaleza: {
      bg: '#0f1f12', bgLight: '#1a2e1f', bgCard: '#243b2a',
      primary: '#22c55e', secondary: '#fbbf24', accent: '#a855f7',
      warning: '#ef4444', text: '#e0f2e0', textMuted: '#6b8f6b'
    }
  };

  const tamaños: Record<TamanoLetra, string> = {
    pequeño: '12px',
    medio: '14px',
    normal: '16px',
    grande: '20px',
    extragrande: '24px'
  };

  const tiposLetra: Record<TipoLetra, string> = {
    rajdhani: "'Rajdhani', sans-serif",
    roboto: "'Roboto', sans-serif",
    courier: "'Courier New', monospace",
    arial: 'Arial, sans-serif',
    impact: 'Impact, sans-serif'
  };

  useEffect(() => {
    const tema = temas[colorFondo];
    document.documentElement.style.setProperty('--bg', tema.bg);
    document.documentElement.style.setProperty('--bgLight', tema.bgLight);
    document.documentElement.style.setProperty('--bgCard', tema.bgCard);
    document.documentElement.style.setProperty('--primary', tema.primary);
    document.documentElement.style.setProperty('--secondary', tema.secondary);
    document.documentElement.style.setProperty('--accent', tema.accent);
    document.documentElement.style.setProperty('--warning', tema.warning);
    document.documentElement.style.setProperty('--text', tema.text);
    document.documentElement.style.setProperty('--textMuted', tema.textMuted);
    document.documentElement.style.setProperty('--font-size', tamaños[tamañoLetra]);
    document.documentElement.style.setProperty('--font-family', tiposLetra[tipoLetra]);
  }, [colorFondo, tamañoLetra, tipoLetra, temas, tamaños, tiposLetra]);

  return (
    <TemaContext.Provider value={{
      colorFondo,
      tamañoLetra,
      tipoLetra,
      temas,
      tamaños,
      tiposLetra,
      cambiarColorFondo: setColorFondo,
      cambiarTamañoLetra: setTamañoLetra,
      cambiarTipoLetra: setTipoLetra
    }}>
      {children}
    </TemaContext.Provider>
  );
};
