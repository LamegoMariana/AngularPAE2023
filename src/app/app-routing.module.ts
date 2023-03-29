import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


import { TareasComponent } from './pages/tareas/tareas.component';
import {RegistroComponent } from './pages/registro/registro.component';

// Para manejar rutas
const routes: Routes = [
  {path: '', component: HomeComponent}, // Ruta para home
  // Cuando el path sea tareas se carga el componente de Tareas
  {path: 'tareas', component: TareasComponent},
  // La pregunta ¿En dónde? no se responde aquí, se pone en el app.component.html en <router-outlet></router-outlet>
  {path: 'registro', component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
