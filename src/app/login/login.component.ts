import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  spotifyRedirect = '';
  
  constructor() { }

  ngOnInit(): void { 
    this.spotifyRedirect = 'https://accounts.spotify.com/authorize?response_type=code' +
        ('&client_id='+environment.clientId) +
        ('&redirect_uri=' + encodeURIComponent(environment.redirectUrl)) +
        (environment.scopes ? '&scopes=' + encodeURIComponent(environment.scopes) : '');
  }

  logApp() {
    window.location.href = this.spotifyRedirect;
  }

}
