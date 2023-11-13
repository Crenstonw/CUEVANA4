import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeriesListResponse } from '../modals/serie-list/serie-list.module';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { VideosResponse } from '../modals/videos-response/videos-response.module';

@Injectable({
  providedIn: 'root'
})
export class SerieListService {

  constructor(private http: HttpClient) { }


  getSerieVideos(id: string): Observable<VideosResponse> {
    return this.http.get<VideosResponse>(`${environment.HeadUrl}/tv/${id}/videos?${environment.apiKey}`);
  }
  getTopRated():Observable<SeriesListResponse>{
    return this.http.get<SeriesListResponse>(`${environment.HeadUrl}/tv/top_rated?${environment.apiKey}`);
  }
  getPopular(): Observable<SeriesListResponse> {
    return this.http.get<SeriesListResponse>(`${environment.HeadUrl}/tv/popular?${environment.apiKey}`);
  }

}