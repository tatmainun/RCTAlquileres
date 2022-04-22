import { Component, OnInit, Input } from '@angular/core';
import { ReservarService } from '../../servicios/reservar/reservar.service';

@Component({
  selector: 'app-alquilar',
  templateUrl: './alquilar.component.html',
  styleUrls: ['./alquilar.component.css']
})
export class AlquilarComponent implements OnInit {

  @Input()
  private fechaDesde: String = "";

  @Input()
  private fechaHasta: String = "";

  constructor(private reservarService: ReservarService) { }

  ngOnInit(): void {
    this.reservarDepto();
  }

  public reservarDepto(): void {
    this.reservarService.reservarDepartamento(this.fechaDesde, this.fechaHasta);
  }

}
