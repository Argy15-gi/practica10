import React, { useEffect, useRef, useState } from 'react';
import { useIdioma } from '../context/IdiomaContext';

type ContactData = {
  id: number;
  nombre: string;
  correo: string;
  direccion: string;
  servicio: string;
  mensaje: string;
};

const initialFormData = {
  nombre: '',
  correo: '',
  direccion: '',
  servicio: '',
  mensaje: '',
};

const serviceLabels: Record<string, string> = {
  red: 'Red Team',
  blue: 'Blue Team',
  purple: 'Purple Team',
  consultoria: 'Consultoria',
};

const ContactForm = () => {
  const { t } = useIdioma();
  const [formData, setFormData] = useState(initialFormData);
  const [items, setItems] = useState<ContactData[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [error, setError] = useState('');
  const nombreInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nombreInputRef.current?.focus();
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('contactosCrud');
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch {
        setItems([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contactosCrud', JSON.stringify(items));
  }, [items]);

  const validate = () => {
    if (!formData.nombre.trim()) return 'El nombre es obligatorio.';
    if (formData.nombre.trim().length < 3) return 'El nombre debe tener al menos 3 caracteres.';
    if (!formData.correo.trim()) return 'El correo es obligatorio.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) return 'Ingresa un correo valido.';
    if (!formData.direccion.trim()) return 'La direccion es obligatoria.';
    if (!formData.servicio) return 'Selecciona un servicio de interes.';
    if (!formData.mensaje.trim()) return 'El mensaje es obligatorio.';
    if (formData.mensaje.trim().length < 10) return 'El mensaje debe tener al menos 10 caracteres.';
    const duplicate = items.find((item) => item.correo.toLowerCase() === formData.correo.trim().toLowerCase() && item.id !== editingId);
    if (duplicate) return 'Ya existe un registro con ese correo.';
    const duplicateName = items.find((item) => item.nombre.toLowerCase() === formData.nombre.trim().toLowerCase() && item.id !== editingId);
    if (duplicateName) return 'Ya existe un registro con ese nombre.';
    return '';
  };

  const normalizeFormData = () => {
    const nombre = formData.nombre.trim().replace(/\s+/g, ' ');
    const direccion = formData.direccion.trim().replace(/\s+/g, ' ');
    const mensaje = formData.mensaje.trim().replace(/\s+/g, ' ');

    return {
      nombre,
      correo: formData.correo.trim().toLowerCase(),
      direccion,
      servicio: formData.servicio,
      mensaje,
    };
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setEditingId(null);
    setError('');
    nombreInputRef.current?.focus();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    const normalizedData = normalizeFormData();

    if (editingId !== null) {
      setItems((prev) => prev.map((item) => item.id === editingId ? { ...item, ...normalizedData } : item));
      setError('Registro actualizado correctamente.');
    } else {
      setItems((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...normalizedData,
        },
      ]);
      setError('Registro agregado correctamente.');
    }

    setFormData(initialFormData);
    setEditingId(null);
    nombreInputRef.current?.focus();
  };

  const handleEdit = (item: ContactData) => {
    setFormData({
      nombre: item.nombre,
      correo: item.correo,
      direccion: item.direccion,
      servicio: item.servicio,
      mensaje: item.mensaje,
    });
    setEditingId(item.id);
    setError('Edita los campos y guarda los cambios.');
    nombreInputRef.current?.focus();
  };

  const handleDelete = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    if (editingId === id) {
      resetForm();
    }
  };

  return (
    <div id="contacto" className="contacto-form-wrapper" style={{ scrollMarginTop: '80px' }}>
      <div className="formulario">
        <h3><i className="fas fa-edit"></i> {t('contacto', 'formTitle')}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre"><i className="fas fa-user"></i> {t('contacto', 'nombre')}:</label>
            <input
              ref={nombreInputRef}
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="correo"><i className="fas fa-envelope"></i> {t('contacto', 'correo')}:</label>
            <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="direccion"><i className="fas fa-map-marker-alt"></i> {t('contacto', 'direccion')}:</label>
            <input type="text" id="direccion" name="direccion" value={formData.direccion} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="servicio"><i className="fas fa-list"></i> {t('contacto', 'servicioInteres')}:</label>
            <select id="servicio" name="servicio" value={formData.servicio} onChange={handleChange}>
              <option value="">{t('contacto', 'selecciona')}</option>
              <option value="red">Red Team</option>
              <option value="blue">Blue Team</option>
              <option value="purple">Purple Team</option>
              <option value="consultoria">{t('servicios', 'consultoria')}</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="mensaje"><i className="fas fa-comment"></i> {t('contacto', 'mensaje')}:</label>
            <textarea id="mensaje" name="mensaje" rows={5} value={formData.mensaje} onChange={handleChange}></textarea>
          </div>

          {error && <div className={`mensaje ${error.includes('correctamente') ? 'success' : 'error'}`}>{error}</div>}

          <div className="form-actions">
            <button type="submit" className="btn-submit">
              <i className="fas fa-save"></i> {editingId !== null ? 'Actualizar' : 'Guardar'}
            </button>
            <button type="button" className="btn-cancel" onClick={resetForm}>
              <i className="fas fa-eraser"></i> Limpiar
            </button>
          </div>
        </form>
      </div>

      <div className="resultado">
        <h3><i className="fas fa-list"></i> Lista de registros ({items.length})</h3>
        {items.length === 0 ? (
          <div className="registro-vacio">
            <i className="fas fa-inbox"></i>
            <p>No hay registros guardados todavia.</p>
          </div>
        ) : (
          <div className="lista-registros">
            {items.map((item) => (
              <div key={item.id} className="registro-item">
                <div>
                  <strong>{item.nombre}</strong>
                  <p>{item.correo}</p>
                  <p>{item.direccion}</p>
                  <p>{serviceLabels[item.servicio] || 'Sin servicio seleccionado'}</p>
                  <p>{item.mensaje}</p>
                </div>
                <div className="registro-acciones">
                  <button type="button" className="btn-edit" onClick={() => handleEdit(item)}>
                    <i className="fas fa-edit"></i> Editar
                  </button>
                  <button type="button" className="btn-delete" onClick={() => handleDelete(item.id)}>
                    <i className="fas fa-trash-alt"></i> Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
