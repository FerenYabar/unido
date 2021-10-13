import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaMainComponent } from './categoria-main/categoria-main.component';



@NgModule({
  declarations: [
    CategoriaMainComponent
  ],
  exports:[
    CategoriaMainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CategoriaModule { }
