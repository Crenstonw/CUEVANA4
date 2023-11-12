import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Movie } from 'src/app/modals/movie-list/movie-list.module';
import { Serie } from 'src/app/modals/serie-list/serie-list.module';
import { Video } from 'src/app/modals/videos-response/videos-response.module';
import { MovieListService } from 'src/app/service/movie-list.service';
import { SerieListService } from 'src/app/service/serie-list.service';

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.css']
})
export class TrailersComponent implements OnInit{

  constructor(private serviceseriesList:SerieListService, private serviceMovieList:MovieListService,private sanitizer:DomSanitizer ){}
  trailersKey:string[]=[];
  trailersTuple: [Serie | Movie, string][] = [];
  ngOnInit(): void {
    this.serviceMovieList.getTopRated().subscribe(movies=>{
      for (let i = 0; i < 4; i++) {
        var movie = movies.results[i];
        var id = movie.id.toString()
        this.serviceMovieList.getMovieVideos(id).subscribe(resp2=>{
          var key = resp2.results[0].key;
          if(key!=null){
            const tuple:[Serie | Movie, string] =[movie,key]
            this.trailersTuple.push(tuple);
          }
        });
        }
      console.log(this.trailersTuple)
      });
      this.serviceseriesList.getTopRated().subscribe(series=>{
        for (let i = 0; i < 4; i++) {
          var serie = series.results[i]
          var id = serie.id.toString();
          this.serviceseriesList.getSerieVideos(id).subscribe(resp2=>{
            var key = resp2.results[0].key;
            if(key!=null){
              const tuple:[Serie|Movie,string] = [serie,key]
              this.trailersTuple.push(tuple)
            }
          });
        }
      });
      this.shuffleTrailers();
    }
    shuffleTrailers(): void {
      for (let i = this.trailersTuple.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.trailersTuple[i], this.trailersTuple[j]] = [this.trailersTuple[j], this.trailersTuple[i]];
      }
    }
    getMovieTrailer(key: string) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(`//www.youtube.com/embed/${key}?autoplay=0&amp;origin=https%3A%2F%2Fwww.themoviedb.org&amp;hl=es&amp;modestbranding=1&amp;fs=1&amp;autohide=1`);
    }
  }
