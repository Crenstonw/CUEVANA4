import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorDetailsResponse } from 'src/app/modules/actor-details-response.module';
import { ActorMoviesResponse } from 'src/app/modules/actor-movies-response.module';
import { ActoresService } from 'src/app/service/actores.service';

@Component({
  selector: 'app-page-actor-item',
  templateUrl: './page-actor-item.component.html',
  styleUrls: ['./page-actor-item.component.css']
})
export class PageActorItemComponent implements OnInit{
  id!: string | null;
  actor!: ActorDetailsResponse;
  actorMovies!:ActorMoviesResponse;

  constructor(private route: ActivatedRoute, private actorService:ActoresService){}

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    if(this.id!=null){
      this.actorService.getActorById(this.id).subscribe(resp=>{
        this.actor=resp;
      });
      this.actorService.getActorMoviesById(this.id).subscribe(resp=>{
        this.actorMovies=resp;
      })
    }

  }

}
