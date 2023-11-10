import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  moviesId:number[] = [];
  seriesId!:number[];
  trailers!:Video[];
  ngOnInit(): void {
    this.serviceMovieList.getTopRated().subscribe(movies=>{
      for (let i = 0; i < 4; i++) {
        var number = movies.results[i].id
        this.moviesId.push(number);
        }
      });
      for (let i = 0; i < 4; i++) {
        var number = this.moviesId[i];
        console.log(number)
        this.serviceMovieList.getMovieVideos(number.toString()).subscribe(video=>{
        
      })
    }
  }
/*
  getMovieTrailer(key: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`//www.youtube.com/embed/${key}?autoplay=0&amp;origin=https%3A%2F%2Fwww.themoviedb.org&amp;hl=es&amp;modestbranding=1&amp;fs=1&amp;autohide=1`);
  }*/
  


}
