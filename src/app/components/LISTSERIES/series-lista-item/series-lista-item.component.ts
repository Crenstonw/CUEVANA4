import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Serie } from 'src/app/modules/serie-list.module';
import { AuthenticationService } from 'src/app/service/authentication.interface';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-series-lista-item',
  templateUrl: './series-lista-item.component.html',
  styleUrls: ['./series-lista-item.component.css']
})
export class SeriesListaItemComponent {
  @Input() serie!: Serie;

<<<<<<< HEAD:src/app/components/SERIES/series-lista-item/series-lista-item.component.ts
  constructor(private router: Router, private authService: AuthenticationService) { };
=======
  constructor(private router: Router) { };
>>>>>>> main:src/app/components/LISTSERIES/series-lista-item/series-lista-item.component.ts

  getImg() {
    return `${environment.Photoheader}/${this.serie.poster_path}`
  }

  getVoteAverageFormated() {
    return this.serie.vote_average.toFixed(1);
  }
  getVoteAverageFormatedPercent() {
    return this.serie.vote_average * 10;
  }

  redirectToDetails(serie: Serie) {
    this.router.navigate(['serie/', serie.id]);
  }

  userAccess() {
    if(localStorage.getItem('SESSION_ID')!=undefined)
      return true;
    else
      return false;
  }

  addFavorite() {
    this.authService.addFavorite(this.serie, 'tv').subscribe(s => {
      if(s.status_code == 1) {
        alert('Serie agregada con éxito a favoritos')
      } else if(s.status_code == 12) {
        alert('Esta serie ya estaba añadida a favoritos')
      }
    })
  }

  addWatchlist() {
    this.authService.addWatchlist(this.serie, 'tv').subscribe(m => {
      if(m.status_code == 1) {
        alert('Serie agregada con éxito a watchlist')
      } else if(m.status_code == 12) {
        alert('Esta serie ya estaba añadida  a watchlist')
      }
    })
  }
}
