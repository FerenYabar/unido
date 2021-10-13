import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescripcionBoletaMainComponent } from './descripcion-boleta-main/descripcion-boleta-main.component';



@NgModule({
  declarations: [
    DescripcionBoletaMainComponent
  ],
  exports:[
    DescripcionBoletaMainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DescripcionBoletaModule { }
