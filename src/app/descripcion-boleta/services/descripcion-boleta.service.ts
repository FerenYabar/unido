import { Injectable } from '@angular/core';
import { DetalleReserva, detallesreservas } from 'src/app/modelo/detallereserva.class';
import { productos } from '../../modelo/producto.class';

@Injectable({
  providedIn: 'root'
})
export class descripcionboletaService {

  constructor() { 
    
  }

  detallesreservas:DetalleReserva[]=detallesreservas;
  productos= this.detallesreservas.filter(elemen => elemen.getReservas.getcodReserva=="R0001");
  
  get getproductos():DetalleReserva[]{
    const detallesreservas= this.detallesreservas.filter(elemen => elemen.getReservas.getcodReserva=="R0001"); 
    return detallesreservas

        
}

  total(detallereserva:DetalleReserva[]):number{
    let cant:number=0
    detallereserva.forEach(element => {
    cant = cant+(element.getproductoDetalleReserva.getprecioproductolocal*element.getcantiaddDEtalleReserva) 
    }); 
    return cant
  }
}
