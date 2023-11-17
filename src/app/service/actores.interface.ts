import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actores } from '../modules/actores-list.module';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {
  authToken: string | undefined;

  constructor(private http: HttpClient) { }

    getActores(page: number): Observable<Actores> {
        return this.http.get<Actores>(`${environment.HeadUrl}person/popular?${environment.apiKey}&page=${page}`)
    }

}