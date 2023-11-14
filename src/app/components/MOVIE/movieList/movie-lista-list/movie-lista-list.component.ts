import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Movie } from 'src/app/modules/movie-list.module';
import { MovieListService } from 'src/app/service/movie-list.service';

@Component({
  selector: 'app-movie-lista-list',
  templateUrl: './movie-lista-list.component.html',
  styleUrls: ['./movie-lista-list.component.css']
})
export class MovieListaListComponent implements OnInit{

  pageLength: number | undefined;
  page: number = 1;
  movies: Movie[] = [];
  selectedMovie: Movie | undefined;

  constructor(private movieService: MovieListService) { };

  getMovies() {
    this.movieService.getPopularPageable(this.page).subscribe(a => {
      this.movies = a.results;
      this.pageLength = a.total_results;
    })
  }

  ngOnInit(): void {
    this.getMovies();
  }
  
  changePage($event: PageEvent) {
    console.log($event)
    this.page = $event.pageIndex + 1;
    this.getMovies();
  }
}
