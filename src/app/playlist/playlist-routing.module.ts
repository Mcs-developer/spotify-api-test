import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistLayoutComponent } from './playlist-layout/playlist-layout.component';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';


const routes: Routes = [
  { 
    path: '', component: PlaylistLayoutComponent,
    children: [
      { path: '', component: PlaylistListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule { }
