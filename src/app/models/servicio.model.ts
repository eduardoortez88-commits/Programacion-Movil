export interface Servicio {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  direccion: string;
  telefono: string;
  horario: string;
  latitud: number;
  longitud: number;
  precision: number | null;
  foto: string;
  recomendado: boolean;
  fecha: string;
}
