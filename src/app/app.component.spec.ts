import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReservarService } from './servicios/reservar/reservar.service';

class ReservarServiceMock {
  reservarDepartamento() {
    return true
  }
}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: ReservarService, useClass: ReservarServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'rctalquileres'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('rctalquileres');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('rctalquileres app is running!');
  });

  fit('se deberia llamar al servicio de reserva al querer reservar', () => {
    spyOn(component, 'reservarDepto');
    fixture.detectChanges();
    expect(component.reservarDepto).toHaveBeenCalled();

    // const reservarDepartamento = spyOn(ReservarService, 'reservarDepartamento').and.returnValue(true);
    // expect(reservarDepartamento).toHaveBeenCalled();
  })
});
