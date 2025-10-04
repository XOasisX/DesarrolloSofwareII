import { Component, inject, effect, signal } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from "../../components/dragonball/character-add/character-add";
import { DragonballService } from '../../services/dragonball';



@Component({
  templateUrl: './dragonballsuper-component.html',
  imports: [
    CharacterList,
    CharacterAdd
],

})

export class DragonBallSuperComponent {
  public DragonballService = inject(DragonballService);
 

}