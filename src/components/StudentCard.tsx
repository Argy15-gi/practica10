import React from 'react';
import { Estudiante } from '../types';
import { calcularTiempoUniversidad } from './StudentDetails';

interface StudentCardProps {
  estudiante: Estudiante;
  onEditar: (estudiante: Estudiante) => void;
  onEliminar: (id: number) => void;
}

const StudentCard = ({ estudiante, onEditar, onEliminar }: StudentCardProps) => (
  <article className="student-card">
    <div>
      <h3>{estudiante.nombre} {estudiante.apellidos}</h3>
      <p>{estudiante.carrera}</p>
      <span>CI: {estudiante.cedula}</span>
      <span>{calcularTiempoUniversidad(estudiante.anioIngreso)} en la universidad</span>
    </div>
    <div className="student-card-actions">
      <button className="btn-edit" type="button" onClick={() => onEditar(estudiante)}>
        <i className="fas fa-pen"></i> Editar
      </button>
      <button className="btn-delete" type="button" onClick={() => onEliminar(estudiante.id)}>
        <i className="fas fa-trash"></i> Borrar
      </button>
    </div>
  </article>
);

export default StudentCard;
