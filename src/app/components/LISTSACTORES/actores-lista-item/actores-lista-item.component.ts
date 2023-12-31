import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Actor } from 'src/app/modules/actores-list.module';
import { AuthenticationService } from 'src/app/service/authentication.interface';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-actores-lista-item',
  templateUrl: './actores-lista-item.component.html',
  styleUrls: ['./actores-lista-item.component.css']
})
export class ActoresListaItemComponent {
  @Input() actor!: Actor;

  constructor(private router: Router, private authService: AuthenticationService) { };

  getImg() {
    return `${environment.Photoheader}/${this.actor.profile_path}`
  }

  redirectToDetails(actor: Actor) {
    this.router.navigate(['actor/', actor.id]);
  }

}
