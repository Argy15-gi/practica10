import React, { ChangeEvent, useMemo, useState } from 'react';
import { Estudiante } from '../types';
import StudentDetails from './StudentDetails';

interface SearchPanelProps {
  estudiantes: Estudiante[];
}

type Criterio = 'todos' | 'nombre' | 'cedula' | 'carrera' | 'colegio' | 'apoderado';

const SearchPanel = ({ estudiantes }: SearchPanelProps) => {
  const [criterio, setCriterio] = useState<Criterio>('todos');
  const [termino, setTermino] = useState('');
  const [seleccionado, setSeleccionado] = useState<Estudiante | null>(null);

  const resultados = useMemo(() => {
    const texto = termino.trim().toLowerCase();

    if (!texto) {
      return estudiantes;
    }

    return estudiantes.filter((estudiante) => {
      const campos = {
        todos: [
          estudiante.nombre,
          estudiante.apellidos,
          estudiante.cedula,
          estudiante.carrera,
          estudiante.colegio,
          estudiante.apoderado.nombre
        ].join(' '),
        nombre: `${estudiante.nombre} ${estudiante.apellidos}`,
        cedula: estudiante.cedula,
        carrera: estudiante.carrera,
        colegio: estudiante.colegio,
        apoderado: estudiante.apoderado.nombre
      };

      return campos[criterio].toLowerCase().includes(texto);
    });
  }, [criterio, estudiantes, termino]);

  const cambiarTermino = (event: ChangeEvent<HTMLInputElement>) => {
    setTermino(event.target.value);
    setSeleccionado(null);
  };

  const cambiarCriterio = (event: ChangeEvent<HTMLSelectElement>) => {
    setCriterio(event.target.value as Criterio);
    setSeleccionado(null);
  };

  return (
    <div className="search-layout">
      <section className="search-panel">
        <div className="student-section-title">
          <i className="fas fa-search"></i>
          <h2>Buscar estudiante</h2>
        </div>

        <div className="search-controls">
          <label>
            Criterio
            <select value={criterio} onChange={cambiarCriterio}>
              <option value="todos">Todos los campos</option>
              <option value="nombre">Nombre o apellido</option>
              <option value="cedula">Cedula</option>
              <option value="carrera">Carrera</option>
              <option value="colegio">Colegio</option>
              <option value="apoderado">Apoderado</option>
            </select>
          </label>
          <label>
            Texto de busqueda
            <input value={termino} onChange={cambiarTermino} placeholder="Escriba una coincidencia" />
          </label>
        </div>

        <div className="search-results">
          {resultados.map((estudiante) => (
            <button key={estudiante.id} type="button" onClick={() => setSeleccionado(estudiante)}>
              <strong>{estudiante.nombre} {estudiante.apellidos}</strong>
              <span>{estudiante.carrera} - CI {estudiante.cedula}</span>
            </button>
          ))}
          {resultados.length === 0 && <p className="empty-state">No se encontraron coincidencias.</p>}
        </div>
      </section>

      <section className="search-detail">
        {seleccionado ? (
          <StudentDetails estudiante={seleccionado} />
        ) : (
          <p className="empty-state">Seleccione un resultado para ver todos sus datos.</p>
        )}
      </section>
    </div>
  );
};

export default SearchPanel;
