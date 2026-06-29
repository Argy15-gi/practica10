import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import CharacterList from '../components/CharacterList';
import CharacterDetail from '../components/CharacterDetail';
import Footer from '../components/Footer';
import { useTema } from '../context/TemaContext';
import { useIdioma } from '../context/IdiomaContext';

interface SimpsonsCharacter {
  id: number;
  name: string;
  occupation: string;
  portrait_path: string;
  status?: string;
  age?: number;
  birthdate?: string;
  gender?: string;
}

const Personajes = () => {
  const { colorFondo, tamañoLetra, tipoLetra, temas, tamaños, tiposLetra } = useTema();
  const { t } = useIdioma();
  const theme = temas[colorFondo];
  const [characters, setCharacters] = useState<SimpsonsCharacter[]>([]);
  const [selected, setSelected] = useState<SimpsonsCharacter | null>(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://api.simpsonsapi.xyz/v1/characters?page=${page}&limit=20`);
        const data = await res.json();
        if (data && data.data) setCharacters(data.data);
      } catch {
        console.error('Error fetching characters');
        setCharacters([]);
      }
      setLoading(false);
    };
    fetchCharacters();
  }, [page]);

  return (
    <div style={{ background: theme.bg, color: theme.text, fontSize: tamaños[tamañoLetra], fontFamily: tiposLetra[tipoLetra], minHeight: '100vh' }}>
      <Navbar />
      <div style={{ paddingTop: '100px' }}>
        <section className="personajes-section">
          <div className="container">
            <div className="section-header">
              <i className="fas fa-users" style={{ color: theme.primary }}></i>
              <h2 style={{ color: theme.primary }}>{t('personajes', 'title')}</h2>
              <p>{t('personajes', 'desc')}</p>
            </div>

            {selected ? (
              <CharacterDetail character={selected} onBack={() => setSelected(null)} />
            ) : (
              <>
                {loading ? (
                  <div style={{ textAlign: 'center', padding: '40px' }}>
                    <i className="fas fa-spinner fa-spin" style={{ fontSize: '2em', color: theme.primary }}></i>
                    <p>{t('personajes', 'cargando')}</p>
                  </div>
                ) : characters.length > 0 ? (
                  <>
                    <CharacterList characters={characters} onSelect={setSelected} />
                    <div className="pagination">
                      <button className="btn" disabled={page <= 1} onClick={() => setPage(p => p - 1)}>← {t('personajes', 'anterior')}</button>
                      <span>{t('personajes', 'pagina')} {page}</span>
                      <button className="btn" onClick={() => setPage(p => p + 1)}>{t('personajes', 'siguiente')} →</button>
                    </div>
                  </>
                ) : (
                  <div style={{ textAlign: 'center', padding: '40px' }}>
                    <i className="fas fa-exclamation-circle" style={{ fontSize: '2em', color: theme.warning }}></i>
                    <p>{t('personajes', 'noDisponible')}</p>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Personajes;
