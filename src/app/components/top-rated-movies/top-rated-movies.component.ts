import { Component, OnInit } from '@angular/core';
import { Movie, MovieListResponse } from 'src/app/modals/movie-list/movie-list.module';
import { MovieListService } from 'src/app/service/movie-list.service';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.css']
})
export class TopRatedMoviesComponent implements OnInit {

  Response !: MovieListResponse;
  MovieList !: Movie[];

  constructor(private movieListService: MovieListService) { }

  ngOnInit(): void {
    this.movieListService.getTopRated().subscribe(resp => {
      this.Response = resp
      this.MovieList = this.Response.results;
    })
  }





}
