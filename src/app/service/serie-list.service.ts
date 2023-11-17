import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeriesListResponse } from '../modules/serie-list.module';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { VideosResponse } from '../modules/videos-response.module';
import { SerieDetailResponse } from '../modules/serie-detail-response.module';
import { SerieSeasonDetailResponse } from '../modules/serie-season-detail-response.module';

@Injectable({
  providedIn: 'root'
})
export class SerieListService {

  constructor(private http: HttpClient) { }

  getSerieVideos(id: string): Observable<VideosResponse> {
    return this.http.get<VideosResponse>(`${environment.HeadUrl}tv/${id}/videos?${environment.apiKey}`);
  }
  getTopRated(): Observable<SeriesListResponse> {
    return this.http.get<SeriesListResponse>(`${environment.HeadUrl}/tv/top_rated?${environment.apiKey}`);
  }
  getPopular(page: number): Observable<SeriesListResponse> {
    return this.http.get<SeriesListResponse>(`${environment.HeadUrl}/tv/popular?${environment.apiKey}&page=${page}`);
  }
  getOnAir(page: number): Observable<SeriesListResponse> {
    return this.http.get<SeriesListResponse>(`${environment.HeadUrl}/tv/on_the_air?${environment.apiKey}&page=${page}`)
  }

  getSerieDetail(id: string): Observable<SerieDetailResponse> {
    return this.http.get<SerieDetailResponse>(`${environment.HeadUrl}/tv/${id}?${environment.apiKey}`)
  }

  getSerieSeasons(id: string, season: string): Observable<SerieSeasonDetailResponse> {
    return this.http.get<SerieSeasonDetailResponse>(`${environment.HeadUrl}/tv/${id}/season/${season}?${environment.apiKey}`)
  }


}
