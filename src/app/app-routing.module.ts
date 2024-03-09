import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciosesionComponent } from './components/iniciosesion/iniciosesion.component';
import { HomeComponent } from './components/home/home.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { AplicacionesComponent } from './components/aplicaciones/aplicaciones.component';

const routes: Routes = [
  { path: '', component:  IniciosesionComponent},
  { path: 'home', component:  HomeComponent},
  { path:'usuarios', component: UsuariosComponent},
  { path:'aplicaciones', component: AplicacionesComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
