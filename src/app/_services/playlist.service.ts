import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) { }

  getPlaylist() {
    return this.http.get('https://api.spotify.com/v1/me/playlists');
  }

  getDetailPlayList(playlist_id) {
    const fields = 'fields=name,description,tracks.items(track(name,album(name,images), artists(name)))'
    return this.http.get(`https://api.spotify.com/v1/playlists/${playlist_id}?${fields}`);
  }

  createPlaylist(user_id, body) {
    return this.http.post(`https://api.spotify.com/v1/users/${user_id}/playlists`, body);
  }

  unfollowPlaylist(playlist_id) {
    return this.http.delete(`https://api.spotify.com/v1/playlists/${playlist_id}/followers`);
  }
}
