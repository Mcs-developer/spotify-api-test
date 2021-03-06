import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SpotifyService } from '../_services/spotify.service';



@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private spotifyService: SpotifyService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                //  if 401 response returned from api
               this.spotifyService.refreshToken()
                                  .subscribe({
                                      error: () => console.log('ir a obtener un nuevo token'),
                                      complete: () => location.reload(true)
                                    });
            }
            
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}