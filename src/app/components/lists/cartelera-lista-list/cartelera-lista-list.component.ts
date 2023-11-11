import { Component, OnInit } from '@angular/core';
import { Series } from 'src/app/modules/series-onAir.interface';
import { SeriesListService } from 'src/app/service/series-list.service';

@Component({
  selector: 'app-cartelera-lista-list',
  templateUrl: './cartelera-lista-list.component.html',
  styleUrls: ['./cartelera-lista-list.component.css']
})
export class CarteleraListaListComponent implements OnInit {
  seriesList: Series[] = [];

  constructor( private seriesService: SeriesListService) { };

  selectedSeries: Series | undefined;
  
  ngOnInit(): void {
    this.seriesService.getOnAir().subscribe(s => {
      this.seriesList = s.results;
    })
  }
}
