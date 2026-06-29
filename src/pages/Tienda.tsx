import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Producto from '../components/Producto';
import Carrito from '../components/Carrito';
import Footer from '../components/Footer';
import { useTema } from '../context/TemaContext';
import { useIdioma } from '../context/IdiomaContext';
import { useCarrito } from '../context/CarritoContext';

const Tienda = () => {
  const { colorFondo, tamañoLetra, tipoLetra, temas, tamaños, tiposLetra } = useTema();
  const { t } = useIdioma();
  const { productos } = useCarrito();
  const theme = temas[colorFondo];

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ background: theme.bg, color: theme.text, fontSize: tamaños[tamañoLetra], fontFamily: tiposLetra[tipoLetra], minHeight: '100vh' }}>
      <Navbar />
      <div style={{ paddingTop: '100px' }}>
        <section className="tienda-section">
          <div className="container">
            <div className="section-header">
              <i className="fas fa-shopping-cart" style={{ color: theme.primary }}></i>
              <h2 style={{ color: theme.primary }}>{t('tienda', 'title')}</h2>
              <p>{t('tienda', 'desc')}</p>
            </div>
            <div className="tienda-layout">
              <div className="productos-grid">
                {productos.map((prod) => (<Producto key={prod.id} producto={prod} />))}
              </div>
              <Carrito />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Tienda;
