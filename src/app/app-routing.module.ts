import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageCarteleraComponent } from './ui/page-cartelera/page-cartelera.component';
import { PageHomeComponent } from './ui/page-home/page-home.component';
import { PageMovieItemComponent } from './ui/page-movie-item/page-movie-item.component';
import { PageActoresListComponent } from './ui/page-actores-list/page-actores-list.component';
import { PageMovieListComponent } from './ui/page-movie-list/page-movie-list.component';
import { PageSeriesListComponent } from './ui/page-series-list/page-series-list.component';
import { PageSeriesItemComponent } from './ui/page-series-item/page-series-item.component';
import { PageActorItemComponent } from './ui/page-actor-item/page-actor-item.component';
import { PageUserComponent } from './ui/page-user/page-user.component';

const routes: Routes = [
  { path: 'home', component: PageHomeComponent },
  { path: 'cartelera', component: PageCarteleraComponent },
  { path: 'actores', component: PageActoresListComponent },
  { path: 'movies', component: PageMovieListComponent },
  { path: 'series', component: PageSeriesListComponent },
  { path: 'user', component: PageUserComponent },
  { path: 'movie/:id', component: PageMovieItemComponent },
  { path: 'serie/:id', component: PageSeriesItemComponent },
  { path: 'actor/:id', component: PageActorItemComponent },
  { path: '', pathMatch: 'full', component: PageHomeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
