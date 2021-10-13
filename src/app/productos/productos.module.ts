import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosMainComponent } from './productos-main/productos-main.component';



@NgModule({
  declarations: [
    ProductosMainComponent
  ],
  exports:[
    ProductosMainComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ProductosModule { }
