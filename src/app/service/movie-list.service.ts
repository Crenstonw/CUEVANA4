import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, MovieListResponse } from '../modules/movie-list.module';
import { environment } from 'src/environments/environment.development';
import { NowPlaying } from '../modules/movies-NowPlaying.interface';
import { VideosResponse } from '../modules/videos-response.module';
import { MovieDetailsResponse } from '../modules/movie-detatils.module';
import { RepartoResponse } from '../modules/reparto-response.module';
import { KeywordsResponse } from '../modules/keywordsresponse.module';


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

  getNowPlaying(page: string): Observable<MovieListResponse> {
    return this.http.get<NowPlaying>(`${environment.HeadUrl}/movie/now_playing?${environment.apiKey}&page=${page}`)
  }

  findMovieById(id: string): Observable<MovieDetailsResponse> {
    return this.http.get<MovieDetailsResponse>(`${environment.HeadUrl}/movie/${id}?${environment.apiKey}`);
  }

  getCarteleraOfMovie(id: string): Observable<RepartoResponse> {
    return this.http.get<RepartoResponse>(`${environment.HeadUrl}/movie/${id}/credits?${environment.apiKey}`);
  }

  getMovieKey(id:string):Observable<KeywordsResponse>{
    return this.http.get<KeywordsResponse>(`${environment.HeadUrl}/movie/${id}/keywords?${environment.apiKey}`);
  }

}
