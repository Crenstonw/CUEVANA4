import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoritesMoviesResponse } from '../modules/favorites-movies.module';
import { environment } from 'src/environments/environment.development';
import { FavoriteSeriesResponse } from '../modules/favorites-series.module';

@Injectable({
  providedIn: 'root'
})
export class PerosnalListsService {

  constructor(private http: HttpClient) { }

  getFavoriteMovies(id:string):Observable<FavoritesMoviesResponse>{
    return this.http.get<FavoritesMoviesResponse>(`${environment.HeadUrl}/account/${id}/favorite/movies?${environment.apiKey}`);
  }
  getFavoriteSeries(id:string):Observable<FavoriteSeriesResponse>{
    return this.http.get<FavoriteSeriesResponse>(`${environment.HeadUrl}/account/${id}/favorite/tv?${environment.apiKey}`);
  }

}
