import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../_services/spotify.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private spotifyService: SpotifyService) {}

  ngOnInit(): void {     
    this.route
        .queryParams
        .subscribe(params => {
          this.spotifyService.getAccessToken(params.code)
                            .subscribe(response => {
                              localStorage.setItem('token', JSON.stringify(response))
                            }, err => console.log('redirect to error page')
                            , () => console.log('redirect to main page'));
        });
  }

}
