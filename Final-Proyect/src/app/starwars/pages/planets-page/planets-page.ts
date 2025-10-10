import { Component } from '@angular/core';
import { PlanetsListPricipal } from "../../components/planets-list-pricipal/planets-list-pricipal";


@Component({
  selector: 'app-planets-page',
  standalone: true,
  imports: [PlanetsListPricipal],
  templateUrl: './planets-page.html'
})
export default class PlanetsPage {
  
}
