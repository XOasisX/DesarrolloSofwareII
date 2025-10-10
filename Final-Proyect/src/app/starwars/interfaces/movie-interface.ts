// 1. Interfaz para la respuesta individual del API (solo los campos que nos interesan)
export interface SwapiFilmResponse {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
}

// 2. Interfaz para la respuesta completa del API
export interface SwapiFilmsResult {
    results: SwapiFilmResponse[];
}

// 3. Interfaz para los datos transformados
export interface Film {
  episodio: number;
  titulo: string;
  director: string;
  textoApertura: string;
}
