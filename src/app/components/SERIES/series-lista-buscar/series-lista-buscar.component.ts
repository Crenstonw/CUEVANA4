import { Component, OnInit } from '@angular/core';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { Serie } from 'src/app/modules/serie-list.module';
import { SerieListService } from 'src/app/service/serie-list.service';

@Component({
  selector: 'app-series-lista-buscar',
  templateUrl: './series-lista-buscar.component.html',
  styleUrls: ['./series-lista-buscar.component.css']
})
export class SeriesListaBuscarComponent implements OnInit {
  series: Serie[] = [];

  constructor(config: NgbTypeaheadConfig, private serieService: SerieListService) {
    config.showHint = true;
  }

  refreshSeries() {
    this.serieService.getPopularNoPageable().subscribe(s => {
      this.series = s.results;
    })
  }

  search = (text$: Observable<string>) => {
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) => {
        term.length < 2 ? [] : this.series.filter((v) => v.name.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10)
      })
    );
  };

  ngOnInit(): void {
    this.search;
    this.refreshSeries();
  }

}
