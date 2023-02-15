import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  //Este componente sólo debe emitir el evento agregar
  //pero no debe hacer la inserción

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter(); //Por el servicio lo sustituimos

  constructor(private dbzService: DbzService) {}

  agregar() {
    // event.preventDefault(); //Prevenir el refresh de manera tradicional
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    console.log(this.nuevo, 'en componente hijo');
    // this.onNuevoPersonaje.emit(this.nuevo)
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }

  cambiarNombre(event: any) {
    //Forma de hacerlo con un (input)
    console.log(event.target.value);
  }
}
