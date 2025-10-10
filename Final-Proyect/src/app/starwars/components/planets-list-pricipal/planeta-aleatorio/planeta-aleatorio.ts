import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Planeta } from '../../../services/starwars.planetaService';

@Component({
  selector: 'planeta-aleatorio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planeta-aleatorio.html'
})
export class PlanetaAleatorio {
  @Input() planeta: Planeta | null = null;
  @Input() error: string = '';
}

