import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { OnAir } from "../modules/series-onAir.interface";
import { environment } from "src/environments/environment.development";

@Injectable({
    providedIn: 'root'
  })
  export class SeriesListService {
  
    constructor(private http: HttpClient) { }

    getOnAir(): Observable<OnAir> {
        return this.http.get<OnAir>(`${environment.HeadUrl}/tv/on_the_air?${environment.apiKey}`)
    }
}