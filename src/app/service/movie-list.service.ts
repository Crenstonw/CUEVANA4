import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieListResponse } from '../modals/movie-list/movie-list.module';
import { environment } from 'src/environments/environment.development';
import { NowPlaying } from '../modules/movies-NowPlaying.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  constructor(private http: HttpClient) { }

  getTopRated(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${environment.HeadUrl}/movie/top_rated?${environment.apiKey}`);
  }

  getNowPlaying(): Observable<NowPlaying> {
    return this.http.get<NowPlaying>(`${environment.HeadUrl}/movie/now_playing?${environment.apiKey}`)
  }
}
