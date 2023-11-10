import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../movie-list/movie-list.module';
import { Serie } from '../serie-list/serie-list.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CommonDTOModule {

  adult!: boolean;
  backdrop_path!: string;
  genre_ids!: number[];
  id!: number;
  original_language!: string;
  original_title!: string;
  overview!: string;
  popularity!: number;
  poster_path!: string;

  setForMovie(movie: Movie) {
    this.adult = movie.adult;
    this.backdrop_path = movie.backdrop_path;
    this.genre_ids = movie.genre_ids;
    this.id = movie.id;
    this.original_language = movie.original_language;
    this.original_title = movie.original_title;
    this.overview = movie.overview;
    this.popularity = movie.popularity;
    this.poster_path = movie.poster_path;
  }
  setForSerie(serie: Serie) {
    this.adult = serie.adult;
    this.backdrop_path = serie.backdrop_path;
    this.genre_ids = serie.genre_ids;
    this.id = serie.id;
    this.original_language = serie.original_language;
    this.original_title = serie.original_name;
    this.overview = serie.overview;
    this.popularity = serie.popularity;
    this.poster_path = serie.poster_path;
  }






}
