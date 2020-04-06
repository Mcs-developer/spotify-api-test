import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/_services/playlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent implements OnInit {

  playlist;

  constructor(private playlistService: PlaylistService,
              private router: Router) { }

  ngOnInit(): void {
    this.getPlaylist();
  }

  getPlaylist() {
    this.playlistService
    .getPlaylist()
    .subscribe(playlist => {
      this.playlist = playlist['items'];
    });
  } 

  detailList(id) {
    this.router.navigate(['playlist','detail',id]);
  }

  unfollowPlaylist(playlist_id, event) {
    event.stopPropagation();
    const deletePlaylist = confirm('Are you sure to delete playlist?');
    if(deletePlaylist == true) {
      this.playlistService
        .unfollowPlaylist(playlist_id)
        .subscribe(() => this.getPlaylist());
    } 
    
  }

  showImage(images) {
    if(images.length) {
      return images.length > 1 ? images[1].url : images[0].url;
    }
    return 'assets/no_album.png';
  }
}
