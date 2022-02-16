import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsuariosComponent } from './Components/Usuarios/lista-usuarios/lista-usuarios.component';
import {HttpClientModule} from '@angular/common/http';
import { RegistrarUsuarioComponent } from './Components/Usuarios/registrar-usuario/registrar-usuario.component';
import { FormsModule } from '@angular/forms';
import { ActualizarUsuarioComponent } from './Components/Usuarios/actualizar-usuario/actualizar-usuario.component';
import { UsuarioDetallesComponent } from './Components/Usuarios/usuario-detalles/usuario-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    RegistrarUsuarioComponent,
    ActualizarUsuarioComponent,
    UsuarioDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
