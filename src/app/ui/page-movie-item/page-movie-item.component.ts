import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailsResponse } from 'src/app/modules/movie-detatils.module';
import { MovieListService } from 'src/app/service/movie-list.service';

@Component({
  selector: 'app-page-movie-item',
  templateUrl: './page-movie-item.component.html',
  styleUrls: ['./page-movie-item.component.css']
})
export class PageMovieItemComponent implements OnInit {
  id!: string | null;
  movie!: MovieDetailsResponse;

  constructor(private route: ActivatedRoute, private movieListService: MovieListService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null)
      this.movieListService.findMovieById(this.id).subscribe(resp => {
        this.movie = resp
      })
    console.log(this.id);
  }

}
