import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { AthenticationToken } from '../modules/authentication-token-module';
import { Session } from '../modules/authentication-token-module';
import { User } from '../modules/accountDetails.module';
import { Actor } from '../modules/actores-list.module';
import { Favorite } from '../modules/accountLists.module';
import { Movie } from '../modules/movie-list.module';
import { Serie } from '../modules/serie-list.module';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {


    constructor(private http: HttpClient) { }

    getAuthToken(): Observable<AthenticationToken> {
        return this.http.get<AthenticationToken>(`${environment.HeadUrl}authentication/token/new?${environment.apiKey}`)
    }

    getUserDetails(): Observable<User> {
        return this.http.get<User>(`${environment.HeadUrl}account?session_id=${localStorage.getItem('SESSION_ID')}&${environment.apiKey}`)
    }

    createSession(token: string): Observable<Session> {
        return this.http.post<Session>(`${environment.HeadUrl}authentication/session/new`,
          {
          request_token: token
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${environment.TokenAccess}`
            }
          }
        );
    }

    addFavorite(item: Serie | Movie, media_type: string): Observable<Favorite> {
        return this.http.post<Favorite>(`${environment.HeadUrl}account/${localStorage.getItem('USER_ID')}/favorite`,
        {
            "media_type": `${media_type}`,
            "media_id": item.id,
            "favorite": true
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${environment.TokenAccess}`
              } 
        });
    }

    addWatchlist(item: Serie | Movie, media_type: string): Observable<Favorite> {
        return this.http.post<Favorite>(`${environment.HeadUrl}account/${localStorage.getItem('USER_ID')}/watchlist`,
        {
            "media_type": `${media_type}`,
            "media_id": item.id,
            "watchlist": true
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${environment.TokenAccess}`
              } 
        });
    }

    removeFavorite(item: Serie | Movie, media_type: string): Observable<Favorite> {
        return this.http.post<Favorite>(`${environment.HeadUrl}account/${localStorage.getItem('USER_ID')}/favorite`,
        {
            "media_type": `${media_type}`,
            "media_id": item.id,
            "favorite": false
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${environment.TokenAccess}`
              } 
        });
    }

    removeWatchlist(item: Serie | Movie, media_type: string): Observable<Favorite> {
        return this.http.post<Favorite>(`${environment.HeadUrl}account/${localStorage.getItem('USER_ID')}/watchlist`,
        {
            "media_type": `${media_type}`,
            "media_id": item.id,
            "watchlist": false
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${environment.TokenAccess}`
              } 
        });
    }
}

