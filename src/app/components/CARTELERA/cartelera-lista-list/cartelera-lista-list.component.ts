import { Component, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Movie } from 'src/app/modules/movie-list.module';
import { Serie } from 'src/app/modules/serie-list.module';
import { CarteleraService } from 'src/app/service/cartelera.interface';
import { MovieListService } from 'src/app/service/movie-list.service';
import { SerieListService } from 'src/app/service/serie-list.service';


@Component({
  selector: 'app-cartelera-lista-list',
  templateUrl: './cartelera-lista-list.component.html',
  styleUrls: ['./cartelera-lista-list.component.css']
})
export class CarteleraListaListComponent implements OnInit {
  @Input() numero: number | undefined;

  items: (Serie | Movie)[] = [];
  pageLength: number | undefined;
  page: number = 1;

  constructor(private seriesService: SerieListService, private moviesService: MovieListService, private carteleraService: CarteleraService) { };

  selectedSeries: Serie | Movie | undefined;

  isMovie(obj: Serie | Movie): obj is Movie {
    return (obj as Movie).title !== undefined;
  }
  changePage($event: PageEvent): void {
    console.log($event)
    this.page = $event.pageIndex + 1;
    this.loadData()
  }
  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.getSeries();
    this.getMovies();
  }

  getMovies() {
    this.moviesService.getPopularPageable(this.page).subscribe(m => {
      this.items = [...this.items, ...m.results];
      this.pageLength = m.total_results;
    });
  }

  getSeries() {
    this.seriesService.getPopular(this.page).subscribe(s => {
      this.items = [...this.items, ...s.results];
      this.pageLength = s.total_results;
    });
  }

}
