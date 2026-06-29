export type TemaColor = 'oscuro' | 'claro' | 'naturaleza';
export type TamanoLetra = 'pequeño' | 'medio' | 'normal' | 'grande' | 'extragrande';
export type TipoLetra = 'rajdhani' | 'roboto' | 'courier' | 'arial' | 'impact';
export type Idioma = 'es' | 'en';

export interface Tema {
  bg: string;
  bgLight: string;
  bgCard: string;
  primary: string;
  secondary: string;
  accent: string;
  warning: string;
  text: string;
  textMuted: string;
}

export interface Temas {
  [key: string]: Tema;
}

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
}

export interface CarritoItem extends Producto {
  cantidad: number;
}

export interface Servicio {
  icon: string;
  bg: string;
  title: string;
  desc: string;
  features: string[];
  link: string;
}

export interface GaleriaItem {
  img: string;
  title: string;
  category: string;
}

export interface Amenaza {
  icon: string;
  iconClass: string;
  title: string;
  desc: string;
  items: string[];
  nivelClass: string;
  img?: string;
}

export interface TeamService {
  icon: string;
  name: string;
  desc: string;
}

export interface Team {
  id: string;
  badgeIcon: string;
  badgeLabel: string;
  sectionClass: string;
  title: string;
  desc: string;
  services: TeamService[];
  tools: string[];
}

export interface ConsultoriaItem {
  icon: string;
  title: string;
  desc: string;
}

export interface Recurso {
  icon: string;
  title: string;
  desc: string;
}

export interface Herramienta {
  icon: string;
  img?: string;
  name: string;
  desc: string;
  color: string;
}

export interface Traducciones {
  [key: string]: string | { [key: string]: string };
}

export interface Apoderado {
  nombre: string;
  parentesco: string;
  telefono: string;
}

export interface Estudiante {
  id: number;
  nombre: string;
  apellidos: string;
  lugarNacimiento: string;
  fechaNacimiento: string;
  cedula: string;
  colegio: string;
  tipoColegio: 'Fiscal' | 'Particular';
  anioEgreso: string;
  carrera: string;
  anioIngreso: string;
  apoderado: Apoderado;
}

export type EstudianteFormData = Omit<Estudiante, 'id'>;
