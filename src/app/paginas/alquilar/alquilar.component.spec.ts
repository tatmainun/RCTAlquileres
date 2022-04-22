import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { AlquilarComponent } from './alquilar.component';
import { ReservarService } from '../../servicios/reservar/reservar.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

class ReservarServiceMock {
  reservarDepartamento() {
    return true
  }
}

describe('AlquilarComponent', () => {
  let component: AlquilarComponent;
  let fixture: ComponentFixture<AlquilarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AlquilarComponent
      ],
      providers: [
        { provide: ReservarService, useClass: ReservarServiceMock }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlquilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('se deberia llamar al servicio de reserva al querer reservar', () => {
    const fixture = TestBed.createComponent(AlquilarComponent);

    const servicespy = getTestBed().inject(ReservarService);
    const a = spyOn(
      servicespy,
      'reservarDepartamento'
    ).and.returnValue(true);

    fixture.detectChanges();
    expect(a).toHaveBeenCalled();
  })
});
