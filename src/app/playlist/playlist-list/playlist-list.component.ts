import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/_services/playlist.service';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent implements OnInit {

  playlist;

  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {

    this.playlistService
        .getPlaylist()
        .subscribe(playlist => {
          this.playlist = playlist['items'];
        });
    
  }

  detailList(id) {
    console.log(id);
  }

  deletePlaylist(id, event) {
    event.stopPropagation();
    console.log(id);
  }

  showImage(images) {
    if(images.length) {
      return images.length > 1 ? images[1].url : images[0].url;
    }
    return '';
  }
}
