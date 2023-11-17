import { Component, Input, OnInit } from '@angular/core';
import { SerieDetailResponse } from 'src/app/modules/serie-detail-response.module';
import { SerieSeasonDetailResponse } from 'src/app/modules/serie-season-detail-response.module';
import { SerieListService } from 'src/app/service/serie-list.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-serie-lists-capitulo',
  templateUrl: './serie-lists-capitulo.component.html',
  styleUrls: ['./serie-lists-capitulo.component.css']
})
export class SerieListsCapituloComponent implements OnInit {
  @Input() id!: string | null;
  serie!: SerieDetailResponse | null;
  numTemporadas!: string;
  temporadas: SerieSeasonDetailResponse[] = []

  constructor(private serieListService: SerieListService) { }

  ngOnInit(): void {
    if (this.id != null) {
      this.serieListService.getSerieDetail(this.id).subscribe(resp => {
        this.serie = resp;
        this.numTemporadas = resp.number_of_seasons.toString();
        for (let i = 1; i < resp.number_of_seasons + 1; i++) {
          if (this.id != null)
            this.serieListService.getSerieSeasons(this.id, i.toString()).subscribe(resp2 => {
              this.temporadas.push(resp2)
            });
        }
      });
    }
  }

  getImgBackground(url: any) {
    return (`${environment.Photoheader}${url}`);
  }


}
