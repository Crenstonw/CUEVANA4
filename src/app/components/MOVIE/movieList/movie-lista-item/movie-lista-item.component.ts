import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/modules/movie-list.module';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-movie-lista-item',
  templateUrl: './movie-lista-item.component.html',
  styleUrls: ['./movie-lista-item.component.css']
})
export class MovieListaItemComponent {

  @Input() movie!: Movie;

  constructor(private router: Router) { };

  getImg() {
    return `${environment.Photoheader}/${this.movie.poster_path}`
  }

  getVoteAverageFormated() {
    return this.movie.vote_average.toFixed(1);
  }
  getVoteAverageFormatedPercent() {
    return this.movie.vote_average * 10;
  }

  redirectToDetails(movie: Movie) {
    this.router.navigate(['movie/', movie.id]);
  }

}
