import { Component } from '@angular/core';

//
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})

export class RegistroComponent {

  formRegistro: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.formRegistro = formBuilder.group({
      nombre: ["", Validators.required],
      correo: ["", [Validators.required, Validators.email]],
      contra: "",
      confirmar: "",
      aceptar: [false, Validators.requiredTrue]
    });
  } 

}
