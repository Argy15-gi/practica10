import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TemaProvider } from './context/TemaContext';
import { CarritoProvider } from './context/CarritoContext';
import { IdiomaProvider } from './context/IdiomaContext';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import RedTeam from './pages/RedTeam';
import BlueTeam from './pages/BlueTeam';
import PurpleTeam from './pages/PurpleTeam';
import Consultoria from './pages/Consultoria';
import Recursos from './pages/Recursos';
import Herramientas from './pages/Herramientas';
import Tienda from './pages/Tienda';
import Personajes from './pages/Personajes';
import Contacto from './pages/Contacto';
import Galeria from './pages/Galeria';
import Estudiantes from './pages/Estudiantes';
import BuscarEstudiantes from './pages/BuscarEstudiantes';
import { Estudiante, EstudianteFormData } from './types';
import './App.css';

const estudiantesIniciales: Estudiante[] = [
  {
    id: 1,
    nombre: 'Lucia',
    apellidos: 'Mamani Flores',
    lugarNacimiento: 'Potosi',
    fechaNacimiento: '2003-04-18',
    cedula: '8456123',
    colegio: 'Nacional Pichincha',
    tipoColegio: 'Fiscal',
    anioEgreso: '2020',
    carrera: 'Ingenieria de Sistemas',
    anioIngreso: '2021',
    apoderado: {
      nombre: 'Ruben Mamani',
      parentesco: 'Padre',
      telefono: '72451236'
    }
  }
];

const App = () => {
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>(estudiantesIniciales);
  const [estudianteEditando, setEstudianteEditando] = useState<Estudiante | null>(null);

  const guardarEstudiante = (datos: EstudianteFormData, id?: number) => {
    if (id) {
      setEstudiantes((prev) => prev.map((estudiante) => (
        estudiante.id === id ? { ...datos, id } : estudiante
      )));
      setEstudianteEditando(null);
      return;
    }

    setEstudiantes((prev) => [...prev, { ...datos, id: Date.now() }]);
  };

  const eliminarEstudiante = (id: number) => {
    setEstudiantes((prev) => prev.filter((estudiante) => estudiante.id !== id));
    setEstudianteEditando((actual) => (actual?.id === id ? null : actual));
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <TemaProvider>
        <IdiomaProvider>
          <CarritoProvider>
            <Routes>
              <Route
                path="/"
                element={(
                  <Estudiantes
                    estudiantes={estudiantes}
                    estudianteEditando={estudianteEditando}
                    onGuardar={guardarEstudiante}
                    onEditar={setEstudianteEditando}
                    onEliminar={eliminarEstudiante}
                    onCancelarEdicion={() => setEstudianteEditando(null)}
                  />
                )}
              />
              <Route
                path="/estudiantes"
                element={(
                  <Estudiantes
                    estudiantes={estudiantes}
                    estudianteEditando={estudianteEditando}
                    onGuardar={guardarEstudiante}
                    onEditar={setEstudianteEditando}
                    onEliminar={eliminarEstudiante}
                    onCancelarEdicion={() => setEstudianteEditando(null)}
                  />
                )}
              />
              <Route path="/buscar-estudiantes" element={<BuscarEstudiantes estudiantes={estudiantes} />} />
              <Route path="/home" element={<Home />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/red-team" element={<RedTeam />} />
              <Route path="/blue-team" element={<BlueTeam />} />
              <Route path="/purple-team" element={<PurpleTeam />} />
              <Route path="/consultoria" element={<Consultoria />} />
              <Route path="/recursos" element={<Recursos />} />
              <Route path="/herramientas" element={<Herramientas />} />
              <Route path="/tienda" element={<Tienda />} />
              <Route path="/personajes" element={<Personajes />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/galeria" element={<Galeria />} />
            </Routes>
          </CarritoProvider>
        </IdiomaProvider>
      </TemaProvider>
    </Router>
  );
};

export default App;
