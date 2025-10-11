import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environments';
import { Planeta } from '../interfaces/planets-interfaces';

@Injectable({
  providedIn: 'root'
})
export class PlanetaService {
  private http = inject(HttpClient);


  obtenerPlanetaAleatorio(): Observable<Planeta> {
    const randomId = Math.floor(Math.random() * 60) + 1; 
    return this.http.get<Planeta>(`${environment.urlBaseStarwars}/planets/${randomId}/`);
  }
}
