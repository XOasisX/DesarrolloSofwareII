import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';

@Injectable({
  providedIn: 'root'
})

export class Gifs {
  
  private http = inject(HttpClient);
  trandingGifs = signal<Gif[]>([]);

  constructor() { 
    this.LoadTendingGifs();
  }

  LoadTendingGifs() {
    this.http.get<GiphyResponse>(`${environment.urlBase}/gifs/trending`, {
      params: {
        api_key: environment.apiKey,
        limit: 40
      }
    }).subscribe((Response) => {
      console.log(Response.data[0].images);
      const gifs = GifMapper.mapGiphyItemsToGifArray(Response.data);
      this.trandingGifs.set(gifs);
      console.log(gifs);
    });
  }
}
