import { Component } from '@angular/core';

// se importa la interfaz que se creó en shared
import { Tarea } from 'src/app/shared/interfaces/tarea';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // Arreglo de tareas. Otra manera de definirlo -> tareas: Tarea[] = []
  tareas: Array<Tarea> = [];
  
  // Simular que obtengo datos de un API
  cargando: boolean = false;

  constructor() {
    this.cargando = true;
    setTimeout(() => {
      this.tareas = [
        {
          titulo: "Tarea 1",
          descripcion: "Esta es una descripción",
          status: "Nueva"
        },
        {
          titulo: "Tarea 2",
          descripcion: "Esta es una descripción x2",
          status: "Nueva"
        },
        {
          titulo: "Tarea 3",
          descripcion: "Esta es una descripción x3",
          status: "Nueva"
        }
    ];
    this.cargando = false;
    }, 3000);
  }

}
