import { Injectable } from '@angular/core';
import { Reserva, reservas } from '../modelo/reserva.class';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor() { 
    
  }

  reservas:Reserva[] = reservas;
  reservasEntregado:Reserva[]=[];
  reservasnoEntregado:Reserva[]=[];

  entregado(numero:number){
    this.reservasEntregado.unshift(this.reservasnoEntregado[numero])
    this.reservasnoEntregado.splice(numero,1);
    
  }
  revisarlista(){
    for (let i= 0; i< reservas.length; i++) {
      if(reservas[i].getestadoreserva){
          this.reservasEntregado.unshift(reservas[i]);
      }else{
        this.reservasnoEntregado.unshift(reservas[i])
      }
      
    }
  }
}
