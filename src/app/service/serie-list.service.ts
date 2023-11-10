import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeriesListResponse } from '../modals/serie-list/serie-list.module';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SerieListService {

  constructor(private http: HttpClient) { }

  getPopular(): Observable<SeriesListResponse> {
    return this.http.get<SeriesListResponse>(`${environment.HeadUrl}/tv/popular?${environment.apiKey}`);
  }

}
