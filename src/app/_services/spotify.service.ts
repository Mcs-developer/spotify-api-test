import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private currentTokenSubject: BehaviorSubject<any>;
  public currentToken: Observable<any>;

  constructor(private http: HttpClient) { 
    this.currentTokenSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('token')));
    this.currentToken = this.currentTokenSubject.asObservable();
  }

  public get currentTokenValue() : any {
    return this.currentTokenSubject.value;
  }

  getAccessToken(code, refreshToken = false) {

    let body = refreshToken ? this.getRefreshTokenBody(code) : this.getTokenBody(code);
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${btoa(environment.clientId + ':' + environment.clientSecret)}` 
      }),
    
    };
    
    return this.http
               .post('https://accounts.spotify.com/api/token', body.toString(), httpOptions)
               .pipe(
                 tap(response => {
                   if(refreshToken) {
                     this.currentTokenValue['access_token'] = response['access_token'];
                     localStorage.setItem('token', JSON.stringify(this.currentTokenValue))
                   } else {
                     localStorage.setItem('token', JSON.stringify(response))
                     this.currentTokenSubject.next(response);
                   }
                 })
               );

  }

  private getTokenBody(code) {
    let body = new URLSearchParams();
    body.set('grant_type', 'authorization_code');
    body.set('code', code);
    body.set('redirect_uri', environment.redirectUrl);

    return body;
  }

  private getRefreshTokenBody(code) {
    let body = new URLSearchParams();
    body.set('grant_type', 'refresh_token');
    body.set('refresh_token', code);
   
    return body;
  }

  refreshToken() {
    let currentToken = this.currentTokenSubject.value;

    return this.getAccessToken(currentToken.refresh_token, true);
  }
}
