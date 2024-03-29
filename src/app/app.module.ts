import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciosesionComponent } from './components/iniciosesion/iniciosesion.component';
import { HomeComponent } from './components/home/home.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { AplicacionesComponent } from './components/aplicaciones/aplicaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciosesionComponent,
    HomeComponent,
    UsuariosComponent,
    AplicacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
