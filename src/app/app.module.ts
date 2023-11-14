import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BarraTareasComponent } from './components/COMMON/barra-tareas/barra-tareas.component';
import { ImportModule } from './import-module/import/import.module';
import { TopRatedMoviesComponent } from './components/MAIN/top-rated-movies/top-rated-movies.component';
import { MovieCardComponent } from './components/MAIN/movie-card/movie-card.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { RecomendedComponent } from './components/MAIN/recomended/recomended.component';
import { CarteleraNavBarComponent } from './components/MAIN/cartelera-nav-bar/cartelera-nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarteleraListaListComponent } from './components/CARTELERA/cartelera-lista-list/cartelera-lista-list.component';
import { CarteleraListaItemComponent } from './components/CARTELERA/cartelera-lista-item/cartelera-lista-item.component';
import { PageCarteleraComponent } from './ui/page-cartelera/page-cartelera.component';
import { PageHomeComponent } from './ui/page-home/page-home.component';
import { PageMovieItemComponent } from './ui/page-movie-item/page-movie-item.component';
import { MovieItemHeaderComponent } from './components/MOVIE/item/movie-item-header/movie-item-header.component';
import { MovvieListRespartoComponent } from './components/MOVIE/list/movvie-list-resparto/movvie-list-resparto.component';
import { MovieItemRepartoComponent } from './components/MOVIE/item/movie-item-reparto/movie-item-reparto.component';
import { MovieItemTrailerComponent } from './components/MOVIE/item/movie-item-trailer/movie-item-trailer.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieItemInfoComponent } from './components/MOVIE/item/movie-item-info/movie-item-info.component';

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
    MovieItemHeaderComponent,
    PageCarteleraComponent,
    PageHomeComponent,
    PageMovieItemComponent,
    MovvieListRespartoComponent,
    MovieItemRepartoComponent,
    MovieItemTrailerComponent,
    MovieItemInfoComponent

  ],
  imports: [
    BrowserModule,
    NgbModule,
    ImportModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
