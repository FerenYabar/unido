import { Component, OnInit } from '@angular/core';

import { categorias, Categoria } from '../../modelo/categoria.class';



@Component({
  selector: 'app-categoria-main',
  templateUrl: './categoria-main.component.html',
  styleUrls: ['./categoria-main.component.css']
})
export class CategoriaMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  categorias:Categoria[]=categorias
}
