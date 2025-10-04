import { Component, output, signal } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';


@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.html',
  styles: ``
})
export class CharacterAdd {
name = signal('');
power = signal(0);

newCharacter = output<Character>();


 addCharacter(){
    if(!this.name() || !this.power() || this.power() < 0){
      return;
    }
     
    const newObjectCharacter: Character ={
      id: Math.floor(Math.random() * 1000), //this.characters.length +1,
      name: this.name(),
      power: this.power(),
    }
    //const newListCharacter = [...this.characters(), newCharacter];
    //this.characters().push(newCharacter);
    //this.characters.update((list => [...list, newCharacter]));
    //console.log(newCharacter);
    this.newCharacter.emit(newObjectCharacter);
    this.resetFields();
  }

  resetFields(){
    this.name.set('')
    this.power.set(0)
  }
}
