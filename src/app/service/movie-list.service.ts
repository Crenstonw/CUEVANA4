import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, MovieListResponse } from '../modals/movie-list/movie-list.module';
import { environment } from 'src/environments/environment.development';
import { NowPlaying } from '../modules/movies-NowPlaying.interface';
import { VideosResponse } from '../modals/videos-response/videos-response.module';


@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  constructor(private http: HttpClient) { }


  getMovieVideos(id: string): Observable<VideosResponse> {
    return this.http.get<VideosResponse>(`${environment.HeadUrl}/movie/${id}/videos?${environment.apiKey}`);
  }


  getTopRated(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${environment.HeadUrl}/movie/top_rated?${environment.apiKey}`);
  }
  getPopular(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${environment.HeadUrl}/movie/popular?${environment.apiKey}`);
  }

  getNowPlaying(page: number): Observable<NowPlaying> {
    return this.http.get<NowPlaying>(`${environment.HeadUrl}/movie/now_playing?${environment.apiKey}&page=${page}`)
  }

  findMovieById(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${environment.HeadUrl}/movie/${id}?${environment.apiKey}`);
  }
}
