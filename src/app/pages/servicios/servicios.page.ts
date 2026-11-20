import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular/lazy';
import { Servicio } from '../../models/servicio.model';
import { Servicios } from '../../services/servicios';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
  standalone: false,
})
export class ServiciosPage {

  textoBuscar = '';
  servicios: Servicio[] = [];

  constructor(private serviciosService: Servicios,
    private alertController: AlertController,
    private toastController: ToastController
  ) { }

  ionViewWillEnter() {
    this.cargarServicios();
  }

  cargarServicios() {
    this.servicios = this.serviciosService.obtenerServicios();
  }

  get serviciosFiltrados(): Servicio[] {
    const texto = this.textoBuscar.trim().toLocaleLowerCase();

    return this.servicios.filter(servicio =>
      servicio.nombre.toLocaleLowerCase().includes(texto) ||
      servicio.categoria.toLocaleLowerCase().includes(texto) ||
      servicio.descripcion.toLocaleLowerCase().includes(texto)
    );
  }
}
