import React, { useState } from 'react';
import { useCarrito } from '../context/CarritoContext';
import { useTema } from '../context/TemaContext';
import { useIdioma } from '../context/IdiomaContext';

const Carrito = () => {
  const [mostrar, setMostrar] = useState(true);
  const { carrito, eliminarDelCarrito, actualizarCantidad, totalCarrito } = useCarrito();
  const { tamaños, tamañoLetra } = useTema();
  const { t } = useIdioma();

  return (
    <div className="carrito-seccion">
      <div className="carrito">
        <div className="carrito-header">
          <h2>🛒 {t('tienda', 'miCarrito')} ({carrito.length})</h2>
          <button className="btn-toggle" onClick={() => setMostrar((p) => !p)}>
            {mostrar ? '▼' : '▲'}
          </button>
        </div>
        {mostrar && carrito.length === 0 && (
          <div className="carrito-vacio">
            <span>🛒</span>
            <p>{t('tienda', 'vacio')}</p>
          </div>
        )}
        {mostrar && carrito.length > 0 && (
          <div className="carrito-items">
            {carrito.map((item) => (
              <div key={item.id} className="carrito-item">
                <div className="item-info">
                  <img src={item.imagen} alt={item.nombre} className="item-imagen" style={{ width: '50px', height: '50px', objectFit: 'contain', borderRadius: '5px' }} />
                  <div className="item-details">
                    <h4>{item.nombre}</h4>
                    <p>Bs. {item.precio.toFixed(2)} c/u</p>
                  </div>
                </div>
                <div className="item-controls">
                  <div className="cantidad-controls">
                    <button className="btn-cantidad" onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}>+</button>
                    <span className="cantidad">{item.cantidad}</span>
                    <button className="btn-cantidad" onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}>-</button>
                  </div>
                  <span className="item-subtotal">Bs. {(item.precio * item.cantidad).toFixed(2)}</span>
                  <button className="btn-eliminar" onClick={() => eliminarDelCarrito(item.id)}>🗑</button>
                </div>
              </div>
            ))}
            <div className="carrito-total">
              <strong>{t('tienda', 'total')}: Bs. {totalCarrito.toFixed(2)}</strong>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carrito;
