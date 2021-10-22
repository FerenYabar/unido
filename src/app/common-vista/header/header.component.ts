import { AfterContentInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { cuenta } from '../../login/login-main/services/login.service';


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

 
  
  

}

