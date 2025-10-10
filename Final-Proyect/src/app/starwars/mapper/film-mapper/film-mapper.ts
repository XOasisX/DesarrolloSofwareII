import { Film } from '../../interfaces/movie-interface';
import { SwapiFilmResponse } from '../../interfaces/movie-interface';

export class FilmMapper {
  static mapSwapiFilmToFilm (Item: SwapiFilmResponse): Film {
    return {
      episodio: Item.episode_id,
      titulo: Item.title,
      director: Item.director,
      textoApertura: Item.opening_crawl
    }
  }

  static mapSwapiFilmsToFilms (Items: SwapiFilmResponse[]): Film[] {
    return Items.map(this.mapSwapiFilmToFilm);
  }
}
