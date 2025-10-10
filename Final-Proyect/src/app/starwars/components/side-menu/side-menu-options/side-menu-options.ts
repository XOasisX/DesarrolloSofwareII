import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from "@angular/router";


interface MenuOption{
  label: string;
  subLabel: string;
  icon: string;
  route: string;
}
@Component({
  selector: 'starwars-side-menu-options',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './side-menu-options.html',
  styles: ``
})
export class SideMenuOptions {

   menuOptions: MenuOption[] = [
    {
      label: 'personajes', 
      subLabel: 'Personajes de Star Wars',
      icon: 'fa-solid fa-chart-line', 
      route: '/dashboard/people'
    },
    {
      label: 'películas', 
      subLabel: 'Películas de Star Wars',
      icon: 'fa-solid fa-magnifying-glass', 
      route: '/dashboard/movies'
    },
     {
      label: 'planetas', 
      subLabel: 'Planetas de Star Wars',
      icon: 'fa-solid fa-magnifying-glass', 
      route: '/dashboard/planets'
    }
  ]
}
