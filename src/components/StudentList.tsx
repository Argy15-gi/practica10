import React from 'react';
import { Estudiante } from '../types';
import StudentCard from './StudentCard';

interface StudentListProps {
  estudiantes: Estudiante[];
  onEditar: (estudiante: Estudiante) => void;
  onEliminar: (id: number) => void;
}

const StudentList = ({ estudiantes, onEditar, onEliminar }: StudentListProps) => (
  <section className="student-list">
    <div className="student-section-title">
      <i className="fas fa-list"></i>
      <h2>Lista de estudiantes</h2>
    </div>

    {estudiantes.length === 0 ? (
      <p className="empty-state">Todavia no hay estudiantes registrados.</p>
    ) : (
      <div className="student-cards">
        {estudiantes.map((estudiante) => (
          <StudentCard
            key={estudiante.id}
            estudiante={estudiante}
            onEditar={onEditar}
            onEliminar={onEliminar}
          />
        ))}
      </div>
    )}
  </section>
);

export default StudentList;
