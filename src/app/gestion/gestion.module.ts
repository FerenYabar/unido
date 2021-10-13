import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionCategoriaMainComponent } from './gestion-categoria-main/gestion-categoria-main.component';
import { GestionProductoMainComponent } from './gestion-producto-main/gestion-producto-main.component';
import { GestionMarcaMainComponent } from './gestion-marca-main/gestion-marca-main.component';
import { GestionProveedorMainComponent } from './gestion-proveedor-main/gestion-proveedor-main.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GestionCategoriaMainComponent,
    GestionProductoMainComponent,
    GestionMarcaMainComponent,
    GestionProveedorMainComponent,
    
  ],
  exports:[
    GestionCategoriaMainComponent,
    GestionProductoMainComponent,
    GestionMarcaMainComponent,
    GestionProveedorMainComponent
  ],
  imports: [
    CommonModule,FormsModule
  ]
})
export class GestionModule { }
