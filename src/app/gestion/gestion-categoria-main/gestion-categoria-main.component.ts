import { Component, OnInit } from '@angular/core';
import { Categoria, categorias } from '../../modelo/categoria.class';

@Component({
  selector: 'app-gestion-categoria-main',
  templateUrl: './gestion-categoria-main.component.html',
  styleUrls: ['./gestion-categoria-main.component.css']
})
export class GestionCategoriaMainComponent implements OnInit {

  constructor() { }
  nombreCategoria:String=""
  ngOnInit(): void {
  }
 categorias:Categoria[]=categorias
 
  agregar(){
    const nuevoCategoria:Categoria=new Categoria("C0"+(categorias.length+1),this.nombreCategoria)
    categorias.push(nuevoCategoria);
    
  }
  eliminacion:number[]=[]
  
  eliminar(){
    for(let i:number=0;this.eliminacion.length>i;i++){
      this.categorias.splice(this.eliminacion[i],1)
      
    }
    this.eliminacion=[]
   
  }
  

  
}

