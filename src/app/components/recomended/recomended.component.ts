import { Component, OnInit } from '@angular/core';
import { CommonDTOModule } from 'src/app/modals/common-dto/common-dto.module';
import { Movie } from 'src/app/modals/movie-list/movie-list.module';
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
  movie!: Movie;
  common!: CommonDTOModule

  constructor(private movieService: MovieListService, private sereService: SerieListService) { }

  ngOnInit(): void {
    this.serieOrMovie = Math.floor(Math.random() * 1);
    if (this.serieOrMovie == 1) {

      this.movieService.getPopular().subscribe(
        resp => {
          this.common.setForMovie(resp.results[Math.floor(Math.random() * this.maxRandomNumber)])
        }
      )
    } else {
      this.sereService.getPopular().subscribe(
        resp => {
          this.common.setForSerie(resp.results[Math.floor(Math.random() * this.maxRandomNumber)])
        }
      )

    }
  }




}
