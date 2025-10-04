import { effect, Injectable, signal  } from '@angular/core';
import type { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
}

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    //console.log(`character Count ${this.characters().length}`);
    localStorage.setItem('characters', JSON.stringify(this.characters()));
    //localStorage.removeItem('characters');
    })



  addCharacter (character: Character){
    this.characters.update(list => [...list, character]);
  }
}
