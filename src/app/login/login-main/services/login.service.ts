import { Injectable } from '@angular/core';
import { usuarios, Usuario } from 'src/app/modelo/usuario.class';
import { Router } from '@angular/router';
import { locales } from '../../../modelo/local.class';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private route:Router) { }
  Usuario:String=''
  Contrasena:String=''
  
  

  Validacion(usuario:String,contrasena:String):Boolean{
    if(usuarios.filter(elemen => (elemen.getusuariousuario==usuario && elemen.getconstraseñaUsuario==contrasena)).length!=0){
      cuenta=[usuario,contrasena,'0']
      return true
    }
    if (locales.filter(elemen => (elemen.getrucLocal==usuario && elemen.getcontraseña==contrasena)).length!=0) {
      cuenta=[usuario,contrasena,'1']
      return true
    } if(usuario=='admin' && contrasena=='123') {
      cuenta=[usuario,contrasena,'2']
      return true
    }
    else{
      return false
    }
}

  ingresar():void{   
    if(this.Validacion(this.Usuario,this.Contrasena)){
      this.route.navigate(['categorias'])
    }
    else{
      alert('Invalido el usuario y contraseña')
    }
  }
}
export let cuenta:String[]=[]
