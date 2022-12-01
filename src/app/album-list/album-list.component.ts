import { Component, OnInit } from '@angular/core';
import { AlbumDataService } from '../album-data.service';
import { AlbumShopService } from '../album-shop.service';
import { Album } from './Album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss'],
})
export class AlbumListComponent implements OnInit {

  albums: Album [] = [];

  constructor(
    private cart:AlbumShopService,
    private albumsDataService: AlbumDataService) {      
    }

  ngOnInit(): void {
    this.albumsDataService.getAll()
    .subscribe(albums => this.albums = albums);
  }

  addToCart(album: Album): void{
    if(album.quantity!=0){
      this.cart.addToCart(album);
      album.stock -= album.quantity;
      album.quantity = 0;
    }
  }

  maxReached(m: string){
    alert(m);
  }
  
}


