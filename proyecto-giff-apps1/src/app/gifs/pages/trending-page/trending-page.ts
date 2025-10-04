import { Component, inject, signal } from '@angular/core';
import { GifList } from "../../components/gif-list/gif-list";
import { Gifs } from '../../services/gifs';



@Component({
  selector: 'app-trending-page',
  imports: [GifList],
  templateUrl: './trending-page.html',
  styles: ``
})
export default class TrendingPage {
  gifService = inject(Gifs);
}
