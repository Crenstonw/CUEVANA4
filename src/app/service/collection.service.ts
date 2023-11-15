import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CollectionResponse } from '../modules/collecion-response.module';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private http: HttpClient) { }

  getCollection(id: string): Observable<CollectionResponse> {
    return this.http.get<CollectionResponse>(`${environment.HeadUrl}/collection/${id}?${environment.apiKey}`);
  }

}
