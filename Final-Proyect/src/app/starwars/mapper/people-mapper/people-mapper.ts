import { Personaje } from 'src/app/starwars/interfaces/people-interfaces';  

export class PeopleMapper {
  static mapPersonaje(personaje: any): Personaje {
    return {
      name: personaje.name,
      gender: personaje.gender,
      birth_year: personaje.birth_year
    }
  }

  static mapPersonajes(personajes: any[]): Personaje[] {
    return personajes.map(this.mapPersonaje);
  }
}