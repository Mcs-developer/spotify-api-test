import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PlaylistService } from 'src/app/_services/playlist.service';
import { UserService } from 'src/app/_services/user.service';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist-new',
  templateUrl: './playlist-new.component.html',
  styleUrls: ['./playlist-new.component.scss']
})
export class PlaylistNewComponent implements OnInit {

  playlistForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      public: ['', Validators.required]
  })

  constructor(private fb: FormBuilder,
              private playlistService: PlaylistService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService
        .currentUser
        .pipe(
          switchMap(user => {
            console.log(user);
            return this.playlistService.createPlaylist(user.id, this.playlistForm.value);
          })
        )
        .subscribe(() => this.router.navigate(['playlist']));
  }

  goBack() {
    this.router.navigate(['playlist'])
  }

}
