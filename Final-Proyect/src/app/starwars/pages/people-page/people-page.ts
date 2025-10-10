import { Component } from '@angular/core';
import { PeopleListPricipal } from "../../components/people-list-pricipal/people-list-pricipal";

@Component({
  selector: 'app-people-page',
  standalone: true,
  imports: [PeopleListPricipal],
  templateUrl: './people-page.html'
})
export default class PeoplePage {
 
}
