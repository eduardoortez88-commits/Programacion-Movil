import { Injectable } from '@angular/core';
import { Servicio } from '../models/servicio.model';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
   
  private clave = 'servicios-mascotas';

  constructor() { }

  obtenerServicios(): Servicio[] {
    const datos = localStorage.getItem(this.clave);

    if (datos) {
      return JSON.parse(datos);
    }
    return [];
  }

  guardarServicio(servicio: Servicio): void {
    const servicios = this.obtenerServicios();
    servicios.push(servicio);
    localStorage.setItem(this.clave, JSON.stringify(servicios));
  }

  eliminarServicio(id: number): void {
    let servicios = this.obtenerServicios();
    servicios = servicios.filter(servicio => servicio.id !== id);
    localStorage.setItem(this.clave, JSON.stringify(servicios));
  }

  eliminarTodosLosServicios(): void {
    localStorage.removeItem(this.clave);
  }

}

export { ServiciosService as Servicios };

