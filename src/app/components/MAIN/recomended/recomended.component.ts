import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Movie } from 'src/app/modules/movie-list.module';
import { Video } from 'src/app/modules/videos-response.module';
import { MovieListService } from 'src/app/service/movie-list.service';
import { SerieListService } from 'src/app/service/serie-list.service';

@Component({
  selector: 'app-recomended',
  templateUrl: './recomended.component.html',
  styleUrls: ['./recomended.component.css']
})
export class RecomendedComponent implements OnInit {

  randomNumber!: number;
  serieOrMovie!: number;
  maxRandomNumber: number = 5;
  title!: string;
  video!: Video;
  backdrop!: string;
  description!: string;

  constructor(private movieService: MovieListService, private serieService: SerieListService, private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.serieOrMovie = Math.floor(Math.random() * 2);
    if (this.serieOrMovie == 1) {
      this.movieService.getPopular().subscribe(
        resp => {
          var movie = resp.results[Math.floor(Math.random() * this.maxRandomNumber)];
          this.title = movie.title;
          this.backdrop = movie.backdrop_path;
          this.description = movie.overview;
          this.movieService.getMovieVideos(movie.id.toString()).subscribe(
            resp2 => {
              this.video = resp2.results[0]
            }
          );
        }
      );
    } else {
      this.serieService.getTopRated().subscribe(
        resp => {
          var serie = resp.results[Math.floor(Math.random() * this.maxRandomNumber)];
          this.title = serie.name;
          this.backdrop = serie.backdrop_path;
          this.description = serie.overview;
          this.serieService.getSerieVideos(serie.id.toString()).subscribe(
            resp2 => {
              this.video = resp2.results[0]
            }
          )
        }
      );

    }
  }
  getBackgroundImg() {
    return (`https://www.themoviedb.org/t/p/original/${this.backdrop}`)
  }
  getMovieTrailer(key: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`//www.youtube.com/embed/${key}?autoplay=0&amp;origin=https%3A%2F%2Fwww.themoviedb.org&amp;hl=es&amp;modestbranding=1&amp;fs=1&amp;autohide=1`);
  }


}
