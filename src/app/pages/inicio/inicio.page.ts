import { Component, OnInit } from '@angular/core';
import { Servicio } from '../../models/servicio.model';
import { ServiciosService } from '../../services/servicios';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false,
})
export class InicioPage implements OnInit {

  destacados: Servicio[] = [];

  constructor(private serviciosService: ServiciosService) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.destacados = this.serviciosService.obtenerServicios()
      .filter((servicio: Servicio) => servicio.recomendado)
      .slice(0, 2);
  }
}
