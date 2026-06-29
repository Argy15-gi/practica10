import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StudentForm from '../components/StudentForm';
import StudentList from '../components/StudentList';
import { Estudiante, EstudianteFormData } from '../types';

interface EstudiantesProps {
  estudiantes: Estudiante[];
  estudianteEditando: Estudiante | null;
  onGuardar: (estudiante: EstudianteFormData, id?: number) => void;
  onEditar: (estudiante: Estudiante) => void;
  onEliminar: (id: number) => void;
  onCancelarEdicion: () => void;
}

const Estudiantes = ({
  estudiantes,
  estudianteEditando,
  onGuardar,
  onEditar,
  onEliminar,
  onCancelarEdicion
}: EstudiantesProps) => (
  <>
    <Navbar />
    <main className="student-page">
      <div className="container">
        <header className="student-hero">
          <h1>CRUD de estudiantes</h1>
          <p>Registro, lectura, actualizacion y eliminacion de datos estudiantiles.</p>
        </header>
        <div className="student-layout">
          <StudentForm
            estudianteEditando={estudianteEditando}
            onGuardar={onGuardar}
            onCancelar={onCancelarEdicion}
          />
          <StudentList estudiantes={estudiantes} onEditar={onEditar} onEliminar={onEliminar} />
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Estudiantes;
