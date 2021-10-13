import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginMainComponent } from './login-main/login-main.component';



@NgModule({
  declarations: [
    LoginMainComponent
  ],
  exports:[
    LoginMainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
