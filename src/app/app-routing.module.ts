import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './callback/callback.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'playlist', loadChildren: () => import('./playlist/playlist.module').then(m => m.PlaylistModule) },
  { path: '', redirectTo: '/login' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
