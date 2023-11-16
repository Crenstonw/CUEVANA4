import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Serie } from 'src/app/modules/serie-list.module';
import { SerieListService } from 'src/app/service/serie-list.service';

@Component({
  selector: 'app-series-lista-list',
  templateUrl: './series-lista-list.component.html',
  styleUrls: ['./series-lista-list.component.css']
})
export class SeriesListaListComponent implements OnInit {

  pageLength: number | undefined;
  page: number = 1;
  series: Serie[] = [];
  selectedActor: Serie | undefined;

  constructor(private serieService: SerieListService) { };

  getSeries() {
    this.serieService.getPopular(this.page).subscribe(s => {
      this.series = s.results;
      this.pageLength = s.total_results;
    })
  }

  ngOnInit(): void {
    this.getSeries();
  }
  
  changePage($event: PageEvent) {
    console.log($event)
    this.page = $event.pageIndex + 1;
    this.getSeries();
  }

}
