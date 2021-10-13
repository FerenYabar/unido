import { Component, OnInit } from '@angular/core';
import { reservas, Reserva } from '../../modelo/reserva.class';

@Component({
  selector: 'app-entrega-pedidos-main',
  templateUrl: './entrega-pedidos-main.component.html',
  styleUrls: ['./entrega-pedidos-main.component.css']
})
export class EntregaPedidosMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.revisarlista();

  }

  reservas:Reserva[]=reservas;
  reservasEntregado:Reserva[]=[];
  reservasnoEntregado:Reserva[]=[];
  


  entregado(numero:number){
    this.reservasEntregado.unshift(this.reservasnoEntregado[numero])
    this.reservasnoEntregado.splice(numero,1);
    
  }
  revisarlista(){
    for (let i= 0; i< reservas.length; i++) {
      if(reservas[i].getestadoreserva()){
          this.reservasEntregado.unshift(reservas[i]);
      }else{
        this.reservasnoEntregado.unshift(reservas[i])
      }
      
    }
  }

}
