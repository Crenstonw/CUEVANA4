import { Component, Input, OnInit } from '@angular/core';
import { SerieDetailResponse } from 'src/app/modules/serie-detail-response.module';
import { SerieListService } from 'src/app/service/serie-list.service';

@Component({
  selector: 'app-serie-lists-capitulo',
  templateUrl: './serie-lists-capitulo.component.html',
  styleUrls: ['./serie-lists-capitulo.component.css']
})
export class SerieListsCapituloComponent implements OnInit {
  @Input() id!: string | null;
  serie!: SerieDetailResponse | null;
  numTemporadas!: string | null;

  constructor(private serieListService: SerieListService) { }

  ngOnInit(): void {
    if (this.id != null) {
      this.serieListService.getSerieDetail(this.id).subscribe(resp => {
        this.serie = resp;
        this.numTemporadas = resp.number_of_seasons.toString();
      });
      if (this.numTemporadas != null)
        this.serieListService.getSerieSeasons(this.id, this.numTemporadas).subscribe(resp => {
          console.log("Manolo")
        })
    }

  }

}
