// Angular
import { Component } from '@angular/core';

// Aquí podrían ir los del 3rd party

// Propios
import { Tarea } from 'src/app/shared/interfaces/tarea';
import { TareaService } from 'src/app/shared/services/tarea.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent {

  // Declaración de propiedades
  tareas: Array<Tarea> = [];
    // Término que se va a buscar (vinculación con input en html)
    buscar: string = "";
    // Arreglo para buscar
    tareasFiltradas: Array<Tarea> = [];

  // Constructor
  constructor(private tareaService: TareaService) {
    this.traerTareas();
  }

  // Aquí se asigno como propiedad
  traerTareas () {
    this.tareaService.getTareas().subscribe((response: any) => {
      this.tareas = response;
      this.tareasFiltradas = this.tareas; // Aquí solo es un "apuntador" a las tareas 
    });
  }

  // Binding de evento
  filtrar() {
    console.log('*clic*', this.buscar);
    const buscar = this.buscar.toLowerCase();
    this.tareasFiltradas =this.tareas.filter((item) => { 
      return item.title?.toLowerCase().includes(buscar);
    });
  }

  // Para que cuando se de enter también busque
  detectarEnter(event: KeyboardEvent) {
    if(event.key === "Enter") {
      this.filtrar;
    }
  }

}
