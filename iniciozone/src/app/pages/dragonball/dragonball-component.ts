import { NgClass } from '@angular/common';
import { Component, computed, signal} from '@angular/core';
import { NgModule } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-component.html',
  imports: [
    NgClass
  ],

})

export class DragonBallComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9500 },
    { id: 2, name: 'Vegeta', power: 8500 },
    { id: 3, name: 'Bulma', power: 7000 },
    { id: 4, name: 'Piccolo', power: 500 }
  ]);

  powerClass= computed(() => {
    return {
      'text-danger': true,
    };
  });

  addCharacter(){
    if(!this.name() && !this.power() && this.power() < 0){
      return;
    }
     
    const newCharacter={
      id: this.characters.length +1,
      name: this.name(),
      power: this.power(),
    }


    //const newListCharacter = [...this.characters(), newCharacter];
    //this.characters().push(newCharacter);
    this.characters.update((list => [...list, newCharacter]));
    this.resetFields();
  }

  resetFields(){
    this.name.set('')
    this.power.set(0)
  }

}