import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversaMainComponent } from './reversa-main/reversa-main.component';



@NgModule({
  declarations: [
    ReversaMainComponent
  ],
  exports:[
    ReversaMainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReversaModule { }
