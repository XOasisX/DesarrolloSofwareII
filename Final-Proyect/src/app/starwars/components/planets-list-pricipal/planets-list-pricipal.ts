import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetaAleatorio } from './planeta-aleatorio/planeta-aleatorio';
import { Planeta, PlanetaService } from '../../services/starwars.planetaService';

@Component({
  selector: 'planets-list-pricipal',
  imports: [CommonModule, PlanetaAleatorio],
  templateUrl: './planets-list-pricipal.html',
  styles: ``
})
export class PlanetsListPricipal {
  planetaService = inject(PlanetaService);
  planetaActual: Planeta | null = null;
  error = '';

  obtenerNuevoPlaneta() {
    this.error = '';
    this.planetaService.obtenerPlanetaAleatorio().subscribe({
      next: (data) => {
        this.planetaActual = data;
      },
      error: () => {
        this.error = 'Error al obtener el planeta';
      },
    });
  }

}
