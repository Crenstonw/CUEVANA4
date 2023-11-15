import { Component, Input, OnInit } from '@angular/core';
import { KeywordsResponse } from 'src/app/modules/keywordsresponse.module';
import { MovieDetailsResponse } from 'src/app/modules/movie-detatils.module';
import { MovieListService } from 'src/app/service/movie-list.service';

@Component({
  selector: 'app-movie-item-info',
  templateUrl: './movie-item-info.component.html',
  styleUrls: ['./movie-item-info.component.css']
})
export class MovieItemInfoComponent {
  @Input() movie!: MovieDetailsResponse;
  @Input() keywords!: KeywordsResponse;



}
