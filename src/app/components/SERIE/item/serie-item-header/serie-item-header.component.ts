import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SerieDetailResponse } from 'src/app/modules/serie-detail-response.module';
import { SerieListService } from 'src/app/service/serie-list.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-serie-item-header',
  templateUrl: './serie-item-header.component.html',
  styleUrls: ['./serie-item-header.component.css']
})
export class SerieItemHeaderComponent implements OnInit {
  @Input() serie!: SerieDetailResponse;
  @Input() id!: string | null
  trailer!: string

  constructor(private serieListService: SerieListService, private sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    if (this.id != null)
      this.serieListService.getSerieVideos(this.id).subscribe(resp => {
        this.trailer = resp.results[0].key;
      })
  }


  getImg() {
    return (`${environment.Photoheader}${this.serie.poster_path}`);
  }
  getImgBackground() {
    return (`${environment.Photoheader}${this.serie.backdrop_path}`);
  }
  getVoteAverageFormated() {
    return this.serie.vote_average.toFixed(1);
  }
  getVoteAverageFormatedPercent() {
    return this.serie.vote_average * 10;
  }
  getMovieTrailer(key: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`//www.youtube.com/embed/${key}?autoplay=0&amp;origin=https%3A%2F%2Fwww.themoviedb.org&amp;hl=es&amp;modestbranding=1&amp;fs=1&amp;autohide=1`);
  }
}
