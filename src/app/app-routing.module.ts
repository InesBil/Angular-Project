import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumContactComponent } from './album-contact/album-contact.component';
import { ArcticAlbumsComponent } from './arctic-albums/arctic-albums.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:  'albums',
    pathMatch: 'full'
  },
  {
    path: 'albums',
    component: ArcticAlbumsComponent
  },
  {
    path: 'contact',
    component: AlbumContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
