import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservarService {

  constructor() { }

  public reservarDepartamento(fechaDesde: String, fechaHasta:String): boolean {
    if(fechaDesde == '' || fechaHasta == '')
    {
      return false;
    }else{
    return true;
    }
  }
}
