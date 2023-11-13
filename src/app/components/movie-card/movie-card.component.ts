import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/modules/movie-list.module';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() movie!: Movie;

  getVoteAverageFormated() {
    return this.movie.vote_average.toFixed(1);
  }
  getVoteAverageFormatedPercent() {
    return this.movie.vote_average * 10;
  }

  getPosterImg() {
    return (`https://www.themoviedb.org/t/p/w200/${this.movie.poster_path}`)
  }

}
