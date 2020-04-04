import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpotifyService } from '../_services/spotify.service';



@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private spotifyService: SpotifyService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentToken = this.spotifyService.currentTokenValue;
        if (currentToken) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${currentToken.access_token}`
                }
            });
        }

        return next.handle(request);
    }
}