import { Component, Input } from '@angular/core';
import { Cast } from 'src/app/modules/reparto-response.module';

@Component({
  selector: 'app-movie-item-reparto',
  templateUrl: './movie-item-reparto.component.html',
  styleUrls: ['./movie-item-reparto.component.css']
})
export class MovieItemRepartoComponent {
  @Input() cast!: Cast
}
