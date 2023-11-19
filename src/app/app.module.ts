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
import { ActoresListaItemComponent } from './components/LISTSACTORES/actores-lista-item/actores-lista-item.component';
import { ActoresListaListComponent } from './components/LISTSACTORES/actores-lista-list/actores-lista-list.component';
import { AppRoutingModule } from './app-routing.module';
import { PageActoresListComponent } from './ui/page-actores-list/page-actores-list.component';
import { MovieListaListComponent } from './components/LISTSMOVIES/movie-lista-list/movie-lista-list.component';
import { MovieListaItemComponent } from './components/LISTSMOVIES/movie-lista-item/movie-lista-item.component';
import { PageMovieListComponent } from './ui/page-movie-list/page-movie-list.component';
import { SeriesListaListComponent } from './components/LISTSERIES/series-lista-list/series-lista-list.component';
import { SeriesListaItemComponent } from './components/LISTSERIES/series-lista-item/series-lista-item.component';
import { PageSeriesListComponent } from './ui/page-series-list/page-series-list.component';
import { MovieListSagaComponent } from './components/MOVIE/list/movie-list-saga/movie-list-saga.component';
import { MatIconModule } from '@angular/material/icon';
import { MovieItemSagaComponent } from './components/MOVIE/item/movie-item-saga/movie-item-saga.component';
import { ActorItemDetailsComponent } from './components/ACTOR/item/actor-item-details/actor-item-details.component';
import { PageActorItemComponent } from './ui/page-actor-item/page-actor-item.component';
import { SeriesListaBuscarComponent } from './components/SERIES/series-lista-buscar/series-lista-buscar.component';
import { SerieListsCapituloComponent } from './components/SERIE/lists/serie-lists-capitulo/serie-lists-capitulo.component';
import { MovieItemInfoComponent } from './components/MOVIE/item/movie-item-info/movie-item-info.component';
import { SerieItemHeaderComponent } from './components/SERIE/item/serie-item-header/serie-item-header.component';
import { ImageComponent } from './components/MOVIE/item/image/image.component';
import { PageSeriesItemComponent } from './ui/page-series-item/page-series-item.component';
import { PageUserComponent } from './ui/page-user/page-user.component';
import { UserListFavoritemovieComponent } from './components/USER/list/user-list-favoritemovie/user-list-favoritemovie.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraTareasComponent,
    TopRatedMoviesComponent,
    MovieCardComponent,
    CarteleraNavBarComponent,
    CarteleraListaListComponent,
    CarteleraListaItemComponent,
    PageCarteleraComponent,
    RecomendedComponent,
    CarteleraNavBarComponent,
    RecomendedComponent,
    CarteleraNavBarComponent,
    MovieItemHeaderComponent,
    PageCarteleraComponent,
    PageHomeComponent,
    PageMovieItemComponent,
    MovvieListRespartoComponent,
    MovieItemRepartoComponent,
    MovieItemTrailerComponent,
    ActoresListaItemComponent,
    ActoresListaListComponent,
    PageActoresListComponent,
    MovieListaListComponent,
    MovieListaItemComponent,
    PageMovieListComponent,
    SeriesListaListComponent,
    SeriesListaItemComponent,
    PageSeriesListComponent,
    MovieListSagaComponent,
    MovieItemSagaComponent,
    ActorItemDetailsComponent,
    PageActorItemComponent,
    SeriesListaBuscarComponent,
    SerieListsCapituloComponent,
    MovieItemInfoComponent,
    SerieItemHeaderComponent,
    ImageComponent,
    PageSeriesItemComponent,
    PageUserComponent,
    UserListFavoritemovieComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule,
    ImportModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule
  ]
})
export class AppModule { }
