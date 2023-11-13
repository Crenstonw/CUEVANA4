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
import { CarteleraNavBarComponent } from './components/MAIN/cartelera-nav-bar/cartelera-nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarteleraListaListComponent } from './components/CARTELERA/cartelera-lista-list/cartelera-lista-list.component';
import { CarteleraListaItemComponent } from './components/CARTELERA/cartelera-lista-item/cartelera-lista-item.component';
import { PageCarteleraComponent } from './ui/page-cartelera/page-cartelera.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraTareasComponent,
    TopRatedMoviesComponent,
    MovieCardComponent,
    CarteleraNavBarComponent,
    CarteleraListaListComponent,
    CarteleraListaItemComponent,
    RecomendedComponent,
    CarteleraNavBarComponent,
    PageCarteleraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ImportModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
