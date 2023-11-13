import { Component, Input } from '@angular/core';
import { Series } from 'src/app/modules/series-onAir.interface';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-cartelera-lista-item',
  templateUrl: './cartelera-lista-item.component.html',
  styleUrls: ['./cartelera-lista-item.component.css']
})
export class CarteleraListaItemComponent {
  @Input() series!: Series;

  getImg() {
    return `${environment.Photoheader}/${this.series.poster_path}`
  }

  getVoteAverageFormated() {
    return this.series.vote_average.toFixed(1);
  }
  getVoteAverageFormatedPercent() {
    return this.series.vote_average * 10;
  }
}
