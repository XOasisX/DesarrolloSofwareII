import { Component, signal, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/core';
import { MovieService } from '../../services/movie-service';
import { Film } from '../../interfaces/movie-interface';


@Component({
  selector: 'star-movies-list',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './movies-list.html',
  styles: [`
    
    .starwars-crawl-effect {
      font-family: 'Inter', sans-serif; 
      color: #ffc400; 
      text-shadow: 1px 1px 2px #000;
      font-size: 1.1rem;
      line-height: 1.5;
      max-height: 300px;
      overflow-y: auto;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesListComponent implements OnInit {
 
  public movieService = inject(MovieService);
  public episodeId: number | null = null;
  
  public foundFilm = signal<Film | null>(null);
  public errorMessage = signal<string>('');

  ngOnInit(): void {
    
  }
  
  searchFilm(): void {
    this.errorMessage.set('');
    this.foundFilm.set(null); 

    if (!this.episodeId || this.episodeId < 1 || this.episodeId > 6) {
        this.errorMessage.set('Por favor, ingresa un número de episodio válido (1-6).');
        return;
    }

    const film = this.movieService.getFilmByEpisode(this.episodeId);

    if (film) {
        this.foundFilm.set(film);
    }
    
  }
}
