import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoDistribuidorMainComponent } from './producto-distribuidor-main/producto-distribuidor-main.component';



@NgModule({
  declarations: [
    ProductoDistribuidorMainComponent
  ],
  exports:[
    ProductoDistribuidorMainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GestionDistribuidorModule { }
