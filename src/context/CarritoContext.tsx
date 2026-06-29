import React, { createContext, useState, useContext, ReactNode } from 'react';
import { CarritoItem, Producto } from '../types';

interface CarritoContextType {
  carrito: CarritoItem[];
  productos: Producto[];
  agregarAlCarrito: (producto: Producto) => void;
  eliminarDelCarrito: (id: number) => void;
  actualizarCantidad: (id: number, nuevaCantidad: number) => void;
  totalCarrito: number;
}

const CarritoContext = createContext<CarritoContextType | undefined>(undefined);

export const useCarrito = (): CarritoContextType => {
  const context = useContext(CarritoContext);
  if (!context) throw new Error('useCarrito debe usarse dentro de CarritoProvider');
  return context;
};

const productosIniciales: Producto[] = [
  { id: 1, nombre: 'Auditoría de Seguridad', precio: 499.99, imagen: `${process.env.PUBLIC_URL}/imagenes/Red Team.png` },
  { id: 2, nombre: 'Pentesting Avanzado', precio: 799.99, imagen: `${process.env.PUBLIC_URL}/imagenes/Red Team.png` },
  { id: 3, nombre: 'Monitoreo SOC 24/7', precio: 1299.99, imagen: `${process.env.PUBLIC_URL}/imagenes/Blue Team.png` },
  { id: 4, nombre: 'Consultoría ISO 27001', precio: 999.99, imagen: `${process.env.PUBLIC_URL}/imagenes/TI.png` },
  { id: 5, nombre: 'Kit de Herramientas Pro', precio: 349.99, imagen: `${process.env.PUBLIC_URL}/imagenes/Purple team.png` },
  { id: 6, nombre: 'Curso Ciberseguridad', precio: 199.99, imagen: `${process.env.PUBLIC_URL}/imagenes/TI.png` }
];

export const CarritoProvider = ({ children }: { children: ReactNode }) => {
  const [carrito, setCarrito] = useState<CarritoItem[]>([]);
  const [productos] = useState<Producto[]>(productosIniciales);

  const agregarAlCarrito = (producto: Producto) => {
    setCarrito((prev) => {
      const existente = prev.find((item) => item.id === producto.id);
      if (existente) {
        return prev.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const eliminarDelCarrito = (id: number) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  const actualizarCantidad = (id: number, nuevaCantidad: number) => {
    if (nuevaCantidad <= 0) {
      eliminarDelCarrito(id);
      return;
    }
    setCarrito((prev) =>
      prev.map((item) => (item.id === id ? { ...item, cantidad: nuevaCantidad } : item))
    );
  };

  const totalCarrito = carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);

  return (
    <CarritoContext.Provider value={{ carrito, productos, agregarAlCarrito, eliminarDelCarrito, actualizarCantidad, totalCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};
