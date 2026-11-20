import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  protected readonly appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'home-outline' },
    { title: 'Servicios', url: 'servicios', icon: 'storefront-outline' },
    { title: 'Detalles', url: 'detalles', icon: 'information-circle-outline' },
    { title: 'Editar', url: 'editar', icon: 'create-outline' },
    { title: 'Mapa', url: 'mapa', icon: 'map-outline' },
    { title: 'Registrar servicio', url: 'registrar-servicios', icon: 'add-circle-outline' },
  ];
  protected readonly labels = [];
  constructor() {}
}
