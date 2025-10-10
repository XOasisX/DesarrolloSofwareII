import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonListComponent } from '../../components/people-list-pricipal/person-list/person-list';
import { PersonFormComponent } from './person-form/person-form';
import { StarWarsService } from '../../services/starwars.personajeServices';
import { Personaje } from 'src/app/starwars/interfaces/people-interfaces';  


@Component({
  selector: 'people-list-pricipal',
  imports: [
    CommonModule,
    PersonListComponent,
    PersonFormComponent
  ],
  templateUrl: './people-list-pricipal.html',
  styles: ``
})
export class PeopleListPricipal {
   personajes = signal<Personaje[]>([]);
  mostrarFormulario = signal(false);
  private starWarsService = inject(StarWarsService);

  constructor() {
    this.listarPersonajes();
  }

  listarPersonajes() {
    this.starWarsService.listarTodos().subscribe({
      next: (data) => this.personajes.set(data),
      error: (err) => console.error('Error al listar personajes:', err)
    });
  }

  verFormulario() {
    this.mostrarFormulario.update(v => !v);
  }

  agregarPersonajeLocal(personaje: Personaje) {
    this.starWarsService.agregarPersonajeLocal(personaje);
    this.listarPersonajes(); 
    this.mostrarFormulario.set(false); 
  }

  borrarPersonaje(nombre: string) {
    this.starWarsService.eliminarPersonajeLocal(nombre);
    this.listarPersonajes(); 
  }


}
