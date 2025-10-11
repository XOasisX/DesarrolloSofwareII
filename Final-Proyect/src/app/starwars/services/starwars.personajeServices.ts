import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personaje } from '../interfaces/people-interfaces';
import { PeopleMapper } from '../mapper/people-mapper/people-mapper';
import { environment } from '@environments/environments';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private http = inject(HttpClient);
  private localKey = 'personajes_local';

  constructor() {}

  getPersonajes(): Observable<any> {
    return this.http.get(`${environment.urlBaseStarwars}/people/`);
  }


  getPersonajesLocal(): Personaje[] {
    const data = localStorage.getItem(this.localKey);
    return data ? JSON.parse(data) : [];
  }

  agregarPersonajeLocal(personaje: Personaje): void {
    const actuales = this.getPersonajesLocal();
    actuales.push(personaje);
    localStorage.setItem(this.localKey, JSON.stringify(actuales));
  }


  eliminarPersonajeLocal(nombre: string): void {
    const actuales = this.getPersonajesLocal();
    const filtrados = actuales.filter(p => p.name !== nombre);
    localStorage.setItem(this.localKey, JSON.stringify(filtrados));
  }

  listarTodos(): Observable<Personaje[]> {
    return new Observable((observer) => {
      this.getPersonajes().subscribe({
        next: (data) => {

          const apiPersonajes = PeopleMapper.mapPersonajes(data.results);

          const locales = this.getPersonajesLocal();
          observer.next([...apiPersonajes, ...locales]);
          observer.complete();
        },
        error: (err) => observer.error(err)
      });
    });
  }
}
