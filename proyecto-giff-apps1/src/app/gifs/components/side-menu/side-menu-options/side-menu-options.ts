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
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.html',
  styles: ``
})
export class SideMenuOptions {

  menuOptions: MenuOption[] = [
    {
      label: 'Trending', 
      subLabel: 'Gifs Populares',
      icon: 'fa-solid fa-chart-line', 
      route: '/dashboard/trending'
    },
    {
      label: 'Search', 
      subLabel: 'Buscador de Gifs',
      icon: 'fa-solid fa-magnifying-glass', 
      route: '/dashboard/search'
    }
  ]
}
