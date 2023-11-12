import { Component, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Movie } from 'src/app/modules/movies-NowPlaying.interface';
import { Series } from 'src/app/modules/series-onAir.interface';
import { CarteleraService } from 'src/app/service/cartelera.interface';
import { MovieListService } from 'src/app/service/movie-list.service';
import { SeriesListService } from 'src/app/service/series-list.service';

@Component({
  selector: 'app-cartelera-lista-list',
  templateUrl: './cartelera-lista-list.component.html',
  styleUrls: ['./cartelera-lista-list.component.css']
})
export class CarteleraListaListComponent implements OnInit {
@Input() numero: number | undefined;

changePage($event: PageEvent): void {
  console.log($event)
  this.page = $event.pageIndex+1;
  this.getSeries();
}
  seriesList: Series[] = [];
  moviesList: Movie[] = [];
  pageLength: number | undefined;
  page: number = 1;

  constructor( private seriesService: SeriesListService, private moviesService: MovieListService, private carteleraService: CarteleraService) { };

  selectedSeries: Series | undefined;
  
  ngOnInit(): void {
    this.getSeries();
  }

  loadData() {
    switch(this.numero) {
      case 1:

        break;
      case 2:
      this.getMovies();
        break;
      case 3:
      this.getSeries();
        break;
    }
  }

  getMovies() {
    this.moviesService.getNowPlaying(this.page).subscribe(m => {
      this.moviesList = m.results;
      this.pageLength = m.total_results;
    })
  }

  getSeries() {
    this.seriesService.getOnAir(this.page).subscribe(s => {
      this.seriesList = s.results;
      this.pageLength = s.total_results;
    })
  }
}
