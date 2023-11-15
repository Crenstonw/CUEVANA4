import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Part } from 'src/app/modules/collecion-response.module';
import { MovieDetailsResponse } from 'src/app/modules/movie-detatils.module';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-movie-item-saga',
  templateUrl: './movie-item-saga.component.html',
  styleUrls: ['./movie-item-saga.component.css']
})
export class MovieItemSagaComponent {
  @Input() part!: Part

  constructor(private router: Router) { }


  getImg() {
    return `${environment.Photoheader}/${this.part.poster_path}`
  }
  redirectToDetails(item: Part) {
    this.router.navigate(['movie/', item.id]);
  }

} 
