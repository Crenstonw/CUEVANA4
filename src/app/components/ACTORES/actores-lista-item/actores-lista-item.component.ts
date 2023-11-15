import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Actor } from 'src/app/modules/actores-list.module';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-actores-lista-item',
  templateUrl: './actores-lista-item.component.html',
  styleUrls: ['./actores-lista-item.component.css']
})
export class ActoresListaItemComponent {

  @Input() actor!: Actor;

  constructor( private router: Router) { };

  getImg() {
    return `${environment.Photoheader}/${this.actor.profile_path}`
  }

  redirectToDetails(actor: Actor) {
    this.router.navigate(['actor/', actor.id]);
  }
  
}
