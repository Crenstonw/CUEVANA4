import { Component, Input } from '@angular/core';
import { Part } from 'src/app/modules/collecion-response.module';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-movie-item-saga',
  templateUrl: './movie-item-saga.component.html',
  styleUrls: ['./movie-item-saga.component.css']
})
export class MovieItemSagaComponent {
  @Input() part!: Part
  getImg() {
    return `${environment.Photoheader}/${this.part.poster_path}`
  }
}
