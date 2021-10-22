import { AfterContentInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { cuenta, usuarioactivo } from '../../login/login-main/services/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(
  ) { 

  }
  cuentaactiva=cuenta

  ngOnInit(): void {
  }
  borrar(){
    console.log(usuarioactivo[0])
    usuarioactivo.splice(0,1)
    console.log(usuarioactivo[0])
  }
 
  
  

}

