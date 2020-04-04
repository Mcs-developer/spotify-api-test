import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistLayoutComponent } from './playlist-layout/playlist-layout.component';


@NgModule({
  declarations: [PlaylistLayoutComponent],
  imports: [
    CommonModule,
    PlaylistRoutingModule
  ]
})
export class PlaylistModule { }
