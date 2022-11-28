import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumShopComponent } from './album-shop/album-shop.component';

import { FormsModule } from '@angular/forms';
import { AlbumContactComponent } from './album-contact/album-contact.component';
import { ArcticAlbumsComponent } from './arctic-albums/arctic-albums.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    AlbumShopComponent,
    AlbumContactComponent,
    ArcticAlbumsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
