import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Idioma } from '../types';
import es from '../i18n/es';
import en from '../i18n/en';

interface IdiomaContextType {
  idioma: Idioma;
  t: (key: string, subkey: string) => string;
  cambiarIdioma: (idioma: Idioma) => void;
}

const traducciones = { es, en };

const IdiomaContext = createContext<IdiomaContextType | undefined>(undefined);

export const useIdioma = (): IdiomaContextType => {
  const context = useContext(IdiomaContext);
  if (!context) throw new Error('useIdioma debe usarse dentro de IdiomaProvider');
  return context;
};

export const IdiomaProvider = ({ children }: { children: ReactNode }) => {
  const [idioma, setIdioma] = useState<Idioma>('es');

  const t = (key: string, subkey: string): string => {
    const lang = traducciones[idioma] as Record<string, string | Record<string, string>>;
    const section = lang[key];
    if (section && typeof section === 'object' && section[subkey]) return section[subkey];
    return `${key}.${subkey}`;
  };

  const cambiarIdioma = (nuevoIdioma: Idioma) => setIdioma(nuevoIdioma);

  return (
    <IdiomaContext.Provider value={{ idioma, t, cambiarIdioma }}>
      {children}
    </IdiomaContext.Provider>
  );
};
