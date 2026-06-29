import React from 'react';
import { useCarrito } from '../context/CarritoContext';
import { useIdioma } from '../context/IdiomaContext';
import { Producto as ProductoType } from '../types';

const Producto = ({ producto }: { producto: ProductoType }) => {
  const { agregarAlCarrito } = useCarrito();
  const { t } = useIdioma();
  const { id, nombre, precio, imagen } = producto;

  const handleAgregar = () => {
    agregarAlCarrito(producto);
    alert(`✅ ${nombre} - Bs. ${precio} ${t('tienda', 'agregar')}!`);
  };

  return (
    <div className="producto-card">
      <img src={imagen} alt={nombre} className="producto-imagen" style={{ maxWidth: '100%', height: '150px', objectFit: 'contain', marginBottom: '10px' }} />
      <h3 className="producto-nombre">{nombre}</h3>
      <p className="producto-precio">Bs. {precio.toFixed(2)}</p>
      <button className="btn-agregar" onClick={handleAgregar}>
        🧿 {t('tienda', 'agregar')}
      </button>
    </div>
  );
};

export default Producto;
