import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Movie } from 'src/app/modules/movie-list.module';
import { Video } from 'src/app/modules/videos-response.module';
import { MovieListService } from 'src/app/service/movie-list.service';

@Component({
  selector: 'app-movie-item-trailer',
  templateUrl: './movie-item-trailer.component.html',
  styleUrls: ['./movie-item-trailer.component.css']
})
export class MovieItemTrailerComponent implements OnInit {
  @Input() id!: string | null;
  trailer!: Video
  constructor(private movieListService: MovieListService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    if (this.id != null)
      this.movieListService.getMovieVideos(this.id).subscribe(resp => {
        this.trailer = resp.results[0];
      })
  }
  getMovieTrailer(key: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`//www.youtube.com/embed/${key}?autoplay=0&amp;origin=https%3A%2F%2Fwww.themoviedb.org&amp;hl=es&amp;modestbranding=1&amp;fs=1&amp;autohide=1`);

  }

}
