import { Component, Input } from '@angular/core';
import { SerieDetailResponse } from 'src/app/modules/serie-detail-response.module';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-serie-item-header',
  templateUrl: './serie-item-header.component.html',
  styleUrls: ['./serie-item-header.component.css']
})
export class SerieItemHeaderComponent {
  @Input() serie!: SerieDetailResponse

  getImg() {
    return `${environment.Photoheader}/${this.serie.poster_path}`
  }

  getImgBackground() {
    return `${environment.Photoheader}/${this.serie.backdrop_path}`
  }
  getVoteAverageFormated() {
    return this.serie.vote_average.toFixed(1);
  }
  getVoteAverageFormatedPercent() {
    return this.serie.vote_average * 10;
  }
}
