import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, empty } from 'rxjs';
import { map, shareReplay, switchMap, mergeMap } from 'rxjs/operators';
import { UserService } from './_services/user.service';
import { SpotifyService } from './_services/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'spotify-api-test';
  isLogged = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  userInfo: any;

  constructor(private breakpointObserver: BreakpointObserver,
              private userService: UserService,
              private spotifyService: SpotifyService) {}

  ngOnInit() {
    this.spotifyService
        .currentToken.pipe(
         switchMap((token) => token ? this.userService.getUser() : empty())
        )
        .subscribe(user => this.userInfo = user);
  }
}
