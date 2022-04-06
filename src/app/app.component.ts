import { Component, Input, OnInit } from '@angular/core';
import { ReservarService } from './servicios/reservar/reservar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  @Input()
  private fechaDesde: String = "";

  @Input()
  private fechaHasta: String = "";

  constructor(private reservarService: ReservarService){}

  ngOnInit(): void {
    this.reservarDepto();
  }

  public reservarDepto():void {
    this.reservarService.reservarDepartamento(this.fechaDesde, this.fechaHasta);
  }

  title = 'rctalquileres';
}
