import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroUsuarioMainComponent } from './registro-usuario-main/registro-usuario-main.component';
import { ReversaMainComponent } from '../reversa/reversa-main/reversa-main.component';



@NgModule({
  declarations: [
    RegistroUsuarioMainComponent
  ],
  exports:[
    RegistroUsuarioMainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RegistroUsuarioModule { }
