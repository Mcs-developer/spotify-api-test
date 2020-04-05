import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistLayoutComponent } from './playlist-layout/playlist-layout.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';

@NgModule({
  declarations: [PlaylistLayoutComponent, PlaylistListComponent],
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    MatCardModule,
    MatIconModule
  ]
})
export class PlaylistModule { }
