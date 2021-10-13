import { Component, OnInit } from '@angular/core';
import { productoslocal, ProductoLocal } from '../../modelo/productolocal.class';

@Component({
  selector: 'app-productos-main',
  templateUrl: './productos-main.component.html',
  styleUrls: ['./productos-main.component.css']
})
export class ProductosMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 productoslocal:ProductoLocal[]= productoslocal;
}
// console.log(productoslocal[0].producto.getimagenproducto())