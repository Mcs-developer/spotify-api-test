import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistLayoutComponent } from './playlist-layout/playlist-layout.component';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';
import { PlaylistDetailComponent } from './playlist-detail/playlist-detail.component';
import { PlaylistNewComponent } from './playlist-new/playlist-new.component';


const routes: Routes = [
  { 
    path: '', component: PlaylistLayoutComponent,
    children: [
      { path: '', component: PlaylistListComponent },
      { path: 'detail/:id', component: PlaylistDetailComponent },
      { path: 'new', component: PlaylistNewComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule { }
