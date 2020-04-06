import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/_services/playlist.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.scss']
})
export class PlaylistDetailComponent implements OnInit {

  playlistDetail;

  constructor(private playlistService: PlaylistService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const playlist_id = this.route.snapshot.paramMap.get('id');
    this.playlistService
        .getDetailPlayList(playlist_id)
        .subscribe(detail => {        
          this.playlistDetail = detail;
        });
  }

  goBack() {
    this.router.navigate(['playlist']);
  }

}
