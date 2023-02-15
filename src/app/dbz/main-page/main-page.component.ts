import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  // personajes: Personaje[] = []  //1ra forma de hacerlo
 

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000,
  };

  // get personajes() {    // 2da forma de hacerlo
  //   return this.dbzService.personajes;
  // }

  // agregarNuevoPersonaje(eventPersonaje: Personaje) {
  //   this.personajes.push(eventPersonaje);
  // }

  // constructor(private dbzService: DbzService) {
  //   // this.personajes = this.dbzService.personajes;  //1ra forma de hacerlo
  // }
}
