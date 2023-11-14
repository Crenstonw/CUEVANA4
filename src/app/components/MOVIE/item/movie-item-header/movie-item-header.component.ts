import { Component, Input } from '@angular/core';
import { MovieDetailsResponse } from 'src/app/modules/movie-detatils.module';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-movie-item-header',
  templateUrl: './movie-item-header.component.html',
  styleUrls: ['./movie-item-header.component.css']
})
export class MovieItemHeaderComponent {
  @Input() movie!: MovieDetailsResponse

  getImg() {
    return `${environment.Photoheader}/${this.movie.poster_path}`
  }

  getImgBackground() {
    return `${environment.Photoheader}/${this.movie.backdrop_path}`
  }
  getVoteAverageFormated() {
    return this.movie.vote_average.toFixed(1);
  }
  getVoteAverageFormatedPercent() {
    return this.movie.vote_average * 10;
  }

}
