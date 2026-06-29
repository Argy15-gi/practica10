import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchPanel from '../components/SearchPanel';
import { Estudiante } from '../types';

interface BuscarEstudiantesProps {
  estudiantes: Estudiante[];
}

const BuscarEstudiantes = ({ estudiantes }: BuscarEstudiantesProps) => (
  <>
    <Navbar />
    <main className="student-page">
      <div className="container">
        <header className="student-hero">
          <h1>Busqueda de estudiantes</h1>
          <p>Filtre por criterio y revise la informacion completa del estudiante seleccionado.</p>
        </header>
        <SearchPanel estudiantes={estudiantes} />
      </div>
    </main>
    <Footer />
  </>
);

export default BuscarEstudiantes;
