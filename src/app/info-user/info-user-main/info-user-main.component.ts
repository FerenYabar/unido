import { Component, OnInit } from '@angular/core';
import { Usuario, usuarios } from 'src/app/modelo/usuario.class';


@Component({
  selector: 'app-info-user-main',
  templateUrl: './info-user-main.component.html',
  styleUrls: ['./info-user-main.component.css']
})
export class InfoUserMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  usuarios: Usuario[] = usuarios;

}
