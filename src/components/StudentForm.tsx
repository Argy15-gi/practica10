import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Estudiante, EstudianteFormData } from '../types';
import { calcularTiempoUniversidad } from './StudentDetails';

interface StudentFormProps {
  estudianteEditando: Estudiante | null;
  onGuardar: (estudiante: EstudianteFormData, id?: number) => void;
  onCancelar: () => void;
}

const formularioInicial: EstudianteFormData = {
  nombre: '',
  apellidos: '',
  lugarNacimiento: '',
  fechaNacimiento: '',
  cedula: '',
  colegio: '',
  tipoColegio: 'Fiscal',
  anioEgreso: '',
  carrera: '',
  anioIngreso: '',
  apoderado: {
    nombre: '',
    parentesco: '',
    telefono: ''
  }
};

const StudentForm = ({ estudianteEditando, onGuardar, onCancelar }: StudentFormProps) => {
  const [formulario, setFormulario] = useState<EstudianteFormData>(formularioInicial);

  useEffect(() => {
    if (estudianteEditando) {
      const { id, ...datos } = estudianteEditando;
      setFormulario(datos);
      return;
    }

    setFormulario(formularioInicial);
  }, [estudianteEditando]);

  const cambiarCampo = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormulario((prev) => ({ ...prev, [name]: value }));
  };

  const cambiarApoderado = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormulario((prev) => ({
      ...prev,
      apoderado: { ...prev.apoderado, [name]: value }
    }));
  };

  const enviarFormulario = (event: FormEvent) => {
    event.preventDefault();
    onGuardar(formulario, estudianteEditando?.id);
    setFormulario(formularioInicial);
  };

  return (
    <form className="student-form" onSubmit={enviarFormulario}>
      <div className="student-section-title">
        <i className="fas fa-user-graduate"></i>
        <h2>{estudianteEditando ? 'Actualizar estudiante' : 'Registrar estudiante'}</h2>
      </div>

      <div className="student-form-grid">
        <label>Nombre<input required name="nombre" value={formulario.nombre} onChange={cambiarCampo} /></label>
        <label>Apellidos<input required name="apellidos" value={formulario.apellidos} onChange={cambiarCampo} /></label>
        <label>Lugar de nacimiento<input required name="lugarNacimiento" value={formulario.lugarNacimiento} onChange={cambiarCampo} /></label>
        <label>Fecha de nacimiento<input required type="date" name="fechaNacimiento" value={formulario.fechaNacimiento} onChange={cambiarCampo} /></label>
        <label>Cedula de identidad<input required name="cedula" value={formulario.cedula} onChange={cambiarCampo} /></label>
        <label>Colegio donde salio<input required name="colegio" value={formulario.colegio} onChange={cambiarCampo} /></label>
        <label>
          Tipo de colegio
          <select name="tipoColegio" value={formulario.tipoColegio} onChange={cambiarCampo}>
            <option>Fiscal</option>
            <option>Particular</option>
          </select>
        </label>
        <label>Anio de egreso<input required type="number" name="anioEgreso" value={formulario.anioEgreso} onChange={cambiarCampo} /></label>
        <label>Carrera<input required name="carrera" value={formulario.carrera} onChange={cambiarCampo} /></label>
        <label>Anio de ingreso<input required type="number" name="anioIngreso" value={formulario.anioIngreso} onChange={cambiarCampo} /></label>
        <label>Nombre del apoderado<input required name="nombre" value={formulario.apoderado.nombre} onChange={cambiarApoderado} /></label>
        <label>Parentesco<input required name="parentesco" value={formulario.apoderado.parentesco} onChange={cambiarApoderado} /></label>
        <label>Telefono del apoderado<input required name="telefono" value={formulario.apoderado.telefono} onChange={cambiarApoderado} /></label>
      </div>

      <p className="student-time">Tiempo actual en la universidad: {calcularTiempoUniversidad(formulario.anioIngreso)}</p>

      <div className="student-actions">
        <button className="btn-submit" type="submit">
          <i className={`fas ${estudianteEditando ? 'fa-save' : 'fa-plus'}`}></i>
          {estudianteEditando ? 'Guardar cambios' : 'Anadir a la lista'}
        </button>
        {estudianteEditando && (
          <button className="btn-cancel" type="button" onClick={onCancelar}>Cancelar</button>
        )}
      </div>
    </form>
  );
};

export default StudentForm;
