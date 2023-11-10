import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BarraTareasComponent } from './components/ruc/barra-tareas/barra-tareas.component';
import { ImportModule } from './import-module/import/import.module';
import { TopRatedMoviesComponent } from './components/top-rated-movies/top-rated-movies.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { RecomendedComponent } from './components/recomended/recomended.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraTareasComponent,
    TopRatedMoviesComponent,
    MovieCardComponent,
    RecomendedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ImportModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
