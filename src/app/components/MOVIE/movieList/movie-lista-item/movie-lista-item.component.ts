import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/modules/movie-list.module';
import { AuthenticationService } from 'src/app/service/authentication.interface';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-movie-lista-item',
  templateUrl: './movie-lista-item.component.html',
  styleUrls: ['./movie-lista-item.component.css']
})
export class MovieListaItemComponent {
  @Input() movie!: Movie;

  constructor(private router: Router, private authService: AuthenticationService) { };

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

  userAccess() {
    if(localStorage.getItem('SESSION_ID')!=undefined)
      return true;
    else
      return false;
  }

  addFavorite() {
    this.authService.addFavorite(this.movie, 'movie').subscribe(m => {
      if(m.status_code == 1) {
        alert('Película agregada con éxito a favoritos')
      } else if(m.status_code == 12) {
        alert('Esta película ya estaba añadida a favoritos')
      }
    })
  }

  addWatchlist() {
    this.authService.addWatchlist(this.movie, 'movie').subscribe(m => {
      if(m.status_code == 1) {
        alert('Película agregada con éxito a watchlist')
      } else if(m.status_code == 12) {
        alert('Esta película ya estaba añadida  a watchlist')
      }
    })
  }

}
