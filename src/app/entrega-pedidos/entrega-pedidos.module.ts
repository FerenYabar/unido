import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntregaPedidosMainComponent } from './entrega-pedidos-main/entrega-pedidos-main.component';



@NgModule({
  declarations: [
    EntregaPedidosMainComponent
  ],
  exports:[
    EntregaPedidosMainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EntregaPedidosModule { }
