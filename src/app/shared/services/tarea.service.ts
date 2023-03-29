import { Injectable } from '@angular/core';
// Importamos el módulo para usar el Http
import { HttpClient } from '@angular/common/http';
//
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  // 

  constructor(private httpClient: HttpClient) { }

  // Este es un observable (está esperando los datos, del mismo modo que en una promesa)
  getTareas() {
    const url: string = environment.apiUrl + 'todos';
    return this.httpClient.get(url);
  }
  // Promesa que se usa en el componente de tareas
  /*
  getTareas() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {titulo: 'Tarea 1'}
        ]);
      }, 1000);
    })
  }
  */
}
