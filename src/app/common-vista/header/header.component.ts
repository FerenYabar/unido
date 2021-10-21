import { Component, OnInit } from '@angular/core';
import { cuenta } from '../../login/login-main/services/login.service';
import { LoginModule } from '../../login/login.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(loginmodule: LoginModule) { }

  ngOnInit(): void {

  }
  cuentaactiva:String[]=cuenta

}

