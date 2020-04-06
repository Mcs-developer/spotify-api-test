import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistLayoutComponent } from './playlist-layout/playlist-layout.component';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';
import { PlaylistDetailComponent } from './playlist-detail/playlist-detail.component';
import { PlaylistNewComponent } from './playlist-new/playlist-new.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [PlaylistLayoutComponent, PlaylistListComponent, PlaylistDetailComponent, PlaylistNewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PlaylistRoutingModule,
    MatCardModule,
    MatIconModule,
    MatListModule, 
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class PlaylistModule { }
