import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actores } from '../modules/actores-list.module';
import { environment } from 'src/environments/environment.development';
import { ActorDetailsResponse } from '../modules/actor-details-response.module';
import { ActorMoviesResponse } from '../modules/actor-movies-response.module';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {
  authToken: string | undefined;

  constructor(private http: HttpClient) { }

    getActores(page: number): Observable<Actores> {
        return this.http.get<Actores>(`${environment.HeadUrl}person/popular?${environment.apiKey}&page=${page}`)
    }
    getActorById(id:string):Observable<ActorDetailsResponse>{
      return this.http.get<ActorDetailsResponse>(`${environment.HeadUrl}person/${id}?${environment.apiKey}`);
    }
    getActorMoviesById(id:string):Observable<ActorMoviesResponse>{
      return this.http.get<ActorMoviesResponse>(`${environment.HeadUrl}person/${id}/combined_credits?${environment.apiKey}`);
    }

}