import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Personaje } from 'src/app/starwars/interfaces/people-interfaces';

@Component({
  selector: 'person-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './person-form.html',
})
export class PersonFormComponent {
  @Output() nuevoPersonaje = new EventEmitter<Personaje>();

  nuevo: Personaje = {
    name: '',
    gender: '',
    birth_year: ''
  };

  enviarFormulario() {
    this.nuevoPersonaje.emit(this.nuevo);
    this.nuevo = { name: '', gender: '', birth_year: '' };
  }
}
