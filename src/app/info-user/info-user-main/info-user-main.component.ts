import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelo/usuario.class';
import { cuenta, usuarioactivo, localactivo } from '../../login/login-main/services/login.service';
import { Local } from '../../modelo/local.class';


@Component({
  selector: 'app-info-user-main',
  templateUrl: './info-user-main.component.html',
  styleUrls: ['./info-user-main.component.css']
})
export class InfoUserMainComponent implements OnInit {

  constructor(
  ) {
   }

  ngOnInit(): void {
  }
  cuentaactiva=cuenta;
  
  usuario=usuarioactivo[0];
  local:Local=localactivo[0];

  
}
