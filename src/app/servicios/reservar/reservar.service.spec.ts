import { TestBed } from '@angular/core/testing';

import { ReservarService } from './reservar.service';

describe('ReservarService', () => {
  let service: ReservarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería poder reservar el depto', () => {
    let fechaDesde = '2022-03-29';
    let fechaHasta = '2022-03-30';
    const reserva = service.reservarDepartamento(fechaDesde, fechaHasta);
    expect(reserva).toBeTruthy();
  });

  it('no deberías poder reservar el depto sin fechas', () => {
    let fechaDesde = '';
    let fechaHasta = '';
    const reserva = service.reservarDepartamento(fechaDesde, fechaHasta);
    expect(reserva).toBeFalsy();
  });
});
