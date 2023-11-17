import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Serie } from 'src/app/modules/serie-list.module';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-series-lista-item',
  templateUrl: './series-lista-item.component.html',
  styleUrls: ['./series-lista-item.component.css']
})
export class SeriesListaItemComponent {
  @Input() serie!: Serie;

  constructor(private router: Router) { };

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
    this.router.navigate(['actor/', serie.id]);
  }
}
