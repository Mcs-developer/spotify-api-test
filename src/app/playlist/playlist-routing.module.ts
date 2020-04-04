import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistLayoutComponent } from './playlist-layout/playlist-layout.component';


const routes: Routes = [
  { path: '', component: PlaylistLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule { }
