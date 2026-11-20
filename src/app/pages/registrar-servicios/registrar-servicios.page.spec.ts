import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarServiciosPage } from './registrar-servicios.page';

describe('RegistrarServiciosPage', () => {
  let component: RegistrarServiciosPage;
  let fixture: ComponentFixture<RegistrarServiciosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarServiciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
