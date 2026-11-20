import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular/lazy';

import { Geolocation } from '@capacitor/geolocation';

import { Servicio } from '../../models/servicio.model';
import { Servicios } from '../../services/servicios';

@Component({
  selector: 'app-registrar-servicios',
  templateUrl: './registrar-servicios.page.html',
  styleUrls: ['./registrar-servicios.page.scss'],
  standalone: false,
})
export class RegistrarServiciosPage {

  nombre: string = '';
  categoria: string = '';
  descripcion: string = '';
  direccion: string = '';
  telefono: string = '';
  horario: string = '';
  recomendado: boolean = false;
  fecha: string = new Date().toISOString().split('T')[0];

  latitud: number | null = null;
  longitud: number | null = null;
  precision: number | null = null;

  foto: string | null = null;

  constructor(
    private router: Router,
    private serviciosService: Servicios,
    private alertController: AlertController,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
  }

  async obtenerUbicacion() {
    const loading = await this.loadingController.create({ message: 'Obteniendo ubicación...' });
    await loading.present();

    try {
      let permisos = await Geolocation.checkPermissions();

      if (permisos.location !== 'granted') {
        permisos = await Geolocation.requestPermissions();
      }

      if (permisos.location !== 'granted' && permisos.coarseLocation !== 'granted') {
        await loading.dismiss();
        await this.mostrarAlerta('Permiso requerido', 'Debes permitir el acceso a la ubicación para obtener las coordenadas.');
        return;
      }

      const posicion = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0
      });

      this.latitud = posicion.coords.latitude;
      this.longitud = posicion.coords.longitude;
      this.precision = posicion.coords.accuracy;

      await loading.dismiss();
      await this.mostrarToast('Ubicación obtenida correctamente.', 'success');
    } catch (error) {

      await loading.dismiss();
      console.error(error);

      await this.mostrarAlerta('Error Fatal', 'No se pudo obtener la ubicación. Verifica que el GPS esté activado y que hayas concedido los permisos.');
    }
  }


  //Funcion Toast
  async mostrarToast(
    message: string,
    color: string
  ){
    const toast = await this.toastController.create({
      message: message,
      duration: 5000,
      color: color, position: 'bottom'
    });
    await toast.present();
  }

  //Funcion Alert
  async mostrarAlerta(
    titulo: string,
    mensaje: string
  ){
    const alert = await this.alertController.create({header: titulo, message: mensaje, buttons:['Aceptar']});
    await alert.present();
  }


}
