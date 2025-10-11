import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SwapiFilmsResult, SwapiFilmResponse, Film } from '../interfaces/movie-interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environments';
import { FilmMapper } from '../mapper/film-mapper/film-mapper';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private http = inject(HttpClient);

  private allFilms = signal<Film[] | null>(null);
  public isLoading = signal<boolean>(false);
  
  public dataReady = this.allFilms;

  constructor() {
    this.fetchFilms();
  }

  private fetchFilms(): void {
    this.isLoading.set(true);
    this.http.get<SwapiFilmsResult>(`${environment.urlBaseStarwars}/films`,{})
      .subscribe({
        next: (response) => {
          const films = FilmMapper.mapSwapiFilmsToFilms(response.results);
          
          this.allFilms.set(films.sort((a, b) => a.episodio - b.episodio));
          this.isLoading.set(false);
        },
        error: (err) => {
          console.error('Error al cargar las películas de SWAPI:', err);
          this.isLoading.set(false);
        }
      });
  }
  getFilmByEpisode(episodeId: number): Film | null {
    const films = this.allFilms();
    if (!films) {
      return null;
    }
    const found = films.find(film => film.episodio === episodeId);
    return found || null;
  }
}
