import React from 'react';
import { Estudiante } from '../types';

interface StudentDetailsProps {
  estudiante: Estudiante;
}

export const calcularTiempoUniversidad = (anioIngreso: string) => {
  const ingreso = Number(anioIngreso);
  const actual = new Date().getFullYear();

  if (!ingreso || ingreso > actual) {
    return 'Pendiente';
  }

  const anios = actual - ingreso;
  return anios === 0 ? 'Menos de 1 anio' : `${anios} anio${anios === 1 ? '' : 's'}`;
};

const StudentDetails = ({ estudiante }: StudentDetailsProps) => (
  <section className="student-details">
    <h3>Datos completos</h3>
    <div className="details-grid">
      <span>Nombre</span><strong>{estudiante.nombre} {estudiante.apellidos}</strong>
      <span>Lugar de nacimiento</span><strong>{estudiante.lugarNacimiento}</strong>
      <span>Fecha de nacimiento</span><strong>{estudiante.fechaNacimiento}</strong>
      <span>Cedula de identidad</span><strong>{estudiante.cedula}</strong>
      <span>Colegio</span><strong>{estudiante.colegio} ({estudiante.tipoColegio})</strong>
      <span>Anio de egreso</span><strong>{estudiante.anioEgreso}</strong>
      <span>Carrera</span><strong>{estudiante.carrera}</strong>
      <span>Anio de ingreso</span><strong>{estudiante.anioIngreso}</strong>
      <span>Tiempo en universidad</span><strong>{calcularTiempoUniversidad(estudiante.anioIngreso)}</strong>
      <span>Apoderado</span>
      <strong>
        {estudiante.apoderado.nombre} - {estudiante.apoderado.parentesco} - {estudiante.apoderado.telefono}
      </strong>
    </div>
  </section>
);

export default StudentDetails;
