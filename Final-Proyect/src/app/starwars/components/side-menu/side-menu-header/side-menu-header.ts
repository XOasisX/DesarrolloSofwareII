import { Component } from '@angular/core';
import { environment } from '@environments/environments';


@Component({
  selector: 'starwars-side-menu-header',
  imports: [],
  templateUrl: './side-menu-header.html',
  styles: ``
})
export class SideMenuHeader {
  envs = environment;
}
