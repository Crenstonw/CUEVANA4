import { Component, Input } from '@angular/core';
import { Cast } from 'src/app/modules/reparto-response.module';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-movie-item-reparto',
  templateUrl: './movie-item-reparto.component.html',
  styleUrls: ['./movie-item-reparto.component.css']
})
export class MovieItemRepartoComponent {
  @Input() cast!: Cast
  getImg() {
    return `${environment.Photoheader}/${this.cast.profile_path}`
  }
}
