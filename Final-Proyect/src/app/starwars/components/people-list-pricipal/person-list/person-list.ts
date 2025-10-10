import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personaje } from 'src/app/starwars/interfaces/people-interfaces';


@Component({
  selector: 'person-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-list.html',
})
export class PersonListComponent {
  @Input() personajes: Personaje[] = [];
  @Output() borrar = new EventEmitter<string>();
}

