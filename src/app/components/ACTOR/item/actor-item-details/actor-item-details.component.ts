import { Component, Input } from '@angular/core';
import { ActorDetailsResponse } from 'src/app/modules/actor-details-response.module';
import { ActorMoviesResponse } from 'src/app/modules/actor-movies-response.module';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-actor-item-details',
  templateUrl: './actor-item-details.component.html',
  styleUrls: ['./actor-item-details.component.css']
})
export class ActorItemDetailsComponent {
  @Input()actor!:ActorDetailsResponse;
  @Input()actorMovies!:ActorMoviesResponse;

  getImg() {
    return (`${environment.Photoheader}/${this.actor.profile_path}`);
  }
  getImgCast(id:string|null) {
    return (`${environment.Photoheader}/${id}`);
  }

}
