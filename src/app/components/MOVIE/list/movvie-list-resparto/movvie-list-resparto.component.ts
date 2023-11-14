import { Component, Input, OnInit } from '@angular/core';
import { MovieDetailsResponse } from 'src/app/modules/movie-detatils.module';
import { Cast } from 'src/app/modules/reparto-response.module';
import { MovieListService } from 'src/app/service/movie-list.service';

@Component({
  selector: 'app-movvie-list-resparto',
  templateUrl: './movvie-list-resparto.component.html',
  styleUrls: ['./movvie-list-resparto.component.css']
})
export class MovvieListRespartoComponent implements OnInit {
  @Input() id!: string | null
  reparto!: Cast[]

  constructor(private movieListService: MovieListService) { }

  ngOnInit(): void {
    if (this.id != null)
      this.movieListService.getCarteleraOfMovie(this.id.toString()).subscribe(
        resp => {
          this.reparto = resp.cast;
        }
      )
  }
}
