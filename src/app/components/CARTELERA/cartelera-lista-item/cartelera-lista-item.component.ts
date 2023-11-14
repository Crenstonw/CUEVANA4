import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/modules/movie-list.module';
import { Serie } from 'src/app/modules/serie-list.module';

import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-cartelera-lista-item',
  templateUrl: './cartelera-lista-item.component.html',
  styleUrls: ['./cartelera-lista-item.component.css']
})
export class CarteleraListaItemComponent {
  @Input() moviesorserie!: Serie|Movie;

  getImg() {
    return `${environment.Photoheader}/${this.moviesorserie.poster_path}`
  }

  getVoteAverageFormated() {
    return this.moviesorserie.vote_average.toFixed(1);
  }
  getVoteAverageFormatedPercent() {
    return this.moviesorserie.vote_average * 10;
  }
  getTitle(){
    if (this.isMovie(this.moviesorserie)){
      return this.moviesorserie.title
    }else{
      return this.moviesorserie.name
    }

  }
  private isMovie(obj: Serie | Movie): obj is Movie {
    return (obj as Movie).title !== undefined;
  }
}
