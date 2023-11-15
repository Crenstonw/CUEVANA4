import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Actor } from 'src/app/modules/actores-list.module';
import { ActoresService } from 'src/app/service/actores.interface';

@Component({
  selector: 'app-actores-lista-list',
  templateUrl: './actores-lista-list.component.html',
  styleUrls: ['./actores-lista-list.component.css']
})
export class ActoresListaListComponent implements OnInit {

  pageLength: number | undefined;
  page: number = 1;
  actores: Actor[] = [];
  selectedActor: Actor | undefined;

  constructor(private actoresService: ActoresService) { };

  getActores() {
    this.actoresService.getActores(this.page).subscribe(a => {
      this.actores = a.results;
      this.pageLength = a.total_results;
    })
  }

  ngOnInit(): void {
    this.getActores();
  }
  
  changePage($event: PageEvent) {
    console.log($event)
    this.page = $event.pageIndex + 1;
    this.getActores();
  }
}
