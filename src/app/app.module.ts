import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { CodigoQrModule } from './codigo-qr/codigo-qr.module';
import { InfoUserModule } from './info-user/info-user.module';
import { ProductosModule } from './productos/productos.module';
import { ReversaModule } from './reversa/reversa.module';

import { CategoriaModule } from './categoria/categoria.module';
import { DescripcionBoletaModule } from './descripcion-boleta/descripcion-boleta.module';
import { RegistroUsuarioModule } from './registro-usuario/registro-usuario.module';
import { EntregaPedidosModule } from './entrega-pedidos/entrega-pedidos.module';
import { GestionModule } from './gestion/gestion.module';
import { GestionDistribuidorModule } from './gestion-distribuidor/gestion-distribuidor.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  // exports:[
  //   CodigoQrComponent,
  //   PageTragosComponent
  // ],
  imports: [
    BrowserModule,
    LoginModule,
    CodigoQrModule,
    InfoUserModule,
    ProductosModule,
    ReversaModule,
    CategoriaModule,
    DescripcionBoletaModule,
    RegistroUsuarioModule,
    EntregaPedidosModule,
    GestionModule,
    GestionDistribuidorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
