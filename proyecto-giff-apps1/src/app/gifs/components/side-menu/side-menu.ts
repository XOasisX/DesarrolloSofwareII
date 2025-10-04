import { Component } from '@angular/core';
import { SideMenuOptions } from "../../components/side-menu/side-menu-options/side-menu-options";
import { SideMenuHeader } from '../../components/side-menu/side-menu-header/side-menu-header';

@Component({
  selector: 'gifs-side-menu',
  imports: [
    SideMenuOptions,
    SideMenuHeader
  ],
  templateUrl: './side-menu.html',
  styles: ``
})
export class SideMenu {

}
